import { writable } from 'svelte/store';

const survey3 = writable([
  {
    id: 'survey3-1',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Are you ready to begin?",
    faction: 'Judicator',
    textLeft: "Comply", // ->survey3-2
    textRight: "Refuse", // ->survey3-2
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 1,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 1
    }
  },
  {
    id: 'survey3-2',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Your decision has been noted, let's continue. You only have time to save one of two people, which do you attempt to save?",
    faction: 'Judicator',
    textLeft: "Good odds of survival: Daughter", // ->survey3-3a
    textRight: "Guaranteed survival: Niece", // ->survey3-3b
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 1
    },
    actionRight: {
      brain: 1,
      smiley: 0,
      good: 1,
      evil: 0
    }
  },
  {
    id: 'survey3-3a',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "How selfish of you, what if you lose them both? What power would you prefer?",
    faction: 'Judicator',
    textLeft: "Super intelligence.", // ->survey3-4a
    textRight: "Manipulate emotions of others.", // ->survey3-4b
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-3b',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Afraid to lose them both so you'd abandon your daughter? What power would you prefer?",
    faction: 'Judicator',
    textLeft: "Super intelligence.", // ->survey3-4a
    textRight: "Manipulate emotions of others.", // ->survey3-4b
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-4a',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Always be the smartest in the room, but never let them know. I guess that means intelligence is more important to you than charisma?",
    faction: 'Judicator',
    textLeft: "Yes", // ->survey3-5a
    textRight: "No", // ->survey3-5a
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-4b',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "I wonder how you would use those powers. Would you use them to help others or manipulate them?",
    faction: 'Judicator',
    textLeft: "Help others", // ->survey3-5b
    textRight: "Help myself", // ->survey3-5c
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-5a',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "I see, your values and morals are becoming clearer. Choose one of the following:",
    faction: 'Judicator',
    textLeft: "Smiles", // ->survey3-6
    textRight: "Brains", // ->survey3-6
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 2,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 2,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-5b',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "I'd like to remind you that there's no shame in answering honestly, in fact it's strongly encouraged. Next, choose one of the following:",
    faction: 'Judicator',
    textLeft: "Smiles", // ->survey3-6
    textRight: "Brains", // ->survey3-6
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 2,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 2,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-5c',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Honest, keep answering like that and you'll be out of here in no time. Next, choose one of the following:",
    faction: 'Judicator',
    textLeft: "Smiles", // ->survey3-6
    textRight: "Brains", // ->survey3-6
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 2,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 2,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-6',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Choose",
    faction: 'Judicator',
    textLeft: "Books", // ->survey3-7
    textRight: "Movies", // ->survey3-7
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    }
  },
  {
    // I added this in after, that's why the id is a bit odd here.
    id: 'survey3-7',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Some of the brightest minds are the most detached from reality, what do you think about that?",
    faction: 'Judicator',
    textLeft: "Sanity over insanity of course.", // ->survey3-7a
    textRight: "Sometimes, insanity is the sane decision.", // ->survey3-7b
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-7a',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "The sane choice. Choose:",
    faction: 'Judicator',
    textLeft: "Comedy", // ->survey3-8
    textRight: "Romance", // ->survey3-8
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-7b',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Sometimes it's pure insanity. Choose:",
    faction: 'Judicator',
    textLeft: "Comedy", // ->survey3-8
    textRight: "Romance", // ->survey3-8
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-8',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Choose",
    faction: 'Judicator',
    textLeft: "Science", // ->survey3-9a
    textRight: "Religion", // ->survey3-9b
    location: 'Answer',
    actionLeft: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-9a',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Not religious? There's always room for a little faith, Jack. Do you believe in the supernatural?",
    faction: 'Judicator',
    textLeft: "Yes", // ->survey3-10a
    textRight: "No", // ->survey3-10b
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-9b',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "You might need that faith, hold onto it. Do you also believe in the supernatural?",
    faction: 'Judicator',
    textLeft: "Yes", // ->survey3-10a
    textRight: "No", // ->survey3-10b
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 1,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 1,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-10a',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Good, you need to keep your mind wide open if you wish for your memories to return. You do want to remember your past, don't you?",
    faction: 'Judicator',
    textLeft: "Yes, I want to remember.", // ->survey3-11a
    textRight: "No, I don't care to remember.", // ->survey3-11b
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-10b',
    imgUrl: '/decks/tutorial/judicator-purple.png',
    title: 'Jude',
    text: "Really, even now? Those who remain in denial risk forfeiting their memories. Is remembering your past still important to you?",
    faction: 'Judicator',
    textLeft: "Yes, I want to remember.", // ->survey3-11a
    textRight: "No, I don't care to remember.", // ->survey3-11b
    location: 'Answer',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-11a',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Good, all in due time. This marks the end of Answer time, you've done well, Jack.",
    faction: 'Judicator',
    textLeft: "What time is next?", // ->survey3-12
    textRight: "When is the next question time?", // ->survey3-11a-1a
    location: 'Chatter',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-11a-1a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "After choice time, and guess what time it is now?",
    faction: 'Judicator',
    textLeft: "Choice time?", // ->survey3-12
    textRight: "Question time?", // ->survey3-12
    location: 'Chatter',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-11b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I see, then there is nothing left for me to ask.",
    faction: 'Judicator',
    textLeft: "What time is next?", // ->survey3-12
    textRight: "Are you disappointed?", // ->survey3-11b-1b
    location: 'Chatter',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-11b-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I thought you'd be different, no matter. Moving on, can you guess what time it is?",
    faction: 'Judicator',
    textLeft: "Choice time?", // ->survey3-12
    textRight: "Question time?", // ->survey3-12
    location: 'Chatter',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
  {
    id: 'survey3-12',
    imgUrl: '/decks/tutorial/judicator-red-smile.png',
    title: 'Jude',
    text: "Choice time!",
    faction: 'Judicator',
    textLeft: "Woah, why are you red now?", // ->survey3-12
    textRight: "I should've guessed.", // ->survey3-12
    location: 'Choice',
    actionLeft: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    },
    actionRight: {
      brain: 0,
      smiley: 0,
      good: 0,
      evil: 0
    }
  },
]);

export default survey3;