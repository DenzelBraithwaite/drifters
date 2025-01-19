import { writable } from 'svelte/store';

const survey1 = writable([
    {
        id: 'survey1-1',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Let's begin, do you prefer status or influence?",
        faction: '???',
        textLeft: "Status", // Survey1-2a
        textRight: 'Influence', // Survey1-2b
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 1,
            evil: 0
        }
    },
    {
        id: 'survey1-2a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You must like attention, do you prefer comfort or sacrifice?",
        faction: '???',
        textLeft: "Comfort", // ->survey1-3a
        textRight: "Sacrifice", // ->survey1-3b
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 1,
            evil: 0
        }
    },
    {
        id: 'survey1-2b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You must like power, do you prefer comfort or sacrifice?",
        faction: '???',
        textLeft: "Comfort", // ->survey1-3a
        textRight: "Sacrifice", // ->survey1-3b
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 1,
            evil: 0
        }
    },
    {
        id: 'survey1-3a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You must put yourself before others. Would you rather a tattoo of a heart or diamond?",
        faction: '???',
        textLeft: "Heart", // ->survey1-4
        textRight: "Diamond", // ->survey1-4
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-3b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You'd put others before yourself? Would you rather a tattoo of a heart or diamond?",
        faction: '???',
        textLeft: "Heart", // ->survey1-4
        textRight: "Diamond", // ->survey1-4
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-4',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Interesting, now what if you only had time for one of these two actions, which would you choose?",
        faction: '???',
        textLeft: "Save a stranger from a fire, but they won't show any gratitude.", // Survey1-5a
        textRight: "Steal a rich person's wallet, filled with cash and no chance of being caught.", // Survey1-5b
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 1,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        }
    },
    {
        id: 'survey1-5a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "What a saint, perhaps you should start answering honestly. What's your favorite animal?",
        faction: '???',
        textLeft: "Dog", // ->survey1-6a
        textRight: "Cat", // ->survey1-6b
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-5b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "How honest of you, what's your favorite animal?",
        faction: '???',
        textLeft: "Dog", // ->survey1-6a
        textRight: "Cat", // ->survey1-6b
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-6a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "I prefer cats myself. Would you rather have a pet snake or spider?",
        faction: '???',
        textLeft: "Snake", // ->survey1-7
        textRight: "Spider", // ->survey1-7
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-6b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "I also prefer cats, what about snakes and spiders?",
        faction: '???',
        textLeft: "Yes", // ->survey1-7
        textRight: "No", // ->survey1-7
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-7',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "I'm starting to get to know you better, Jack. Answer time is almost over, would you rather be feared or loved?",
        faction: '???',
        textLeft: "Feared", // ->survey1-8a
        textRight: "Loved", // ->survey1-8b
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 1,
            evil: 0
        }
    },
    {
        id: 'survey1-8a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "No one dare stand in your way. Choose one:",
        faction: '???',
        textLeft: "Love", // ->survey1-9
        textRight: "Friendship", // ->survey1-9
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-8b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Does that mean you wish you were loved? Choose one:",
        faction: '???',
        textLeft: "To love", // ->survey1-9
        textRight: "To be loved", // ->survey1-9
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 1,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 1
        }
    },
    {
        id: 'survey1-9',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Is that so, what about:",
        faction: '???',
        textLeft: "Waking up", // ->survey1-10a
        textRight: "Falling asleep", // ->survey1-10b
        location: 'Answer',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-10a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Yes, why waste the day away? Last question, are you ready?",
        faction: '???',
        textLeft: "Yes", // ->survey1-11
        textRight: "No", // ->survey1-11
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 1,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 1
        }
    },
    {
        id: 'survey1-10b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You rather dream than live your life? Last question, are you ready?",
        faction: '???',
        textLeft: "Yes", // ->survey1-11
        textRight: "No", // ->survey1-11
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 1,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 1
        }
    },
    {
        id: 'survey1-11',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Are you alive?",
        faction: '???',
        textLeft: "Of course I am.", // ->survey1-12
        textRight: "I'm afraid to answer.", // ->survey1-12
        location: 'Answer',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-12',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Trust me, whether you're alive or dead isn't important. All that's important is that you regain your memories before it's too late.",
        faction: '???',
        textLeft: "It's important to me", // ->survey1-13a
        textRight: "What happens if I wait too long?", // ->survey1-13b
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-13a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "What seemed important before may no longer be, I urge you to focus on the mementos Jack, collect them all and everything will reveal itself.",
        faction: '???',
        textLeft: "Mementos, got it.", // ->survey1-14
        textRight: "I guess I'm dead after all.", // ->survey1-14
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-13b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Those who don't recover their mementos, drift forever. But don't worry about fates not belonging to you, focus on the ones you can change.",
        faction: '???',
        textLeft: "Mementos, got it.", // ->survey1-14
        textRight: "Drift?", // ->survey1-13b-1b
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-13b-1b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "There are many drifters, Jack. Lost souls who never recovered their sense of self and abandoned all memories. Protect the mementos and you have nothing to fear.",
        faction: '???',
        textLeft: "Mementos, got it.", // ->survey1-14
        textRight: "I guess I'm dead after all.", // ->survey1-14
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-14',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "One last thing Jack, I mentioned that you will have many experiences and only when you relive them all will you truly regain your memories. However, I can perceive your deviating paths all at once.",
        faction: '???',
        textLeft: "I don't understand.", // ->survey1-15a
        textRight: "Makes perfect sense to me.", // ->survey1-15b
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 1,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 1
        }
    },
    {
        id: 'survey1-15a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Allow me to explain the best I can. Perhaps you feel as if you just woke up in a strange place, but it's possible this isn't your first time being here. I'm able to see all the decisions you've ever and will ever make.",
        faction: '???',
        textLeft: "Are you a god?", // ->survey1-15a-1a
        textRight: "So you can see the future?", // ->survey1-15a-1b
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-15a-1a',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "A god? No, nothing like that. We're a lot more alike than you realize, Jack. I'm just a guide, a witness to your journey.",
        faction: '???',
        textLeft: "Sounds like a god to me.", // ->survey1-16
        textRight: "A witness, okay then.", // ->survey1-16
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-15a-1b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Not quite, more like I'm talking to all of you at once.",
        faction: '???',
        textLeft: "Oh, okay then.", // ->survey1-16
        textRight: "...", // ->survey1-16
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-15b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Oh, it does? Well then, I won't bore you with the explanation then.",
        faction: '???',
        textLeft: "No wait, I was joking!", // ->survey1-15a
        textRight: "Sure, sounds good.", // ->survey1-16
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey1-16',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Oh look, it's choice time! Good luck, I'll be watching.",
        faction: '???',
        textLeft: "Wait, where are you going?", // ->chapter1
        textRight: "Oh, ok bye!", // ->chapter1
        location: 'Chatter',
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        }
    },

]);

export default survey1;