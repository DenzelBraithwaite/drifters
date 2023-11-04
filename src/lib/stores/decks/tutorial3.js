import { writable } from 'svelte/store';

// TODO add some dialogue at beginning, goes by fast
const tutorial3 = writable([
    {
        id: 'tutorial3-1',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "A magical forest with mythical creatures, now that's an interesting one. Hey there Jack, having fun on your adventure?",
        faction: '???',
        textLeft: "Adventure? You're the one who keeps sending me away and then reappearing out of thin air.", // ->tutorial3-2a
        textRight: "Oh great, it's you again. To what do I owe the... pleasure?", // ->tutorial3-2b
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Am I? I don't think I recall doing anything of the sort.",
        faction: '???',
        textLeft: "Haha very funny.", // ->tutorial3-3-a
        textRight: "Oh yeah, if not you then who?", // ->tutorial3-3-a
        location: 'tutorial',
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
        id: 'tutorial3-3-a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "I'm being serious Jack, I'm not the one who's moving you. I'm not the one who's doing any of this, I'm simply a judicator.",
        faction: '???',
        textLeft: "A judicator? That means you must be judging me... which means I'm likely dead.", // ->tutorial3-4-a
        textRight: "If you're not doing this than who is? Where am I?!?", // ->tutorial3-4-a
        location: 'tutorial',
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
        id: 'tutorial3-4-a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Deep down you know the truth, but you aren't ready to face it. You are dead Jack, and this world is your creation.",
        faction: '???',
        textLeft: "My... creation?", // ->tutorial3-5
        textRight: "You mean I really am...", // ->tutorial3-5
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "The pleasure? Careful now, one might think you're starting to enjoy this place a little too much...",
        faction: '???',
        textLeft: "I can't tell if you can't read my sarcasm or if I can't read yours.", // ->tutorial3-3a
        textRight: "I promise you that won't be an issue. You however, seem to be enjoying yourself quite a bit.", // ->tutorial3-3a
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "I am capable of emotions you know, I'm not some sort of celestial unfeeling robot. In fact, I'm not so different from you.",
        faction: '???',
        textLeft: "Not so different? Have you seen yourself?", // ->tutorial3-4a-a
        textRight: "I highly doubt something like you can understand human emotions, but you do seem capable of sarcasm.", // ->tutorial3-4a-b
        location: 'tutorial',
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
        id: 'tutorial3-4a-a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Have you seen yourself?",
        faction: '???',
        textLeft: "...", // ->tutorial3-5
        textRight: "I know what I look like.", // ->tutorial3-5
        location: 'tutorial',
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
        id: 'tutorial3-4a-b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Oh I'm capable of much more than just sarcasm...",
        faction: '???',
        textLeft: "Was that a threat?", // ->tutorial3-5
        textRight: "...", // ->tutorial3-5
        location: 'tutorial',
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
        id: 'tutorial3-5',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "RIGHT THEN! Ding dong ding dong, it's time for more questions!",
        faction: '???',
        textLeft: "None of this matters, I don't care about your questions, never have.", // ->tutorial3-6a
        textRight: "Wait, can we go back to what we were talking about!", // ->tutorial3-6b
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Oh I assure you this does matter. Have you not been listening to me? Your choices matter.",
        faction: '???',
        textLeft: "It's kind of hard to believe that right now.", // ->tutorial3-7
        textRight: "Maybe to you they do, but not to me.", // ->tutorial3-7
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Go back? There isn't a soul alive who can turn back the hands of time. Instead, you should focus on moving forward.",
        faction: '???',
        textLeft: "Excuse me if I'm feeling a bit lethargic at the moment.", // ->tutorial3-7
        textRight: "Yeah yeah...move forward, I know.", // ->tutorial3-7
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Feeling down are we? Nothing a few more fun questions can't fix! Now, as always it's important that you answer honestly and don't think too hard. Just pick the first one that speaks to you.",
        faction: '???',
        textLeft: "Let's just get this over with.", // ->tutorial3-8a
        textRight: "You don't need to tell me that every time.", // ->tutorial3-8b
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Your enthusiasm is delightfully refreshing as always. Alright, it's time to begin!",
        faction: '???',
        textLeft: "Begin", // ->survey3-1
        textRight: "Hey, before we start, can I ask you something? Is your name really 'Jude'?", // ->tutorial3-9
        location: 'tutorial',
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
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "And you don't need to tell me how to do my job.",
        faction: '???',
        textLeft: "Begin", // ->survey3-1
        textRight: "Begin", // ->survey3-1
        location: 'tutorial',
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
        id: 'tutorial3-9',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "About as much as your name is Jack.",
        faction: '???',
        textLeft: "Begin", // ->survey3-1
        textRight: "What's the real purpose of these questions?", // ->tutorial3-10
        location: 'tutorial',
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
        id: 'tutorial3-10',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Wouldn't you like to know...",
        faction: '???',
        textLeft: "Begin", // ->survey3-1
        textRight: "Begin", // ->survey3-1
        location: 'tutorial',
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