import { writable } from 'svelte/store';

const tutorial2 = writable([
    {
        id: 'tutorial2-1',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Guess what time it is Jack?",
        faction: '???',
        textLeft: "Chatter", // ->tutorial2-2a
        textRight: "Question", // ->tutorial2-2b
        location: "Chatter",
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
        text: "Yes, that's correct! You are beginning to understand the rules. Now, what time was it before I arrived?",
        faction: '???',
        textLeft: "Choice", // ->tutorial2-3a
        textRight: "Answer", // ->tutorial2-3b
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
        id: 'tutorial2-2b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "No, that's incorrect. I see you are struggling to grasp the rules. No worries, let's try again. What time was it before I arrived?",
        faction: '???',
        textLeft: "Choice", // ->tutorial2-3a
        textRight: "Answer", // ->tutorial2-3b
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
        id: 'tutorial2-3a',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Correct, it was choice time, very good. Final question, what time is it about to be?",
        faction: '???',
        textLeft: "Question", // ->tutorial2-4a
        textRight: "Answer", // ->tutorial2-4b
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
        id: 'tutorial2-3b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "No, that's absolutely incorrect, it was choice time. You need to start paying attention or you'll never leave this place. Final question, what time is it about to be?",
        faction: '???',
        textLeft: "Question", // ->tutorial2-4a
        textRight: "Answer", // ->tutorial2-4b
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
        id: 'tutorial2-4a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Yes, it's question time now.",
        faction: '???',
        textLeft: "What does that mean again?", // ->tutorial2-5a
        textRight: "Why do you keep changing colors?", // ->tutorial2-5b
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
        id: 'tutorial2-4b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "In fact, it's question time now.",
        faction: '???',
        textLeft: "What does that mean again?", // ->tutorial2-5a
        textRight: "Why do you keep changing colors?", // ->tutorial2-5b
        location: 'Question',
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
        id: 'tutorial2-5a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Question time is where I answer your questions, as opposed to answer time where you answer mine.",
        faction: '???',
        textLeft: "Are the times always in the same order?", // ->tutorial2-5a-1a
        textRight: "Is it possible to skip a time?", // ->tutorial2-5a-1b
        location: 'Question',
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
        id: 'tutorial2-5a-1a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Not quite, although you'll recognize a pattern. For instance, choice time always comes after answer time and answer time often follows question time or chatter time.",
        faction: '???',
        textLeft: "Who decides the time?", // ->tutorial2-5a-1a-1a
        textRight: "Is it possible to revisit a time?", // ->tutorial2-5a-1a-1a-1b
        location: 'Question',
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
        id: 'tutorial2-5a-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "No, all times are necessary in order to complete your trial.",
        faction: '???',
        textLeft: "Who decides the time?", // ->tutorial2-5a-1a-1a
        textRight: "Is it possible to revisit a time?", // ->tutorial2-5a-1a-1a-1b
        location: 'Question',
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
        id: 'tutorial2-5a-1a-1a',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "I do.",
        faction: '???',
        textLeft: "Why choose the times you do?", // ->tutorial2-6
        textRight: "Is it possible for me to pick the time?", // ->tutorial2-5a-1a-1a-1b
        location: 'Question',
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
        id: 'tutorial2-5a-1a-1a-1b',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "No",
        faction: '???',
        textLeft: "Why not?", // ->tutorial2-6
        textRight: "Are you being honest?", // ->tutorial2-6
        location: 'Question',
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
        id: 'tutorial2-5b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "When I'm white it's time to chat. When I'm purple it's time to answer. When I'm blue?",
        faction: '???',
        textLeft: "It's time to question.", // ->tutorial2-5b-1a
        textRight: "Keep going...", // ->tutorial2-5b-1b
        location: 'Question',
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
        id: 'tutorial2-5b-1a',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "Very observant, that is correct. For answering correctly I will also tell you that I can be red. Why would I be red?",
        faction: '???',
        textLeft: "A time for choices?", // ->tutorial2-5b-1a-1a
        textRight: "A time I don't know yet?", // ->tutorial2-5b-1a-1b
        location: 'Question',
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
        id: 'tutorial2-5b-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Seriously? When I'm blue it's time to question, are you even trying?",
        faction: '???',
        textLeft: "Oh, that makes sense. Do you have other colors?", // ->tutorial2-6
        textRight: "Keep going...", // ->tutorial2-5b-1b-1b
        location: 'Question',
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
        id: 'tutorial2-5b-1b-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Keep going where? That's all I was going to say.",
        faction: '???',
        textLeft: "Oh, well can you tell me if there are more people like you?", // ->tutorial2-6
        textRight: "Keep going...", // ->tutorial2-5b-1b-1b-1b
        location: 'Question',
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
        id: 'tutorial2-5b-1b-1b-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "...",
        faction: '???',
        textLeft: "Can you tell me what questions I should ask?", // ->tutorial2-6
        textRight: "Are your answers always truthful?", // ->tutorial2-6
        location: 'Question',
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
        id: 'tutorial2-5b-1a-1a',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "Amazing, you got it right. Later, keep an eye out for me as you might find me during choice time.",
        faction: '???',
        textLeft: "When will you show up during choice time?", // ->tutorial2-6
        textRight: "Why haven't I see you during choice time yet?", // ->tutorial2-6
        location: 'Question',
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
        id: 'tutorial2-5b-1a-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Hmm, not quite.",
        faction: '???',
        textLeft: "A time for choices?", // ->tutorial2-5b-1a-1a
        textRight: "Can you just tell me?", // ->tutorial2-6
        location: 'Question',
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
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Unfortunately, there are some answers I cannot provide until later. In certain cases, I can only reveal the answer if you ask the right question.",
        faction: '???',
        textLeft: "So, it's possible I've already missed information?", // ->tutorial2-7a
        textRight: "What does \"later\" mean?", // ->tutorial2-7b
        location: 'Question',
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
        id: 'tutorial2-7a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Of course, it's impossible to discover every path at once. If the information is essential, I will make sure you receive it.",
        faction: '???',
        textLeft: "What counts as essential?", // ->tutorial2-7a-1a
        textRight: "How much have I already missed?", // ->tutorial2-8
        location: 'Question',
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
        id: 'tutorial2-7a-1a',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "The rules, remembering, participating. There is very little you need to know, I take care of the rest.",
        faction: '???',
        textLeft: "What do you take care of?", // ->tutorial2-8
        textRight: "What if I want to know as much as possible?", // ->tutorial2-7a-1a-1b
        location: 'Question',
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
        id: 'tutorial2-7a-1a-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Then choose your answers very carefully, as some lead to more paths with more answers. However, for every answer you find, you're sure to find more questions.",
        faction: '???',
        textLeft: "Can't you tell me which paths are the best?", // ->tutorial2-8
        textRight: "What if I don't have any questions?", // ->tutorial2-7a-1a-1b-1b
        location: 'Question',
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
        id: 'tutorial2-7a-1a-1b-1b',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "You do.",
        faction: '???',
        textLeft: "But what if I don't?", // ->tutorial2-7a-1a-1b-1b (intentional loop)
        textRight: "I bet they aren't questions you'll answer.", // ->tutorial2-8
        location: 'Question',
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
        id: 'tutorial2-7b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Later is a time that comes after now, but before the end. Don't worry, in terms of progress I'd say you're about 25% of the way through.",
        faction: '???',
        textLeft: "25% only? Will the other 75% be the same?", // ->tutorial2-7b-1a
        textRight: "Is there any way to speed up the trial?", // ->tutorial2-7b-1b
        location: 'Question',
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
        id: 'tutorial2-7b-1a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "In terms of time, yes the remaining phases will be familiar. However, your interactions will continue to evolve.",
        faction: '???',
        textLeft: "Evolve how?", // ->tutorial2-7b-1a-1a
        textRight: "Then what's the point if it's the same thing over and over again?", // ->tutorial2-7b-1a-1b
        location: 'Question',
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
        id: 'tutorial2-7b-1a-1a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Currently, you base your decisions on your momento, at least I hope you do. As you progress, finding a balance will become increasingly difficult.",
        faction: '???',
        textLeft: "Why are the mementos so essential?", // ->tutorial2-8
        textRight: "What if I dislike the decisions my memento enjoys?", // ->tutorial2-7b-1a-1a-1b
        location: 'Question',
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
        id: 'tutorial2-7b-1a-1a-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "That's to be expected. As I watch your paths unfold, in all cases you face difficult decisions. However, if you know the memento you dislike, try to avoid it.",
        faction: '???',
        textLeft: "How can I avoid something I already have?", // ->tutorial2-8
        textRight: "Is there a way for me to change paths?", // ->tutorial2-8
        location: 'Question',
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
        id: 'tutorial2-7b-1a-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Because it's never the same, even if it seems that way. Doing the same task does not imply receiving the same results. Ask yourself, what's the key to remembering?",
        faction: '???',
        textLeft: "I'd rather ask you.", // ->tutorial2-7b-1b-2
        textRight: "How should I know?", // ->tutorial2-7b-1b-2
        location: 'Question',
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
        id: 'tutorial2-7b-1b-2',
        imgUrl: '/decks/tutorial/judicator-blue-smile.png',
        title:'Jude',
        text: "Repetition, repetition, repetition.",
        faction: '???',
        textLeft: "How will that help me complete my trial?", // ->tutorial2-8
        textRight: "Does completing the trial mean I get to leave?", // ->tutorial2-8
        location: 'Question',
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
        id: 'tutorial2-7b-1b',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Technically, yes. You could make your choices randomly and hope to expedite the process. However, I wouldn't recommend it.",
        faction: '???',
        textLeft: "Why not?", // ->tutorial2-7b-1b-1a
        textRight: "🥚🥚🥚", // ->tutorial2-easter-egg-1
        location: '🥚🥚🥚',
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
        id: 'tutorial2-7b-1b-1a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "Because doing so would be unpredictable, making the protection of your mementos nearly impossible.",
        faction: '???',
        textLeft: "What happens if they break?", // ->tutorial2-7b-1b-1a-1a
        textRight: "Do you have mementos?", // ->tutorial2-8
        location: 'Question',
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
        id: 'tutorial2-7b-1b-1a-1a',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "You will lose some of your regained memory, and you will return to a time where your damaged momento was at its best.",
        faction: '???',
        textLeft: "So, are there any real consequences?", // ->tutorial2-8
        textRight: "Lose memories... wait has that already happened?", // ->tutorial2-8
        location: 'Question',
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
        id: 'tutorial2-easter-egg-1',
        imgUrl: '/characters/kaz.png',
        title: 'Kaz',
        text: "Hey there, how are you enjoying the game so far? I love easter eggs and I'm glad you found this one. Let's take a moment to relax, you can continue when you're ready.",
        faction: 'Creator',
        textLeft: "This game is awesome, I'm ready for more.", // ->tutorial2-8
        textRight: "This game kinda sucks, I'm a little disappointed.", // ->tutorial2-easter-egg-2
        location: '🥚🥚🥚',
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
        id: 'tutorial2-easter-egg-2',
        imgUrl: '/characters/kaz.png',
        title: 'Kaz',
        text: "Oh, well I'm sorry you feel that way. Maybe your decisions lead you down a shit path? Maybe, you suck at the game? I'm almost certain I'm not the problem here.",
        faction: 'Creator',
        textLeft: "Yeah, you're right. I should just go enjoy the game now.", // ->tutorial2-8
        textRight: "Umm, nope? Pretty sure your game sucks, not me.", // ->tutorial2-easter-egg-3
        location: '🥚🥚🥚',
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
        id: 'tutorial2-easter-egg-3',
        imgUrl: '/characters/kaz-mad.png',
        title: 'Kaz',
        text: "Oh yeah? Cool cool cool, let's play a game. One of these options will close your browser and delete your progress. The other, will CONTINUE THE GAME! So, let's see if you can figure this one out.",
        faction: 'Creator',
        textLeft: "I suddenly realized this game is amazing and I want to -->CONTINUE THE GAME<--", // ->tutorial2-8
        textRight: "Try me", // ->tutorial2-easter-egg-4
        location: '🥚🥚🥚',
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
        id: 'tutorial2-easter-egg-4',
        imgUrl: '/characters/kaz-fu.png',
        title: 'Kaz',
        text: "( ° ͜ʖ͡°)╭∩╮",
        faction: 'Creator',
        textLeft: "Actually I suck, always have and always will, now let's get back.", // ->tutorial2-8
        textRight: "Actually I suck a lot, always have and always will, now let's get back.", // ->tutorial2-8
        location: '🥚🥚🥚',
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
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "If it isn't essential for you to know, it's essential for you not to.",
        faction: '???',
        textLeft: "What does that mean?", // ->tutorial2-9
        textRight: "I disagree", // ->tutorial2-9
        location: 'Question',
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
        id: 'tutorial2-9',
        imgUrl: '/decks/tutorial/judicator-blue.png',
        title:'Jude',
        text: "It seems we're out of time, answer time will be begin shortly.",
        faction: '???',
        textLeft: "But I have more questions.", // ->survey2-1
        textRight: "Can we reschedule it for later?", // ->survey2-1
        location: 'Question',
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