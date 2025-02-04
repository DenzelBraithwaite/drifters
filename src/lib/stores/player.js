import { writable } from 'svelte/store';

// Remember to restore to defaults after testing
const player = writable({
  name: 'Jack',
  timesReborn: 0,
  unlockedCards: [],
  activeDeck: 'survey',
  unlockedDeck: {
    tutorial1: true, // default to true
    tutorial2: false, // default to false
    tutorial3: false, // default to false
    tutorial4: false, // default to false
    tutorialFinal: false, // default to false
    survey1: true, // default to true
    survey2: false, // default to false
    survey3: false, // default to false
    survey4: false, // default to false
    chapter1: false, // default to false
    chapter1Soldiers: false, // default to false
    chapter2: false, // default to false
    chapter2Elves: false, // default to false
    chapter3: false, // default to false
    chapter3Goblins: false, // default to false
    chapter4: false, // default to false
    chapter4Beings: false, // default to false
  },
  displayDecks: [
    {
      title: 'Jude',
      description: 'Chatter',
      img: '/decks/tutorial/judicator-white.png'
    },
  ],
  health: 10,
  aura: 10, 
  sanity: 10, 
  impulse: 0,
  memory: 0,
  goodPoints: 0,
  evilPoints: 0,
  // icons determined as game progresses, memory is always a puzzle, others default to empty string
  icons: {
    health: '', // heart || diamond
    aura: '', // green || yellow
    sanity: '', // brain || smiley
    impulse: '', // knife || cleaver
    memory: 'puzzle', // Could be empty string, no need for puzzle string yet.
  },
  iconPoints: {
    // health
    heart: 0, // + being nice | - being mean
    diamond: 0, // + being mean | - being nice
    // aura
    yellowAura: 0, // + being energetic | - being lazy
    greenAura: 0, // + being lazy / chill / in touch with self | - being energetic / excited
    // sanity
    brain: 0, // + being smart | - being stupid
    smiley: 0, // + being carefree | - being stressed
    // impulse MINUS IS GOOD, PLUS IS BAD. 0 IS GOOD, 10 IS BAD.
    knife: 0, // + being aggressive | - being docile
    cleaver: 0, // + being annoyed | - being restrained
  },
});

export default player;

// TODO: add more good and evil points to all tutorials and surveys
//  TODO: new deck notification should be like new achievement on bottom or somewhere else not blocking the text.
// TODO: Add achievements like make your first dcision!