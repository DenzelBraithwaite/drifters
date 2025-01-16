import { writable } from 'svelte/store';

// TODO: restore to defaults, unlocked decks and memoryFIXME:
const player = writable({
  name: 'Jack',
  timesReborn: 0,
  unlockedCards: [],
  activeDeck: 'survey',
  unlockedDeck: {
    tutorial1: true, // default to true
    tutorial2: true, // default to false
    tutorial3: true, // default to false
    tutorial4: true, // default to false
    tutorialFinal: true, // default to false
    survey1: true, // default to true
    survey2: true, // default to false
    survey3: true, // default to false
    survey4: true, // default to false
    chapter1: true, // default to false
    chapter1Soldiers: true, // default to false
    chapter2: true, // default to false
    chapter2Elves: true, // default to false
    chapter3: true, // default to false
    chapter3Goblins: true, // default to false
    chapter4: true, // default to false
    chapter4Beings: true, // default to false
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
  memory: 49,
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

/* TODO:FIXME:
The end mementos are broken(always blank), the issue stems from the fact that gameClient.svelte loads the decks on execution
As the gameClient.svelte updates the player store, the tutorialFinal.js never receives this update since it's never "called" again, so it's version of get(player) is not up-to-date.
The surveyDecisionHandler uses get(decks), the decks store that imports all decks is not up-to-date and tutorialFinalDeck.js reflects the player store when the game started.
*/