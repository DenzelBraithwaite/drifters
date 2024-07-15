import { writable } from 'svelte/store';

const tutorial2 = writable([
    {
        id: 'tutorial2-1',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: 'Hello again, how have things been going since we last spoke? You seem to be handling yourself quite well in here.',
        faction: '???',
        textLeft: "I'm making do with what little I know, thanks to you.", // ->tutorial2-2a
        textRight: "I still have no idea what I'm doing here.", // ->tutorial2-2b
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
        id: 'tutorial2-2a',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Yes you always were so... resourceful. Well don't let me keep you from all the fun, I just wanted to ask you a few more questions.",
        faction: '???',
        textLeft: "Then why even bother asking?", // ->tutorial2-3
        textRight: "Again with the questions, what do you want to know this time?", // ->tutorial2-3
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
        id: 'tutorial2-2b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "As I've said before, that's to be expected and you shouldn't go searching your brain for memories, instead let the memories come to you. Now, I have a few more questions for you if you'd be so kind as to indulge me.",
        faction: '???',
        textLeft: "Lovely, more confusing questions. Let's get this over with.", // ->tutorial2-3
        textRight: "I'm sick and tired of your games, I don't want to answer your stupid questions.", // ->tutorial2-3
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
        id: 'tutorial2-3',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Don't you worry, we'll be done before you know it! The important thing is to remember your decisions have meaning.",
        faction: '???',
        textLeft: "What meaning? You keep saying that but you never explain.", // ->tutorial2-4a
        textRight: 'I could care less whether they meant anything, I just want to leave.', // ->tutorial2-4b
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
        id: 'tutorial2-4a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "As I've said before, you needn't worry about remembering or making sense of your situations, you just need to go with the flow.",
        faction: "???",
        textLeft: "What flow? This is more like a sick game that you seem to be enjoying a great deal.", // ->tutorial2-5
        textRight: "Yeah that's easy enough for you to say, you don't know what this is like.", // ->tutorial2-5
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
        id: 'tutorial2-4b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "If you want to leave then you'd do well to take my advice and simply continue along this path.",
        faction: '???',
        textLeft: "Just because you got bored and decided to paint a path for me, doesn't mean I have to follow it.", // ->tutorial2-5
        textRight: "I think I've had enough of listening to you, why should I trust the one who's the reason for all of this?", // ->tutorial2-5
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
        id: 'tutorial2-5',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "...",
        faction: '???',
        textLeft: "What, gone quiet all of a sudden?", // ->tutorial2-6
        textRight: "Speechless? That's a first.", // ->tutorial2-6
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
        id: 'tutorial2-6',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "You really don't remember anything do you?",
        faction: '???',
        textLeft: "That's what I've been trying to tell you!", // ->tutorial2-7
        textRight: "Nothing at all...", // ->tutorial2-7
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
        id: 'tutorial2-7',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "I almost feel sorry for you, but then again, we wouldn't be in this mess if it wasn't for you.",
        faction: '???',
        textLeft: "Me?", // ->tutorial2-8
        textRight: "What?", // ->tutorial2-8
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
        id: 'tutorial2-8',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Look... just answer the questions and talk to the people you meet and I promise you, this will all be over soon.",
        faction: '???',
        textLeft: "But why can't you just tell me! Why do you act as if you have no say in the matter?", // ->tutorial2-9a
        textRight: "What happens if I don't?", // ->tutorial2-9b
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
        id: 'tutorial2-9a',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "You think you're asking the right questions, but finding that out won't help you any. Now then, it's time for more questions.",
        faction: '???',
        textLeft: "I hope I don't live to regret this.", // ->tutorial2-10
        textRight: "Any answer worth seeking is a question worth asking.", // ->tutorial2-10
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
        id: 'tutorial2-9b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "If you don't? Why don't you tell me.",
        faction: '???',
        textLeft: "How could I possibly know?", // ->tutorial2-10
        textRight: "I can't tell you what I don't know.", // ->tutorial2-10
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
        id: 'tutorial2-10',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Haha right... anyway, the questions will begin now but don't overthink it. Remember to just answer HONESTLY, ok?",
        faction: '???',
        textLeft: "Fine, but we will meet again.", // ->survey2-1
        textRight: "Let's get on with it then.", // ->survey2-1
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

export default tutorial2;