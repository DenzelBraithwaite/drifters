import { writable } from 'svelte/store';

const chapter4 = writable([
    // Mr. Gallock - ALL
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
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-1b',
        imgUrl: '/decks/chapter1/angry-cowboy.png',
        title:'Mr. Gallock',
        text: 'Those damn Jamison boys are ruining this village, either talk to their parents or I will.',
        faction: 'Farmer',
        textLeft: "Why should I be the one to talk to their parents?",
        textRight: "Sure, but I'm not that I'll be of any help.",
        actionLeft: {
            health: 1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // Shelly - ALL
    {
        id: 'chapter1-2a',
        imgUrl: '/decks/chapter1/archer.png',
        title:'Shelly',
        text: 'The wild animals have been frightened lately, do you have any idea as to why?',
        faction: 'Hunter',
        textLeft: "What animals, I haven't seen any animals?",
        textRight: "No, but maybe you can do something about it?",
        actionLeft: {
            health: 0,
            memory: 1,
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
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
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // Krystina - ALL
    {
        id: 'chapter1-3a',
        imgUrl: '/decks/chapter1/gatherer.png',
        title:'Krystina',
        text: "People are like flowers, we bud, bloom and wither away. Some of us are cynical roses and some are easy going lilies. What type of flower are you?",
        faction: 'Villager',
        textLeft: "Maybe a lotus flower, strong and resilient.",
        textRight: "A moonflower for sure, I like to make my own path in life.",
        actionLeft: {
            health: 0,
            memory: 1,
        },
        actionRight: {
            health: 0,
            memory: 1,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-3b',
        imgUrl: '/decks/chapter1/gatherer.png',
        title:'Krystina',
        text: "Have you ever heard of snowdrops? They remind me of home, we used to grow plenty there. These flowers may look like snowdrops, but they actually aren't. Truth is, I don't know what these are or why I have them.",
        faction: 'Villager',
        textLeft: "Maybe you picked them in your sleep?",
        textRight: "I've never heard of snowdrops, those just look like normal flowers to me.",
        actionLeft: {
            health: -1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    
    // Melody - Diamond, she is one of the 8 special chars that will be revealed as a victim (for her vanity she represents DIAMOND).
    {
        id: 'chapter1-4a',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Melody',
        text: "Did you know there used to be a woman in this village who was beloved by all, even the animals.",
        faction: 'Villager',
        textLeft: "She sounds like an incredible person, I hope to meet her someday.",
        textRight: "I'm afraid not, I only just got here myself and I don't plan on staying.",
        actionLeft: {
            health: -1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-4b',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Meoldy',
        text: "Do you find me beautiful? Everyone finds me beautiful, everyone.",
        faction: 'Villager',
        textLeft: "You're very pretty, from a distance.",
        textRight: 'Not everyone.',
        actionLeft: {
            health: 1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // Rowelda - ALL
    {
        id: 'chapter1-5a',
        imgUrl: '/decks/chapter1/villager-old.png',
        title:'Rowelda',
        text: "I don't quite like the way you're sniffing about this village boy, quit it!",
        faction: 'Villager',
        textLeft: "Excuse you, I wasn't even doing anything.",
        textRight: 'Mind your own business you old hag.',
        actionLeft: {
            health: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
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
            health: 1,
            memory: 1,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // Bernard - ALL
    {
        id: 'chapter1-6a',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "My cattle are well mannered, but you can never fully trust a wild animal, wouldn't you agree?",
        faction: 'Cowheard',
        textLeft: "Perhaps you're being a little paranoid mister.",
        textRight: "I don't even trust myself.",
        actionLeft: {
            health: 1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 1,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-6b',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "Have you run into that miserable farmer Gallock? Don't pay him any mind, that's just how he is.",
        faction: 'Cowheard',
        textLeft: "Yeah I figured as much, thanks for the advice.",
        textRight: "Someone ought to knock him down a peg or two.",
        actionLeft: {
            health: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            memory: 1,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // Felix - HEART, he is one of the 8 special chars that will be revealed as a victim (for his purity he represents HEART).
    {
        id: 'chapter1-7a',
        imgUrl: '/decks/chapter1/peasant.png',
        title:'Felix',
        text: "Please sir, do you have anything to spare? Anything at all will help.",
        faction: 'Peasant',
        textLeft: "Begone from me at once, peasant!",
        textRight: "I'm sorry kid, I don't have anything to offer you.",
        actionLeft: {
            health: 1,
            memory: 1,
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-7b',
        imgUrl: '/decks/chapter1/peasant.png',
        title:'Felix',
        text: "I can't go on like this anymore, please help me.",
        faction: 'Peasant',
        textLeft: "Then stop hanging on and give up already.",
        textRight: "I wish I could.",
        actionLeft: {
            health: 1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // Alexander - ALL
    {
        id: 'chapter1-8a',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "My beauty is renown far and wide, my sister isn't too bad herself, but her beauty could simply never compare.",
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
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-8b',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "Why if I were one of the king's royal guards, the wars would be over by nightfall! Sadly, I've no time for such trivial things.",
        faction: 'Villager',
        textLeft: "Yeah, I'm sure the king's army could use a knight like you.",
        textRight: "Trivial? Is the upkeep of your appearance too demanding to spare time to fight for a cause?",
        actionLeft: {
            health: 0,
            memory: 0,
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning',
        appearsWithIcon: ''
    },

    // White monk - ALL
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
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
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
            health: 0,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 1,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    
    // Brown monk - ALL
    {
        id: 'chapter2-2a',
        imgUrl: '/decks/chapter2/monk-brown.png',
        title:'Moses',
        text: "Sometimes Hayden can come off as a bit preachy, but he's got a good heart, mind and soul.",
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
            aura: 0,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
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
        location: 'Magical Forest',
        appearsWithIcon: ''
    },

    // Blue Fairy - ALL
    {
        id: 'chapter2-3a',
        imgUrl: '/decks/chapter2/fairy-blue.png',
        title:'Spinkle',
        text: "Humans confuse me, why do they run when faced with unfamiliar beings?",
        faction: 'Fairy',
        textLeft: "Because unfamiliarity leads to danger, maybe you've been lucky and haven't met the wrong people yet.",
        textRight: "Aren't you the least bit frightened to meet a stranger like me?",
        actionLeft: {
            health: -1,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 0,
            memory: 1,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    {
        id: 'chapter2-3b',
        imgUrl: '/decks/chapter2/fairy-blue.png',
        title:'Spinkle',
        text: "I live in this forest with my 2 sisters, but recently there have been a lot of visitors.",
        faction: 'Fairy',
        textLeft: "I don't think any of us meant to show up here, but here we are.",
        textRight: "I wonder why everyone showed up here around the same time?",
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
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    
    // Purple Fairy - ALL
    {
        id: 'chapter2-4a',
        imgUrl: '/decks/chapter2/fairy-purple.png',
        title:'Tinkle',
        text: "Woah a human, want to be best friends?",
        faction: 'Fairy',
        textLeft: "Not particularly, no.",
        textRight: "And you are?",
        actionLeft: {
            health: 1,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
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
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    
    // Green Fairy - ALL
    {
        id: 'chapter2-4a',
        imgUrl: '/decks/chapter2/fairy-green.png',
        title:'Winkle',
        text: "Winkle here, not winkle, WRINKLE. Wait, no I mean not wrinkle it's winkle, WINKLE!",
        faction: 'Fairy',
        textLeft: "A winklewinkle fairy confused about her name, this forest is full of surprises.",
        textRight: "Nice to meet you wrinkle.",
        actionLeft: {
            health: 1,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: 0,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
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
            aura: 0,
            memory: 1,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    
    // Druid  - ALL
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
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    {
        id: 'chapter2-5b',
        imgUrl: '/decks/chapter2/druid.png',
        title:'Deku',
        text: "...",
        faction: 'Druid',
        textLeft: "Can I help you?",
        textRight: "...",
        actionLeft: {
            health: -1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },

    // Rabbit - GREEN AURA, the rabbit is one of the 8 special chars that will be revealed as a victim (this was a rabbit jack killed as a child, represented by GREEN aura for nature).
    {
        id: 'chapter2-6a',
        imgUrl: '/decks/chapter2/rabbit.png',
        title:'Bounder',
        text: "*Sniff* *Sniff*",
        faction: 'Lapin',
        textLeft: "Hey there little hare, come to hang for a bit?",
        textRight: "Come closer, see what happens.",
        actionLeft: {
            health: -1,
            aura: 1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: -1,
            memory: 1,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
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
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: -1,
            memory: 0,
        },
        location: 'Magical Forest',
        appearsWithIcon: ''
    },

    // Snake - ALL
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
        location: 'Magical Forest',
        appearsWithIcon: ''
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
        location: 'Magical Forest',
        appearsWithIcon: ''
    },

    // Hippy-boy - YELLOW AURA, Ziggy is one of the 8 special chars that will be revealed as a victim (he and jack grew up together, YELLOW aura symbolizes their friendship and sunny days.).
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
        location: 'Magical Forest',
        appearsWithIcon: ''
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
        location: 'Magical Forest',
        appearsWithIcon: ''
    },
    
    // Hippy-girl - ALL
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
        location: 'Magical Forest',
        appearsWithIcon: ''
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
        location: 'Magical Forest',
        appearsWithIcon: ''
    },

    // Wizard - ALL (twins irl with dark wizard)
    {
        id: 'chapter3-1a',
        imgUrl: '/decks/chapter3/wizard.png',
        title: 'Geldahn',
        text: "You ever get the feeling you're being followed? I can't shake the feeling that someone's watching me...",
        faction: 'Wizard',
        textLeft: "Isn't there some kind of spell you could cast to find out?",
        textRight: "I'll keep my eye open for you.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    {
        id: 'chapter3-1b',
        imgUrl: '/decks/chapter3/wizard.png',
        title: 'Geldahn',
        text: "Sometimes, I wonder if I should have become something other than a wizard. Maybe a farmer?",
        faction: 'Wizard',
        textLeft: "I think being a wizard is a lot more badass than being some farmer.",
        textRight: "I respect those who tend to animals, perhaps there's a way for you to do both.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    
    // Dark wizard - ALL (twins irl with wizard)
    {
        id: 'chapter3-2a',
        imgUrl: '/decks/chapter3/dark_wizard.png',
        title: 'Gahndel',
        text: "You might have met an older wizard who resembles me, I'd appreciate it if you kept our little interaction a secret.",
        faction: 'Wizard',
        textLeft: "Your secret is safe with me.",
        textRight: "You seem like you're up to no good.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    {
        id: 'chapter3-2b',
        imgUrl: '/decks/chapter3/dark_wizard.png',
        title: 'Gahndel',
        text: "The wizard who resembles me, I don't want to frighten him. But I feel as if I must watch over him.",
        faction: 'Wizard',
        textLeft: "Perhaps you should simply go talk to him.",
        textRight: "Yeah stalking from afar can't possibly end poorly.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    
    // Temptress - SMILEY, she is one of the 8 special chars that will be revealed as a victim. She was a lady of the night.
    {
        id: 'chapter3-3a',
        imgUrl: '/decks/chapter3/temptress.png',
        title: 'Luna',
        text: "Hey there, what's a nice strong looking man like you doing in a kingdom like this?",
        faction: 'Witch',
        textLeft: "Oh um, I'm not really sure. I kind of just got used to jumping around at this point.",
        textRight: "Looking for somebody like you.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    {
        id: 'chapter3-3b',
        imgUrl: '/decks/chapter3/temptress.png',
        title: 'Luna',
        text: "You look like someone who could use someone like me.",
        faction: 'Witch',
        textLeft: "Very smooth, but I think I better not.",
        textRight: "I don't think I could trust myself alone with you.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    
    // Bullisia - BRAIN, she is one of the 8 special chars that will be revealed as a victim. She was Jack's ex (symbolized as a smiley with varying emotions representing their relationship).
    {
        id: 'chapter3-4a',
        imgUrl: '/decks/chapter3/bullisia.png',
        title: 'Bullisia',
        text: "The name's Bullisia, my husband and I are blacksmiths who run a shop in the outskirts of the kingdom. You should pass by sometime.",
        faction: 'Blacksmith',
        textLeft: "Will do, except I don't have any weapons. Maybe I can buy one, although I'm not sure if I need one.",
        textRight: "You look... so familiar.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    {
        id: 'chapter3-4b',
        imgUrl: '/decks/chapter3/bullisia.png',
        title: 'Bullisia',
        text: "Why do you prolong your gaze when looking at me? If there's something you wish to get off your mind, speak.",
        faction: 'Blacksmith',
        textLeft: "I know you, your name isn't Bullisia and you aren't a blacksmith. I just can't remember where I know you from.",
        textRight: "I'm sorry, it's probably nothing.",
        actionLeft: {
            health: 0,
            aura: 0,
            sanity: 1,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    
    // #5 Jason - ALL
    {
        id: 'chapter3-5a',
        imgUrl: '/decks/chapter3/jason.png',
        title: 'Jason',
        text: "I finally remember my name, it's Jason! I'm a butcher, it's in my blood, I never want to lose that part of me.",
        faction: 'Butcher',
        textLeft: "Good for you, I wish I could remember my name, or anything else for that matter.",
        textRight: "A butcher, you're proud about that?",
        actionLeft: {
            health: -1,
            aura: 0,
            sanity: 1,
            memory: 1,
        },
        actionRight: {
            health: 1,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    {
        id: 'chapter3-5b',
        imgUrl: '/decks/chapter3/jason.png',
        title: 'Jason',
        text: "There are two kinds of people in this world, those who are butchers and those who are not. The name's Jason and as you can tell, I'm a proud butcher!",
        faction: 'Butcher',
        textLeft: "Hi Jason, I'm a \"those who are not\" and proud of it!",
        textRight: "Those who are sane and those who are not...", // TODO: make this a call back?
        actionLeft: {
            health: 1,
            aura: 1,
            sanity: -1, // because he is a butcher
            memory: 0,
        },
        actionRight: {
            health: 1,
            aura: 0,
            sanity: 1,
            memory: 1,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    
    // #6 Marge - ALL
    {
        id: 'chapter3-6a',
        imgUrl: '/decks/chapter3/marge.png',
        title: 'Marge',
        text: "This right here is a falcon, not a hawk. And I'm a falconer, not a falcon. I'm Marge, put her here!",
        faction: 'Falconer',
        textLeft: "Put what where and why would I think you're a falcon? Is it because you look like a bird?",
        textRight: "Falcon or hawk, keep that thing away from me.",
        actionLeft: {
            health: 1,
            aura: 0,
            sanity: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            sanity: 1,
            memory: 0,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
    {
        id: 'chapter3-6b',
        imgUrl: '/decks/chapter3/marge.png',
        title: 'Marge',
        text: "It was my father who taught me about birds, as a child I dreamed of flying often.",
        faction: 'Falconer',
        textLeft: "Everyone wishes they could fly, but that doesn't mean they should live their life among birds.",
        textRight: "I hope you found a new dream worth chasing.",
        actionLeft: {
            health: 1,
            aura: 0,
            sanity: 1,
            memory: 0,
        },
        actionRight: {
            health: -1,
            aura: 1,
            sanity: 1,
            memory: 1,
        },
        location: 'Arcana Kingdom',
        appearsWithIcon: ''
    },
]);

export default chapter4;