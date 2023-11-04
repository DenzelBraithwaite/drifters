import { writable } from 'svelte/store';

const chapter1 = writable([
    // Mr. Gallock
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
        text: "Every darn person in this town is hell bent on getting in my way, are you going to be another delinquent in the making?",
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
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning'
    },

    // Shelly
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
        },
        actionRight: {
            health: 1,
            memory: 0,
        },
        location: 'Town of Beginning'
    },

    // Krystina
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
            health: -1,
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
        },
        actionRight: {
            health: 1,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    

    // Melody
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
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning'
    },

    // Rowelda
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
            health: 1,
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
        id: 'chapter1-5e',
        imgUrl: '/decks/chapter1/villager-old.png',
        title:'Rowelda',
        text: "Sometimes I sit and wonder, am I the oldest person in the village? There's so much I wish I'd done sooner... Don't waste your life boy!",
        faction: 'Villager',
        textLeft: "Don't worry, you still have plenty of years left.",
        textRight: "Thanks for the advice, but I don't plan on wasting my years.",
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

    // Bernard
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
            memory: 1,
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
            health: 1,
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
        id: 'chapter1-6e',
        imgUrl: '/decks/chapter1/cowheard.png',
        title:'Bernard',
        text: "Animals are simple creatures, they eat, sleep and defecate. We could learn a lot from animals.",
        faction: 'Cowheard',
        textLeft: "We never give animals enough credit.",
        textRight: "You sound like a crazy person, you know that right?",
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

    // Felix TODO:He is one of the 8 special chars that will be revealed as a victim (child).
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
            health: -1,
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
        },
        actionRight: {
            health: -1,
            memory: 0,
        },
        location: 'Town of Beginning'
    },

    // Alexander
    {
        id: 'chapter1-8a',
        imgUrl: '/decks/chapter1/villager-brother.png',
        title:'Alexander',
        text: "My beauty is reknown far and wide, my sister isn't too bad herself, but her beauty could simply never compare.",
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
        },
        actionRight: {
            health: 1,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
]);

export default chapter1;