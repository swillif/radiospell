// lib/nearby.ts
// Finds nearby airports using coordinates already in airports.json.
// No external API, no cost. A bounding-box prefilter keeps the build fast:
// without it, 7,914 pages x 7,914 airports = ~62M haversine calls.

export interface AirportLike {
  iata: string;
  icao: string;
  name: string;
  city: string;
  state: string;
  country: string;
  lat: number | null;
  lon: number | null;
  tz: string;
  phonetic: string;
}

export interface NearbyAirport extends AirportLike {
  distanceKm: number;
  distanceMi: number;
}

const EARTH_RADIUS_KM = 6371;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return EARTH_RADIUS_KM * 2 * Math.asin(Math.sqrt(a));
}

/**
 * Returns the closest airports to `origin`, nearest first.
 * `maxKm` caps how far away a result can be; `limit` caps how many come back.
 */
export function findNearbyAirports(
  origin: AirportLike,
  all: AirportLike[],
  limit = 8,
  maxKm = 400
): NearbyAirport[] {
  if (origin.lat == null || origin.lon == null) return [];

  const oLat = origin.lat;
  const oLon = origin.lon;

  // Bounding box prefilter. 1 degree of latitude is ~111 km.
  // Longitude degrees shrink toward the poles, so widen the window by 1/cos(lat).
  const latPad = maxKm / 111;
  const cosLat = Math.max(Math.cos(toRad(oLat)), 0.01); // guard near the poles
  const lonPad = latPad / cosLat;

  const candidates: NearbyAirport[] = [];

  for (const a of all) {
    if (a.lat == null || a.lon == null) continue;
    if (a.iata === origin.iata) continue;
    if (Math.abs(a.lat - oLat) > latPad) continue;

    // Handle the antimeridian: compare the shorter way around.
    let dLon = Math.abs(a.lon - oLon);
    if (dLon > 180) dLon = 360 - dLon;
    if (dLon > lonPad) continue;

    const km = haversineKm(oLat, oLon, a.lat, a.lon);
    if (km > maxKm) continue;

    candidates.push({
      ...a,
      distanceKm: Math.round(km),
      distanceMi: Math.round(km * 0.621371),
    });
  }

  candidates.sort((x, y) => x.distanceKm - y.distanceKm);
  return candidates.slice(0, limit);
}
