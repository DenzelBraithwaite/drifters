import { writable } from 'svelte/store';

const survey2 = writable([
    {
        id: 'survey2-1',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Answer time, Jack. Did you recognize anyone in the village?",
        faction: '???',
        textLeft: "No, I don't think so.", // ->survey2-2a
        textRight: "Some of them felt familiar.", // ->survey2-2b
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-2a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Don't worry, it may take some time. Did you remember anything at all?",
        faction: '???',
        textLeft: "Not really.", // ->survey2-3
        textRight: "Just pieces, nothing solid.", // ->survey2-3
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-2b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Don't worry, it may take some time. Did anything else feel familiar?",
        faction: '???',
        textLeft: "Not really.", // ->survey2-3
        textRight: "Just pieces, nothing solid.", // ->survey2-3
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-3',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Alright, then it is not yet time. Let us begin, pick your favorite seasons.",
        faction: '???',
        textLeft: "Spring and summer", // ->survey2-4a
        textRight: "Fall and winter", // ->survey2-4b
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-4a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "The start of a new cycle, the warmth filling the air. Do you prefer day time or night time?",
        faction: '???',
        textLeft: "Day", // ->survey2-5a
        textRight: "Night", // ->survey2-5b
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-4b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "The end of a cycle, the mixture of new life and death filling the air. Do you prefer day time or night time?",
        faction: '???',
        textLeft: "Day", // ->survey2-5a
        textRight: "Night", // ->survey2-5b
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-5a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Most people do, though many also prefer the night. Let's continue, do you prefer electricity or energy?",
        faction: '???',
        textLeft: "Electricity", // ->survey2-6a
        textRight: "Energy", // ->survey2-6b
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-5b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Many people do, though most prefer the day. Let's continue, do you prefer electricity or energy?",
        faction: '???',
        textLeft: "Electricity", // ->survey2-6a
        textRight: "Energy", // ->survey2-6b
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-6a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Electricity is energy, but I'm sure you knew that and still chose electricity. Let's keep the next one simple, just in case.",
        faction: '???',
        textLeft: "Green", // ->survey2-7
        textRight: "Yellow", // ->survey2-7
        location: 'Answer',
        actionLeft: {
            greenAura: 2,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 2,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-6b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "The obvious choice. Now, pick a color.",
        faction: '???',
        textLeft: "Green", // ->survey2-7
        textRight: "Yellow", // ->survey2-7
        location: 'Answer',
        actionLeft: {
            greenAura: 2,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 2,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-7',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Really? If purple was an option, would you have picked it over green and yellow?",
        faction: '???',
        textLeft: "Yes", // ->survey2-8a
        textRight: "No", // ->survey2-8b
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-8a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Me too, not that it matters. What describes you best?",
        faction: '???',
        textLeft: "I like my quiet time, where I can be alone and pursue my passions and hobbies.", // ->survey2-9a
        textRight: "I like to be around others, being the sun that shines on their rainy day.", // ->survey2-9b
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-8b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Oh, well I would've, not that it matters. What describes you best?",
        faction: '???',
        textLeft: "I like my quiet time, where I can be alone and pursue my passions and hobbies.", // ->survey2-9a
        textRight: "I like to be around others, being the sun that shines on their rainy day.", // ->survey2-9b
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-9a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Yes, you strike me as a bit of a recluse. It seems perhaps you do know yourself after all. Next, pick your favorite option.",
        faction: '???',
        textLeft: "Warm tea in a remote winter village.", // ->survey2-10a
        textRight: "A morning cup of coffee in the backyard.", // ->survey2-10b
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-9b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "How kind and social of you, but are you sure that's how you really feel? Please, pick your favorite option.",
        faction: '???',
        textLeft: "Warm tea in a remote winter village.", // ->survey2-10a
        textRight: "A morning cup of coffee in the backyard.", // ->survey2-10b
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-10a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Sounds calm and relaxing. Let's do a few quick ones before our time is up.",
        faction: '???',
        textLeft: "A cold drink in the middle of a desert.", // ->survey2-11
        textRight: "The calm before the storm.", // ->survey2-11
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-10b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Perfect way to start the day. Let's do a few quick ones before our time is up.",
        faction: '???',
        textLeft: "A cold drink in the middle of a desert.", // ->survey2-11
        textRight: "The calm before the storm.", // ->survey2-11
        location: 'Answer',
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-11',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Choose",
        faction: '???',
        textLeft: "Up", // ->survey2-12
        textRight: "Down", // ->survey2-12
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-12',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Choose",
        faction: '???',
        textLeft: "Fast", // ->survey2-13
        textRight: "Slow", // ->survey2-13
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-13',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Choose",
        faction: '???',
        textLeft: "Travel", // ->survey2-14
        textRight: "Lounge", // ->survey2-14
        location: 'Answer',
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
    {
        id: 'survey2-14',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title: 'Jude',
        text: "You're doing so well, keep going. The next time we speak you'll be halfway through your trial.",
        faction: '???',
        textLeft: "When will that be?", // ->chapter2-1
        textRight: "That means things are getting harder.", // ->chapter2-1
        location: 'Chatter',
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        }
    },
]);

export default survey2;