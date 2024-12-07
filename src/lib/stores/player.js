import { writable } from 'svelte/store';

const player = writable({
  name: 'Jack',
  timesReborn: 0,
  unlockedCards: [],
  activeDeck: 'survey',
  unlockedDeck: {
    tutorial1: true,
    tutorial2: false,
    tutorial3: false,
    tutorial4: false,
    tutorialFinal: false,
    survey1: true,
    survey2: false,
    survey3: false,
    survey4: false,
    chapter1: false,
    chapter1Soldiers: false,
    chapter2: false,
    chapter2Elves: false,
    chapter3: false,
    chapter3Goblins: false,
    chapter4: false,
    chapter4Beings: false,

  },
  displayDecks: [
    {
      title: 'Jude',
      description: 'Chatter',
      img: '/decks/tutorial/judicator-white.png'
    },
    // {
    //   title: 'Jude',
    //   description: 'Answer',
    //   img: '/decks/tutorial/judicator-purple-smile.png'
    // },
  ],
  health: 10, 
  aura: 10, 
  sanity: 10, 
  impulse: 0, 
  memory: 0,
  goodPoints: 0,
  evilPoints: 0,
  // icons determined as game progresses, memory is always a puzzle
  icons: {
    health: '', 
    aura: '', 
    sanity: '', 
    impulse: '',
    memory: 'puzzle',
  },
  iconPoints: {
    // health
    heart: 0, // + being nice | - being mean
    diamond: 0, // + being mean | - being nice
    // aura
    yellowAura: 0, // + being energetic | - being lazy
    greenAura: 0, // + being lazy / chill | - being energetic / excited
    // sanity
    brain: 0, // + being smart | - being stupid
    smiley: 0, // + being carefree | - being stressed
    // impulse
    knife: 0, // + being aggressive | - being docile
    cleaver: 0, // + being annoyed | - being restrained
  },
});

export default player;