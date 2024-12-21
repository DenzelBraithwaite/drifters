import { get } from 'svelte/store';
import player from '../stores/player';

type PartialCard = {
  text: string;
  textLeft: string;
  textRight: string;
  actionLeft: {
    heart?: number;
    diamond?: number;
    greenAura?: number;
    yellowAura?: number;
    brain?: number;
    smiley?: number;
    knife?: number;
    cleaver?: number;
    memory: number;
  },
  actionRight: {
    heart?: number;
    diamond?: number;
    greenAura?: number;
    yellowAura?: number;
    brain?: number;
    smiley?: number;
    knife?: number;
    cleaver?: number;
    memory: number;
  },
}

const defaultReturnCard: PartialCard = {
  text: 'Something went wrong with this card, sorry about that.',
  textLeft: 'Oh well',
  textRight: 'It happens',
  actionLeft: {
    heart: 0,
    diamond: 0,
    greenAura: 0,
    yellowAura: 0,
    brain: 0,
    smiley: 0,
    knife: 0,
    cleaver: 0,
    memory: 0,
  },
  actionRight: {
    heart: 0,
    diamond: 0,
    greenAura: 0,
    yellowAura: 0,
    brain: 0,
    smiley: 0,
    knife: 0,
    cleaver: 0,
    memory: 0,
  },
}

function determineCardProperties(cardId: string): PartialCard {
  if (cardId === 'stat-health') {
    if (get(player).health >= 9) {
      const coinFlip = Math.floor(Math.random() * 2); // 0 = heads, 1 = tails
      return {
        text: "You don't seem to be struggling enough, let's play a game. Heads or tails?",
        textLeft: "Heads",
        textRight: "Tails",
        actionLeft: {
          heart: coinFlip === 0 ? 10 : -4,
          diamond: coinFlip === 0 ? 10 : -4,
          memory: 0,
        },
        actionRight: {
          heart: coinFlip === 0 ? -4 : 10,
          diamond: coinFlip === 0 ? -4 : 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 7) {
      return {
        text: "I'm running low on hearts, do you have any to spare?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          heart: -3,
          diamond: -3,
          memory: 0,
        },
        actionRight: {
          heart: 10,
          diamond: 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 5) {
      return {
        text: "Most people hate hospitals, do you?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          heart: -2,
          diamond: -2,
          memory: 0,
        },
        actionRight: {
          heart: 10,
          diamond: 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 3) {
      return {
        text: "What's your favorite color?",
        textLeft: "Blue",
        textRight: "Red",
        actionLeft: {
          heart: -1,
          diamond: -1,
          memory: 0,
        },
        actionRight: {
          heart: 10,
          diamond: 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 1) {
      return {
        text: "You look like you're struggling, would you like some health?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          heart: 10,
          diamond: 10,
          memory: 0,
        },
        actionRight: {
          heart: 0,
          diamond: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else if (cardId === 'stat-aura') {
    if (get(player).aura >= 9) {
      const auraFlip = Math.floor(Math.random() * 2); // 0 = green, 1 = yellow
      return {
        text: "Auras are ubiquitous and ever-changing. Can you sense my current aura?",
        textLeft: "🟢🟢🟢",
        textRight: "🟡🟡🟡",
        actionLeft: {
          greenAura: auraFlip === 0 ? 10 : -4,
          yellowAura: auraFlip === 0 ? 10 : -4,
          memory: 0,
        },
        actionRight: {
          greenAura: auraFlip === 0 ? -4 : 10,
          yellowAura: auraFlip === 0 ? -4 : 10,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 7) {
      return {
        text: "Your spirits are high, but perhaps they could be higher. You're welcome to rest here if you'd like?",
        textLeft: "I really shouldn't be wasting time.",
        textRight: "A few minutes wouldn't hurt.",
        actionLeft: {
          greenAura: -3,
          yellowAura: -3,
          memory: 0,
        },
        actionRight: {
          greenAura: 10,
          yellowAura: 10,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 5) {
      return {
        text: "Your aura is quite bright, do you meditate?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          greenAura: 10,
          yellowAura: 10,
          memory: 0,
        },
        actionRight: {
          greenAura: -2,
          yellowAura: -2,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 3) {
      return {
        text: "Slow and steady wins the race.",
        textLeft: "Turtoise",
        textRight: "Hare",
        actionLeft: {
          greenAura: 10,
          yellowAura: 10,
          memory: 0,
        },
        actionRight: {
          greenAura: -1,
          yellowAura: -1,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 1) {
      return {
        text: "Your aura looks terrible, would you like a cleansing?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          greenAura: 10,
          yellowAura: 10,
          memory: 0,
        },
        actionRight: {
          greenAura: 0,
          yellowAura: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else if (cardId === 'stat-sanity') {
    if (get(player).sanity >= 9) {
      const emojiFlip = Math.floor(Math.random() * 2); // 0 = brain, 1 = smiley
      return {
        text: "Moods change like the weather, guess how I'm feeling today.",
        textLeft: "🧠",
        textRight: "🙂",
        actionLeft: {
          brain: emojiFlip === 0 ? 10 : -4,
          smiley: emojiFlip === 0 ? 10 : -4,
          memory: 0,
        },
        actionRight: {
          brain: emojiFlip === 0 ? -4 : 10,
          smiley: emojiFlip === 0 ? -4 : 10,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 7) {
      return {
        text: "You've done well guarding the gates of your mind, I feel your strong will and determination, but could something be lacking?",
        textLeft: "Knowledge",
        textRight: "Happiness",
        actionLeft: {
          brain: 10,
          smiley: 10,
          memory: 0,
        },
        actionRight: {
          brain: -3,
          smiley: -3,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 5) {
      return {
        text: "Your smile lights up the room, you should share it with others!",
        textLeft: "Sure!",
        textRight: "Sure?",
        actionLeft: {
          brain: 10,
          smiley: 10,
          memory: 0,
        },
        actionRight: {
          brain: -2,
          smiley: -2,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 3) {
      return {
        text: "You seem a bit savage, what do you use your teeth are for?",
        textLeft: "Biting",
        textRight: "Smiling",
        actionLeft: {
          brain: -1,
          smiley: -1,
          memory: 0,
        },
        actionRight: {
          brain: 10,
          smiley: 10,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 1) {
      return {
        text: "You look like you're losing your grip on reality, want me to pull you back before you drift too far?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          brain: 10,
          smiley: 10,
          memory: 0,
        },
        actionRight: {
          brain: 0,
          smiley: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else if (cardId === 'stat-impulse') {
    if (get(player).impulse <= 1) {
      const randomAttack = Math.floor(Math.random() * 2) // 0 = Run, 1 = Hide
      return {
        text: "You've been showing restraint for far too long, let me fan the flames of your desires.",
        textLeft: "Run",
        textRight: "Hide",
        actionLeft: {
          knife: randomAttack === 0 ? 10 : -4,
          cleaver: randomAttack === 0 ? 10 : -4,
          memory: 0,
        },
        actionRight: {
          knife: randomAttack === 0 ? -4 : 10,
          cleaver: randomAttack === 0 ? -4 : 10,
          memory: 0,
        },
      };
    } else if (get(player).impulse <= 3) {
      return {
        text: "You're a curious one aren't you, do you know the tale of the cat?",
        textLeft: "Curiosity killed it.",
        textRight: "Satisfaction brought it back.",
        actionLeft: {
          knife: 10,
          cleaver: 10,
          memory: 0,
        },
        actionRight: {
          knife: -3,
          cleaver: -3,
          memory: 0,
        },
      };
    } else if (get(player).impulse <= 5) {
      return {
        text: "You've dipped your toes for too long, crossing the point of no return.",
        textLeft: "I think I'm lost.",
        textRight: "I know my way back.",
        actionLeft: {
          knife: -2,
          cleaver: -2,
          memory: 0,
        },
        actionRight: {
          knife: 10,
          cleaver: 10,
          memory: 0,
        },
      };
    } else if (get(player).impulse <= 7) {
      return {
        text: "When the need to sleep and breathe come second to the need to feed, what is there to do?",
        textLeft: "Feed",
        textRight: "Fight",
        actionLeft: {
          knife: -1,
          cleaver: -1,
          memory: 0,
        },
        actionRight: {
          knife: 10,
          cleaver: 10,
          memory: 0,
        },
      };
    } else if (get(player).impulse <= 9) {
      return {
        text: "Your hunger claws at you from within, every fiber of your being wants to submit to your urges. Allow me to teach you restraint.",
        textLeft: "Teach me.",
        textRight: "Leave me.",
        actionLeft: {
          knife: 10,
          cleaver: 10,
          memory: 0,
        },
        actionRight: {
          knife: 0,
          cleaver: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else {
    return defaultReturnCard;
  }

  return defaultReturnCard;
}

// Exports
export type CompleteCard = {
  id?: string;
  imgUrl?: string;
  title?: string;
  faction?: string;
  location?: string;
  text?: string;
  textLeft?: string;
  textRight?: string;
  actionLeft?: {
    heart?: number;
    diamond?: number;
    greenAura?: number;
    yellowAura?: number;
    brain?: number;
    smiley?: number;
    knife?: number;
    cleaver?: number;
    memory?: number;
  },
  actionRight?: {
    heart?: number;
    diamond?: number;
    greenAura?: number;
    yellowAura?: number;
    brain?: number;
    smiley?: number;
    knife?: number;
    cleaver?: number;
    memory?: number;
  },
  actionCenter?: {
    heart?: number;
    diamond?: number;
    greenAura?: number;
    yellowAura?: number;
    brain?: number;
    smiley?: number;
    knife?: number;
    cleaver?: number;
    memory?: number;
  },
  appearsWithIcon?: string;
}

export let healthCard: CompleteCard = {
  id: 'stat-health',
  imgUrl: '/decks/beings/health_being.png',
  title:'Health being',
  faction: 'Being',
  location: 'Decision',
  appearsWithIcon: '',
  ...determineCardProperties('stat-health')
};
export let auraCard: CompleteCard = {
  id: 'stat-aura',
  imgUrl: '/decks/beings/aura_being.png',
  title:'Aura being',
  faction: 'Being',
  location: 'Decision',
  appearsWithIcon: '',
  ...determineCardProperties('stat-aura')
};
export let sanityCard: CompleteCard = {
  id: 'stat-sanity',
  imgUrl: '/decks/beings/sanity_being.png',
  title:'Sanity being',
  faction: 'Being',
  location: 'Decision',
  appearsWithIcon: '',
  ...determineCardProperties('stat-sanity')
};
export let impulseCard: CompleteCard = {
  id: 'stat-impulse',
  imgUrl: '/decks/beings/impulse_being.png',
  title:'Impulse being',
  faction: 'Being',
  location: 'Decision',
  appearsWithIcon: '',
  ...determineCardProperties('stat-impulse')
};

export function updateStatCard(cardId: string): CompleteCard {
  switch (cardId) {
    case 'stat-health':
      return {
        id: 'stat-health',
        imgUrl: '/decks/beings/health_being.png',
        title:'Health being',
        faction: 'Being',
        location: '???',
        appearsWithIcon: '',
        ...determineCardProperties('stat-health')
      };
    case 'stat-aura':
      return {
        id: 'stat-aura',
        imgUrl: '/decks/beings/aura_being.png',
        title:'Aura being',
        faction: 'Being',
        location: '???',
        appearsWithIcon: '',
        ...determineCardProperties('stat-aura')
      };
    case 'stat-sanity':
      return {
        id: 'stat-sanity',
        imgUrl: '/decks/beings/sanity_being.png',
        title:'Sanity being',
        faction: 'Being',
        location: '???',
        appearsWithIcon: '',
        ...determineCardProperties('stat-sanity')
      };
    case 'stat-impulse':
      return {
        id: 'stat-impulse',
        imgUrl: '/decks/beings/impulse_being.png',
        title:'Impulse being',
        faction: 'Being',
        location: '???',
        appearsWithIcon: '',
        ...determineCardProperties('stat-impulse')
      };
      default:
        return {
          id: 'error',
          imgUrl: '/characters/kaz.png',
          title:'Kaz',
          faction: 'Creator',
          location: '???',
          appearsWithIcon: '',
          ...defaultReturnCard
        };
  }
}