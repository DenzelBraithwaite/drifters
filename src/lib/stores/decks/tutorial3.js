import { writable } from 'svelte/store';

// TODO add some dialogue at beginning, goes by fast
const tutorial3 = writable([
  {
    id: 'tutorial3-1',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Deeper and deeper you go, first a strange town and now a magical forest.",
    faction: '???',
    textLeft: "Oh, it's you.", // ->tutorial3-2a
    textRight: "You appear out of thin air.", // ->tutorial3-2b
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
    id: 'tutorial3-2a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "It's me! You must have many questions.",
    faction: '???',
    textLeft: "I do, but I guess I'll wait until question time.", // ->tutorial3-3a
    textRight: "Some, like why do you keep appearing and disapppearing.", // ->tutorial3-3b
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
    id: 'tutorial3-2b',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Yes, I suppose I keep it suspenseful and mysterious.",
    faction: '???',
    textLeft: "Right, just what I need right now.", // ->tutorial3-3b
    textRight: "What if you didn't do that all the time?", // ->tutorial3-3b
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
    id: 'tutorial3-3a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Well good news, I only wanted to say a quick hello, it is now question time!",
    faction: '???',
    textLeft: "Great, I'm ready.", // ->tutorial3-4
    textRight: "But you're still white?", // ->tutorial3-4
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
    id: 'tutorial3-3b',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "I'm sorry but I only wanted to say a quick hello, it's actually question time not chatter time.",
    faction: '???',
    textLeft: "Oh, okay then.", // ->tutorial3-4
    textRight: "But you're still white?", // ->tutorial3-4
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
    id: 'tutorial3-4',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "It is question time, what would you like to ask?",
    faction: '???',
    textLeft: "What is my role here?", // ->tutorial3-5a
    textRight: "What is your role here?", // ->tutorial3-5b
    location: 'Question',
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
    id: 'tutorial3-5a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "There are 3 kinds of people here: the guests, the visitors, and the others. You are a guest, your role is to interact with other guests and visitors and regain your memories.",
    faction: '???',
    textLeft: "What's the difference between guests and visitors?", // ->tutorial3-5a-1a
    textRight: "What are the others?", // ->tutorial3-5a-1b
    location: 'Question',
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
    id: 'tutorial3-5a-1a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "Guests are people who have been invited but forgot, while visitors are people who were forced to visit without knowing.",
    faction: '???',
    textLeft: "Oh, that makes sense.", // ->tutorial3-6a
    textRight: "I'm not sure I understand but ok.", // ->tutorial3-6a
    location: 'Question',
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
    id: 'tutorial3-5a-1b',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "The others are \"Beings\", their origins are unknown but they seem to help the guests and ignore the visitors. One theory is that they are repurposed drifters.",
    faction: '???',
    textLeft: "Repurposed drifters?", // ->tutorial3-5a-1b-1a
    textRight: "Does that make you an \"other\"?", // ->tutorial3-5a-1b-1b
    location: 'Question',
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
    id: 'tutorial3-5a-1b-1a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "Drifters are guests who never left, it's possible they finally found a purpose or were given one.",
    faction: '???',
    textLeft: "Oh, I see.", // ->tutorial3-6a
    textRight: "That leads me to another question.", // ->tutorial3-6a
    location: 'Question',
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
    id: 'tutorial3-5a-1b-1b',
    imgUrl: '/decks/tutorial/judicator-blue-smile.png',
    title: 'Jude',
    text: "I suppose that does, Jack. I am a judicator tasked with overseeing the trials of guests.",
    faction: 'Judicator', // Now has knowledge of faction
    textLeft: "Interesting", // ->tutorial3-6b
    textRight: "I have another question for you.", // ->tutorial3-6b
    location: 'Question',
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
    id: 'tutorial3-5b',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "I am a judicator, tasked with overseeing the trials of guests.",
    faction: 'Judicator', // Now has knowledge of faction
    textLeft: "Does that mean you're judging me?", // ->tutorial3-5b-1a
    textRight: "Have you always been a judicator?", // ->tutorial3-5b-1b
    location: 'Question',
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
    id: 'tutorial3-5b-1a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "I am watching you Jack, observing your decisions and learning who you are as a person. I however, cannot \"judge\" you directly.",
    faction: 'Judicator', // Now has knowledge of faction
    textLeft: "That makes me nervous.", // ->tutorial3-6b
    textRight: "I will be on my best behaviour.", // ->tutorial3-6b
    location: 'Question',
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
    id: 'tutorial3-5b-1b',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "Sometimes it feels that way, but no, not always. I can tell you more about that the next time we speak, if you'd like?",
    faction: 'Judicator', // Now has knowledge of faction
    textLeft: "Yes, I would.", // ->tutorial3-6b
    textRight: "No, that's okay.", // ->tutorial3-6b
    location: 'Question',
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
    id: 'tutorial3-6a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "What would you like to ask next?",
    faction: '???',
    textLeft: "Why the name Jude?", // ->tutorial3-6a-1a
    textRight: "Why haven't I remembered anything yet?", // ->tutorial3-6a-1b
    location: 'Question',
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
    id: 'tutorial3-6a-1a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "I am a judicator, or a judge if that's easier to remember. The name Jude derives from one of those.",
    faction: '???',
    textLeft: "So you're judging me? On what?", // ->tutorial3-7
    textRight: "I don't understand.", // ->tutorial3-7
    location: 'Question',
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
    id: 'tutorial3-6a-1b',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "Don't force it, your memories will return when you are ready. I watch over you as your judicator, I will do what's in my power to help you.",
    faction: 'Judicator',
    textLeft: "So you're judging me? On what?", // ->tutorial3-7
    textRight: "What can you do to help me?", // ->tutorial3-7
    location: 'Question',
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
    id: 'tutorial3-6b',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "What would you like to ask next?",
    faction: 'Judicator', // Now has knowledge of faction
    textLeft: "Is your real name actually Jude?", // ->tutorial3-6b-1a
    textRight: "Why haven't I remembered anything yet?", // ->tutorial3-6a-1b
    location: 'Question',
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
    id: 'tutorial3-6b-1a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "As much as yours is \"Jack\".",
    faction: 'Judicator', // Now has knowledge of faction
    textLeft: "What is your real name then?", // ->tutorial3-7
    textRight: "What is my real name then?", // ->tutorial3-7
    location: 'Question',
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
    id: 'tutorial3-7',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "I'm sorry but that's all for question time, we will now continue with the trial.",
    faction: 'Judicator', // All paths now have knowledge of faction.
    textLeft: "But that was even shorter than last time!", // ->tutorial3-8a
    textRight: "You ignored my last question.", // ->tutorial3-8b
    location: 'Question',
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
    id: 'tutorial3-8a',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "Yes, not all time is created equal. Perhaps next time you will be able to ask more questions, or perhaps you asked the wrong ones and your time was cut short.",
    faction: 'Judicator',
    textLeft: "That's not fair.", // ->survey3-9
    textRight: "Whatever", // ->survey3-9
    location: 'Question',
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
    id: 'tutorial3-8b',
    imgUrl: '/decks/tutorial/judicator-blue-smile.png',
    title: 'Jude',
    text: "Perhaps the answer was not worth giving, or I just wasn't listening.",
    faction: 'Judicator',
    textLeft: "Rude", // ->survey-3-9
    textRight: "Awesome", // ->survey-3-9
    location: 'Question',
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
    // Here for the first time I change dialogue based on person's alignment (in helper fn) This message is displayed to all but 3-10 will diverge.
    id: 'tutorial3-9',
    imgUrl: '/decks/tutorial/judicator-blue.png',
    title: 'Jude',
    text: "I understand you have many questions, but I am not the only source of answers. Perhaps I can show you how your actions have already impacted your path.",
    faction: 'Judicator',
    textLeft: "What do you mean?", // ->survey-3-9a
    textRight: "My path?", // ->survey-3-9b
    location: 'Question',
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
    // TODO: continue with diverging paths based on alignment
    id: 'tutorial3-9a',
    imgUrl: '/decks/tutorial/judicator-blue-smile.png',
    title: 'Jude',
    text: "I watch you and listen to your responses. Based on this, I set your alignment (<span style=\"font-weight: bold; background-color: #92d5f0; padding: 2px; border-radius: 4px;\">Good</span> | <span style=\"font-weight: bold; background-color: #f0e19e; padding: 2px; border-radius: 4px;\">Neutral</span> | <span style=\"font-weight: bold; background-color: #ee7070; padding: 2px; border-radius: 4px;\">Evil</span>). Take a look now and if you'd like, I can set your alignment right here and now for you, just tell me what you'd prefer.",
    faction: 'Judicator',
    textLeft: "Good please", // ->survey-3-9a TODO:
    textRight: "I'm feeling mischievous", // ->survey-3-9b
    location: 'Question',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
]);

export default tutorial3;