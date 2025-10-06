export interface Symbol {
  symbol: string;
  name: string;
  category: string;
  unicode: string;
  keywords: string[];
}

export const symbolCategories = [
  'All',
  'Mathematics',
  'Arrows',
  'Currency',
  'Punctuation',
  'Shapes',
  'Miscellaneous',
] as const;

export type SymbolCategory = typeof symbolCategories[number];

export const symbols: Symbol[] = [
  // Mathematics (20 symbols)
  { symbol: '+', name: 'Plus Sign', category: 'Mathematics', unicode: 'U+002B', keywords: ['plus', 'add', 'positive'] },
  { symbol: '−', name: 'Minus Sign', category: 'Mathematics', unicode: 'U+2212', keywords: ['minus', 'subtract', 'negative'] },
  { symbol: '×', name: 'Multiplication Sign', category: 'Mathematics', unicode: 'U+00D7', keywords: ['multiply', 'times', 'cross'] },
  { symbol: '÷', name: 'Division Sign', category: 'Mathematics', unicode: 'U+00F7', keywords: ['divide', 'division'] },
  { symbol: '=', name: 'Equals Sign', category: 'Mathematics', unicode: 'U+003D', keywords: ['equals', 'equal'] },
  { symbol: '≠', name: 'Not Equal To', category: 'Mathematics', unicode: 'U+2260', keywords: ['not equal', 'unequal'] },
  { symbol: '<', name: 'Less Than', category: 'Mathematics', unicode: 'U+003C', keywords: ['less', 'smaller'] },
  { symbol: '>', name: 'Greater Than', category: 'Mathematics', unicode: 'U+003E', keywords: ['greater', 'larger'] },
  { symbol: '≤', name: 'Less Than or Equal To', category: 'Mathematics', unicode: 'U+2264', keywords: ['less', 'equal'] },
  { symbol: '≥', name: 'Greater Than or Equal To', category: 'Mathematics', unicode: 'U+2265', keywords: ['greater', 'equal'] },
  { symbol: '±', name: 'Plus-Minus Sign', category: 'Mathematics', unicode: 'U+00B1', keywords: ['plus', 'minus', 'tolerance'] },
  { symbol: '∞', name: 'Infinity', category: 'Mathematics', unicode: 'U+221E', keywords: ['infinity', 'unlimited'] },
  { symbol: '√', name: 'Square Root', category: 'Mathematics', unicode: 'U+221A', keywords: ['root', 'radical'] },
  { symbol: '∑', name: 'Summation', category: 'Mathematics', unicode: 'U+2211', keywords: ['sum', 'total', 'sigma'] },
  { symbol: '∫', name: 'Integral', category: 'Mathematics', unicode: 'U+222B', keywords: ['integral', 'calculus'] },
  { symbol: '∂', name: 'Partial Differential', category: 'Mathematics', unicode: 'U+2202', keywords: ['partial', 'derivative'] },
  { symbol: 'π', name: 'Pi', category: 'Mathematics', unicode: 'U+03C0', keywords: ['pi', 'circle'] },
  { symbol: '°', name: 'Degree Sign', category: 'Mathematics', unicode: 'U+00B0', keywords: ['degree', 'temperature', 'angle'] },
  { symbol: '%', name: 'Percent Sign', category: 'Mathematics', unicode: 'U+0025', keywords: ['percent', 'percentage'] },
  { symbol: '‰', name: 'Per Mille Sign', category: 'Mathematics', unicode: 'U+2030', keywords: ['per mille', 'permille'] },

  // Arrows (20 symbols)
  { symbol: '←', name: 'Leftwards Arrow', category: 'Arrows', unicode: 'U+2190', keywords: ['arrow', 'left', 'back'] },
  { symbol: '→', name: 'Rightwards Arrow', category: 'Arrows', unicode: 'U+2192', keywords: ['arrow', 'right', 'forward'] },
  { symbol: '↑', name: 'Upwards Arrow', category: 'Arrows', unicode: 'U+2191', keywords: ['arrow', 'up'] },
  { symbol: '↓', name: 'Downwards Arrow', category: 'Arrows', unicode: 'U+2193', keywords: ['arrow', 'down'] },
  { symbol: '↔', name: 'Left Right Arrow', category: 'Arrows', unicode: 'U+2194', keywords: ['arrow', 'horizontal', 'both'] },
  { symbol: '↕', name: 'Up Down Arrow', category: 'Arrows', unicode: 'U+2195', keywords: ['arrow', 'vertical', 'both'] },
  { symbol: '⇐', name: 'Leftwards Double Arrow', category: 'Arrows', unicode: 'U+21D0', keywords: ['arrow', 'left', 'double'] },
  { symbol: '⇒', name: 'Rightwards Double Arrow', category: 'Arrows', unicode: 'U+21D2', keywords: ['arrow', 'right', 'double'] },
  { symbol: '⇑', name: 'Upwards Double Arrow', category: 'Arrows', unicode: 'U+21D1', keywords: ['arrow', 'up', 'double'] },
  { symbol: '⇓', name: 'Downwards Double Arrow', category: 'Arrows', unicode: 'U+21D3', keywords: ['arrow', 'down', 'double'] },
  { symbol: '↖', name: 'North West Arrow', category: 'Arrows', unicode: 'U+2196', keywords: ['arrow', 'diagonal', 'upleft'] },
  { symbol: '↗', name: 'North East Arrow', category: 'Arrows', unicode: 'U+2197', keywords: ['arrow', 'diagonal', 'upright'] },
  { symbol: '↘', name: 'South East Arrow', category: 'Arrows', unicode: 'U+2198', keywords: ['arrow', 'diagonal', 'downright'] },
  { symbol: '↙', name: 'South West Arrow', category: 'Arrows', unicode: 'U+2199', keywords: ['arrow', 'diagonal', 'downleft'] },
  { symbol: '⟵', name: 'Long Leftwards Arrow', category: 'Arrows', unicode: 'U+27F5', keywords: ['arrow', 'left', 'long'] },
  { symbol: '⟶', name: 'Long Rightwards Arrow', category: 'Arrows', unicode: 'U+27F6', keywords: ['arrow', 'right', 'long'] },
  { symbol: '↩', name: 'Leftwards Arrow with Hook', category: 'Arrows', unicode: 'U+21A9', keywords: ['arrow', 'return', 'hook'] },
  { symbol: '↪', name: 'Rightwards Arrow with Hook', category: 'Arrows', unicode: 'U+21AA', keywords: ['arrow', 'enter', 'hook'] },
  { symbol: '↺', name: 'Anticlockwise Open Circle Arrow', category: 'Arrows', unicode: 'U+21BA', keywords: ['arrow', 'rotate', 'refresh'] },
  { symbol: '↻', name: 'Clockwise Open Circle Arrow', category: 'Arrows', unicode: 'U+21BB', keywords: ['arrow', 'rotate', 'refresh'] },

  // Currency (15 symbols)
  { symbol: '$', name: 'Dollar Sign', category: 'Currency', unicode: 'U+0024', keywords: ['dollar', 'usd', 'money'] },
  { symbol: '€', name: 'Euro Sign', category: 'Currency', unicode: 'U+20AC', keywords: ['euro', 'eur', 'money'] },
  { symbol: '£', name: 'Pound Sign', category: 'Currency', unicode: 'U+00A3', keywords: ['pound', 'gbp', 'money'] },
  { symbol: '¥', name: 'Yen Sign', category: 'Currency', unicode: 'U+00A5', keywords: ['yen', 'jpy', 'money'] },
  { symbol: '₹', name: 'Indian Rupee Sign', category: 'Currency', unicode: 'U+20B9', keywords: ['rupee', 'inr', 'money'] },
  { symbol: '₽', name: 'Ruble Sign', category: 'Currency', unicode: 'U+20BD', keywords: ['ruble', 'rub', 'money'] },
  { symbol: '₿', name: 'Bitcoin Sign', category: 'Currency', unicode: 'U+20BF', keywords: ['bitcoin', 'btc', 'crypto'] },
  { symbol: '¢', name: 'Cent Sign', category: 'Currency', unicode: 'U+00A2', keywords: ['cent', 'penny', 'money'] },
  { symbol: '₩', name: 'Won Sign', category: 'Currency', unicode: 'U+20A9', keywords: ['won', 'krw', 'money'] },
  { symbol: '₪', name: 'New Sheqel Sign', category: 'Currency', unicode: 'U+20AA', keywords: ['shekel', 'ils', 'money'] },
  { symbol: '₨', name: 'Rupee Sign', category: 'Currency', unicode: 'U+20A8', keywords: ['rupee', 'money'] },
  { symbol: '₱', name: 'Peso Sign', category: 'Currency', unicode: 'U+20B1', keywords: ['peso', 'php', 'money'] },
  { symbol: '₦', name: 'Naira Sign', category: 'Currency', unicode: 'U+20A6', keywords: ['naira', 'ngn', 'money'] },
  { symbol: '₴', name: 'Hryvnia Sign', category: 'Currency', unicode: 'U+20B4', keywords: ['hryvnia', 'uah', 'money'] },
  { symbol: '฿', name: 'Baht Sign', category: 'Currency', unicode: 'U+0E3F', keywords: ['baht', 'thb', 'money'] },

  // Punctuation (15 symbols)
  { symbol: '!', name: 'Exclamation Mark', category: 'Punctuation', unicode: 'U+0021', keywords: ['exclamation', 'important'] },
  { symbol: '?', name: 'Question Mark', category: 'Punctuation', unicode: 'U+003F', keywords: ['question', 'query'] },
  { symbol: '‽', name: 'Interrobang', category: 'Punctuation', unicode: 'U+203D', keywords: ['interrobang', 'question', 'exclamation'] },
  { symbol: '…', name: 'Horizontal Ellipsis', category: 'Punctuation', unicode: 'U+2026', keywords: ['ellipsis', 'dots', 'continuation'] },
  { symbol: '·', name: 'Middle Dot', category: 'Punctuation', unicode: 'U+00B7', keywords: ['dot', 'bullet', 'separator'] },
  { symbol: '•', name: 'Bullet', category: 'Punctuation', unicode: 'U+2022', keywords: ['bullet', 'point', 'list'] },
  { symbol: '‣', name: 'Triangular Bullet', category: 'Punctuation', unicode: 'U+2023', keywords: ['bullet', 'triangle'] },
  { symbol: '†', name: 'Dagger', category: 'Punctuation', unicode: 'U+2020', keywords: ['dagger', 'footnote'] },
  { symbol: '‡', name: 'Double Dagger', category: 'Punctuation', unicode: 'U+2021', keywords: ['dagger', 'footnote', 'double'] },
  { symbol: '§', name: 'Section Sign', category: 'Punctuation', unicode: 'U+00A7', keywords: ['section', 'paragraph'] },
  { symbol: '¶', name: 'Pilcrow', category: 'Punctuation', unicode: 'U+00B6', keywords: ['pilcrow', 'paragraph'] },
  { symbol: '©', name: 'Copyright Sign', category: 'Punctuation', unicode: 'U+00A9', keywords: ['copyright', 'legal'] },
  { symbol: '®', name: 'Registered Sign', category: 'Punctuation', unicode: 'U+00AE', keywords: ['registered', 'trademark'] },
  { symbol: '™', name: 'Trade Mark Sign', category: 'Punctuation', unicode: 'U+2122', keywords: ['trademark', 'tm'] },
  { symbol: '№', name: 'Numero Sign', category: 'Punctuation', unicode: 'U+2116', keywords: ['numero', 'number'] },

  // Shapes (15 symbols)
  { symbol: '■', name: 'Black Square', category: 'Shapes', unicode: 'U+25A0', keywords: ['square', 'black', 'filled'] },
  { symbol: '□', name: 'White Square', category: 'Shapes', unicode: 'U+25A1', keywords: ['square', 'white', 'outline'] },
  { symbol: '▪', name: 'Black Small Square', category: 'Shapes', unicode: 'U+25AA', keywords: ['square', 'black', 'small'] },
  { symbol: '▫', name: 'White Small Square', category: 'Shapes', unicode: 'U+25AB', keywords: ['square', 'white', 'small'] },
  { symbol: '●', name: 'Black Circle', category: 'Shapes', unicode: 'U+25CF', keywords: ['circle', 'black', 'filled'] },
  { symbol: '○', name: 'White Circle', category: 'Shapes', unicode: 'U+25CB', keywords: ['circle', 'white', 'outline'] },
  { symbol: '◆', name: 'Black Diamond', category: 'Shapes', unicode: 'U+25C6', keywords: ['diamond', 'black', 'filled'] },
  { symbol: '◇', name: 'White Diamond', category: 'Shapes', unicode: 'U+25C7', keywords: ['diamond', 'white', 'outline'] },
  { symbol: '▲', name: 'Black Up-Pointing Triangle', category: 'Shapes', unicode: 'U+25B2', keywords: ['triangle', 'up', 'black'] },
  { symbol: '△', name: 'White Up-Pointing Triangle', category: 'Shapes', unicode: 'U+25B3', keywords: ['triangle', 'up', 'white'] },
  { symbol: '▼', name: 'Black Down-Pointing Triangle', category: 'Shapes', unicode: 'U+25BC', keywords: ['triangle', 'down', 'black'] },
  { symbol: '▽', name: 'White Down-Pointing Triangle', category: 'Shapes', unicode: 'U+25BD', keywords: ['triangle', 'down', 'white'] },
  { symbol: '★', name: 'Black Star', category: 'Shapes', unicode: 'U+2605', keywords: ['star', 'black', 'filled'] },
  { symbol: '☆', name: 'White Star', category: 'Shapes', unicode: 'U+2606', keywords: ['star', 'white', 'outline'] },
  { symbol: '♥', name: 'Black Heart Suit', category: 'Shapes', unicode: 'U+2665', keywords: ['heart', 'love', 'black'] },

  // Miscellaneous (15 symbols)
  { symbol: '✓', name: 'Check Mark', category: 'Miscellaneous', unicode: 'U+2713', keywords: ['check', 'yes', 'done'] },
  { symbol: '✔', name: 'Heavy Check Mark', category: 'Miscellaneous', unicode: 'U+2714', keywords: ['check', 'yes', 'done', 'bold'] },
  { symbol: '✗', name: 'Ballot X', category: 'Miscellaneous', unicode: 'U+2717', keywords: ['x', 'no', 'wrong'] },
  { symbol: '✘', name: 'Heavy Ballot X', category: 'Miscellaneous', unicode: 'U+2718', keywords: ['x', 'no', 'wrong', 'bold'] },
  { symbol: '☐', name: 'Ballot Box', category: 'Miscellaneous', unicode: 'U+2610', keywords: ['checkbox', 'unchecked', 'box'] },
  { symbol: '☑', name: 'Ballot Box with Check', category: 'Miscellaneous', unicode: 'U+2611', keywords: ['checkbox', 'checked', 'box'] },
  { symbol: '☒', name: 'Ballot Box with X', category: 'Miscellaneous', unicode: 'U+2612', keywords: ['checkbox', 'x', 'box'] },
  { symbol: '☼', name: 'White Sun with Rays', category: 'Miscellaneous', unicode: 'U+263C', keywords: ['sun', 'weather', 'bright'] },
  { symbol: '☾', name: 'Last Quarter Moon', category: 'Miscellaneous', unicode: 'U+263E', keywords: ['moon', 'night'] },
  { symbol: '☀', name: 'Black Sun with Rays', category: 'Miscellaneous', unicode: 'U+2600', keywords: ['sun', 'weather', 'sunny'] },
  { symbol: '☁', name: 'Cloud', category: 'Miscellaneous', unicode: 'U+2601', keywords: ['cloud', 'weather'] },
  { symbol: '☂', name: 'Umbrella', category: 'Miscellaneous', unicode: 'U+2602', keywords: ['umbrella', 'rain', 'weather'] },
  { symbol: '♠', name: 'Black Spade Suit', category: 'Miscellaneous', unicode: 'U+2660', keywords: ['spade', 'cards', 'poker'] },
  { symbol: '♣', name: 'Black Club Suit', category: 'Miscellaneous', unicode: 'U+2663', keywords: ['club', 'cards', 'poker'] },
  { symbol: '♦', name: 'Black Diamond Suit', category: 'Miscellaneous', unicode: 'U+2666', keywords: ['diamond', 'cards', 'poker'] },
];

export function searchSymbols(query: string, category: SymbolCategory = 'All'): Symbol[] {
  const lowerQuery = query.toLowerCase().trim();
  
  let filtered = category === 'All' ? symbols : symbols.filter(s => s.category === category);
  
  if (lowerQuery) {
    filtered = filtered.filter(
      s =>
        s.name.toLowerCase().includes(lowerQuery) ||
        s.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ||
        s.symbol.includes(lowerQuery)
    );
  }
  
  return filtered;
}

export function getSymbolsByCategory(category: SymbolCategory): Symbol[] {
  if (category === 'All') return symbols;
  return symbols.filter(s => s.category === category);
}
