import { writable } from 'svelte/store';

// TODO: in future jude will change colors probably, for now don't comment on color in dialogue, can be added later
const tutorialFinal = writable([
  {
    id: 'tutorial-final-1',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "You really did it, you made it to the end of your trial...",
    faction: 'Judicator',
    textLeft: "Thanks to you.", // ->tutorial-final-2a
    textRight: "You seem concerned?", // ->tutorial-final-2b
    location: 'Chatter',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-2a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "I may have guided you, but it was your choices that brought you here. And now that you are here, it's time we see to it that you leave this place once and for all.",
    faction: 'Judicator',
    textLeft: "That's all I've ever wanted.", // ->tutorial-final-3a
    textRight: "Not without you.", // ->tutorial-final-3b
    location: 'Chatter',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-2b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Do I? I suppose I'm only now considering the reality of leaving this place. I've dreamt of leaving many times, but I never thought this day would truly come. It's time we leave this place, starting with you.",
    faction: 'Judicator',
    textLeft: "I'll see you on the other side.", // ->tutorial-final-3a
    textRight: "I won't leave without you.", // ->tutorial-final-3b
    location: 'Chatter',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-3a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "That's the spirit! Now then, no more smoke and mirrors, no more time for this and that. I'm going to ask you a very straightforward question, the last question I'll ever ask you. Let me know when you're ready.",
    faction: 'Friend',
    textLeft: "Ready", // ->tutorial-final-4
    textRight: "Not ready", // ->tutorial-final-3b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-3b',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Thank you, but worrying about yourself is the best way to help me. Now then, no more smoke and mirrors, no more time for this and that. I'm going to ask you a very straightforward question, the last question I'll ever ask you. Let me know when you're ready.",
    faction: 'Friend',
    textLeft: "Ready", // ->tutorial-final-4
    textRight: "Not ready", // ->tutorial-final-3b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-3b-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I understand, you need a moment to process this. Please, take as long as you need and let me know when you wish to proceed.",
    faction: 'Friend',
    textLeft: "Ready", // ->tutorial-final-4
    textRight: "Not ready", // ->tutorial-final-3b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-4',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Would you like to remember?",
    faction: 'Friend',
    textLeft: "Yes", // ->tutorial-final-5
    textRight: "No", // ->tutorial-final-4-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-4-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Jack, I'm going to assume you answered quickly and didn't hear what I said. I asked, would you like to remember?",
    faction: 'Friend',
    textLeft: "Yes", // ->tutorial-final-5
    textRight: "No", // ->tutorial-final-4-1b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-4-1b-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I see now you understood me but still choose to forget. I will ask you one last time and then your choice will be final. Would you like to remember?",
    faction: 'Friend',
    textLeft: "Yes", // ->tutorial-final-5
    textRight: "No", // ->tutorial-final-quit-1 // TODO: quick ending for those not wanting to remember.
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-5',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "That settles it then, there's nothing left to do now but close your eyes and concentrate.",
    faction: 'Friend',
    textLeft: "Close eyes", // ->tutorial-final-6
    textRight: "Peek", // ->tutorial-final-5-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-5-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Jack...",
    faction: 'Friend',
    textLeft: "Close eyes", // ->tutorial-final-6
    textRight: "Close eyes", // ->tutorial-final-6
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-6',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "...",
    faction: '',
    textLeft: "Okay, now what?", // ->tutorial-final-7a
    textRight: "...", // ->tutorial-final-7b
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-7a',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "shh... just try to remember a time you were happy.",
    faction: '',
    textLeft: "A time I was happy...", // ->tutorial-final-8a
    textRight: "...", // ->tutorial-final-8b
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-7b',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "Now, try to remember a time you were happy.",
    faction: '',
    textLeft: "Happy...", // ->tutorial-final-8a
    textRight: "...", // ->tutorial-final-8b
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-8a',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "Yes, remember the mixture of emotions and feelings you felt in that moment. What was it that lit a smile across your face so effortlessly?",
    faction: '',
    textLeft: "...", // ->tutorial-final-9
    textRight: "...", // ->tutorial-final-9
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-8b',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "Remember the mixture of emotions and feelings you felt in that moment. What was it that lit a smile across your face so effortlessly?",
    faction: '',
    textLeft: "...", // ->tutorial-final-9
    textRight: "...", // ->tutorial-final-9
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-9',
    imgUrl: '/decks/tutorial/black.png', //TODO: flash victim here, maybe alive, and... I guess now go into the real final stage where we mention Jack's past and chosen victims.
    title: '',
    text: "Yes, remember the mixture of emotions and feelings you felt in that moment. What was it that brought you the most joy in life?",
    faction: '',
    textLeft: "...", // ->tutorial-final-
    textRight: "...", // ->tutorial-final-
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },


  // TODO: tutorial-final-5 black card or something to signify remembering.
]);

export default tutorialFinal;