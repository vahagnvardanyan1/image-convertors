export interface Emoji {
  emoji: string;
  name: string;
  category: string;
  keywords: string[];
  unicode: string;
}

export const emojiCategories = ['All', 'Smileys & People', 'Animals & Nature', 'Food & Drink', 'Travel & Places', 'Activities', 'Objects', 'Symbols', 'Flags'] as const;

export type EmojiCategory = (typeof emojiCategories)[number];

export const emojis: Emoji[] = [
  // Smileys & People (20 items)
  { emoji: '😀', name: 'Grinning Face', category: 'Smileys & People', keywords: ['smile', 'happy', 'joy'], unicode: 'U+1F600' },
  { emoji: '😃', name: 'Grinning Face with Big Eyes', category: 'Smileys & People', keywords: ['smile', 'happy'], unicode: 'U+1F603' },
  { emoji: '😄', name: 'Grinning Face with Smiling Eyes', category: 'Smileys & People', keywords: ['smile', 'happy', 'joy'], unicode: 'U+1F604' },
  { emoji: '😁', name: 'Beaming Face with Smiling Eyes', category: 'Smileys & People', keywords: ['smile', 'happy'], unicode: 'U+1F601' },
  { emoji: '😊', name: 'Smiling Face with Smiling Eyes', category: 'Smileys & People', keywords: ['smile', 'happy', 'blush'], unicode: 'U+1F60A' },
  { emoji: '😍', name: 'Smiling Face with Heart-Eyes', category: 'Smileys & People', keywords: ['love', 'heart', 'smile'], unicode: 'U+1F60D' },
  { emoji: '🥰', name: 'Smiling Face with Hearts', category: 'Smileys & People', keywords: ['love', 'smile', 'hearts'], unicode: 'U+1F970' },
  { emoji: '😘', name: 'Face Blowing a Kiss', category: 'Smileys & People', keywords: ['kiss', 'love', 'heart'], unicode: 'U+1F618' },
  { emoji: '😂', name: 'Face with Tears of Joy', category: 'Smileys & People', keywords: ['laugh', 'cry', 'joy'], unicode: 'U+1F602' },
  { emoji: '🤣', name: 'Rolling on the Floor Laughing', category: 'Smileys & People', keywords: ['laugh', 'lol', 'rofl'], unicode: 'U+1F923' },
  { emoji: '😎', name: 'Smiling Face with Sunglasses', category: 'Smileys & People', keywords: ['cool', 'sunglasses'], unicode: 'U+1F60E' },
  { emoji: '🤔', name: 'Thinking Face', category: 'Smileys & People', keywords: ['think', 'hmm', 'consider'], unicode: 'U+1F914' },
  { emoji: '😢', name: 'Crying Face', category: 'Smileys & People', keywords: ['sad', 'cry', 'tear'], unicode: 'U+1F622' },
  { emoji: '😭', name: 'Loudly Crying Face', category: 'Smileys & People', keywords: ['cry', 'sad', 'tears'], unicode: 'U+1F62D' },
  { emoji: '😡', name: 'Pouting Face', category: 'Smileys & People', keywords: ['angry', 'mad', 'rage'], unicode: 'U+1F621' },
  { emoji: '🤯', name: 'Exploding Head', category: 'Smileys & People', keywords: ['mind', 'blown', 'shock'], unicode: 'U+1F92F' },
  { emoji: '😴', name: 'Sleeping Face', category: 'Smileys & People', keywords: ['sleep', 'tired', 'zzz'], unicode: 'U+1F634' },
  { emoji: '🤩', name: 'Star-Struck', category: 'Smileys & People', keywords: ['star', 'eyes', 'amazed'], unicode: 'U+1F929' },
  { emoji: '🥳', name: 'Partying Face', category: 'Smileys & People', keywords: ['party', 'celebrate', 'birthday'], unicode: 'U+1F973' },
  { emoji: '👍', name: 'Thumbs Up', category: 'Smileys & People', keywords: ['like', 'yes', 'approve'], unicode: 'U+1F44D' },

  // Animals & Nature (15 items)
  { emoji: '🐶', name: 'Dog Face', category: 'Animals & Nature', keywords: ['dog', 'pet', 'puppy'], unicode: 'U+1F436' },
  { emoji: '🐱', name: 'Cat Face', category: 'Animals & Nature', keywords: ['cat', 'pet', 'kitten'], unicode: 'U+1F431' },
  { emoji: '🐭', name: 'Mouse Face', category: 'Animals & Nature', keywords: ['mouse', 'animal'], unicode: 'U+1F42D' },
  { emoji: '🐹', name: 'Hamster', category: 'Animals & Nature', keywords: ['hamster', 'pet'], unicode: 'U+1F439' },
  { emoji: '🐰', name: 'Rabbit Face', category: 'Animals & Nature', keywords: ['rabbit', 'bunny'], unicode: 'U+1F430' },
  { emoji: '🦊', name: 'Fox', category: 'Animals & Nature', keywords: ['fox', 'animal'], unicode: 'U+1F98A' },
  { emoji: '🐻', name: 'Bear', category: 'Animals & Nature', keywords: ['bear', 'animal'], unicode: 'U+1F43B' },
  { emoji: '🐼', name: 'Panda', category: 'Animals & Nature', keywords: ['panda', 'bear'], unicode: 'U+1F43C' },
  { emoji: '🐨', name: 'Koala', category: 'Animals & Nature', keywords: ['koala', 'australia'], unicode: 'U+1F428' },
  { emoji: '🦁', name: 'Lion', category: 'Animals & Nature', keywords: ['lion', 'king'], unicode: 'U+1F981' },
  { emoji: '🐯', name: 'Tiger Face', category: 'Animals & Nature', keywords: ['tiger', 'cat'], unicode: 'U+1F42F' },
  { emoji: '🦄', name: 'Unicorn', category: 'Animals & Nature', keywords: ['unicorn', 'fantasy', 'magic'], unicode: 'U+1F984' },
  { emoji: '🌸', name: 'Cherry Blossom', category: 'Animals & Nature', keywords: ['flower', 'spring', 'pink'], unicode: 'U+1F338' },
  { emoji: '🌹', name: 'Rose', category: 'Animals & Nature', keywords: ['flower', 'rose', 'love'], unicode: 'U+1F339' },
  { emoji: '🌻', name: 'Sunflower', category: 'Animals & Nature', keywords: ['flower', 'sun', 'yellow'], unicode: 'U+1F33B' },

  // Food & Drink (15 items)
  { emoji: '🍕', name: 'Pizza', category: 'Food & Drink', keywords: ['pizza', 'food', 'italian'], unicode: 'U+1F355' },
  { emoji: '🍔', name: 'Hamburger', category: 'Food & Drink', keywords: ['burger', 'food'], unicode: 'U+1F354' },
  { emoji: '🍟', name: 'French Fries', category: 'Food & Drink', keywords: ['fries', 'food'], unicode: 'U+1F35F' },
  { emoji: '🌭', name: 'Hot Dog', category: 'Food & Drink', keywords: ['hotdog', 'food'], unicode: 'U+1F32D' },
  { emoji: '🍿', name: 'Popcorn', category: 'Food & Drink', keywords: ['popcorn', 'snack', 'movie'], unicode: 'U+1F37F' },
  { emoji: '🍩', name: 'Doughnut', category: 'Food & Drink', keywords: ['donut', 'dessert', 'sweet'], unicode: 'U+1F369' },
  { emoji: '🍪', name: 'Cookie', category: 'Food & Drink', keywords: ['cookie', 'dessert'], unicode: 'U+1F36A' },
  { emoji: '🎂', name: 'Birthday Cake', category: 'Food & Drink', keywords: ['cake', 'birthday', 'dessert'], unicode: 'U+1F382' },
  { emoji: '🍰', name: 'Shortcake', category: 'Food & Drink', keywords: ['cake', 'dessert', 'sweet'], unicode: 'U+1F370' },
  { emoji: '🍦', name: 'Soft Ice Cream', category: 'Food & Drink', keywords: ['ice cream', 'dessert', 'cone'], unicode: 'U+1F366' },
  { emoji: '🍓', name: 'Strawberry', category: 'Food & Drink', keywords: ['strawberry', 'fruit', 'berry'], unicode: 'U+1F353' },
  { emoji: '🍎', name: 'Red Apple', category: 'Food & Drink', keywords: ['apple', 'fruit', 'red'], unicode: 'U+1F34E' },
  { emoji: '🍊', name: 'Tangerine', category: 'Food & Drink', keywords: ['orange', 'fruit'], unicode: 'U+1F34A' },
  { emoji: '☕', name: 'Hot Beverage', category: 'Food & Drink', keywords: ['coffee', 'tea', 'drink'], unicode: 'U+2615' },
  { emoji: '🍷', name: 'Wine Glass', category: 'Food & Drink', keywords: ['wine', 'drink', 'alcohol'], unicode: 'U+1F377' },

  // Travel & Places (12 items)
  { emoji: '✈️', name: 'Airplane', category: 'Travel & Places', keywords: ['airplane', 'travel', 'flight'], unicode: 'U+2708' },
  { emoji: '🚗', name: 'Automobile', category: 'Travel & Places', keywords: ['car', 'vehicle', 'drive'], unicode: 'U+1F697' },
  { emoji: '🚕', name: 'Taxi', category: 'Travel & Places', keywords: ['taxi', 'cab', 'car'], unicode: 'U+1F695' },
  { emoji: '🚙', name: 'Sport Utility Vehicle', category: 'Travel & Places', keywords: ['suv', 'car', 'vehicle'], unicode: 'U+1F699' },
  { emoji: '🚌', name: 'Bus', category: 'Travel & Places', keywords: ['bus', 'vehicle'], unicode: 'U+1F68C' },
  { emoji: '🚲', name: 'Bicycle', category: 'Travel & Places', keywords: ['bike', 'bicycle', 'cycle'], unicode: 'U+1F6B2' },
  { emoji: '🏠', name: 'House', category: 'Travel & Places', keywords: ['house', 'home'], unicode: 'U+1F3E0' },
  { emoji: '🏢', name: 'Office Building', category: 'Travel & Places', keywords: ['office', 'building', 'work'], unicode: 'U+1F3E2' },
  { emoji: '🏨', name: 'Hotel', category: 'Travel & Places', keywords: ['hotel', 'building'], unicode: 'U+1F3E8' },
  { emoji: '🌍', name: 'Globe Showing Europe-Africa', category: 'Travel & Places', keywords: ['earth', 'world', 'globe'], unicode: 'U+1F30D' },
  { emoji: '🗺️', name: 'World Map', category: 'Travel & Places', keywords: ['map', 'world', 'travel'], unicode: 'U+1F5FA' },
  { emoji: '⛰️', name: 'Mountain', category: 'Travel & Places', keywords: ['mountain', 'nature'], unicode: 'U+26F0' },

  // Activities (10 items)
  { emoji: '⚽', name: 'Soccer Ball', category: 'Activities', keywords: ['soccer', 'football', 'sport'], unicode: 'U+26BD' },
  { emoji: '🏀', name: 'Basketball', category: 'Activities', keywords: ['basketball', 'sport'], unicode: 'U+1F3C0' },
  { emoji: '🏈', name: 'American Football', category: 'Activities', keywords: ['football', 'sport'], unicode: 'U+1F3C8' },
  { emoji: '⚾', name: 'Baseball', category: 'Activities', keywords: ['baseball', 'sport'], unicode: 'U+26BE' },
  { emoji: '🎮', name: 'Video Game', category: 'Activities', keywords: ['game', 'video', 'controller'], unicode: 'U+1F3AE' },
  { emoji: '🎯', name: 'Direct Hit', category: 'Activities', keywords: ['target', 'bullseye', 'dart'], unicode: 'U+1F3AF' },
  { emoji: '🎨', name: 'Artist Palette', category: 'Activities', keywords: ['art', 'paint', 'creative'], unicode: 'U+1F3A8' },
  { emoji: '🎭', name: 'Performing Arts', category: 'Activities', keywords: ['theater', 'drama', 'mask'], unicode: 'U+1F3AD' },
  { emoji: '🎪', name: 'Circus Tent', category: 'Activities', keywords: ['circus', 'tent', 'entertainment'], unicode: 'U+1F3AA' },
  { emoji: '🎬', name: 'Clapper Board', category: 'Activities', keywords: ['movie', 'film', 'cinema'], unicode: 'U+1F3AC' },

  // Objects (13 items)
  { emoji: '💻', name: 'Laptop', category: 'Objects', keywords: ['laptop', 'computer', 'technology'], unicode: 'U+1F4BB' },
  { emoji: '📱', name: 'Mobile Phone', category: 'Objects', keywords: ['phone', 'mobile', 'smartphone'], unicode: 'U+1F4F1' },
  { emoji: '⌚', name: 'Watch', category: 'Objects', keywords: ['watch', 'time', 'clock'], unicode: 'U+231A' },
  { emoji: '📷', name: 'Camera', category: 'Objects', keywords: ['camera', 'photo', 'picture'], unicode: 'U+1F4F7' },
  { emoji: '💡', name: 'Light Bulb', category: 'Objects', keywords: ['idea', 'light', 'bulb'], unicode: 'U+1F4A1' },
  { emoji: '📚', name: 'Books', category: 'Objects', keywords: ['books', 'read', 'library'], unicode: 'U+1F4DA' },
  { emoji: '✉️', name: 'Envelope', category: 'Objects', keywords: ['email', 'mail', 'message'], unicode: 'U+2709' },
  { emoji: '📝', name: 'Memo', category: 'Objects', keywords: ['note', 'write', 'document'], unicode: 'U+1F4DD' },
  { emoji: '🎁', name: 'Wrapped Gift', category: 'Objects', keywords: ['gift', 'present', 'birthday'], unicode: 'U+1F381' },
  { emoji: '🔑', name: 'Key', category: 'Objects', keywords: ['key', 'lock', 'security'], unicode: 'U+1F511' },
  { emoji: '🔨', name: 'Hammer', category: 'Objects', keywords: ['hammer', 'tool', 'fix'], unicode: 'U+1F528' },
  { emoji: '💰', name: 'Money Bag', category: 'Objects', keywords: ['money', 'cash', 'wealth'], unicode: 'U+1F4B0' },
  { emoji: '💎', name: 'Gem Stone', category: 'Objects', keywords: ['gem', 'diamond', 'jewel'], unicode: 'U+1F48E' },

  // Symbols (10 items)
  { emoji: '❤️', name: 'Red Heart', category: 'Symbols', keywords: ['heart', 'love', 'red'], unicode: 'U+2764' },
  { emoji: '💙', name: 'Blue Heart', category: 'Symbols', keywords: ['heart', 'blue', 'love'], unicode: 'U+1F499' },
  { emoji: '💚', name: 'Green Heart', category: 'Symbols', keywords: ['heart', 'green', 'love'], unicode: 'U+1F49A' },
  { emoji: '⭐', name: 'Star', category: 'Symbols', keywords: ['star', 'favorite'], unicode: 'U+2B50' },
  { emoji: '✨', name: 'Sparkles', category: 'Symbols', keywords: ['sparkle', 'shine', 'star'], unicode: 'U+2728' },
  { emoji: '🔥', name: 'Fire', category: 'Symbols', keywords: ['fire', 'hot', 'flame'], unicode: 'U+1F525' },
  { emoji: '💯', name: 'Hundred Points', category: 'Symbols', keywords: ['hundred', '100', 'perfect'], unicode: 'U+1F4AF' },
  { emoji: '✅', name: 'Check Mark Button', category: 'Symbols', keywords: ['check', 'yes', 'done'], unicode: 'U+2705' },
  { emoji: '❌', name: 'Cross Mark', category: 'Symbols', keywords: ['x', 'no', 'wrong'], unicode: 'U+274C' },
  { emoji: '⚠️', name: 'Warning', category: 'Symbols', keywords: ['warning', 'caution', 'alert'], unicode: 'U+26A0' },

  // Flags (5 items)
  { emoji: '🏳️', name: 'White Flag', category: 'Flags', keywords: ['flag', 'white'], unicode: 'U+1F3F3' },
  { emoji: '🏴', name: 'Black Flag', category: 'Flags', keywords: ['flag', 'black'], unicode: 'U+1F3F4' },
  { emoji: '🏁', name: 'Chequered Flag', category: 'Flags', keywords: ['flag', 'racing', 'finish'], unicode: 'U+1F3C1' },
  { emoji: '🚩', name: 'Triangular Flag', category: 'Flags', keywords: ['flag', 'red'], unicode: 'U+1F6A9' },
  { emoji: '🏴‍☠️', name: 'Pirate Flag', category: 'Flags', keywords: ['flag', 'pirate', 'skull'], unicode: 'U+1F3F4-200D-2620-FE0F' },
];

export function searchEmojis(query: string, category: EmojiCategory = 'All'): Emoji[] {
  const lowerQuery = query.toLowerCase().trim();

  let filtered = category === 'All' ? emojis : emojis.filter(e => e.category === category);

  if (lowerQuery) {
    filtered = filtered.filter(e => e.name.toLowerCase().includes(lowerQuery) || e.keywords.some(k => k.toLowerCase().includes(lowerQuery)) || e.emoji.includes(lowerQuery));
  }

  return filtered;
}

export function getEmojisByCategory(category: EmojiCategory): Emoji[] {
  if (category === 'All') return emojis;
  return emojis.filter(e => e.category === category);
}
