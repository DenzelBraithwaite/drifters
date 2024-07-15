import { writable } from 'svelte/store';

const survey1 = writable([
    {
        id: 'survey1-1',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Fantastic Jack! Yes Jack it is and Jack it must be. Now again, these are just a couple of random questions, just answer honestly alright? And away we go!",
        faction: '???',
        textLeft: "Comply", // Survey1-2a
        textRight: 'Refuse', // Survey1-2b
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-2a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Thank you for your willing cooperation. Moving on, what's more important to you?",
        faction: '???',
        textLeft: "Comfort", // Survey1-3
        textRight: 'Sacrifice', // Survey1-3
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-2b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Hmm... interesting, your decision has been noted. Moving on, what's more important to you?",
        faction: '???',
        textLeft: "Comfort", // Survey1-3
        textRight: 'Sacrifice', // Survey1-3
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-3',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Really? I suppose I should've guessed as much. Alright on to the next one; which do you prefer?",
        faction: '???',
        textLeft: "Hearts", // Survey1-4
        textRight: 'Diamonds', // Survey1-4
        actionLeft: {
            heart: 2,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 2,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-4',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Naturally, what's next now... here we go. You only have time for one, which do you choose?",
        faction: '???',
        textLeft: "Save a stranger from a fire, but they won't show any gratitude.", // Survey1-5a
        textRight: "Steal a rich stranger's wallet filled with cash with no chance of being caught.", // Survey1-5b
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-5a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "How selfless of you, what a saint! Truly, you must be a gift from above. Perhaps you should answer the next one honestly though.",
        faction: '???',
        textLeft: "Left", // Survey1-6
        textRight: "Right", // Survey1-6
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-5b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Hahahaha yes, nicely done. I'm glad you aren't a stranger to yourself. Now for the next one!",
        faction: '???',
        textLeft: "Left", // Survey1-6
        textRight: "Right", // Survey1-6
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-6',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Here's a question, do you think any of your answers have meant anything? Even the last one, did you think that meant something?",
        faction: '???',
        textLeft: "I'd hope so, otherwise this is just one big waste of time.", // Survey1-7a
        textRight: "I'm not sure, probably not? I just want to get out of here.", // Survey1-7b
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-7a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Well they are indeed important, except for that left or right one. Honestly I'm not even sure why that one was in there.",
        faction: '???',
        textLeft: "Are we almost done yet?", // Survey1-8
        textRight: "Is this all a joke or something?", // Survey1-8
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-7b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Bit of a Debbie downer aren't we? You won't last very long with an attitude like that you know.",
        faction: '???',
        textLeft: "Whatever, are we done yet?", // Survey1-8
        textRight: "Don't lecture me when you won't even answer a simple question. What is going on here??", // Survey1-8
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-8',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "So many questions as always, and here I thought I was the one asking the questions. Okay here's the final one, get ready.",
        faction: '???',
        textLeft: "...", // Survey1-9
        textRight: "Ready whenever.", // Survey1-9
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-9',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Who are you?",
        faction: '???',
        textLeft: "I don't remember...", // Survey1-10
        textRight: "Still \"Jack\" for now.", // Survey1-10
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-10',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Fantastic, then it's time. Remember, your decisions have meaning. You aren't alone here, but this is your show... Good luck Jack, hahahaa...",
        faction: '???',
        textLeft: "Wait come back!", // Survey1-11
        textRight: "Wait I'm not alone here?", // Survey1-11
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-11',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Oh- and by the way, I probably should have mentioned this sooner... But every time we speak, you will gain a memento.",
        faction: '???',
        textLeft: "A memento?", // Survey1-12
        textRight: "For what?", // Survey1-12
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-12',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "The mementos are linked to you, you must protect them. If one of them ever becomes fully damaged... Just remember it's important to keep them intact.",
        faction: '???',
        textLeft: "How would they get damaged?", // Survey1-13a
        textRight: "Wait, what happens if one breaks?", // Survey1-13b
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-13a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "It depends on your actions, who you talk to, what you decide to say. Right now you only have one memento to worry about, but soon you will have more... very soon.",
        faction: '???',
        textLeft: "How could me talking to other people damage my mementos?", // Survey1-14
        textRight: "What should I avoid saying then?", // Survey1-14
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-13b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Now where's the fun in telling you that...",
        faction: '???',
        textLeft: "What about this is fun period?", // Survey1-14
        textRight: "Is this a joke to you?", // Survey1-14
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
        },
        location: 'survey'
    },
    {
        id: 'survey1-14',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "That's enough questions for now, don't worry you'll be fine. Or maybe you won't, only one way to know for sure. We will speak again soon Jack, very soon...",
        faction: '???',
        textLeft: "I'm not done yet, I still have more questions.", // Chapter 1
        textRight: "My questions aren't going anywhere, see you soon \"Jude\".", // Chapter 1
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
        },
        location: 'survey'
    }
]);

export default survey1;