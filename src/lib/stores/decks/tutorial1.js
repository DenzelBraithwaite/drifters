import { writable } from 'svelte/store';

const tutorial1 = writable([
    {
        id: 'tutorial1-1',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "You're awake... Welcome drifter, how do you feel?",
        faction: '???',
        textLeft: "Where am I?", // ->tutorial1-2
        textRight: 'Tired, what is this place?', // ->tutorial1-2
        location: '???',
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
        text: "That's not important, what's important is that we can understand each other. Do you understand me?",
        faction: '???',
        textLeft: "Yeah, I can understand you.", // ->tutorial1-3
        textRight: "I don't understand, what's going on.", // ->tutorial1-2-1b
        location: '???',
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
        id: 'tutorial1-2-1b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "If you want answers, you will need to clarify. Do you not understand your situation or do you not understand me?",
        faction: '???',
        textLeft: "I'm telling you I have no idea what's going on!", // ->tutorial1-3
        textRight: 'I understand you, so what?', // ->tutorial1-3
        location: '???',
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
        text: "Excellent, I have confirmed that we are capable of understanding each other. Now I will explain the rules and then you will follow them.",
        faction: '???',
        textLeft: "Slow down there bucko, what rules?", // ->tutorial1-4
        textRight: "Why would I follow your rules?", // ->tutorial1-4
        location: '???',
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
        id: 'tutorial1-4',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "<span style=\"color: #6a5c72; font-weight: bold;\">Rule #1:</span><br>There is a time for everything; there is a time for <span style=\"color: #456b73; font-weight: bold;\">questions</span>, a time for <span style=\"color: #456b73; font-weight: bold;\">answers</span>, a time for <span style=\"color: #456b73; font-weight: bold;\">choices</span> and a time for <span style=\"color: #456b73; font-weight: bold;\">chatter</span>. You must respect and abide by these times.",
        faction: '???',
        textLeft: "I don't agree to any of this.", // ->tutorial1-5
        textRight: "Alright, I'd like to leave now.", // ->tutorial1-5
        location: 'Chatter',
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
        text: "Currently, it is time for chatter since I wanted to make sure you were awake and aware. Now that I have, it will soon be time for answers.",
        faction: '???',
        textLeft: "Does that mean I get to ask you questions?", // ->tutorial1-6a
        textRight: "Slow down, I don't have any answers.", // ->tutorial1-6b
        location: 'Chatter',
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
        text: "No, that would be question time. Answer time is where you answer my questions, no matter how arbitrary.",
        faction: '???',
        textLeft: "And if I refuse?", // ->tutorial1-7
        textRight: "What if it's too personal?", // ->tutorial1-7
        location: 'Chatter',
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
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "That's not true at all, but answer time is actually where you answer my questions, you're thinking of question time.",
        faction: '???',
        textLeft: "And if I refuse?", // ->tutorial1-7
        textRight: "What if I only want to participate in question time?", // ->tutorial1-7
        location: 'Chatter',
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
        text: "Participation is always optional, but if you want to regain any of your memories, constant participation is highly recommended. Ready for answer time?",
        faction: '???',
        textLeft: "Sure whatever, let's get this over with.", // ->tutorial1-8
        textRight: "Not really.", // ->tutorial1-7-1b
        location: 'Chatter',
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
        id: 'tutorial1-7-1b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'???',
        text: "Oh, I see. Um, well then, I guess we can just wait until you are. Let me know, no pressure.",
        faction: '???',
        textLeft: "Thanks, I'm ready now.", // ->tutorial1-8
        textRight: "Hmm, still not really feeling it.", // ->tutorial1-7-1b-1b
        location: 'Chatter',
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
        id: 'tutorial1-7-1b-1b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'???',
        text: "Really? Well rest assured, you remain in control here, we won't start until you are absolutely brimming with readiness. Just let me know when that is, again, no rush at all.",
        faction: '???',
        textLeft: "Thanks, I'm ready now.", // ->tutorial1-8
        textRight: "I want to be ready, but I'm just not feeling it.", // ->tutorial1-8
        location: 'Chatter',
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
        id: 'tutorial1-8',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Fantastic, time to begin! My name is Jude, allow me to continue explaining. This is a trial, you may have noticed your memories are missing, to regain them you will need to complete your trial.",
        faction: '???',
        textLeft: "What trial?", // ->tutorial1-9
        textRight: "Why are my memories missing?", // ->tutorial1-9
        location: 'Chatter',
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
        text: "I'm sorry but I'm going to have to ignore everything you say for the next few minutes. I'm explaining the rest of the rules and you need to pay attention.",
        faction: '???',
        textLeft: "I'm not playing your stupid game!", // ->tutorial1-10
        textRight: "Rude", // ->tutorial1-10
        location: 'Chatter',
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
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Look above my head, this will show you the current <span style=\"color: #456b73; font-weight: bold;\">time</span>. Soon you will familiarize yourself with the different <span style=\"color: #456b73; font-weight: bold;\">times</span> and what they mean.",
        faction: '???',
        textLeft: "Okay", // ->tutorial1-11
        textRight: "Blah blah blah", // ->tutorial1-11
        location: 'Chatter',
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
        id: 'tutorial1-11',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "<span style=\"color: #6a5c72; font-weight: bold;\">Rule #2:</span><br>Above the time are your <span style=\"color: #456b73; font-weight: bold;\">mementos</span>, they're important and linked to the retrieval of your memories. You will need to collect them all to regain your past and complete your trial.",
        faction: '???',
        textLeft: "Interesting", // ->tutorial1-12
        textRight: "Are you done yet?", // ->tutorial1-12
        location: 'Chatter',
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
        id: 'tutorial1-12',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Each time we speak, you will leave with a new <span style=\"color: #456b73; font-weight: bold;\">memento</span> which was determined based on our conversation. Remember, all of your choices are meaningful.",
        faction: '???',
        textLeft: "I understand.", // ->tutorial1-13
        textRight: "You love to talk don't you.", // ->tutorial1-13
        location: 'Chatter',
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
        id: 'tutorial1-13',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "So even as I talk right now, your comments have been noted. Each <span style=\"color: #456b73; font-weight: bold;\">memento</span> must be protected, they are damaged and repaired through conversations during choice time.",
        faction: '???',
        textLeft: "Fascinating", // ->tutorial1-14
        textRight: "Oh", // ->tutorial1-14
        location: 'Chatter',
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
        id: 'tutorial1-14',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Each <span style=\"color: #456b73; font-weight: bold;\">memento</span> has a unique personality, but they all thrive off interactions. Figuring out the interests of each <span style=\"color: #456b73; font-weight: bold;\">memento</span> is key to protecting them.",
        faction: '???',
        textLeft: "Got it.", // ->tutorial1-15
        textRight: "*nod*.", // ->tutorial1-15
        location: 'Chatter',
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
        id: 'tutorial1-15',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Below me is the name of the person you are speaking with and their association. Remembering these people might prove useful in the future.",
        faction: '???',
        textLeft: "Will do", // ->tutorial1-16
        textRight: "Will do, boss", // ->tutorial1-16
        location: 'Chatter',
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
        id: 'tutorial1-16',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Each experience is different, but to truly regain all of your memories you will need to explore them all. As you progress through your trial, you will collect cards. Look down further to view these cards and understand your choices more clearly.",
        faction: '???',
        textLeft: "I found your card.", // ->tutorial1-17
        textRight: "I'll check that out later.", // ->tutorial1-17
        location: 'Chatter',
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
        id: 'tutorial1-17',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "That's everything for now, answer time will begin shortly. I hope you paid attention, Jack.",
        faction: '???',
        textLeft: "Jack?", // ->survey1-1
        textRight: "Is that my name?", // ->survey1-1
        location: 'Chatter',
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

export default tutorial1;