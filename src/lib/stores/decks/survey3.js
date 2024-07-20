import { writable } from 'svelte/store';

const survey3 = writable([
    {
        id: 'survey3-1',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Fantastic, question number 1. How good do I look in purple?",
        faction: 'Being',
        textLeft: "Hmmm... not really.", // ->survey3-2a
        textRight: "I'm more interested in why you're purple.", // ->survey3-2b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-2a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Oh, ok. Ouch. Imagine you hear screaming, you realize your daughter and niece are both caught in a strong current and might be swept out to sea. Your niece is a weak swimmer and won't last as long as your daughter. Although you're a strong swimmer, you might not have time to save both. Which do you save?",
        faction: 'Being',
        textLeft: "Save my daughter, I can't stand the thought of losing her.", // ->survey3-3a
        textRight: "Save my niece and hope my daughter can hold on long enough.", // ->survey3-3b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-2b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Why indeed. Imagine you hear screaming, you realize your daughter and niece are both caught in a strong current and might be swept out to sea. Your niece is a weak swimmer and won't last as long as your daughter. Although you're a strong swimmer, you might not have time to save both. Which do you save?",
        faction: 'Being',
        textLeft: "Save my daughter, I can't stand the thought of losing her.", // ->survey3-3a
        textRight: "Save my niece and hope my daughter can hold on long enough.", // ->survey3-3b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-3a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Really? You won't even try to save your niece? Very interesting. What if your close friend asked for an investment of $500 but wouldn't tell you why. They might be doing something illegal, but you'll safely make a profit without any risk.",
        faction: 'Being',
        textLeft: "It seems sketchy, but I would give it to them and hope that they know what they're doing.", // ->survey3-4a
        textRight: "It would be tempting, but I would refuse. I don't want to get involved in shady deals.", // ->survey3-4b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-3b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You'd abandon your own daughter simply because she's a stronger swimmer? Very interesting. What if your close friend asked for an investment of $500 but wouldn't tell you why. They might be doing something illegal, but you'll safely make a profit without any risk.",
        faction: 'Being',
        textLeft: "It seems sketchy, but I would give it to them and hope that they know what they're doing.", // ->survey3-4a
        textRight: "It would be tempting, but I would refuse. I don't want to get involved in shady deals.", // ->survey3-4b
        actionLeft: {
            brain: 0,
            smiley: 1
        },
        actionRight: {
            brain: 1,
            smiley: 0
        },
        location: 'survey'
    },
    {
        id: 'survey3-4a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Risk it all for a quick buck is that right? I'm learning so much about you Jack. Next, pick one.",
        faction: 'Being',
        textLeft: "Brain", // ->survey3-5
        textRight: "Mouth", // ->survey3-5
        actionLeft: {
            brain: 2,
            smiley: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            brain: 0,
            smiley: 2,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey3-4b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Afraid to take a leap of faith? I'm starting to understand you now Jack. Next, pick one.",
        faction: 'Being',
        textLeft: "Brain", // ->survey3-5
        textRight: "Mouth", // ->survey3-5
        actionLeft: {
            brain: 2,
            smiley: 0
        },
        actionRight: {
            brain: 0,
            smiley: 2
        },
        location: 'survey'
    },
    {
        id: 'survey3-5',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "I figured you'd pick that, here's another.",
        faction: 'Being',
        textLeft: "Beauty", // ->survey3-6a
        textRight: "Books", // ->survey3-6b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-6a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "To lure and dazzle those surrounding you, what a dream. They say some of the most attractive people are sometimes the most irrational. What do you think about that?",
        faction: 'Being',
        textLeft: "Sanity over insanity of course.", // ->survey3-7a
        textRight: "Sometimes, insanity is the sane decision.", // ->survey3-7b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-6b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Fancy yourself a scholar do you? They say some of the brightest minds are the most detached from reality. What do you think about that?",
        faction: 'Being',
        textLeft: "Sanity over insanity of course.", // ->survey3-7a
        textRight: "Sometimes, insanity is the sane decision.", // ->survey3-7b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-7a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "The obvious answer, the bare minimum to function in society. It's been said life and death are two sides of the same coin. Which side do you prefer?",
        faction: 'Being',
        textLeft: "Life", // ->survey3-8a
        textRight: "Death", // ->survey3-8b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-7b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "Chaos deserves company every once in a while, right? It's been said life and death are two sides of the same coin. Which side do you prefer?",
        faction: 'Being',
        textLeft: "Life", // ->survey3-8a
        textRight: "Death", // ->survey3-8b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-8a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "You would choose life wouldn't you. Here's a fun one, which super power would you prefer?",
        faction: 'Being',
        textLeft: "Control Time", // ->survey3-9a
        textRight: "Control people", // ->survey3-9b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-8b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "You would choose death wouldn't you. Here's a fun one, which super power would you prefer?",
        faction: 'Being',
        textLeft: "Control Time", // ->survey3-9a
        textRight: "Control people", // ->survey3-9b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-9a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "I wonder what you would do with all of that extra time? Here's the final question, would you like to take a look at yourself and see what you look like?",
        faction: 'Being',
        textLeft: "Yes", // ->survey3-10a
        textRight: "No", // ->survey3-10b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-9b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title:'Jude',
        text: "What questionably ominous plans do you have in store for a power like that? Here's the final question, would you like to take a look at yourself and see what you look like?",
        faction: 'Being',
        textLeft: "Yes", // ->survey3-10a
        textRight: "No", // ->survey3-10b
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-10a',
        imgUrl: '/characters/jack-judicator.png',
        title:'Jack',
        text: "This is what you currently look like, are you shocked? When we speak you'll have the option to look at yourself and see how you've changed since you've been here. Full disclosure, you're still looking at me. I'm just showing you the current state of your soul.",
        faction: 'Being',
        textLeft: "I don't recognize this at all.", // ->survey3-11
        textRight: "Is that... really me?", // ->survey3-11
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-10b',
        imgUrl: '/characters/kaz.png',
        title:'Kaz',
        text: "Hey there! I'm surprised you didn't want to see yourself, are you scared of what you might see? Maybe you just weren't curious? Well congrats, you found the first easter egg due to your lack of interest. Hope you're enjoying the game so far and the story is starting to intrigue you. Anyway, enjoy and thanks for playing ^_^!",
        faction: 'Creator',
        textLeft: "The game is awesome.", // ->survey3-11
        textRight: "The game sucks tbh.", // ->survey3-10b-pt2
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-10b-pt2',
        imgUrl: '/characters/kaz-fu.png',
        title:'Kaz',
        text: "( ° ͜ʖ͡°)╭∩╮",
        faction: 'You suck tbh',
        textLeft: "Actually I take it back, I'm the one who sucks.", // ->survey3-11
        textRight: "Actually I take it back, I'm the one who sucks a lot.", // ->survey3-11
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-11',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "It's alright if you don't recognize yourself yet, it will take some time before you get used to it.",
        faction: 'Psst, welcome back to those who found the easter egg.',
        textLeft: "If you say so.", // ->survey3-12
        textRight: "I hope so.", // ->survey3-12
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
        },
        location: 'survey'
    },
    {
        id: 'survey3-12',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "It's time for me to disappear again, but I'll be back later. Remember to keep an eye on your mementos and don't worry too much about the whole being dead thing.",
        faction: 'Being',
        textLeft: "Not much I can do about it anyways", // ->chapter4-1
        textRight: "Advice of the year, gee thanks.", // ->chapter4-1
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
        },
        location: 'survey'
    },
]);

export default survey3;