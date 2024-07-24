import { writable } from 'svelte/store';

const chapter1 = writable([
    // Mr. Gallock - ALL
    {
        id: 'chapter1-1a',
        imgUrl: '/decks/chapter1/angry-cowboy.png',
        title:'Mr. Gallock',
        text: 'Shoot, it seems the pests are at my crop again, can you lend me a hand?',
        faction: 'Farmer',
        textLeft: "I have no time for that!",
        textRight: "Sure, I guess I'm not in a rush",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-1b',
        imgUrl: '/decks/chapter1/angry-cowboy.png',
        title:'Mr. Gallock',
        text: 'Those damn Jamison boys are ruining this village, either talk to their parents or I will.',
        faction: 'Farmer',
        textLeft: "Why is that my responsibility?",
        textRight: "Sure, but I'm not sure that I'll be of any help.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-1c',
        imgUrl: '/decks/chapter1/angry-cowboy.png',
        title:'Mr. Gallock',
        text: "I can't seem to remember what I was doing last...",
        faction: 'Farmer',
        textLeft: "That happens when you get old.",
        textRight: "Try retracing your steps, see if that helps.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-1d',
        imgUrl: '/decks/chapter1/angry-cowboy.png',
        title:'Mr. Gallock',
        text: "Every darn person in this town is hell bent on getting in my way, are you going to be another delinquent in the making?",
        faction: 'Farmer',
        textLeft: "Don't worry, I won't be of any trouble.",
        textRight: "Maybe you're the one getting in everyone else's way.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-1e',
        imgUrl: '/decks/chapter1/angry-cowboy.png',
        title:'Mr. Gallock',
        text: "I can't stand this village I tell you! The first chance I get, I'm gone like the wind.",
        faction: 'Farmer',
        textLeft: "Be patient, maybe it'll get better.",
        textRight: "I hear you.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            memory: 0,
        },
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
        location: 'Choice',
        actionLeft: {
            heart: 0,
            diamond: 0,
            memory: 1,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
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
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-2c',
        imgUrl: '/decks/chapter1/archer.png',
        title:'Shelly',
        text: "I remember hunting in the woods recently, and then... And then what?",
        faction: 'Hunter',
        textLeft: "Maybe you decided to camp under the stars?",
        textRight: "Keep trying, you'll remember something eventually.",
        location: 'Choice',
        actionLeft: {
            heart: 0,
            diamond: 0,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-2d',
        imgUrl: '/decks/chapter1/archer.png',
        title:'Shelly',
        text: "I've been hunting since I was little, my daddy used to take me out back in the forest before...",
        faction: 'Hunter',
        textLeft: "Before what? You don't have to talk about it if you don't want to.",
        textRight: "Did you kill him?",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-2e',
        imgUrl: '/decks/chapter1/archer.png',
        title:'Shelly',
        text: "It's easy to get lost in the woods if you aren't careful, especially come dark. Best to leave a trail so you know where you've been.",
        faction: 'Hunter',
        textLeft: "I'll remember that the next time I wander into the woods blindly.",
        textRight: "Maybe you should avoid the woods altogether in the future.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
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
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-3b',
        imgUrl: '/decks/chapter1/gatherer.png',
        title:'Krystina',
        text: "Have you ever heard of snowdrops? They remind me of home, we used to grow plenty there. These flowers may look like snowdrops, but they actually aren't. Truth is, I don't know what these are or why I have them.",
        faction: 'Villager',
        textLeft: "Maybe you picked them in your sleep?",
        textRight: "Those look like normal flowers to me.",
        location: 'Choice',
        actionLeft: {
            heart: 0,
            diamond: 0,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-3c',
        imgUrl: '/decks/chapter1/gatherer.png',
        title:'Krystina',
        text: "These flowers... what is it about these flowers...",
        faction: 'Villager',
        textLeft: "Maybe they mean something to you, a reminder of someone special?",
        textRight: "They are very pretty, you have a good eye.",
        location: 'Choice',
        actionLeft: {
            heart: 0,
            diamond: 0,
            memory: 1,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-3d',
        imgUrl: '/decks/chapter1/gatherer.png',
        title:'Krystina',
        text: "Flowers bring joy, comfort the sad and excite the romantic. Flowers are amazing, wouldn't you agree?",
        faction: 'Villager',
        textLeft: "Flowers are just flowers.",
        textRight: "I've never thought about it like that before.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-3e',
        imgUrl: '/decks/chapter1/gatherer.png',
        title:'Krystina',
        text: "There are many houses in the village, but I don't know of anyone living in any of them. Isn't that strange?",
        faction: 'Villager',
        textLeft: "Doesn't anybody sleep here?",
        textRight: "That means they're up for grabs.",
        location: 'Choice',
        actionLeft: {
            heart: 0,
            diamond: 0,
            memory: 1,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    

    // Melody - Diamond, she is one of the 8 special chars that will be revealed as a victim (for her vanity she represents DIAMOND).
    {
        id: 'chapter1-4a',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Melody',
        text: "Did you know there used to be a woman in this village who was beloved by all, even the animals.",
        faction: 'Villager',
        textLeft: "She sounds like an incredible person.",
        textRight: "Nope, I just got here and I don't plan on staying.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-4b',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Meoldy',
        text: "Do you find me beautiful? Everyone finds me beautiful, everyone.",
        faction: 'Villager',
        textLeft: "You're very pretty.",
        textRight: 'Not everyone.',
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-4c',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Melody',
        text: "I remember him watching me... following me... What did he do to me?",
        faction: 'Villager',
        textLeft: 'What did who do? Why was he following you?',
        textRight: "Probably what you deserved.",
        location: 'Choice',
        actionLeft: {
            heart: 0,
            diamond: 0,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-4d',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Melody',
        text: "Have you met my brother? He's so full of himself, claims he's the most handsome man in the village.",
        faction: 'Villager',
        textLeft: 'Sounds familiar.',
        textRight: "Maybe, it's a small village.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-4e',
        imgUrl: '/decks/chapter1/villager.png',
        title:'Melody',
        text: "I've heard there are fairies and other magical creatures in a forest nearby.",
        faction: 'Villager',
        textLeft: "Is that true? I hope to meet them one day.",
        textRight: "Oh yeah? Maybe there are dinosaurs in the sky too.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
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
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-5b',
        imgUrl: '/decks/chapter1/villager-old.png',
        title:'Rowelda',
        text: "Why are you still here? If you've finished your business here then begone!",
        faction: 'Villager',
        textLeft: "I didn't choose to come here.",
        textRight: "You need to watch your tone old lady.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-5c',
        imgUrl: '/decks/chapter1/villager-old.png',
        title:'Rowelda',
        text: "It was so quiet before I came here, why did I ever leave... when did I leave?",
        faction: 'Villager',
        textLeft: "You can always go back the way you came, can't you?",
        textRight: "This place is your home now, you should try to get used to it.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-5d',
        imgUrl: '/decks/chapter1/villager-old.png',
        title:'Rowelda',
        text: "Those Jamison boys aren't the problem, they lack discipline and parenting. Why if I raised those boys, things would be different I tell you.",
        faction: 'Villager',
        textLeft: "It's not too late to try.",
        textRight: "I wish someone raised you properly.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-5e',
        imgUrl: '/decks/chapter1/villager-old.png',
        title:'Rowelda',
        text: "Sometimes I sit and wonder, am I the oldest person in the village? There's so much I wish I'd done sooner... Don't waste your life boy!",
        faction: 'Villager',
        textLeft: "Don't worry, you still have plenty of years left.",
        textRight: "Unlike you I plan on living my life, not wasting it.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },

    // Bernard - ALL
    {
        id: 'chapter1-6a',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "My cattle are well mannered, but you can never fully trust a wild animal, wouldn't you agree?",
        faction: 'Cowheard',
        textLeft: "Perhaps you're being a little paranoid.",
        textRight: "I don't even trust myself.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-6b',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "Have you run into that miserable farmer Gallock? Don't pay him any mind, that's just how he is.",
        faction: 'Cowheard',
        textLeft: "Yeah I figured, thanks for the advice.",
        textRight: "Someone ought to knock him down a peg or two.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-6c',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "Life is simple, it's the people that complicate it. Sometimes, a lonely road is the only road you need.",
        faction: 'Cowheard',
        textLeft: "Maybe you just don't see the good in people.",
        textRight: "What's the point of life if there's no one to share it with?",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-6d',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "One day, my time will come. I need to make sure the cattle are properly taken care of.",
        faction: 'Cowheard',
        textLeft: "Your life is more important than cattle.",
        textRight: "I can appreciate a man of devotion.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-6e',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "Animals are simple creatures, they eat, sleep and defecate. We could learn a lot from animals.",
        faction: 'Cowheard',
        textLeft: "We never give animals enough credit.",
        textRight: "You sound like a crazy person.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
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
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 1,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
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
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-7c',
        imgUrl: '/decks/chapter1/peasant.png',
        title:'Felix',
        text: "My mom is sick, if you have anything you could give me... I don't mean to beg, but if you care to spare.",
        faction: 'Peasant',
        textLeft: "Good things come to those who wait, your time will come, be patient.",
        textRight: "Nobody likes a begger boy, remove yourself from me.",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-7d',
        imgUrl: '/decks/chapter1/peasant.png',
        title:'Felix',
        text: "It's not fair, why can't I eat as much as everyone else gets to. What did I do wrong?",
        faction: 'Peasant',
        textLeft: "You can complain about it or you can do something about it.",
        textRight: "It's not your fault, luck simply wasn't on your side.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-7e',
        imgUrl: '/decks/chapter1/peasant.png',
        title:'Felix',
        text: "I might not have much, but I have my health. That's worth more than any amount of money.",
        faction: 'Peasant',
        textLeft: "Whatever helps you sleep at night.",
        textRight: "I couldn't agree more.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
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
        textRight: "Yes, you're very handsome.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-8b',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "Why if I were one of the king's royal guards, the wars would be over by nightfall! Sadly, I've no time for such trivial things.",
        faction: 'Villager',
        textLeft: "I'm sure the king's army could use a knight like you.",
        textRight: "Trivial? And the upkeep of your appearance is not?",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 0,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-8c',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "Everybody loves me, you don't have to be shy about it. If you'd like, I can help you be more popular.",
        faction: 'Villager',
        textLeft: "I think you need help more than I do.",
        textRight: "I'll take my chances.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-8d',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "Despite my apparent good looks, I feel as if I've lost my glow. Does that make any sense to you?",
        faction: 'Villager',
        textLeft: "These things are destined to happen eventually.",
        textRight: "You used to glow?",
        location: 'Choice',
        actionLeft: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        actionRight: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        appearsWithIcon: ''
    },
    {
        id: 'chapter1-8e',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "If only someone understood the hardships of being so amazing and talented, I truly am alone at the top.",
        faction: 'Villager',
        textLeft: "You're alone but not because you're \"at the top\".",
        textRight: "We all have our struggles, you're not alone.",
        location: 'Choice',
        actionLeft: {
            heart: -1,
            diamond: 1,
            memory: 0,
        },
        actionRight: {
            heart: 1,
            diamond: -1,
            memory: 1,
        },
        appearsWithIcon: ''
    },

    // TODO: Add 4 chars, 2 for heart 2 for diamond.
]);

export default chapter1;