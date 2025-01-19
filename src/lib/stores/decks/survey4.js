import { writable } from 'svelte/store';

const survey4 = writable([
    {
        id: 'survey4-1',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Answer time, which profession would you prefer?",
        faction: 'Judicator',
        textLeft: "Fisherman", // ->survey4-2
        textRight: "Butcher", // ->survey4-2
        actionLeft: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-2',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Choose one",
        faction: 'Judicator',
        textLeft: "Speed", // ->survey4-3
        textRight: "Strength", // ->survey4-3
        actionLeft: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-3',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Hmm, interesting. If you were stuck on an island with no food, how would you proceed?",
        faction: 'Judicator',
        textLeft: "Eating other survivors.", // ->survey4-4
        textRight: "Letting other survivors eat me.", // ->survey4-4
        actionLeft: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 1
        },
        actionRight: {
            knife: 0,
            cleaver: 1,
            good: 1,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-4',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Knife or Cleaver?",
        faction: 'Judicator',
        textLeft: "Knife", // ->survey4-5
        textRight: "Cleaver", // ->survey4-5
        actionLeft: {
            knife: 2,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 2,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-5',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "If you had to put an animal out of its misery, how would you do it?",
        faction: 'Judicator',
        textLeft: "Quick and painless", // ->survey4-6
        textRight: "Slow and painful", // ->survey4-6
        actionLeft: {
            knife: 1,
            cleaver: 0,
            good: 1,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 1
        },
        location: 'Answer'
    },
    {
        id: 'survey4-6',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Is it better to remember or to forget?",
        faction: 'Judicator',
        textLeft: "Remember", // ->survey4-7
        textRight: "Forget", // ->survey4-7
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-7',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Are you a creature of solitude or a social animal?",
        faction: 'Judicator',
        textLeft: "Solitude", // ->survey4-8
        textRight: "Social", // ->survey4-8
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 1,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-8',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Did you believe my story?",
        faction: 'Judicator',
        textLeft: "Yes, I did.", // ->survey4-9
        textRight: "Not really", // ->survey4-9
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 1,
            evil: 0
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 1
        },
        location: 'Answer'
    },
    {
        id: 'survey4-9',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Can murder ever be justified?",
        faction: 'Judicator',
        textLeft: "Yes, but it depends.", // ->survey4-10
        textRight: "No, never.", // ->survey4-10
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 1,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-10',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Would you cover for your closest friend, even if they were absolutely in the wrong but relied on you?",
        faction: 'Judicator',
        textLeft: "I got their back no matter what.", // ->survey4-11
        textRight: "Even if they are family, wrong is wrong.", // ->survey4-11
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 1,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-11',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Which would you rather keep.",
        faction: 'Judicator',
        textLeft: "Instincts", // ->survey4-12
        textRight: "Common sense", // ->survey4-12
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-12',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Almost done, just a few more. If the only way to leave this place was to trap another, would you leave or stay?",
        faction: 'Judicator',
        textLeft: "I'd feel guilty, but I'd leave.", // ->survey4-13
        textRight: "Stay forever.", // ->survey4-13
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 1
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 1,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-13',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "If we could trade places, would you want to?",
        faction: 'Judicator',
        textLeft: "Yes", // ->survey4-14
        textRight: "No", // ->survey4-14
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-14',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Are you impulsive or thoughtful?",
        faction: 'Judicator',
        textLeft: "Impulsive", // ->survey4-15
        textRight: "Thoughtful", // ->survey4-15
        actionLeft: {
            knife: 0,
            cleaver: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 1,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-15',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Very impressive Jack, that was our fastest answer time yet!",
        faction: 'Judicator',
        textLeft: "Thank you?", // ->survey4-16
        textRight: "Thank you.", // ->survey4-16
        actionLeft: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 1
        },
        actionRight: {
            knife: 0,
            cleaver: 0,
            good: 1,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-16',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Are you ready for the final choice time?",
        faction: 'Judicator',
        textLeft: "Final?", // ->survey4-16-1a
        textRight: "Yes", // ->survey4-17
        actionLeft: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-16-1a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Yes, Jack. We're coming to the end of our time together. This was also our final answer time, I hope you chose carefully.",
        faction: 'Judicator',
        textLeft: "It was?", // ->survey4-17
        textRight: "I hope so too.", // ->survey4-17
        actionLeft: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Answer'
    },
    {
        id: 'survey4-17',
        imgUrl: '/decks/tutorial/judicator-red-smile.png',
        title: 'Jude',
        text: "Good luck, I'll see you there!",
        faction: 'Judicator',
        textLeft: "You will?", // ->survey4-17
        textRight: "Why are you red again!", // ->survey4-17
        actionLeft: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            knife: 0,
            cleaver: 0,
            good: 0,
            evil: 0
        },
        location: 'Choice'
    },
]);

export default survey4;