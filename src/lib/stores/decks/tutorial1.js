import { writable } from 'svelte/store';

const tutorial1 = writable([
    {
        id: 'tutorial1-1',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "You're awake... Welcome drifter, how do you feel?",
        faction: '???',
        textLeft: "Where am I?", // ->tutorial1-2
        textRight: 'What is this?', // ->tutorial1-2
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
        id: 'tutorial1-2',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Don't worry, it's perfectly natural for you to have forgotten everything. In time, you will remember.",
        faction: '???',
        textLeft: "Remember?", // ->tutorial1-3
        textRight: "I don't understand", // ->tutorial-3
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
        id: 'tutorial1-3',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Forcing it now would be a wasted effort. Don't worry if you're still confused, it's all part of the process.",
        faction: '???',
        textLeft: "What process?", // ->tutorial-4a
        textRight: "I don't want to be here anymore, please let me leave.", // ->tutorial-4b
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
        id: 'tutorial1-4a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Don't worry about the process, let the process worry about you and you'll be out of here in no time. But first things first, you'll need to make a lot of decisions. You've made decisions before right?",
        faction: '???',
        textLeft: "I never decided to be here.", // ->tutorial-5
        textRight: 'What kind of question is that, everyone has made a decision before.', // ->tutorial-5
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
        id: 'tutorial1-4b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'???',
        text: "Don't worry you'll be out of here in no time, but first things first, you'll need to make a lot of decisions. You've made decisions before... right?",
        faction: '???',
        textLeft: "I never decided to be here.", // ->tutorial-5
        textRight: 'What kind of question is that, everyone has made a decision before.', // ->tutorial-5
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
        id: 'tutorial1-5',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Well sometimes you get to make decisions, but sometimes they're made for you.",
        faction: '???',
        textLeft: "Okay... is there a reason you're telling me this?", // ->tutorial-6a
        textRight: 'This all seems very suspicious...', // ->tutorial-6b
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
        id: 'tutorial1-6a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Is there a reason for any of this? I guess you'll have to determine that for yourself. Are you ready now?",
        faction: '???',
        textLeft: "Ready for what? You haven't told me anything yet.", // ->tutorial-7
        textRight: 'Wait slow down, I have so many questions!', // ->tutorial-7
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
        id: 'tutorial1-6b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'???',
        text: "Suspicion always haunts the guilty mind. Are you ready?",
        faction: '???',
        textLeft: "What's that supposed to mean...", // ->tutorial-7
        textRight: 'Only one way to find out.', // ->tutorial-7
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
        id: 'tutorial1-7',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'???',
        text: "Fantastic then let's begi- oh! I almost forgot, there's something you need to do first.",
        faction: '???',
        textLeft: "And that is?", // ->tutorial-8a
        textRight: 'What if I refuse?', // ->tutorial-8b
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
        id: 'tutorial1-8a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Someone doesn't like surprises, it's just a few quick harmless questions that's all. Really, don't read too much into it.",
        faction: '???',
        textLeft: "I wasn't until you said that.", // ->tutorial-9
        textRight: 'Fine, if it will help me get out of here.', // ->tutorial-9
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
        id: 'tutorial1-8b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Are you really sure you want to do that? Come now, it's just a few quick and harmless questions, you'll be fine.",
        faction: '???',
        textLeft: "I'm no stranger to threats, fine I'll answer your stupid questions.", // ->tutorial-9
        textRight: "Let's just get this over with.", // ->tutorial-9
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
        id: 'tutorial1-9',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Oh, and not that you asked... but you can call me Jude. Do you remember your name?",
        faction: '???',
        textLeft: "Jude, really? And no, I'm trying but I can't seem to remember.", // ->tutorial-10
        textRight: "...", // ->tutorial-10
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
        id: 'tutorial1-10',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Fantastic... Don't worry that's normal. For now let's just keep it simple and call you Jack, unless there's another name you'd prefer?",
        faction: '???',
        textLeft: "Jack? Doesn't really seem to suit me but I guess that's fine until I can remember my actual name.", // ->survey-1
        textRight: "I may not know my name but it certainly isn't Jack.", // ->survey-1
        location: 'tutorial',
        actionLeft: {
            good: 0,
            evil: 0,
        },
        actionRight: {
            good: 0,
            evil: 0,
        }
    }
]);

export default tutorial1;