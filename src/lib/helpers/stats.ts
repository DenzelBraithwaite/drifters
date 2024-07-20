import { get } from 'svelte/store';
import player from '../stores/player';

type PartialCard = {
  text: string;
  textLeft: string;
  textRight: string;
  actionLeft: {
    health?: number;
    aura?: number;
    sanity?: number;
    impulse?: number;
    memory: number;
  },
  actionRight: {
    health?: number;
    aura?: number;
    sanity?: number;
    impulse?: number;
    memory: number;
  },
}

type CompleteCard = {
  id?: string;
  imgUrl?: string;
  title?: string;
  faction?: string;
  location?: string;
  text?: string;
  textLeft?: string;
  textRight?: string;
  actionLeft?: {
    health?: number;
    aura?: number;
    sanity?: number;
    impulse?: number;
    memory?: number;
  },
  actionRight?: {
    health?: number;
    aura?: number;
    sanity?: number;
    impulse?: number;
    memory?: number;
  },
  appearsWithIcon?: string;
}

const defaultReturnCard: PartialCard = {
  text: 'Something went wrong with this card, sorry about that.',
  textLeft: 'Oh well',
  textRight: 'It happens',
  actionLeft: {
    health: 0,
    aura: 0,
    sanity: 0,
    impulse: 0,
    memory: 0,
  },
  actionRight: {
    health: 0,
    aura: 0,
    sanity: 0,
    impulse: 0,
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
          health: coinFlip === 0 ? 0 : -4,
          memory: 0,
        },
        actionRight: {
          health: coinFlip === 0 ? -4 : 0,
          memory: 0,
        },
      };
    } else if (get(player).health >= 7) {
      return {
        text: "I'm running low on hearts, do you have any to spare?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          health: -2,
          memory: 0,
        },
        actionRight: {
          health: 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 5) {
      return {
        text: "Most people hate hospitals, do you?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          health: 0,
          memory: 0,
        },
        actionRight: {
          health: 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 3) {
      return {
        text: "What's your favorite color?",
        textLeft: "Blue",
        textRight: "Red",
        actionLeft: {
          health: 0,
          memory: 0,
        },
        actionRight: {
          health: 10,
          memory: 0,
        },
      };
    } else if (get(player).health >= 1) {
      return {
        text: "You look like you're struggling, would you like some health?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          health: 10,
          memory: 0,
        },
        actionRight: {
          health: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else if (cardId === 'stat-aura') {
    if (get(player).aura >= 9) {
      return {
        text: "Your aura is strong, but would it be stronger with coffee or tea?",
        textLeft: "Coffee",
        textRight: "Tea",
        actionLeft: {
          aura: -4,
          memory: 0,
        },
        actionRight: {
          aura: 0,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 7) {
      return {
        text: "Your spirits are high, but perhaps they could be higher. You're welcome to rest here if you'd like?",
        textLeft: "I really shouldn't be wasting time.",
        textRight: "A few minutes wouldn't hurt.",
        actionLeft: {
          aura: -2,
          memory: 0,
        },
        actionRight: {
          aura: 10,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 5) {
      return {
        text: "Your aura is quite bright, do you meditate?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          aura: 10,
          memory: 0,
        },
        actionRight: {
          aura: 0,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 3) {
      return {
        text: "Slow and steady wins the race.",
        textLeft: "Turtoise",
        textRight: "Hare",
        actionLeft: {
          aura: 10,
          memory: 0,
        },
        actionRight: {
          aura: 0,
          memory: 0,
        },
      };
    } else if (get(player).aura >= 1) {
      return {
        text: "Your aura looks terrible, would you like a cleansing?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          aura: 10,
          memory: 0,
        },
        actionRight: {
          aura: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else if (cardId === 'stat-sanity') {
    if (get(player).sanity >= 9) {
      return {
        text: "You've done well guarding the gates of your mind, I feel your strong will and determination, but could something be lacking?",
        textLeft: "Knowledge",
        textRight: "Happiness",
        actionLeft: {
          sanity: -4,
          memory: 0,
        },
        actionRight: {
          sanity: 0,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 7) {
      return {
        text: "Your quick witt is impressive, I bet you're smarter than most people.",
        textLeft: "I suppose I am.",
        textRight: "No, that's not true.",
        actionLeft: {
          sanity: 10,
          memory: 0,
        },
        actionRight: {
          sanity: -2,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 5) {
      return {
        text: "Your smile lights up the room, you should share it with others!",
        textLeft: "Sure!",
        textRight: "Sure?",
        actionLeft: {
          sanity: 10,
          memory: 0,
        },
        actionRight: {
          sanity: 0,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 3) {
      return {
        text: "You seem a bit savage, what do you use your teeth are for?",
        textLeft: "Biting",
        textRight: "Smiling",
        actionLeft: {
          sanity: 0,
          memory: 0,
        },
        actionRight: {
          sanity: 10,
          memory: 0,
        },
      };
    } else if (get(player).sanity >= 1) {
      return {
        text: "You look like you're losing your grip on reality, want me to pull you back before you drift too far?",
        textLeft: "Yes",
        textRight: "No",
        actionLeft: {
          sanity: 10,
          memory: 0,
        },
        actionRight: {
          sanity: 0,
          memory: 0,
        },
      };
    }
    return defaultReturnCard;
  } else if (cardId === 'stat-impulse') {
    if (get(player).impulse >= 9) {
      return {
        text: "You've been showing restraint for far too long, wouldn't it be nice to just let loose?",
        textLeft: "I'd love to.",
        textRight: "I'm afraid to.",
        actionLeft: {
          impulse: -4,
          memory: 0,
        },
        actionRight: {
          impulse: 0,
          memory: 0,
        },
      };
    } else if (get(player).impulse >= 7) {
      return {
        text: "You're a curious one aren't you, do you know the tale of the cat?",
        textLeft: "Curiosity killed it.",
        textRight: "Satisfaction brought it back.",
        actionLeft: {
          impulse: 10,
          memory: 0,
        },
        actionRight: {
          impulse: -2,
          memory: 0,
        },
      };
    } else if (get(player).impulse >= 5) {
      return {
        text: "You've dipped your toes for too long, crossing the point of no return.",
        textLeft: "I think I'm lost.",
        textRight: "I know my way back.",
        actionLeft: {
          impulse: 0,
          memory: 0,
        },
        actionRight: {
          impulse: 10,
          memory: 0,
        },
      };
    } else if (get(player).impulse >= 3) {
      return {
        text: "When the need to sleep and breathe come second to the need to feed, what is there to do?",
        textLeft: "Feed",
        textRight: "Fight",
        actionLeft: {
          impulse: 0,
          memory: 0,
        },
        actionRight: {
          impulse: 10,
          memory: 0,
        },
      };
    } else if (get(player).impulse >= 1) {
      return {
        text: "Your hunger claws at you from within, every fiber of your being wants to submit to your urges. Allow me to teach you restraint.",
        textLeft: "Teach me.",
        textRight: "Leave me.",
        actionLeft: {
          impulse: 10,
          memory: 0,
        },
        actionRight: {
          impulse: 0,
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

export let healthCard: CompleteCard = {
  id: 'stat-health',
  imgUrl: '/decks/beings/health_being.png',
  title:'Health being',
  faction: 'Being',
  location: '???',
  appearsWithIcon: '',
  ...determineCardProperties('stat-health')
};
export let auraCard: CompleteCard = {
  id: 'stat-aura',
  imgUrl: '/decks/beings/aura_being.png',
  title:'Aura being',
  faction: 'Being',
  location: '???',
  appearsWithIcon: '',
  ...determineCardProperties('stat-aura')
};
export let sanityCard: CompleteCard = {
  id: 'stat-sanity',
  imgUrl: '/decks/beings/sanity_being.png',
  title:'Sanity being',
  faction: 'Being',
  location: '???',
  appearsWithIcon: '',
  ...determineCardProperties('stat-sanity')
};
export let impulseCard: CompleteCard = {
  id: 'stat-impulse',
  imgUrl: '/decks/beings/impulse_being.png',
  title:'Impulse being',
  faction: 'Being',
  location: '???',
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