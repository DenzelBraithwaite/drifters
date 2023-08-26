import { writable } from 'svelte/store';

export const allDecks = writable({
    tutorial: [
        {
            id: 'tutorial-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: 'Welcome drifter, would you like to play the tutorial?',
            faction: 'Tutorial',
            textLeft: "Nah, I know what I'm doing.",
            textRight: 'Yes please!',
            location: 'tutorial'
        },
        {
            id: 'tutorial-2a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Well aren't you something special, that's good because there wasn't a tutorial anyway...",
            faction: 'Tutorial',
            textLeft: "Then why even bother asking?",
            textRight: "...",
            location: 'tutorial'
        },
        {
            id: 'tutorial-2b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Hahahaha.... did you really think there was a tutorial? Do you think you're playing a game right now?",
            faction: 'Tutorial',
            textLeft: "What...",
            textRight: "I'm not sure what this is or where I am.",
            location: 'tutorial'
        },
        {
            id: 'tutorial-3',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Ha, don't worry, it's normal to be confused, it's all part of the process.",
            faction: 'Tutorial',
            textLeft: "What process?",
            textRight: 'I think I want to leave now.',
            location: 'tutorial'
        },
        {
            id: 'tutorial-4a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Don't worry about the process, let the process worry about you and you'll be out of here in no time! But first things first, you'll need to make a lot of decisions. You've made decisions before right?",
            faction: 'Tutorial',
            textLeft: "I never decided to be here.",
            textRight: 'What kind of question is that, everyone has made a decision before.',
            location: 'tutorial'
        },
        {
            id: 'tutorial-4b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Don't worry you'll be out of here in no time, but first things first, you'll need to make a lot of decisions. You've made decisions before... right?",
            faction: 'Tutorial',
            textLeft: "I never decided to be here.",
            textRight: 'What kind of question is that, everyone has made a decision before.',
            location: 'tutorial'
        },
        {
            id: 'tutorial-5',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Well sometimes you get to make decisions, but sometimes they're made for you.",
            faction: 'Tutorial',
            textLeft: "Okay... is there a reason you're telling me this?",
            textRight: 'This all seems very suspicious...',
            location: 'tutorial'
        },
        {
            id: 'tutorial-6a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Is there a reason for any of this? I guess you'll have to determine that for yourself. Are you ready now?",
            faction: 'Tutorial',
            textLeft: "Ready for what? You haven't told me anything yet.",
            textRight: 'Wait slow down, I have so many questions!',
            location: 'tutorial'
        },
        {
            id: 'tutorial-6b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Suspicion always haunts the guilty mind. Are you ready?",
            faction: 'Tutorial',
            textLeft: "What's that supposed to mean...",
            textRight: 'Only one way to find out.',
            location: 'tutorial'
        },
        {
            id: 'tutorial-7',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Fantastic then let's begi- oh! I almost forgot, there's something you need to do first.",
            faction: 'Tutorial',
            textLeft: "And that is?",
            textRight: 'What if I refuse?',
            location: 'tutorial'
        },
        {
            id: 'tutorial-8a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Someone doesn't like surprises, it's just a quick harmless survey that's all. Really, don't read too much into it.",
            faction: 'Tutorial',
            textLeft: "I wasn't until you said that.",
            textRight: 'Fine, if it will help me get out of here.',
            location: 'tutorial'
        },
        {
            id: 'tutorial-8b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Are you really sure you want to do that? Come now, it's just a quick and harmless survey, you'll be fine.",
            faction: 'Tutorial',
            textLeft: "I'm no stranger to threats, fine I'll do the stupid survey.",
            textRight: "Let's just get this over with.",
            location: 'tutorial'
        },
        {
            id: 'tutorial-9',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "By the way, not that you asked... but you can call me Jude. Do you remember your name?",
            faction: 'Tutorial',
            textLeft: "Jude? Wow that's... really not what I was expecting. And no, I don't remember my name...",
            textRight: "Hey Jude, I'm... I ca- I can't seem to...",
            location: 'tutorial'
        },
        {
            id: 'tutorial-10',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Fantastic... Don't worry that's normal. For now let's just keep it simple and call you Jack, unless there's another name you'd prefer?",
            faction: 'Tutorial',
            textLeft: "Jack? Doesn't really seem to suit me but I guess I'll go by Jack until I can remember my actual name.",
            textRight: "I may not know my name but it certainly isn't Jack.",
            location: 'tutorial'
        }
    ],

    survey1: [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
    ],

    survey2: [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
    ],

    chapter1: [
        {
            id: 'chapter1-1a',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: 'Shoot, it seems the pests are at my crop again, can you lend me a hand?',
            faction: 'Farmer',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-1b',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: 'Those damn Jamison boys are ruining this village, either talk to their parents or I will.',
            faction: 'Farmer',
            textLeft: "Why would I be the one to talk to their parents?",
            textRight: "Sure, but I'm not sure how I'll be able to help..",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-1c',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: "I can't seem to remember what I was doing last...",
            faction: 'Farmer',
            textLeft: "Don't worry, neither can I...",
            textRight: "Try retracing your steps, see if that helps.",
            actionLeft: {
                health: 0,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-1d',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: "Every darn person in this town is hell bent on getting in my way, are you going another delinquent in the making?",
            faction: 'Farmer',
            textLeft: "Don't worry, I won't be of any trouble.",
            textRight: "Maybe you're the one getting in everyone else's way.",
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

        {
            id: 'chapter1-2a',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: 'The wild animals have been frightened lately, can you do something about it?',
            faction: 'Hunter',
            textLeft: "What animals? How can I help?",
            textRight: "Shouldn't you do something about it?",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-2b',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "I need to make more arrows, but there aren't any good stones around.",
            faction: 'Hunter',
            textLeft: "Perhaps you'll find the right ones if you keep looking.",
            textRight: "You don't need arrows in a place like this.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-2c',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "I remember hunting in the woods, and then... And then what?",
            faction: 'Hunter',
            textLeft: "Maybe you decided to camp under the stars?",
            textRight: "Keep trying, you'll remember something eventually.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-2d',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "I've been hunting since I was little, my daddy used to take me out back in the forest before he...",
            faction: 'Hunter',
            textLeft: "You don't have to talk about it if you don't want to.",
            textRight: "Did you kill him?",
            actionLeft: {
                health: 0,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 1,
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-3a',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "The aging curse that's been put on me is getting worse, can you help me.",
            faction: 'Villager',
            textLeft: "It looks as if it's already too late for you.",
            textRight: "You look fine to me, maybe you just need to sleep it off.",
            actionLeft: {
                health: 1,
                memory: 1,
            },
            actionRight: {
                health: 0,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-3b',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "These flowers smell lovely, please don't steal them from me.",
            faction: 'Villager',
            textLeft: "Well I wasn't going to until you said that...",
            textRight: "I won't I promise, but can I smell too?",
            actionLeft: {
                health: 1,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-3c',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "These flowers... what is it about these flowers...",
            faction: 'Villager',
            textLeft: "Maybe they mean something to you, remind you of someone special?",
            textRight: "They are very pretty, you have a good eye.",
            actionLeft: {
                health: 0,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-3d',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "Flowers bring joy, comfort the sad and excite the romantic. Flowers are amazing, wouldn't you agree?",
            faction: 'Villager',
            textLeft: "Umm... yeah sure.",
            textRight: "I never thought about it like that before.",
            actionLeft: {
                health: 0,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        

        {
            id: 'chapter1-4a',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Melody',
            text: "Did you know there used to be a woman in this village who was beloved by all, even the animals.",
            faction: 'Villager',
            textLeft: "She sounds like an incredible person, I hope to meet her someday.",
            textRight: "I'm afraid not, I only just got here myself and I don't plan on staying.",
            actionLeft: {
                health: 0,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-4b',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Meoldy',
            text: "Do you find me beautiful? Everyone finds me beautiful, everyone.",
            faction: 'Villager',
            textLeft: "You're very pretty, on the outside.",
            textRight: 'Not everyone.',
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-4c',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Melody',
            text: "I remember him watching me... following me... What did he do to me?",
            faction: 'Villager',
            textLeft: 'What did who do? Why was he following you?',
            textRight: "Do you remember something? I don't remember that, I don't remember anything.",
            actionLeft: {
                health: -2,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-4d',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Melody',
            text: "Have you met my brother? He's so full of himself, claims he's the most handsome man in the village.",
            faction: 'Villager',
            textLeft: 'Sounds familiar...',
            textRight: "Maybe it's a small village.",
            actionLeft: {
                health: 0,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-5a',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Rowelda',
            text: "I don't quite like the way you're sniffing about this town boy, quit it!",
            faction: 'Villager',
            textLeft: "Excuse you, I wasn't even doing anything.",
            textRight: 'Mind your own business you old hag.',
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-5b',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Rowelda',
            text: "Why are you still here? If you've finished your business here then begone!",
            faction: 'Villager',
            textLeft: "I know who I'll never miss when I get out of this town.",
            textRight: "You're a mean old lady you know that? You need to watch your tone.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: 2,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-5c',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Rowelda',
            text: "It was so quiet before I came here, why did I ever leave... when did I leave?",
            faction: 'Villager',
            textLeft: "You can always go back the way you came, can't you?",
            textRight: 'This place is your home now, you should try to get used to it.',
            actionLeft: {
                health: -2,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-5d',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Rowelda',
            text: "Those Jamison boys aren't the problem, they lack discipline and parenting. Why if I raised those boys, things would be different I tell you.",
            faction: 'Villager',
            textLeft: "I feel inclined to believe you.",
            textRight: "Yes well, I'll let you see to it then.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-6a',
            imgUrl: '/decks/chapter1/cowheard.png',
            title:'Bernard',
            text: "My cattle are well mannered, but you can never fully trust a wild animal, wouldn't you agree?",
            faction: 'Cowheard',
            textLeft: "Perhaps you're being a little paranoid mister.",
            textRight: "I don't even trust myself.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 2,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-6b',
            imgUrl: '/decks/chapter1/cowheard.png',
            title:'Bernard',
            text: "Have you run into that miserable farmer Gallock? Don't pay him any mind, that's just how he is.",
            faction: 'Cowheard',
            textLeft: "Yeah I suspected as much, thanks for the advice.",
            textRight: "Someone ought to knock him down a peg or two.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: 2,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-6c',
            imgUrl: '/decks/chapter1/cowheard.png',
            title:'Bernard',
            text: "Life is simple, it's the people that complicate it. Sometimes, a lonely road is the path you want to take.",
            faction: 'Cowheard',
            textLeft: "Maybe you just don't see the good in people.",
            textRight: "What's the point of living if there's no one else to share the experience?",
            actionLeft: {
                health: -2,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-6d',
            imgUrl: '/decks/chapter1/cowheard.png',
            title:'Bernard',
            text: "One day, my time will come. I need to make sure the cattle are probably taken care of.",
            faction: 'Cowheard',
            textLeft: "Your life is more important than cattle.",
            textRight: "You are a man of devotion, I can appreciate that.",
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

        {
            id: 'chapter1-7a',
            imgUrl: '/decks/chapter1/peasant.png',
            title:'Felix',
            text: "Please sir, do you have anything to spare? Anything at all will help.",
            faction: 'Peasant',
            textLeft: "Begone from me at once, peasant!",
            textRight: "I'm sorry, I haven't anything to offer.",
            actionLeft: {
                health: 1,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-7b',
            imgUrl: '/decks/chapter1/peasant.png',
            title:'Felix',
            text: "I can't go on like this anymore, please help me.",
            faction: 'Peasant',
            textLeft: "No.",
            textRight: "I wish I could.",
            actionLeft: {
                health: 0,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-7c',
            imgUrl: '/decks/chapter1/peasant.png',
            title:'Felix',
            text: "My mom is sick see, so if you have anything you could give me... I don't mean to beg, but if you care to spare.",
            faction: 'Peasant',
            textLeft: "Nobody likes a begger boy, remove yourself from me.",
            textRight: "Good things come to those who wait, your time will come, be patient.",
            actionLeft: {
                health: 1,
                memory: 1,
            },
            actionRight: {
                health: -2,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-7d',
            imgUrl: '/decks/chapter1/peasant.png',
            title:'Felix',
            text: "It's not fair, why can't I eat as much as everyone else gets to. What did I do wrong?",
            faction: '...',
            textLeft: "You can complain about it or you can do something about it.",
            textRight: "It's not your fault, you just got unlucky.",
            actionLeft: {
                health: 2,
                memory: 0,
            },
            actionRight: {
                health: -2,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-8a',
            imgUrl: '/decks/chapter1/villager-brother.png',
            title:'Alexander',
            text: "My beauty is renown far and wide, my sister isn't too bad herself, but her beautfy could simply never compare.",
            faction: 'Villager',
            textLeft: "Ugh",
            textRight: "Yes yes, you're very handsome.",
            actionLeft: {
                health: 0,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-8b',
            imgUrl: '/decks/chapter1/villager-brother.png',
            title:'Alexander',
            text: "Why if I were one of the king's royal guards, the wars would be over by nightfall! Sadly I've no time for such trivial things.",
            faction: 'Villager',
            textLeft: "Yeah I'm sure the king's army could use a knight like you.",
            textRight: "Ahahahaa, surely you'd make a better jester than soldier.",
            actionLeft: {
                health: 0,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-8c',
            imgUrl: '/decks/chapter1/villager-brother.png',
            title:'Alexander',
            text: "Everybody loves me, you don't have to be shy about it. If you'd like, I can help you be more popular.",
            faction: 'Villager',
            textLeft: "I hate your kind the most, no thank you.",
            textRight: "I'll take my chances.",
            actionLeft: {
                health: 1,
                memory: 1,
            },
            actionRight: {
                health: 0,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-8d',
            imgUrl: '/decks/chapter1/villager-brother.png',
            title:'Alexander',
            text: "Despite my apparent good looks, I feel as if I've lost my glow. Does that make any sense to you?",
            faction: 'Villager',
            textLeft: "These things are destined to happen eventually.",
            textRight: "You used to glow?",
            actionLeft: {
                health: 0,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
    ],

    chapter1Soldiers: [
        {
            id: 'chapter1-s-1a',
            imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
            title:'Oscar',
            text: "I've been fighting for as long as I can remember, but I can't seem to remember anything else.",
            faction: 'Soldier',
            textLeft: "We're in the same boat then soldier, but stay strong.",
            textRight: "A life of violence is a wasted one.",
            actionLeft: {
                health: 0,
                memory: 1,
            },
            actionRight: {
                health: -2,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-1b',
            imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
            title:'Oscar',
            text: "Why do I always have to do everything around here! Leave me alone, I'm not in the mood.",
            faction: 'Soldier',
            textLeft: "You need to learn to relax before your face stays like that permanently.",
            textRight: "Yeah it must be really hard to pull your own weight.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-1c',
            imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
            title:'Oscar',
            text: "The other soldiers are a joke, they don't belong in the army.",
            faction: 'Soldier',
            textLeft: "You'd think you'd be the captain then, wouldn't you.",
            textRight: "I'm sure you'd love to go to war alone then.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-1d',
            imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
            title:'Oscar',
            text: "Sleep is for the weak, all those slackers do is waste the day away. Useless sacks of potatoes I tell you.",
            faction: 'Soldier',
            textLeft: "Maybe you should do something about it instead of complaining.",
            textRight: "Your hard work is recognized, thank you for your service.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-s-2a',
            imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
            title:'August',
            text: 'You can never be too careful, always stay on guard and question your surroundings.',
            faction: 'Soldier',
            textLeft: "I do seem to be having a hard time relaxing my guard around here.",
            textRight: "I bet you sleep with one eye open.",
            actionLeft: {
                health: 1,
                memory: 1,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-2b',
            imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
            title:'August',
            text: "War is the only thing you can count on, remember that.",
            faction: 'Soldier',
            textLeft: "There's more to life than death and violence.",
            textRight: "Death and taxes brother.",
            actionLeft: {
                health: -2,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-2c',
            imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
            title:'August',
            text: "I'd like to find a place to rest my weary bones, this village seems alright.",
            faction: 'Soldier',
            textLeft: "Shouldn't you be doing something?",
            textRight: "I might join you on that, it's not bad here.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-2d',
            imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
            title:'August',
            text: "I never wanted to be a soldier you know, but I was drafted back when I still a child.",
            faction: 'Soldier',
            textLeft: "I'm surprised you managed to stay alive this long.",
            textRight: "You could always fake your death and run away.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 1,
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-s-3a',
            imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
            title:'Dedu',
            text: "I've come a long way from my home village, the people here to not know war like my people do.",
            faction: 'Soldier',
            textLeft: "Don't judge people before getting to know them, you might be surprised..",
            textRight: "I'm sorry you have to live through that.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-3b',
            imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
            title:'Dedu',
            text: "If I could, I think I would return to my village. But, it's simply not in the cards.",
            faction: 'Soldier',
            textLeft: "Perhaps one day.",
            textRight: "I play with my own deck.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-3c',
            imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
            title:'Dedu',
            text: "...",
            faction: 'Soldier',
            textLeft: "He seems to have something on his mind, maybe I should leave him alone.",
            textRight: "...",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-3d',
            imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
            title:'Dedu',
            text: "You know, you actually remind me of someone I've long since forgotten. I wonder who it was?",
            faction: 'Soldier',
            textLeft: "I couldn't tell you.",
            textRight: "Let me know if you remember.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        

        {
            id: 'chapter1-s-4a',
            imgUrl: '/decks/chapter1/soldiers/captain.png',
            title:'Hugo',
            text: "The names Hugo, you might've met Dedu, August or Oscar already. Those are my men, they're here to help if you need.",
            faction: 'Soldier',
            textLeft: "They seem to be more interested on taking it easy then helping me.",
            textRight: "Thank you, I appreciate the comforting words.",
            actionLeft: {
                health: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-4b',
            imgUrl: '/decks/chapter1/soldiers/captain.png',
            title:'Hugo',
            text: "My men aren't the greatest, but they're fine men nonetheless. I would take an arrow for any of them.",
            faction: 'Soldier',
            textLeft: "I wish I could serve under you.",
            textRight: "They'd do the same for you I'm sure.",
            actionLeft: {
                health: -2,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-4c',
            imgUrl: '/decks/chapter1/soldiers/captain.png',
            title:'Hugo',
            text: "I keep having this dream, one of my men is bleeding out, but I can never reach them on time... what do you think it means?",
            faction: 'Soldier',
            textLeft: 'Maybe you worry too much about the safety of your men?',
            textRight: "Perhaps that's a question only you could answer.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: 1,
                memory: 1,
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-4d',
            imgUrl: '/decks/chapter1/soldiers/captain.png',
            title:'Hugo',
            text: "I used to overcome my fears on the battlefield, but now it's as if I have no fear at all...",
            faction: 'Soldier',
            textLeft: "You don't need to brag to me, I can already see you're a brave warrior.",
            textRight: "Fear exists in all living beings, perhaps you've just suppressed it.",
            actionLeft: {
                health: -1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
            },
            location: 'Town of Beginning'
        },
    ],
});

// For resetting the game
export const newDeck = writable({...allDecks});