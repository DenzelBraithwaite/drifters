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
      title: 'Tutorial1 / Survey1',
      img: '/decks/tutorial/judicator-white.png'
    }
  ],
  health: 10, // choices that are mean increase this, nice choices decrease this
  aura: 10, // choices that are relaxing/lazy increase this, effort and confusion decreases this
  sanity: 10, // choices that are logical increase this, choices that are emotional decrease this
  impulse: 0, // choices that are violent increase this, choices that are peaceful decrease this
  memory: 0,
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
    heart: 0,
    diamond: 0,
    // aura
    yellowAura: 0,
    greenAura: 0,
    // sanity
    brain: 0,
    smiley: 0,
    // impulse
    knife: 0,
    cleaver: 0,
  },
});

export default player;