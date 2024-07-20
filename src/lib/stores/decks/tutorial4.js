import { writable } from 'svelte/store';

// TODO: in future jude will change colors probably, for now don't comment on color in dialogue, can be added later
const tutorial4 = writable([
    {
        id: 'tutorial4-1',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "We're getting close now aren't we, it's almost time.",
        faction: 'Being',
        textLeft: "Oh great, you're back. I told you I still had questions!", // ->tutorial4-2a
        textRight: "Close to what?", // ->tutorial4-2b
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
        id: 'tutorial4-2a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Still with the questions? I thought you would've given up by now.",
        faction: 'Being',
        textLeft: "Not until I get my answers!", // ->tutorial4-2a-1a
        textRight: "Fine, have it your way.", // ->tutorial4-3
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
        id: 'tutorial4-2b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Your memories Jack, can't you feel them returning?",
        faction: 'Being',
        textLeft: "Not really, I'm just as confused as when I got here.", // ->tutorial4-3
        textRight: "Maybe if you answered some of my questions...", // ->tutorial4-3
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
        id: 'tutorial4-2a-1a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Alright Jack I'll give you one question, ask anything you want.",
        faction: 'Being',
        textLeft: "Why am I here?", // ->tutorial4-2a-2a
        textRight: "What are the mementos?", // ->tutorial4-2a-2b
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
        id: 'tutorial4-2a-2a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "You're here because you died but weren't ready to move on. Your soul has split and we need to determine which half is the dominant side.",
        faction: 'Being',
        textLeft: "What are the two halves, good and evil?", // ->tutorial4-3
        textRight: "Then what about the other people here?", // ->tutorial4-3
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
        id: 'tutorial4-2a-2b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "They represent people, in fact the people they represent can be found in this world. If you have their memento, they will appear.",
        faction: 'Being',
        textLeft: "What's so important about them?", // ->tutorial4-3
        textRight: "Does someone have my memento?", // ->tutorial4-3
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
        id: 'tutorial4-3',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "I promise, soon you won't need to ask any questions. You're so close, you just need to be patient and everything will be revealed.",
        faction: 'Being',
        textLeft: "If I had any other choice I wouldn't be listening to you, but I don't.", // ->tutorial4-4a
        textRight: "You keep saying that, I'm starting to think I'll be drifting forever.", // ->tutorial4-4b
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
        id: 'tutorial4-4a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "In a world where all you do is make choices, you feel as if your decisions have no impact? You cannot see what's happening before your eyes.",
        faction: 'Being',
        textLeft: "Again with the riddles, that doesn't help me one bit.", // ->tutorial4-4a-1a
        textRight: "I make decisions but my situation never changes, I'm still lost here like everyone else.", // ->tutorial4-4b-1a
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
        id: 'tutorial4-4a-1a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Perhaps you need to help yourself.",
        faction: 'Being',
        textLeft: "I've been trying to do that.", // ->tutorial4-5
        textRight: "Perhaps I need you to help me.", // ->tutorial4-5
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
        id: 'tutorial4-4b-1a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "You may be lost here but you aren't like everyone else. You are however, like some of our \"guests\" here, hehe.",
        faction: 'Being',
        textLeft: "Why did you say \"guest\" like that?", // ->tutorial4-5
        textRight: "I'm not like everyone else?", // ->tutorial4-5
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
        id: 'tutorial4-4b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Nobody drifts forever, Jack. Although, there are those who drift for a long time. You've been drifting for only a moment, you're here for a reason, you just need to find it.",
        faction: 'Being',
        textLeft: "Sometimes it feels like you're on my side after all.", // ->tutorial4-4b-1a
        textRight: "That's as reassuring as it is discouraging.", // ->tutorial-4-4b-1b
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
        id: 'tutorial4-4b-1a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "I'm not on any side Jack, I'm simply here to guide you. Whether I benefit from your choices isn't your concern.",
        faction: 'Being',
        textLeft: "And now I'm back to thinking you're not on my side.", // ->tutorial4-5
        textRight: "Well, if we can all benefit from my choices, that's a win in my books.", // ->tutorial4-5
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
        id: 'tutorial4-4b-1b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Is it? I suppose you're a cup half full and empty kind of guy.",
        faction: 'Being',
        textLeft: "Very funny", // ->tutorial4-5
        textRight: "I'm realistic", // ->tutorial4-5
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
        id: 'tutorial4-5',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Perhaps it's best we don't waste time on idle chatter. After all, we both have a job to do.",
        faction: 'Being',
        textLeft: "Let me guess, you're going to ask me questions?", // ->tutorial4-6a
        textRight: "Can we skip the questions this time?", // -> tutorial4-6b
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
        id: 'tutorial4-6a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Well aren't you clever, looks like you've got me all figured out. Tell you what, why don't you ask me questions this time?",
        faction: 'Being',
        textLeft: "Seriously?", // ->tutorial4-7
        textRight: "That's what I've wanted this whole time!", // ->tutorial4-7
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
        id: 'tutorial4-6b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Skip the questions? Sure, no problem. Tell you what, why don't you ask me questions this time, that way you can have a little break.",
        faction: 'Being',
        textLeft: "Seriously?", // ->tutorial4-7
        textRight: "That's what I've wanted this whole time!", // ->tutorial4-7
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
        id: 'tutorial4-7',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Of course I'm joking, these questions are important and if you ever want to leave this place, you'll need to answer them all and answer them honestly.",
        faction: 'Being',
        textLeft: "Humor doesn't suit you.", // ->tutorial4-8a
        textRight: "I am answering honestly, so let's hurry up and get this over with.", // ->tutorial4-8b
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
        id: 'tutorial4-8a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Humor is not special gifts reserved for the funny. Same rules as always, I'll ask you some questions and you answer them. Afterwards, you'll receive your final momento!",
        faction: 'Being',
        textLeft: "Final? What happens the next time we speak then?", // ->tutorial4-9a
        textRight: "Does that mean I won't see you again?", // ->tutorial4-9b
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
        id: 'tutorial4-8b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Impatient as always, Jack. Same rules as always, I'll ask you some questions and you answer them. Afterwards, you'll receive your final momento!",
        faction: 'Being',
        textLeft: "\"Final\" sounds pretty ominous, Jude.", // ->tutorial4-9a
        textRight: "Does that mean you're leaving me soon?", // ->tutorial4-9b
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
        id: 'tutorial4-9a',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Final is just the last stage in a continuous cycle. New beginnings are old endings, nothing lasts forever Jack, especially when it's taken from you.",
        faction: 'Being',
        textLeft: "Taken?", // ->tutorial4-10
        textRight: "What do you mean by that?", // ->tutorial4-10
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
        id: 'tutorial4-9b',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "Going to miss me, Jack? There were others asking questions before I arrived and there will be more after me. I'm still here for a little while longer Jack, we both are.",
        faction: 'Being',
        textLeft: "Others before and after?", // ->tutorial4-10
        textRight: "Do we leave at the same time?", // ->tutorial4-10
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
        id: 'tutorial4-10',
        imgUrl: '/decks/tutorial/judicator-purple.png',
        title: 'Jude',
        text: "You'll understand soon enough, Jack. Now, let's get started.",
        faction: 'Being', 
        textLeft: "Begin", // ->tutorial4-11
        textRight: "Can you at least tell me my real name before we continue?", // ->tutorial4-10-1a
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
        id: 'tutorial4-10-1a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Honestly, we call all of our \"guests\" here Jack, until they remember their names. The visitors however, are allowed to keep their names.",
        faction: 'Being',
        textLeft: "What's the difference between a visitor and a guest?", // ->tutorial4-10-2a
        textRight: "That doesn't answer the question, what is my name?", // ->tutorial4-10-2b
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
        id: 'tutorial4-10-2a',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "This world contains a mixture of \"visitors\" and \"guests\". Visitors are those who were forced to come here by accident, while guests are those who have been invited. You are a guest, Jack.",
        faction: 'Being',
        textLeft: "Why was I invited, what makes the guests so special?", // ->tutorial4-11
        textRight: "You said the visitors were forced but the guests were invited, so why don't I remember accepting an invitation.", // ->tutorial4-11
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
        id: 'tutorial4-10-2b',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "Well, to be honest, I don't actually know your real name. I wasn't lying when I told you you'll need to remember it yourself.",
        faction: 'Being',
        textLeft: "I guess you're not all knowing after all. Are you just stuck here like I am?", // ->tutorial4-11
        textRight: "I don't believe that, tell me what my name is!", // ->tutorial4-11
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
        id: 'tutorial4-11',
        imgUrl: '/decks/tutorial/judicator-purple-smile.png',
        title: 'Jude',
        text: "I'm done answering questions Jack. Let's get started.",
        faction: 'Being',
        textLeft: "But each time we speak you leave me with more!", // ->survey4-1
        textRight: "Wait I have another question.", // ->survey4-1
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

export default tutorial4;