import { writable } from 'svelte/store';

export const allDecks = writable({
    tutorial: {
        card1: {
            id: 'tutorial-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: 'Welcome drifter, would you like to play the tutorial?',
            faction: 'Tutorial',
            textLeft: "Nah, I know what I'm doing.",
            textRight: 'Yes please!',
            location: 'tutorial'
        },
        card2a: {
            id: 'tutorial-2a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Well aren't you something special, that's good because there wasn't a tutorial anyway...",
            faction: 'Tutorial',
            textLeft: "Then why even bother asking?",
            textRight: "...",
            location: 'tutorial'
        },
        card2b: {
            id: 'tutorial-2b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Hahahaha.... did you really think there was a tutorial? Do you think you're playing a game right now?",
            faction: 'Tutorial',
            textLeft: "What...",
            textRight: "I'm not sure what this is or where I am.",
            location: 'tutorial'
        },
        card3: {
            id: 'tutorial-3',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Ha, don't worry, it's normal to be confused, it's all part of the process.",
            faction: 'Tutorial',
            textLeft: "What process?",
            textRight: 'I think I want to leave now.',
            location: 'tutorial'
        },
        card4a: {
            id: 'tutorial-4a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Don't worry about the process, let the process worry about you and you'll be out of here in no time! But first things first, you'll need to make a lot of decisions. You've made decisions before right?",
            faction: 'Tutorial',
            textLeft: "I never decided to be here.",
            textRight: 'What kind of question is that, everyone has made a decision before.',
            location: 'tutorial'
        },
        card4b: {
            id: 'tutorial-4b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Don't worry you'll be out of here in no time, but first things first, you'll need to make a lot of decisions. You've made decisions before... right?",
            faction: 'Tutorial',
            textLeft: "I never decided to be here.",
            textRight: 'What kind of question is that, everyone has made a decision before.',
            location: 'tutorial'
        },
        card5: {
            id: 'tutorial-5',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Well sometimes you get to make decisions, but sometimes they're made for you.",
            faction: 'Tutorial',
            textLeft: "Okay... is there a reason you're telling me this?",
            textRight: 'This all seems very suspicious...',
            location: 'tutorial'
        },
        card6a: {
            id: 'tutorial-6a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Is there a reason for any of this? I guess you'll have to determine that for yourself. Are you ready now?",
            faction: 'Tutorial',
            textLeft: "Ready for what? You haven't told me anything yet.",
            textRight: 'Wait slow down, I have so many questions!',
            location: 'tutorial'
        },
        card6b: {
            id: 'tutorial-6b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Suspicion always haunts the guilty mind. Are you ready?",
            faction: 'Tutorial',
            textLeft: "What's that supposed to mean...",
            textRight: 'Only one way to find out.',
            location: 'tutorial'
        },
        card7: {
            id: 'tutorial-7',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Fantastic then let's begi- oh! I almost forgot, there's something you need to do first.",
            faction: 'Tutorial',
            textLeft: "And that is?",
            textRight: 'What if I refuse?',
            location: 'tutorial'
        },
        card8a: {
            id: 'tutorial-8a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Someone doesn't like surprises, it's just a quick harmless survey that's all. Really, don't read too much into it.",
            faction: 'Tutorial',
            textLeft: "I wasn't until you said that.",
            textRight: 'Fine, if it will help me get out of here.',
            location: 'tutorial'
        },
        card8b: {
            id: 'tutorial-8b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Are you really sure you want to do that? Come now, it's just a quick and harmless survey, you'll be fine.",
            faction: 'Tutorial',
            textLeft: "I'm no stranger to threats, fine I'll do the stupid survey.",
            textRight: "Let's just get this over with.",
            location: 'tutorial'
        },
        card9: {
            id: 'tutorial-9',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "By the way, not that you asked... but you can call me Jude. Do you remember your name?",
            faction: 'Tutorial',
            textLeft: "Jude? Wow that's... really not what I was expecting. And no, I don't remember my name...",
            textRight: "Hey Jude, I'm... I ca- I can't seem to...",
            location: 'tutorial'
        },
        card10: {
            id: 'tutorial-10',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Fantastic... Don't worry that's normal. For now let's just keep it simple and call you Jack, unless there's another name you'd prefer?",
            faction: 'Tutorial',
            textLeft: "Jack? Doesn't really seem to suit me but I guess I'll go by Jack until I can remember my actual name.",
            textRight: "I may not know my name but it certainly isn't Jack.",
            location: 'tutorial'
        }
    },

    survey1: {
        card1: {
            id: 'survey1-1',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Fantastic Jack! Yes Jack it is and Jack it must be. Now again, it's just a random survey, just answer honestly. Alright, and away we go!",
            faction: 'First Survey',
            textLeft: "Start survey",
            textRight: 'Abandon survey',
            actionLeft: {
                heart: 1,
                diamond: 0
            },
            actionRight: {
                heart: 0,
                diamond: 1
            },
            location: 'survey'
        },
        card2a: {
            id: 'survey1-2a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Thank you for your willing cooperation. Now, question 2: What's more important to you?",
            faction: 'First Survey',
            textLeft: "Comfort",
            textRight: 'Sacrifice',
            actionLeft: {
                heart: 0,
                diamond: 1
            },
            actionRight: {
                heart: 1,
                diamond: 0
            },
            location: 'survey'
        },
        card2b: {
            id: 'survey1-2b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Hmm... interesting, your decision has been noted. Now, question 2: What's more important to you?",
            faction: 'First Survey',
            textLeft: "Comfort",
            textRight: 'Sacrifice',
            actionLeft: {
                heart: 0,
                diamond: 1,
            },
            actionRight: {
                heart: 1,
                diamond: 0,
            },
            location: 'survey'
        },
        card3: {
            id: 'survey1-3',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Really? I suppose I should've guessed as much. Alright on to the next one; which do you prefer?",
            faction: 'First Survey',
            textLeft: "Hearts",
            textRight: 'Diamonds',
            actionLeft: {
                heart: 2,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 2,
            },
            location: 'survey'
        },
        card4: {
            id: 'survey1-4',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Naturally, what's next now... here we go. You only have time for one, which do you choose?",
            faction: 'First Survey',
            textLeft: "Save a stranger from a fire, but he won't show any gratitude.",
            textRight: "Steal a stranger's wallet filled with cash with no chance of being caught. He wouldn't even miss it.",
            actionLeft: {
                heart: 1,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 1,
            },
            location: 'survey'
        },
        card5a: {
            id: 'survey1-5a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "How selfless of you, what a saint! Truly, you must be a gift from above. Perhaps you should answer the next one honestly though.",
            faction: 'First Survey',
            textLeft: "Left",
            textRight: "Right",
            actionLeft: {
                heart: 0,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 0,
            },
            location: 'survey'
        },
        card5b: {
            id: 'survey1-5b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Hahahaha yes, nicely done. I'm glad you aren't a stranger to yourself. Now for the next one!",
            faction: 'First Survey',
            textLeft: "Left",
            textRight: "Right",
            actionLeft: {
                heart: 0,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 0,
            },
            location: 'survey'
        },
        card6: {
            id: 'survey1-6',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Here's a question, do you think any of your answers have meant anything? Even the last one, did you think that meant something?",
            faction: 'First Survey',
            textLeft: "I'd hope so, otherwise this is just one big waste of time.",
            textRight: "I'm not sure, probably not? I just want to get out of here.",
            actionLeft: {
                heart: 1,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 1,
            },
            location: 'survey'
        },
        card7a: {
            id: 'survey1-7a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Well they are indeed important, except for that left or right one. Honestly I'm not even sure why that one was in there.",
            faction: 'First Survey',
            textLeft: "Are we almost done yet?",
            textRight: "Is this all a joke or something?",
            actionLeft: {
                heart: 0,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 0,
            },
            location: 'survey'
        },
        card7b: {
            id: 'survey1-7b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Bit of a Debbie downer aren't we? Little Sassy Susan wants to go out and play. You won't last very long with an attitude like that you know.",
            faction: 'First Survey',
            textLeft: "Whatever, are we done yet?",
            textRight: "Don't lecture me when you won't even tell me what's going on here.",
            actionLeft: {
                heart: 0,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 0,
            },
            location: 'survey'
        },
        card8: {
            id: 'survey1-8',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "So many questions as always, you'd think I was the one taking the survey. Alright here's the final one, get ready.",
            faction: 'First Survey',
            textLeft: "...",
            textRight: "Ready whenever.",
            actionLeft: {
                heart: 0,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 0,
            },
            location: 'survey'
        },
        card9: {
            id: 'survey1-9',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Who are you?",
            faction: 'First Survey',
            textLeft: "I don- I don't remember...",
            textRight: "I am who I am... whoever that is.",
            actionLeft: {
                heart: 1,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 1,
            },
            location: 'survey'
        },
        card10: {
            id: 'survey1-10',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Fantastic, then it's time. Remember, your decisions have meaning. You aren't alone here, but this is your show... Good luck Jack, hahahaa...",
            faction: 'First Survey',
            textLeft: "",
            textRight: "",
            actionLeft: {
                heart: 0,
                diamond: 0,
            },
            actionRight: {
                heart: 0,
                diamond: 0,
            },
            location: 'survey'
        }  
    },

    survey2: {
        card1: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Time for another one of our favorite surveys. It'll be the same as last time, remember to answer honestly. Are you ready?",
            faction: 'Surveys',
            textLeft: "Is this question also part of the survey like last time?",
            textRight: "As ready as I'll ever be.",
            actionLeft: {
                brain: 1,
                smiley: 0
            },
            actionRight: {
                brain: 0,
                smiley: 1
            },
            location: 'survey'
        },
        card2a: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Well aren't you clever, think you know everything huh? Next question, what makes you happy?",
            faction: 'Surveys',
            textLeft: "Reading books",
            textRight: 'Painting',
            actionLeft: {
                brain: 1,
                smiley: 0
            },
            actionRight: {
                brain: 0,
                smiley: 1
            },
            location: 'survey'
        },
        card2b: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Fantastic... Question number 2, what makes you happy?",
            faction: 'Surveys',
            textLeft: "Reading books",
            textRight: 'Painting',
            actionLeft: {
                brain: 1,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 1,
            },
            location: 'survey'
        },
        card3: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "I suppose that was a tough one? Here's an easier one; which do you prefer?",
            faction: 'Surveys',
            textLeft: "Brains",
            textRight: 'Smiles',
            actionLeft: {
                brain: 2,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 2,
            },
            location: 'survey'
        },
        card4: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Yes, makes sense, we're getting there slowly. If you could only have one, which would you choose?",
            faction: 'Surveys',
            textLeft: "One night with anyone in the world, dead or alive. You could ask them anything.",
            textRight: "The chance to revisit one memory in full detail, but only once.",
            actionLeft: {
                brain: 1,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 1,
            },
            location: 'survey'
        },
        card5a: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Very interesting, I wonder who it is you so long to see... You must have quite the list. Here's a stupid one that has no importance whatsoever.",
            faction: 'Surveys',
            textLeft: "Up",
            textRight: "Down",
            actionLeft: {
                brain: 0,
                smiley: 1,
            },
            actionRight: {
                brain: 1,
                smiley: 0,
            },
            location: 'survey'
        },
        card5b: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Is that so? What is it you've forgotten? Now then, here's a stupid one that has no importance whatsoever.",
            faction: 'Surveys',
            textLeft: "Up",
            textRight: "Down",
            actionLeft: {
                brain: 0,
                smiley: 1,
            },
            actionRight: {
                brain: 1,
                smiley: 0,
            },
            location: 'survey'
        },
        card6: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Noted, that definitely changes things... Suppose you were trapped in a dark room, what would you do?",
            faction: 'Surveys',
            textLeft: "I'd try to find a way out until I got out.",
            textRight: "I'd wait to be rescued while keeping myself entertained.",
            actionLeft: {
                brain: 1,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 1,
            },
            location: 'survey'
        },
        card7a: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Keep moving forward, that's the spirit. I think I've got a clear image of you now, thank you.",
            faction: 'Surveys',
            textLeft: "Does that mean we're done?",
            textRight: "Oh, is that it then?",
            actionLeft: {
                brain: 1,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 1,
            },
            location: 'survey'
        },
        card7b: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Isn't that a little optimistic? I think I've got a clear image of you now, thank you.",
            faction: 'Surveys',
            textLeft: "Does that mean we're done?",
            textRight: "Oh, is that it then?",
            actionLeft: {
                brain: 1,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 1,
            },
            location: 'survey'
        },
        card8: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Very interesting... Alright here's the final one. Are you sane?",
            faction: 'Surveys',
            textLeft: "Of course I am",
            textRight: "I've been starting to wonder that myself...",
            actionLeft: {
                brain: 0,
                smiley: 1,
            },
            actionRight: {
                brain: 1,
                smiley: 0,
            },
            location: 'survey'
        },
        card9: {
            id: 'survey2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Second Survey',
            text: "Fantastic... Your decisions are important, now more than ever.",
            faction: 'Surveys',
            textLeft: "You aren't making any sense.",
            textRight: "I don't understand...",
            actionLeft: {
                brain: 0,
                smiley: 0,
            },
            actionRight: {
                brain: 0,
                smiley: 0,
            },
            location: 'survey'
        }  
    },

    chapter1: {
        card1a: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: 'Shoot, it seems the pests are at my crop again, can you lend me a hand?',
            faction: 'Farmer',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card1b: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: 'Those damn Jamison boys are ruining this village, either talk to their parents or I will.',
            faction: 'Farmer',
            textLeft: "Why would I be the one to talk to their parents?",
            textRight: "Sure, but I'm not sure how I'll be able to help..",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card1c: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: 'Those damn Jamison boys are ruining this village, either talk to their parents or I will.',
            faction: 'Farmer',
            textLeft: "Why would I be the one to talk to their parents?",
            textRight: "Sure, but I'm not sure how I'll be able to help..",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        card2a: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: 'The wild animals have been frightened lately, can you do something about it?',
            faction: 'Hunter',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card2b: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "I need to make more arrows, but there aren't any good stones around",
            faction: 'Hunter',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card2c: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "I need to make more arrows, but there aren't any good stones around",
            faction: 'Hunter',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        card3a: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "The aging curse that's been put on me is getting worse, can you help me",
            faction: 'Villager',
            textLeft: "I'll have my friend take a look!",
            textRight: "You look fine to me",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card3b: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "These flowers smell lovely, please don't steal them from me",
            faction: 'Villager',
            textLeft: "Well I wasn't going to until you said that...",
            textRight: "I won't I promise, but can I smell too?",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card3c: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "These flowers smell lovely, please don't steal them from me",
            faction: 'Villager',
            textLeft: "Well I wasn't going to until you said that...",
            textRight: "I won't I promise, but can I smell too?",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        card4a: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Onboarding',
            text: "Fantastic! I'll be here in case of anything, just remember that forgetting is normal, you're all here to remember.",
            faction: 'Tutorial',
            textLeft: "Wait, that doesn't make any sense...",
            textRight: 'Makes perfect sense to me.',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card4b: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Onboarding',
            text: "Well then, off you go- oh wait! I almost forgot, there's a few questions I have to ask you before you leave.",
            faction: 'Tutorial',
            textLeft: 'Wait can we just slow down for a minute.',
            textRight: 'This all seems very suspicious...',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 2,
                memory: 0,
            },
            location: 'tutorial'
        },
        card4c: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Onboarding',
            text: "Well then, off you go- oh wait! I almost forgot, there's a few questions I have to ask you before you leave.",
            faction: 'Tutorial',
            textLeft: 'Wait can we just slow down for a minute.',
            textRight: 'This all seems very suspicious...',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 2,
                memory: 0,
            },
            location: 'tutorial'
        },

        card5a: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Onboarding',
            text: "Fantastic! I'll be here in case of anything, just remember that forgetting is normal, you're all here to remember.",
            faction: 'Tutorial',
            textLeft: "Wait, that doesn't make any sense...",
            textRight: 'Makes perfect sense to me.',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        card5b: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Onboarding',
            text: "Well then, off you go- oh wait! I almost forgot, there's a few questions I have to ask you before you leave.",
            faction: 'Tutorial',
            textLeft: 'Wait can we just slow down for a minute.',
            textRight: 'This all seems very suspicious...',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 2,
                memory: 0,
            },
            location: 'tutorial'
        },
        card5c: {
            id: 'chapter1-1',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Onboarding',
            text: "Well then, off you go- oh wait! I almost forgot, there's a few questions I have to ask you before you leave.",
            faction: 'Tutorial',
            textLeft: 'Wait can we just slow down for a minute.',
            textRight: 'This all seems very suspicious...',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 2,
                memory: 0,
            },
            location: 'tutorial'
        }
    },
});

// For resetting the game
export const newDeck = writable({...allDecks});