export const NATO: Record<string, string> = {
  A:'Alfa',B:'Bravo',C:'Charlie',D:'Delta',E:'Echo',F:'Foxtrot',G:'Golf',H:'Hotel',
  I:'India',J:'Juliett',K:'Kilo',L:'Lima',M:'Mike',N:'November',O:'Oscar',P:'Papa',
  Q:'Quebec',R:'Romeo',S:'Sierra',T:'Tango',U:'Uniform',V:'Victor',W:'Whiskey',
  X:'X-ray',Y:'Yankee',Z:'Zulu'
};

export const NATO_NUMBERS: Record<string, string> = {
  '0':'Zero','1':'One','2':'Two','3':'Three','4':'Four',
  '5':'Five','6':'Six','7':'Seven','8':'Eight','9':'Niner'
};

export const LAPD: Record<string, string> = {
  A:'Adam',B:'Boy',C:'Charles',D:'David',E:'Edward',F:'Frank',G:'George',H:'Henry',
  I:'Ida',J:'John',K:'King',L:'Lincoln',M:'Mary',N:'Nora',O:'Ocean',P:'Paul',
  Q:'Queen',R:'Robert',S:'Sam',T:'Tom',U:'Union',V:'Victor',W:'William',
  X:'X-ray',Y:'Young',Z:'Zebra'
};

export const GERMAN: Record<string, string> = {
  A:'Anton',B:'Berta',C:'Cäsar',D:'Dora',E:'Emil',F:'Friedrich',G:'Gustav',H:'Heinrich',
  I:'Ida',J:'Julius',K:'Kaufmann',L:'Ludwig',M:'Martha',N:'Nordpol',O:'Otto',P:'Paula',
  Q:'Quelle',R:'Richard',S:'Samuel',T:'Theodor',U:'Ulrich',V:'Viktor',W:'Wilhelm',
  X:'Xanthippe',Y:'Ypsilon',Z:'Zacharias'
};

export const FRENCH: Record<string, string> = {
  A:'Anatole',B:'Berthe',C:'Célestin',D:'Désiré',E:'Eugène',F:'François',G:'Gaston',
  H:'Henri',I:'Irma',J:'Joseph',K:'Kléber',L:'Louis',M:'Marcel',N:'Nicolas',O:'Oscar',
  P:'Pierre',Q:'Quintal',R:'Raoul',S:'Suzanne',T:'Thérèse',U:'Ursule',V:'Victor',
  W:'William',X:'Xavier',Y:'Yvonne',Z:'Zoé'
};

export const SPANISH: Record<string, string> = {
  A:'Antonio',B:'Barcelona',C:'Carmen',D:'Dolores',E:'Enrique',F:'Francia',G:'Gerona',
  H:'Historia',I:'Inés',J:'José',K:'Kilo',L:'Lorenzo',M:'Madrid',N:'Navarra',O:'Oviedo',
  P:'París',Q:'Querido',R:'Ramón',S:'Sábado',T:'Toledo',U:'Ulises',V:'Valencia',
  W:'Washington',X:'Xiquena',Y:'Yegua',Z:'Zamora'
};

export const MORSE: Record<string, string> = {
  A:'• —',B:'— • • •',C:'— • — •',D:'— • •',E:'•',F:'• • — •',G:'— — •',H:'• • • •',
  I:'• •',J:'• — — —',K:'— • —',L:'• — • •',M:'— —',N:'— •',O:'— — —',P:'• — — •',
  Q:'— — • —',R:'• — •',S:'• • •',T:'—',U:'• • —',V:'• • • —',W:'• — —',X:'— • • —',
  Y:'— • — —',Z:'— — • •',
  '0':'— — — — —','1':'• — — — —','2':'• • — — —','3':'• • • — —','4':'• • • • —',
  '5':'• • • • •','6':'— • • • •','7':'— — • • •','8':'— — — • •','9':'— — — — •'
};

export const ALL_ALPHABETS: Record<string, { label: string; letters: Record<string, string> }> = {
  NATO: { label: 'NATO / ICAO', letters: NATO },
  LAPD: { label: 'US Police (LAPD)', letters: LAPD },
  GERMAN: { label: 'German (DIN 5009)', letters: GERMAN },
  FRENCH: { label: 'French', letters: FRENCH },
  SPANISH: { label: 'Spanish', letters: SPANISH },
};

export function toPhonetic(text: string, alphabet: Record<string, string> = NATO): string {
  return text.toUpperCase().split('').map(c => alphabet[c] || NATO_NUMBERS[c] || c).join(' ');
}

export function toPhoneticArray(text: string, alphabet: Record<string, string> = NATO) {
  return text.split('').map(ch => {
    const u = ch.toUpperCase();
    if (alphabet[u]) return { ch: u, word: alphabet[u], type: 'letter' as const };
    if (NATO_NUMBERS[u]) return { ch: u, word: NATO_NUMBERS[u], type: 'number' as const };
    if (ch === ' ') return { ch: '␣', word: '(space)', type: 'space' as const };
    return { ch, word: ch, type: 'symbol' as const };
  });
}

export function reverseNATO(input: string): string {
  const reverse: Record<string, string> = {};
  Object.entries(NATO).forEach(([k, v]) => { reverse[v.toLowerCase()] = k; });
  Object.entries(NATO_NUMBERS).forEach(([k, v]) => { reverse[v.toLowerCase()] = k; });
  reverse['niner'] = '9';
  return input.trim().split(/[\s,·\-]+/).map(w => reverse[w.toLowerCase()] || w).join('');
}
