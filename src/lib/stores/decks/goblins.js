import { writable } from 'svelte/store';

const goblins = writable([
    // Zig, a kid who doesn't know why he's in this form and wants his mom and dad TODO: BRAIN - he is one of the 8 special chars that will be revealed as a victim.
    {
        id: 'chapter3-g-1a',
        imgUrl: '/decks/chapter3/goblins/goblin-child.png',
        title:'Zig',
        text: "Ten imi's 'Zig', niji tam meet kahl. Kahl aren't as scarrit as sep othar monsters ket.",
        faction: 'Goblin',
        textLeft: "Zig is it? Are you calling me a monster?",
        textRight: "The other monsters... scare you?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-1b',
        imgUrl: '/decks/chapter3/goblins/goblin-child.png',
        title:'Sting',
        text: "Kahl speak tam ae goblin without knowtin ko tam speak gobbledegook?",
        faction: 'Goblin',
        textLeft: "Gobblede- what now?",
        textRight: "I don't know Gobbledegook but I think I can still understand you.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-1c',
        imgUrl: '/decks/chapter3/goblins/goblin-child.png',
        title:'Sting',
        text: "Pievre hilp, ti don't awet mea ti'm talktin kat mei. Ti don't awet sto's gotin nef!",
        faction: 'Goblin',
        textLeft: "I'm sorry I just... I don't understand.",
        textRight: "Are you... asking for help of some kind?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-1d',
        imgUrl: '/decks/chapter3/goblins/goblin-child.png',
        title:'Sting',
        text: "Wheke es ten pan el pon? mea vie't ti reise ou?",
        faction: 'Goblin',
        textLeft: "What?",
        textRight: "Pan el Pon... Your mom and dad? Wait slow down.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-1e',
        imgUrl: '/decks/chapter3/goblins/goblin-child.png',
        title:'Sting',
        text: "Kahl ade mei tam si, kahl ade.",
        faction: 'Goblin',
        textLeft: "Oogey, oh boogey, tinka bop boom bang? Did that mean anything?",
        textRight: "Why does it feel like you're blaming me for something?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    

    // Craz, an average goblin who hates humans
    {
        id: 'chapter3-g-2a',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Craz',
        text: "Kahl look sef faamilir, mea es spet?",
        faction: 'Goblin',
        textLeft: "Am I your familiar pet? Is that what you think I am?",
        textRight: "I look... like family? I look... familiar maybe? ",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-2b',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Craz',
        text: "Kahl think ti des tam be kat kahl? ti'm stuck kat mei itst.",
        faction: 'Goblin',
        textLeft: "Does anyone in your clan speak any English?",
        textRight: "I can't shake the feeling you goblins are trying to warn me of something.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-2c',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Craz',
        text: "Ak kahl don't absc mei place, ti'll det kahl wheke kahl stand!",
        faction: 'Goblin',
        textLeft: "Calm down, I don't mean any harm.",
        textRight: "Why do so many creatures hate humans, or is it me they hate?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-2d',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Craz',
        text: "Kahl marit ek remembar everytee, but spet no mean not'et forgettin.",
        faction: 'Goblin',
        textLeft: "I am forgetting everything?",
        textRight: "You remember everything?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-2e',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Craz',
        text: "Kahl ha ae Keelar, ullwee het be el ullwee vol be.",
        faction: 'Goblin',
        textLeft: "Please, help me understand you.",
        textRight: "Enough with the gibberish, I don't have time for this.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },

    // Ruck, an old goblin who has many memories and offers insight about the world. TODO: SMILEY - He is one of the 8 special chars that will be revealed as a victim.
    {
        id: 'chapter3-g-3a',
        imgUrl: '/decks/chapter3/goblins/goblin-old.png',
        title:'Ruck',
        text: "Maal, ten imi es Ruck. Kahl aren't from around ket are kahl, yet ti'et seen kahl somewheke befoke.",
        faction: 'Goblin',
        textLeft: "Hey, I can actually understand what you're saying! You recognize me?",
        textRight: "Is this GobbldeEnglish? You speak differently from the other goblins, nice to meet you Maal.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-3b',
        imgUrl: '/decks/chapter3/goblins/goblin-old.png',
        title:'Ruck',
        text: "Ti het lived ae long live wit lot memories, sef naturallrit ti able tam tell mei es no from ten world.",
        faction: 'Goblin',
        textLeft: "It seems there are some of us who have memories before this place, you seem to remember more than most.",
        textRight: "So you think the older you are, the more memories you retain?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-3c',
        imgUrl: '/decks/chapter3/goblins/goblin-old.png',
        title:'Ruck',
        text: "Ti knew ten time neb come, but et seems kahl knew moar than ti do. But ti bet kahl no think kahl be here wit Ruck.",
        faction: 'Goblin',
        textLeft: "Your time? How could I know more about your time than you do, I don't understand.",
        textRight: "You are Ruck, I am stuck with you? No, I am here with you? Why should that surprise me?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-3d',
        imgUrl: '/decks/chapter3/goblins/goblin-old.png',
        title:'Ruck',
        text: "Ti marit be stuck ehn mei fate, but kahl vol suffar far moar dan we will.",
        faction: 'Goblin',
        textLeft: "I'm going to suffer more than the others? Why me, I don't understand.",
        textRight: "Why am I so important? What is Jude not telling me.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-3e',
        imgUrl: '/decks/chapter3/goblins/goblin-old.png',
        title:'Ruck',
        text: "Ovar el ovar el ovar again, we relivtin sep same days, saytin sep same sreth. Ti probablrit alreadrit said mei tam kahl but ti no remembar. Dis world no onlrit yours, et's Jude world oso. Jude simplrit remembar moar dan kahl remembar.",
        faction: 'Goblin',
        textLeft: "Repeating the same days over and over? But why would Jude want that, it doesn't make sense.",
        textRight: "This is not only my world, but Jude's world... Then why isn't he telling me anything?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },

    // Gerg, an average goblin who hates humans.
    {
        id: 'chapter3-g-4a',
        imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
        title:'Gerg',
        text: "Arg! Trav aawarit filthrit human.",
        faction: 'Goblin',
        textLeft: "*Walk away*",
        textRight: "You're no different than the elves.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-4b',
        imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
        title:'Gerg',
        text: "Get farr from ket, mei es our land. Goblin, no human!",
        faction: 'Goblin',
        textLeft: "You don't even know me, or how to speak properly.",
        textRight: "Maybe I don't want to leave, maybe no goblin!",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-4c',
        imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
        title:'Gerg',
        text: "Sep capp za ae human vie be use as ae trophrit affix tam sep tail za ahn's weapon.",
        faction: 'Goblin',
        textLeft: "Whatever that was, it sounded threatening.",
        textRight: "Human trophies? Oh hell no!",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-4d',
        imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
        title:'Gerg',
        text: "Goblins ha no understand, encam not des tam fal es fier villages el det humans. Et's nie no same dan sto humans fal.",
        faction: 'Goblin',
        textLeft: "By now I'd have hoped to understand some of your language, but I can't seem to grasp what you're saying.",
        textRight: "Fier, villages, humans, humans fal? Sounds like you want to pick a fight.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-4e',
        imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
        title:'Gerg',
        text: "Kahl ha sep cause ten encam za mei, ek humans, kahl.",
        faction: 'Goblin',
        textLeft: "...",
        textRight: "Kahl is 'you', but I can't figure out the rest. What is 'ek' I wonder?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    

    // Oorh
    {
        id: 'chapter3-g-5a',
        imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
        title:'Oorh',
        text: "Hi there, I'm Oorh. No need to worry, I'm not like the other Goblins.",
        faction: 'Goblin',
        textLeft: "You speak perfect English!",
        textRight: "Oh thank god, it seemed like they all wanted to kill me.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-5b',
        imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
        title:'Oorh',
        text: "If you notice the goblins feel threatened by you, it's only natural. Many of them are confused and afraid or angry.",
        faction: 'Goblin',
        textLeft: "I guess that makes sense, but it felt personal in some cases.",
        textRight: "There was one intriguing old man, Ruck I believe. He seemed to understand more than the rest of us.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-5c',
        imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
        title:'Oorh',
        text: "Ruck and I may seem different, but I don't think that's true. I think all of us are the same, Ruck and I just happen to remember more.",
        faction: 'Goblin',
        textLeft: "Wouldn't that make you different then?",
        textRight: "I wish I knew why some have more memories than others. Is it time, age, personality?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-5d',
        imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
        title:'Oorh',
        text: "Memory is a tricky thing, do we remember more or do we have more false memories?",
        faction: 'Goblin',
        textLeft: "You must remember more.",
        textRight: "Perhaps you're right and you actually remember less.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-5e',
        imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
        title:'Oorh',
        text: "Whatever is going on, you and Jude seem to be at the center of it. It seems we're stuck here until you regain your memories.",
        faction: 'Goblin',
        textLeft: "You know about Jude...",
        textRight: "My memories are the key to releasing you?",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
]);

export default goblins;