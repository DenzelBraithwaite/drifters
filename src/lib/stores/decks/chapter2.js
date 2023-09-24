import { writable } from 'svelte/store';

const chapter2 = writable([
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
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            memory: 1,
            aura: -1,
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
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 1,
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
            health: 1,
            memory: 1,
            aura: -1,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: -1,
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
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            health: -1,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            memory: 0,
            aura: -1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-2b',
        imgUrl: '/decks/chapter2/monk-brown.png',
        title:'Moses',
        text: "You must always be mindful of all living beings, that includes animals and vegetation as well.",
        faction: 'Moses',
        textLeft: "I don't care what happens to plants.",
        textRight: "I don't care what happens to animals.",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 1,
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
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },

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
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            memory: 1,
            aura: 1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-3b',
        imgUrl: '/decks/chapter2/fairy-blue.png',
        title:'Spinkle',
        text: "I live in this forest with my 2 sisters, but recently there have been a lot of visitors.",
        faction: 'Fairy',
        textLeft: "I don't think any of us meant to show up here, but here we are.",
        textRight: "So everyone showed up here around the same time... Interesting.",
        actionLeft: {
            health: 0,
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 1,
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
            health: -1,
            memory: 0,
            aura: -1,
        },
        actionRight: {
            health: -1,
            aura: 1,
            memory: 0,
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
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 1,
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
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 1,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 1,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 1,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
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
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 0,
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
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 0,
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
            health: 1,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
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
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-6b',
        imgUrl: '/decks/chapter2/rabbit.png',
        title:'Bounder',
        text: "*Sniff* *Sniff* *Sniff* *Sniff* *Sniff* *Sniff*!!!",
        faction: 'Lapin',
        textLeft: "UNPAW ME YOU WASCALLY WABBIT!",
        textRight: "AHHHHHHHHHHHH!!!!",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-6c',
        imgUrl: '/decks/chapter2/rabbit.png',
        title:'Bounder',
        text: "*Sniff*...",
        faction: 'Lapin',
        textLeft: "That's a nice distance, stay there.",
        textRight: "I should sniff you back so you know how it feels.",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-6d',
        imgUrl: '/decks/chapter2/rabbit.png',
        title:'Bounder',
        text: "The rabbit stares at you and smiles. * :3 *",
        faction: 'Lapin',
        textLeft: "Let's just sit here and relax.",
        textRight: "You're not so bad now are you?",
        actionLeft: {
            health: 1,
            aura: 3,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: 1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-6e',
        imgUrl: '/decks/chapter2/rabbit.png',
        title:'Bounder',
        text: "Hey",
        faction: 'Lapin',
        textLeft: "Holy shit you can talk?",
        textRight: "Hey",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: 1,
            memory: 0,
        },
        location: 'Magical Forest'
    },

    // Snake
    {
        id: 'chapter2-7a',
        imgUrl: '/decks/chapter2/snake.png',
        title:'Pentsser',
        text: "What'ss up friend, you want ssome sspecial weaponss?",
        faction: 'Sirpent',
        textLeft: "No thank you ssir.",
        textRight: "SSounds like a ssssscam!",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-7b',
        imgUrl: '/decks/chapter2/snake.png',
        title:'Pentsser',
        text: "SSay, you look like a man who needss a new sscimitar!",
        faction: 'Sirpent',
        textLeft: "Is that what I look like?",
        textRight: "Something tells me there's bad \"sssss\"ecrets about your shop.",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-7c',
        imgUrl: '/decks/chapter2/snake.png',
        title:'Pentsser',
        text: "SSurfs up on new sshieldss perfect for sshield ssurfing on ssale at Pentsserss only!!!",
        faction: 'Sirpent',
        textLeft: "I wonder if I should take a look...",
        textRight: "You won't tempt me snake!",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-7d',
        imgUrl: '/decks/chapter2/snake.png',
        title:'Pentsser',
        text: "SSir, sstop right there! You musst take a look at my sshop behind thesse busshess...",
        faction: 'Sirpent',
        textLeft: "Does anyone fall for that?",
        textRight: "You couldn't be any creepier.",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-7e',
        imgUrl: '/decks/chapter2/snake.png',
        title:'Pentsser',
        text: "SSurprissed I can talk? SSo am I, sss-ss-ss-ss-ssss!",
        faction: 'Sirpent',
        textLeft: "Is that you laughing?",
        textRight: "How odd.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: 1,
            memory: 1,
        },
        location: 'Magical Forest'
    },

    // Hippy-boy
    {
        id: 'chapter2-8a',
        imgUrl: '/decks/chapter2/hippy-boy.png',
        title:'Ziggy',
        text: "Maaan you're totally like the first normal lookin dude I've seen here.",
        faction: 'Human',
        textLeft: "Yeah, this forest has a lot of interesting... creatures.",
        textRight: "I'm glad we aren't the only ones.",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8b',
        imgUrl: '/decks/chapter2/hippy-boy.png',
        title:'Ziggy',
        text: "You know, before I got here man... I was like, I was. I was totally like... um-",
        faction: 'Human',
        textLeft: "Forget what you were going to say?",
        textRight: "Don't worry, we all forgot what we were doing.",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8c',
        imgUrl: '/decks/chapter2/hippy-boy.png',
        title:'Ziggy',
        text: "So like, I'm walking through the forest for some reason ya know... and I'm looking for... shoot my mind's totally blank man.",
        faction: 'Human',
        textLeft: "Didn't happen to find magic mushrooms did you?",
        textRight: "Maybe you should drink some water.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: -1,
            aura: 1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8d',
        imgUrl: '/decks/chapter2/hippy-boy.png',
        title:'Ziggy',
        text: "Woah... you know something? I think I'm here with a friend, I totally forgot hahaha. Wonder where she is now?",
        faction: 'Human',
        textLeft: "How did you manage to forget that you're here with someone?",
        textRight: "It seems you have a special case of this amnesia.",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8e',
        imgUrl: '/decks/chapter2/hippy-boy.png',
        title:'Ziggy',
        text: "POWDER!!! That's what I forgot, it's powder man! I need to find power!",
        faction: 'Human',
        textLeft: "Yeah you can find powder on your own.",
        textRight: "Ohhhhhh powder.",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: 1,
            memory: 1,
        },
        location: 'Magical Forest'
    },

    // Hippy-girl
    {
        id: 'chapter2-8a',
        imgUrl: '/decks/chapter2/hippy-girl.png',
        title:'Powder',
        text: "Have you seen um... Have you seen... Ahhh forget it.",
        faction: 'Human',
        textLeft: "Okay?",
        textRight: "Guess it wasn't important.",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8b',
        imgUrl: '/decks/chapter2/hippy-girl.png',
        title:'Powder',
        text: "Hey, the names Powder. I can't remember what I'm doing in these woods, but I know I'm doing something.",
        faction: 'Human',
        textLeft: "Yeah join the club.",
        textRight: "You remind me of someone.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8c',
        imgUrl: '/decks/chapter2/hippy-girl.png',
        title:'Powder',
        text: "Zion? Zack..? Z-zzz..... zzzzi- Zigo? Ziga? Ughh forget it.",
        faction: 'Human',
        textLeft: "I want to help, but I kind of also want to watch.",
        textRight: "You'll get there eventually.",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: 1,
            memory: 1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8d',
        imgUrl: '/decks/chapter2/hippy-girl.png',
        title:'Powder',
        text: "You know what, if I am here with someone, they'll find me eventually. I give up on looking.",
        faction: 'Human',
        textLeft: "Hopeless.",
        textRight: "That's a solid plan.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-8e',
        imgUrl: '/decks/chapter2/hippy-girl.png',
        title:'Powder',
        text: "Oh.My.God. I forgot about Ziggy AGAIN! Ziggyyyyyyyy!!!",
        faction: 'Human',
        textLeft: "It's like watching a dog chase their tail.",
        textRight: "One day you'll find each other, one day...",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest'
    },
]);

export default chapter2;