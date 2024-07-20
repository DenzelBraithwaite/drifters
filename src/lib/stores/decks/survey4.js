import { writable } from 'svelte/store';

const survey4 = writable([
    {
        id: 'survey4-1',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title:'Jude',
        text: "Fantastic, question number 1. How good do I look in purple?",
        faction: 'Being',
        textLeft: "Hmmm... not really.", // ->survey4-2a
        textRight: "I'm more interested in why you're purple.", // ->survey4-2b
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

]);

export default survey4;