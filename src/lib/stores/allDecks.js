import { writable } from 'svelte/store';

export const allDecks = writable({
    tutorial1: [
        {
            id: 'tutorial1-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: 'Welcome drifter, would you like to play the tutorial?',
            faction: 'Tutorial',
            textLeft: "Nah, I know what I'm doing.",
            textRight: 'Yes please!',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-2a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Well aren't you something special, that's good because there wasn't a tutorial anyway...",
            faction: 'Tutorial',
            textLeft: "Then why even bother asking?",
            textRight: "...",
            location: 'tutorial'
        },
        {
            id: 'tutorial1-2b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Hahahaha.... did you really think there was a tutorial? Do you think you're playing a game right now?",
            faction: 'Tutorial',
            textLeft: "What...",
            textRight: "I'm not sure what this is or where I am.",
            location: 'tutorial'
        },
        {
            id: 'tutorial1-3',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Ha, don't worry, it's normal to be confused, it's all part of the process.",
            faction: 'Tutorial',
            textLeft: "What process?",
            textRight: 'I think I want to leave now.',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-4a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Don't worry about the process, let the process worry about you and you'll be out of here in no time! But first things first, you'll need to make a lot of decisions. You've made decisions before right?",
            faction: 'Tutorial',
            textLeft: "I never decided to be here.",
            textRight: 'What kind of question is that, everyone has made a decision before.',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-4b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Don't worry you'll be out of here in no time, but first things first, you'll need to make a lot of decisions. You've made decisions before... right?",
            faction: 'Tutorial',
            textLeft: "I never decided to be here.",
            textRight: 'What kind of question is that, everyone has made a decision before.',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-5',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Well sometimes you get to make decisions, but sometimes they're made for you.",
            faction: 'Tutorial',
            textLeft: "Okay... is there a reason you're telling me this?",
            textRight: 'This all seems very suspicious...',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-6a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Is there a reason for any of this? I guess you'll have to determine that for yourself. Are you ready now?",
            faction: 'Tutorial',
            textLeft: "Ready for what? You haven't told me anything yet.",
            textRight: 'Wait slow down, I have so many questions!',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-6b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Suspicion always haunts the guilty mind. Are you ready?",
            faction: 'Tutorial',
            textLeft: "What's that supposed to mean...",
            textRight: 'Only one way to find out.',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-7',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'???',
            text: "Fantastic then let's begi- oh! I almost forgot, there's something you need to do first.",
            faction: 'Tutorial',
            textLeft: "And that is?",
            textRight: 'What if I refuse?',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-8a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Someone doesn't like surprises, it's just a quick harmless survey that's all. Really, don't read too much into it.",
            faction: 'Tutorial',
            textLeft: "I wasn't until you said that.",
            textRight: 'Fine, if it will help me get out of here.',
            location: 'tutorial'
        },
        {
            id: 'tutorial1-8b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'???',
            text: "Are you really sure you want to do that? Come now, it's just a quick and harmless survey, you'll be fine.",
            faction: 'Tutorial',
            textLeft: "I'm no stranger to threats, fine I'll do the stupid survey.",
            textRight: "Let's just get this over with.",
            location: 'tutorial'
        },
        {
            id: 'tutorial1-9',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "By the way, not that you asked... but you can call me Jude. Do you remember your name?",
            faction: 'Tutorial',
            textLeft: "Jude? Wow that's... really not what I was expecting. And no, I don't remember my name...",
            textRight: "Hey Jude, I'm... I ca- I can't seem to...",
            location: 'tutorial'
        },
        {
            id: 'tutorial1-10',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Fantastic... Don't worry that's normal. For now let's just keep it simple and call you Jack, unless there's another name you'd prefer?",
            faction: 'Tutorial',
            textLeft: "Jack? Doesn't really seem to suit me but I guess I'll go by Jack until I can remember my actual name.",
            textRight: "I may not know my name but it certainly isn't Jack.",
            location: 'tutorial'
        }
    ],

    tutorial2: [
        {
            id: 'tutorial2-1',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: 'Hello again, how have things been going since we last spoke? You seem to be handling yourself quite well in here.',
            faction: 'Tutorial',
            textLeft: "I'm making do with what little I know, thanks to you.",
            textRight: "I still have no idea what I'm doing here.",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-2a',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Yes you always were so... resourceful. Well don't let me keep you from all the fun, I just wanted to ask you a few more questions.",
            faction: 'Tutorial',
            textLeft: "Then why even bother asking?",
            textRight: "Again with the questions, what do you want to know this time?",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-2b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "As I've said before, that's to be expected and you shouldn't go searching your brain for memories, instead let the memories come to you. Now, I have a few more questions for you if you'd be so kind as to indulge me.",
            faction: 'Tutorial',
            textLeft: "Lovely, more confusing questions. Let's get this over with.",
            textRight: "I'm sick and tired of your games, I don't want to take your stupid survey.",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-3',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Don't you worry, we'll be done before you know it! The important thing is to remember your decisions have meaning.",
            faction: 'Tutorial',
            textLeft: "What meaning? You keep saying that but you never explain.",
            textRight: 'I could care less whether they meant anything, I just want to leave.',
            location: 'tutorial'
        },
        {
            id: 'tutorial2-4a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "As I've said before, you needn't worry about remembering or making sense of your situations, you just need to go with the flow.",
            faction: "Tutorial",
            textLeft: "What flow? This is more like a sick game that you seem to be enjoying a great deal.",
            textRight: "Yeah that's easy enough for you to say, you don't know what this is like.",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-4b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "If you want to leave then you'd do well to take my advice and simply continue along this path.",
            faction: 'Tutorial',
            textLeft: "Just because you got bored and decided to paint a path for me, doesn't mean I have to follow it.",
            textRight: "I think I've had enough of listening to you, why should I trust the one who's the reason for all of this?",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-5',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "...",
            faction: 'Tutorial',
            textLeft: "What, gone quiet all of a sudden?",
            textRight: "Speechless? That's a first.",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-6',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "You really don't remember anything do you?",
            faction: 'Tutorial',
            textLeft: "That's what I've been trying to tell you!",
            textRight: "Nothing at all...",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-7',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "You really don't remember anything do you?",
            faction: 'Tutorial',
            textLeft: "That's what I've been trying to tell you!",
            textRight: "Nothing at all...",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-8',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Look... just answer the questions and talk to the people you meet and I promise you, this will all be over soon.",
            faction: 'Tutorial',
            textLeft: "But why can't you just tell me! Why do you act as if you have no say in the matter?",
            textRight: "What happens if I don't?",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-9a',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "You think you're asking the right questions, but finding that out won't help you any. Now then, it's time for the survey.",
            faction: 'Tutorial',
            textLeft: "I hope I don't live to regret this.",
            textRight: "Any answer worth seeking is a question worth asking.",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-9b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "If you don't? Why don't you tell me.",
            faction: 'Tutorial',
            textLeft: "How could I possibly know?",
            textRight: "I can't tell you what I don't know.",
            location: 'tutorial'
        },
        {
            id: 'tutorial2-10',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Haha right... well then, enough of that. The survey will begin now but don't overthink it. Remember to just answer HONESTLY, ok?",
            faction: 'Tutorial',
            textLeft: "Fine, but we will meet again.",
            textRight: "Let's get on with it then.",
            location: 'tutorial'
        },
        
        
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
            textLeft: "Wait come back!",
            textRight: "Wait I'm not alone here?",
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
            id: 'survey1-11',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Oh- and by the way, I probably should have mentioned this sooner... But every time we speak, you will gain a memento.",
            faction: 'First Survey',
            textLeft: "A memento?",
            textRight: "For what?",
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
            id: 'survey1-12',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "The mementos are linked to you, you must protect them. If one of them ever becomes fully damaged... Just remember it's important to keep them intact.",
            faction: 'First Survey',
            textLeft: "How would they get damaged?",
            textRight: "Wait, what happens if one breaks?",
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
            id: 'survey1-13a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "It depends on your actions, who you talk to, what you decide to say. Right now you only have one memento to worry about, but soon you will have more... very soon.",
            faction: 'First Survey',
            textLeft: "How could me talking to other people damage my mementos?",
            textRight: "What should I avoid saying then?",
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
            id: 'survey1-13b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Now where's the fun in telling you that...",
            faction: 'First Survey',
            textLeft: "What about this is fun period?",
            textRight: "Is this a joke to you?",
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
            id: 'survey1-14',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "That's enough questions for now, don't worry you'll be fine. Or maybe you won't, only one way to know for sure. We will speak again soon Jack, very soon...",
            faction: 'First Survey',
            textLeft: "I'm not done yet, I still have more questions.",
            textRight: "My questions aren't going anywhere, see you soon \"Jude\".",
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
            title:'Jude',
            text: "Fantastic, question number 1. Did you recognize anyone in the village?",
            faction: 'Surveys',
            textLeft: "Hmmm... not really.",
            textRight: "Of course not, It's not like I've met them before.",
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
            id: 'survey2-2',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Suppose that makes sense... did you notice anything odd about any of the villagers?",
            faction: 'Surveys',
            textLeft: "Actually, most of them seem to be dealing with a case of sudden amnesia as well.",
            textRight: 'I think I was more focused on trying to escape than anything.',
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
            id: 'survey2-3a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Yes well, truth be told most people who enter that village wander in, lost. Did you remember anything while you were there?",
            faction: 'Surveys',
            textLeft: "It might please you to learn that I, along with the rest of the villagers, still do not remember a thing.",
            textRight: "Still nothing but blanks, when will my memory return?",
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
            id: 'survey2-3b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "I've told you before that trying to escape is pointless. The best way to leave is to remember, did you remember anything when you were there?",
            faction: 'Surveys',
            textLeft: "All I've managed to remember is how much I must've forgotten.",
            textRight: "Can't blame me for trying, and unfortunately no... Still completely in the dark.",
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
            id: 'survey2-4',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Well, you should start to remember soon, most likely by the next time we talk you'll have remembered something important.",
            faction: 'Surveys',
            textLeft: "That's very suspicious, it almost sounds as if you have something planned.",
            textRight: "Why can't I remember now?",
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
            id: 'survey2-5a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Well whether or not there's a plan for you is at your discretion. But if you want to remember, it's only a matter of time.",
            faction: 'Surveys',
            textLeft: "You act as if I don't want to remember, but I do... it's not just happening yet.",
            textRight: "If I want to remember?",
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
            id: 'survey2-5b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "To rush it would mean to lose it, these things take time. Trust me, trust the process.",
            faction: 'Surveys',
            textLeft: "Forgive me if I have a hard time doing that.",
            textRight: "I can't lose what I've already lost.",
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
            id: 'survey2-6',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "We should get back to the survey, although all of our interactions help me better understand you better. Do me a favor and pick one would you?",
            faction: 'Surveys',
            textLeft: "Brain",
            textRight: "Mouth",
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
            id: 'survey2-7',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Yes of course, that makes sense. We're almost done here just a few more. Which describes you more?",
            faction: 'Surveys',
            textLeft: "I like my quiet time, where I can be alone and pursue my passions and hobbies.",
            textRight: "I like to be around others, being the sun that shines on their rainy day.",
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
            id: 'survey2-8a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Yes, you strike me as a bit of a recluse. It seems perhaps you do know yourself after all. Next question, pick your favorite of the two.",
            faction: 'Surveys',
            textLeft: "Warm tea in a remote winter village.",
            textRight: "A morning cup of coffee in the backyard.",
            actionLeft: {
                brain: 1,
                smiley: 0
            },
            actionRight: {
                brain: 1,
                smiley: 0
            },
            location: 'survey'
        },
        {
            id: 'survey2-8b',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "Really, the sun? Seems a bit pretentious but no matter. Which of the two appeals more to you?",
            faction: 'Surveys',
            textLeft: "A cold drink in the middle of a desert.",
            textRight: "The calm before the storm.",
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
            id: 'survey2-9',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "I see... Last question now, and this one's an important one. Do you think you're dead?",
            faction: 'Surveys',
            textLeft: "To be honest, yes I do.",
            textRight: "The thought's crossed my mind, but I don't want to assume the worst.",
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
            id: 'survey2-10',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "hehe, whether you're dead or alive you won't make any progress until your memories return. I'm going to leave you for now, but I'll be thinking about our conversations. Until next time Jack...",
            faction: 'Surveys',
            textLeft: "Wait! I still have questions I want to ask!",
            textRight: "Going to abandon me again? Please, just tell me if I'm alive.",
            actionLeft: {
                brain: 0,
                smiley: 0
            },
            actionRight: {
                brain: 0,
                smiley: 0
            },
            location: 'survey'
        },
        {
            id: 'survey2-11a',
            imgUrl: '/decks/tutorial/judicator-white.png',
            title:'Jude',
            text: "More questions? No matter how many I answer, only you can answer the important ones. You should focus on protecting your mementos for now.",
            faction: 'Surveys',
            textLeft: "Fine, but I still don't understand what you mean.",
            textRight: "Answering some questions is better than none.",
            actionLeft: {
                brain: 0,
                smiley: 0
            },
            actionRight: {
                brain: 0,
                smiley: 0
            },
            location: 'survey'
        },
        {
            id: 'survey2-11b',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Abandon you? What ever gave you the impression I was gone. Don't worry about life and death, just focus on guarding the mementos and you'll be... fine.",
            faction: 'Surveys',
            textLeft: "Wait, have you been watching me the entire time?",
            textRight: "Memento this, memento that. What's so important about them anyways?",
            actionLeft: {
                brain: 0,
                smiley: 0
            },
            actionRight: {
                brain: 0,
                smiley: 0
            },
            location: 'survey'
        },
        {
            id: 'survey2-12',
            imgUrl: '/decks/tutorial/judicator-white-smile.png',
            title:'Jude',
            text: "Looks like that's all the time we have for now, see you soon Jack...",
            faction: 'Surveys',
            textLeft: "But I-",
            textRight: "...",
            actionLeft: {
                brain: 0,
                smiley: 0
            },
            actionRight: {
                brain: 0,
                smiley: 0
            },
            location: 'survey'
        },
        
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-1d',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: "Every darn person in this town is hell bent on getting in my way, are you going to be another delinquent in the making?",
            faction: 'Farmer',
            textLeft: "Don't worry, I won't be of any trouble.",
            textRight: "Maybe you're the one getting in everyone else's way.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-1e',
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: "I can't stand this village I tell you! The first chance I get, I'm gone like the wind.",
            faction: 'Farmer',
            textLeft: "I hear you.",
            textRight: "Be patient, maybe it'll get better.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 1,
                good: 0,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 1,
                good: 0,
                evil: 0
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
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-2e',
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "Hunting is in my blood, but I've never liked violence... is that weird?",
            faction: 'Hunter',
            textLeft: "No, I think that makes sense.",
            textRight: "Yes and no.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 1,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-3e',
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "Truth be told, I don't think I was ever cursed, I just miss my youth so much.",
            faction: 'Villager',
            textLeft: "Nothing lasts forever, time's arrow marches forward.",
            textRight: "Kind of ridiculous to go around telling everyone you're cursed then.",
            actionLeft: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-4e',
            imgUrl: '/decks/chapter1/villager.png',
            title:'Melody',
            text: "I've heard there are fairies and other magical creatures in a forest nearby.",
            faction: 'Villager',
            textLeft: "Yeah, I'll believe it when I see it.",
            textRight: "That can't be possible.",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 2,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-5e',
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Rowelda',
            text: "Sometimes I sit and wonder, am I the oldest person in the village? There's so much I wish I'd done sooner... Don't waste your life",
            faction: 'Villager',
            textLeft: "Don't worry, you still have plenty of years left.",
            textRight: "Thanks for the advice, but I don't plan on wasting my years.",
            actionLeft: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 2,
                good: 0,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 2,
                memory: 1,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-6e',
            imgUrl: '/decks/chapter1/cowheard.png',
            title:'Bernard',
            text: "Animals are simple creatures; they eat, sleep and poop. We could learn a lot from animals.",
            faction: 'Cowheard',
            textLeft: "We never give animals enough credit.",
            textRight: "You sound like a crazy person, you know that right?",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-7e',
            imgUrl: '/decks/chapter1/peasant.png',
            title:'Felix',
            text: "I might not have much, but I have my health. That's worth more than any amo-",
            faction: '...',
            textLeft: "Yeah yeah, whatever helps you sleep at night.",
            textRight: "Any amount of money in the world, I couldn't agree more.",
            actionLeft: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-8e',
            imgUrl: '/decks/chapter1/villager-brother.png',
            title:'Alexander',
            text: "If only someone understood the hardships of being so amazing and talented, I truly am alone at the top.",
            faction: 'Villager',
            textLeft: "You're alone but it's not because you're \"at the top\" that's for sure.",
            textRight: "The next time you go to speak, don't.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -2,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-1e',
            imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
            title:'Oscar',
            text: "I can't talk right now, I need to go train.",
            faction: 'Soldier',
            textLeft: "Sorry to bother you.",
            textRight: "Yes you probably do.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
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
            textRight: "Death and taxes friend.",
            actionLeft: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 0,
                memory: 1,
                good: 1,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-2e',
            imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
            title:'August',
            text: "If I run away from the army, do you think they'll have me hanged?",
            faction: 'Soldier',
            textLeft: "It's a strong possibility.",
            textRight: "You'll be fine, won't know unless you try.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Town of Beginning'
        },

        {
            id: 'chapter1-s-3a',
            imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
            title:'Dedu',
            text: "I've come a long way from my home village, the people here do not know war like my people do.",
            faction: 'Soldier',
            textLeft: "Don't judge people before getting to know them, you might be surprised..",
            textRight: "I'm sorry you have to live through that.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
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
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
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
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 1,
                good: 0,
                evil: 0
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-3e',
            imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
            title:'Dedu',
            text: "Life isn't all about the glory of battle, but it doesn't hurt to know how to defend yourself.",
            faction: 'Soldier',
            textLeft: "I suppose you're right, but I don't want to hurt anyone.",
            textRight: "If push comes to shove, I can defend myself just fine.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
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
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Town of Beginning'
        },
        {
            id: 'chapter1-s-4e',
            imgUrl: '/decks/chapter1/soldiers/captain.png',
            title:'Hugo',
            text: "What makes a great leader?",
            faction: 'Soldier',
            textLeft: "Making hard decisions, even if it means abandoning one of your men.",
            textRight: "Listening to your people and allowing everyone to have a say.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Town of Beginning'
        },
    ],

    chapter2: [
        // Monk-white
        {
            id: 'chapter2-1a',
            imgUrl: '/decks/chapter2/monk-white-1.png',
            title:'Hayden',
            text: 'Everything has a natural rythm, if you listen closely you can hear it.',
            faction: 'Monk',
            textLeft: "Yeah good luck with that.",
            textRight: "I don't think I'm ready to hear it yet, but I'll give it a try.",
            actionLeft: {
                health: 1,
                energy: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 1,
                energy: -1,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-1b',
            imgUrl: '/decks/chapter2/monk-white-1.png',
            title:'Hayden',
            text: 'Ohhmmmmmmmmmmmmmmmmmmmm...',
            faction: 'Monk',
            textLeft: "OooohhhhMMMmmMMmmMmmmmmm...",
            textRight: "I never could meditate like that.",
            actionLeft: {
                health: -1,
                energy: 1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 0,
                energy: -1,
                memory: 1,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-1c',
            imgUrl: '/decks/chapter2/monk-white-1.png',
            title:'Hayden',
            text: "If you're looking for answers, you must seek within",
            faction: 'Monk',
            textLeft: "When I look within, I see nothing.",
            textRight: "I'm not quite sure how to do that.",
            actionLeft: {
                health: 2,
                memory: 1,
                energy: -1,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 0,
                memory: 0,
                energy: 1,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-1d',
            imgUrl: '/decks/chapter2/monk-white-2.png',
            title:'Hayden',
            text: "I sense a great disturbance within you.",
            faction: 'Monk',
            textLeft: "I don't feel disturbed.",
            textRight: "Why don't you focus within yourself instead.",
            actionLeft: {
                health: -1,
                energy: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                energy: 0,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-1e',
            imgUrl: '/decks/chapter2/monk-white-2.png',
            title:'Hayden',
            text: "If you encounter Moses in this forest, he's a fellow student of the monastery and a gentle soul.",
            faction: 'Monk',
            textLeft: "I'll be sure to keep an eye out.",
            textRight: "Actually I have met him, it's like talking to the same person.",
            actionLeft: {
                health: -1,
                energy: -1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 1,
                energy: 0,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },

        // Monk-brown
        {
            id: 'chapter2-2a',
            imgUrl: '/decks/chapter2/monk-brown.png',
            title:'Moses',
            text: "Sometimes Hayden can come off as a bit preachy, but he's got a good heart.",
            faction: 'Moses',
            textLeft: "You both seem to be good hearted people, I feel at peace around you.",
            textRight: "I don't see it that way.",
            actionLeft: {
                health: -2,
                energy: 1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                energy: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-2b',
            imgUrl: '/decks/chapter2/monk-brown.png',
            title:'Moses',
            text: "You must always be mindful of all living beings, that includes animals and vegetation as well.",
            faction: 'Moses',
            textLeft: "I could care less about hurting plants.",
            textRight: "I could care less about hurting animals.",
            actionLeft: {
                health: 1,
                energy: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 2,
                energy: 0,
                memory: 1,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-2c',
            imgUrl: '/decks/chapter2/monk-brown.png',
            title:'Moses',
            text: "You seem like you've been running when you could have been walking. Maybe it's time to slow down.",
            faction: 'Moses',
            textLeft: "You're right, I haven't had a moment to catch my breath since I got here.",
            textRight: "You seem like someone who should mind their own business.",
            actionLeft: {
                health: -1,
                energy: 1,
                memory: 1,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 2,
                energy: -2,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-2d',
            imgUrl: '/decks/chapter2/monk-brown-smile.png',
            title:'Moses',
            text: "I came here to be in touch with nature, but I didn't expect to find magical creatures.",
            faction: 'Moses',
            textLeft: "A surprise is nice every now and then.",
            textRight: "I'm not sure if I can trust those beasts.",
            actionLeft: {
                health: 1,
                energy: 0,
                memory: 1,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                energy: -1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-2e',
            imgUrl: '/decks/chapter2/monk-brown-smile.png',
            title:'Moses',
            text: "As much as I sit in thought, I cannot remember if I was always a monk. Where was I before I came to this forest?",
            faction: 'Moses',
            textLeft: "Nobody seems to remember anything.",
            textRight: "Perhaps you've always been here, and you always will be.",
            actionLeft: {
                health: -1,
                energy: 0,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                energy: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Fairy-blue TODO: continue adding energy: 0,
        {
            id: 'chapter2-3a',
            imgUrl: '/decks/chapter2/fairy-blue.png',
            title:'Spinkle',
            text: "Humans confuse me, why do they run when faced with unfamiliar beings?",
            faction: 'Fairy',
            textLeft: "Because unfamiliarity leads to danger.",
            textRight: "Aren't you the least bit frightened to meet strangers like me?",
            actionLeft: {
                health: 1,
                memory: 1,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 2,
                memory: 1,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-3b',
            imgUrl: '/decks/chapter2/fairy-blue.png',
            title:'Spinkle',
            text: "I live in this forest with my 2 sisters, but recently there have been a lot of visitors.",
            faction: 'Fairy',
            textLeft: "I don't think any of us meant to show up.",
            textRight: "So everyone showed up here around the same time...",
            actionLeft: {
                health: 0,
                memory: 1,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 1,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-3c',
            imgUrl: '/decks/chapter2/fairy-blue.png',
            title:'Spinkle',
            text: "Hey there, I'm Spinkle! I'm a fairy and you seem to be human, nice to meet you!",
            faction: 'Fairy',
            textLeft: "Hi Spinkle, I'm... I'm Jack?",
            textRight: "A real fairy, wow.",
            actionLeft: {
                health: -2,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-3d',
            imgUrl: '/decks/chapter2/fairy-blue.png',
            title:'Spinkle',
            text: "Sometimes I worry about my younger sisters, one tends to get into trouble and the other is too trusting.",
            faction: 'Fairy',
            textLeft: "It's normal to worry when you're the eldest.",
            textRight: "You should let them live and learn, you're worrying for nothing.",
            actionLeft: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-3e',
            imgUrl: '/decks/chapter2/fairy-blue.png',
            title:'Spinkle',
            text: "My sisters and I are actually magical triplets, meaning we were all born from the same ingredients. Still, they refer to me as their \" big sister\".",
            faction: 'Fairy',
            textLeft: "I have no idea what that meant.",
            textRight: "Maybe because you're the most mature.",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Fairy-purple
        {
            id: 'chapter2-4a',
            imgUrl: '/decks/chapter2/fairy-purple.png',
            title:'Tinkle',
            text: "Woah a human, want to be best friends?",
            faction: 'Fairy',
            textLeft: "That was fast.",
            textRight: "And you are?",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4b',
            imgUrl: '/decks/chapter2/fairy-purple.png',
            title:'Tinkle',
            text: "You have a nice face, I haven't seen many like it.",
            faction: 'Fairy',
            textLeft: "Thank you!",
            textRight: "Thank you?",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4c',
            imgUrl: '/decks/chapter2/fairy-purple.png',
            title:'Tinkle',
            text: "Spinkle never trusts anybody, but people are good! I don't understand why she doesn't understand that.",
            faction: 'Fairy',
            textLeft: "Not everyone is good.",
            textRight: "Maybe she's met the wrong people.",
            actionLeft: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4d',
            imgUrl: '/decks/chapter2/fairy-purple.png',
            title:'Tinkle',
            text: "Spinkle, Winkle and Tinkle, the super duper awesome fairy berry very cherry trio!!!",
            faction: 'Fairy',
            textLeft: "...",
            textRight: "Spinkle, winky and tink what? Can you repeat that.",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4e',
            imgUrl: '/decks/chapter2/fairy-purple.png',
            title:'Tinkle',
            text: "Hey I'm Tinkle... wait have we already met?",
            faction: 'Fairy',
            textLeft: "Yes, not even that long ago.",
            textRight: "If we have I don't remember.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Fairy-green
        {
            id: 'chapter2-4a',
            imgUrl: '/decks/chapter2/fairy-green.png',
            title:'Winkle',
            text: "Winkle here, not winkle, WRINKLE. Wait, no I mean not wrinkle it's winkle, WINKLE!",
            faction: 'Fairy',
            textLeft: "Nice to mean you winklewinkle",
            textRight: "How are you confused about your own name?",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4b',
            imgUrl: '/decks/chapter2/fairy-green.png',
            title:'Winkle',
            text: "Some people are surprised that fairies exist, but some people are even more surprised that we aren't tiny. Why would we by tiny?",
            faction: 'Fairy',
            textLeft: "I guess humans just always assumed you were small.",
            textRight: "Well I can't seem to picture a giant fairy.",
            actionLeft: {
                health: -1,
                memory: 1,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4c',
            imgUrl: '/decks/chapter2/fairy-green.png',
            title:'Winkle',
            text: "You're probably like all the other humans, greedy and rude.",
            faction: 'Fairy',
            textLeft: "You don't even know me...",
            textRight: "Humans are the worst, you won't hear any arguments here.",
            actionLeft: {
                health: -2,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4d',
            imgUrl: '/decks/chapter2/fairy-green.png',
            title:'Winkle',
            text: "I bet you wish you could fly too.",
            faction: 'Fairy',
            textLeft: "I bet you wish you weren't green.",
            textRight: "Sure, rub it in my face.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-4e',
            imgUrl: '/decks/chapter2/fairy-green.png',
            title:'Winkle',
            text: "My sisters seem to think we've always lived here... but I don't know. Part of me feels like there was something before all of this.",
            faction: 'Fairy',
            textLeft: "You too?",
            textRight: "Since most people arrived here, you probably did too.",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 1,
                memory: 1,
                good: 1,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Druid
        {
            id: 'chapter2-5a',
            imgUrl: '/decks/chapter2/druid.png',
            title:'Deku',
            text: "Leave this place.",
            faction: 'Druid',
            textLeft: "Such hospitality.",
            textRight: "Believe me, I would love to.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-5b',
            imgUrl: '/decks/chapter2/druid.png',
            title:'Deku',
            text: "...",
            faction: 'Druid',
            textLeft: "Can I help you?",
            textRight: "Staring is rude.",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-5c',
            imgUrl: '/decks/chapter2/druid.png',
            title:'Deku',
            text: "Who are you people?",
            faction: 'Druid',
            textLeft: "I don't mean to trespass, I'm looking for my way home.",
            textRight: "Who are you?",
            actionLeft: {
                health: -1,
                memory: 0,
                good: 1,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-5d',
            imgUrl: '/decks/chapter2/druid.png',
            title:'Deku',
            text: "I guard this forest alone, I don't know what became of the other druids.",
            faction: 'Druid',
            textLeft: "Maybe they all died?",
            textRight: "I'm sorry did you say druid?",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 1,
                evil: 0
            },
            location: 'Magical Forest'
        },
        {
            id: 'chapter2-5e',
            imgUrl: '/decks/chapter2/druid.png',
            title:'Deku',
            text: "You humans are no friend to nature, therefore I am no friend to humans.",
            faction: 'Druid',
            textLeft: "I'll think about you the next time I eat a salad.",
            textRight: "Is that a threat?",
            actionLeft: {
                health: 2,
                memory: 0,
                good: 0,
                evil: 1
            },
            actionRight: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Rabbit
        {
            id: 'chapter2-6a',
            imgUrl: '/decks/chapter2/rabbit.png',
            title:'Bounder',
            text: "*Sniff* *Sniff*",
            faction: 'Lapin',
            textLeft: "Do I smell like food or something?",
            textRight: "I don't have any food strange bunny.",
            actionLeft: {
                health: 1,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: -1,
                memory: 0,
                good: 0,
                evil: 1
            },
            location: 'Magical Forest'
        },

        // Snake
        {
            id: 'chapter2-7a',
            imgUrl: '/decks/chapter2/snake.png',
            title:'Pentser',
            text: "...",
            faction: 'Sirpent',
            textLeft: "...",
            textRight: "...",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Hippy-boy
        {
            id: 'chapter2-8a',
            imgUrl: '/decks/chapter2/hippy-boy.png',
            title:'Ziggy',
            text: "...",
            faction: 'Human',
            textLeft: "...",
            textRight: "...",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },

        // Hippy-girl
        {
            id: 'chapter2-8a',
            imgUrl: '/decks/chapter2/hippy-girl.png',
            title:'Powder',
            text: "...",
            faction: 'Human',
            textLeft: "...",
            textRight: "...",
            actionLeft: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
    ],

    chapter2Elves: [
        // Male Elf
        {
            id: 'chapter2-e-1a',
            imgUrl: '/decks/chapter2/elves/elf-male.png',
            title:'Aldwin',
            text: "I'm an elf",
            faction: 'Elf',
            textLeft: "Cool",
            textRight: "Radical",
            actionLeft: {
                health: 0,
                energy: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                energy: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
        // TODO: remove comment, temp reminder that there's also smile elf
        {
            id: 'chapter2-e-1b',
            imgUrl: '/decks/chapter2/elves/elf-male-smile.png',
            title:'Aldwin',
            text: "I'm an elf",
            faction: 'Elf',
            textLeft: "Cool",
            textRight: "Radical",
            actionLeft: {
                health: 0,
                energy: 0,
                memory: 0,
                good: 0,
                evil: 0
            },
            actionRight: {
                health: 0,
                memory: 0,
                energy: 0,
                good: 0,
                evil: 0
            },
            location: 'Magical Forest'
        },
    ],
});

// For resetting the game
export const newDeck = writable({...allDecks});