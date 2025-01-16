import { writable } from 'svelte/store';

const chapter4 = writable([
  // Jessy - ALL - ORIGINAL
  {
    id: 'chapter4-1a',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "They've been mixing monsters and man here. I don't know what's worse, the fact that the monsters walk among us, or that they think they're one of us.",
    faction: 'Visitor',
    textLeft: "I'm not a monster.",
    textRight: "I'm a monster.",
    actionLeft: {
      heart: 0,
      diamond: 0,
      greenAura: 0,
      yellowAura: 0,
      brain: -1,
      smiley: 1,
      knife: -1,
      cleaver: 0,
      memory: 0
    },
    actionRight: {
      heart: 0,
      diamond: 0,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: -1,
      knife: 1,
      cleaver: 0,
      memory: 1
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter4-1b',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "Everything was a blur for a while, but then it all came back to me. I never thought regaining my memories would make everything worse.",
    faction: 'Visitor',
    textLeft: "That's not what I want to hear.",
    textRight: "I can help you forget again.",
    actionLeft: {
      heart: 0,
      diamond: 0,
      greenAura: 0,
      yellowAura: 0,
      brain: -1,
      smiley: -1,
      knife: 0,
      cleaver: 1,
      memory: 0
    },
    actionRight: {
      heart: -1,
      diamond: 1,
      greenAura: -1,
      yellowAura: 1,
      brain: 0,
      smiley: 0,
      knife: 1,
      cleaver: 1,
      memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter4-1c',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "You strike me as one of their special guests, I don't want anything to do with you.",
    faction: 'Visitor',
    textLeft: "You want some sugar for your high horse?",
    textRight: "I don't want anything to do with you.",
    actionLeft: {
      heart: 0,
      diamond: 0,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 1,
      memory: 0
    },
    actionRight: {
      heart: -1,
      diamond: 1,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: 1,
      knife: 0,
      cleaver: 1,
      memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter4-1d',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "You see my face? You have only the guests to thank for atrocities like this.",
    faction: 'Visitor',
    textLeft: "I'm sorry.",
    textRight: "I'm not sorry.",
    actionLeft: {
      heart: 1,
      diamond: -1,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: -1,
      knife: -1,
      cleaver: -1,
      memory: 0
    },
    actionRight: {
      heart: -1,
      diamond: 1,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: 1,
      knife: 1,
      cleaver: 1,
      memory: 1
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter4-1e',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "I shouldn't be here, my life was taken from me far too soon. Too young to die and too old to be pitied.",
    faction: 'Visitor',
    textLeft: "Nobody has a monopoly on life's cruelty, but I will pity you if no one else will.",
    textRight: "You certainly won't find any pity from me, we all have our issues we're dealing with.",
    actionLeft: {
      heart: 1,
      diamond: -1,
      greenAura: -1,
      yellowAura: 0,
      brain: 0,
      smiley: 0,
      knife: -1,
      cleaver: -1,
      memory: 0
    },
    actionRight: {
      heart: -1,
      diamond: 1,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: 0,
      knife: 1,
      cleaver: 1,
      memory: 1
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Chapter 1
  // Mr. Gallock - ALL
  {
    id: 'chapter4-1',
    imgUrl: '/decks/chapter4/gallock_real.png',
    title: 'Mr. Gallock',
    text: "My darn head is throbbin' from memories of my death. I can feel myself fading away, as if I'm waking up from a bad dream.",
    faction: 'Visitor',
    textLeft: "Leave this place, don't spend another second here.",
    textRight: "Why do you get to leave, of all people?",
    actionLeft: {
      heart: 1,
      diamond: -1,
      greenAura: -1,
      yellowAura: 1,
      brain: 0,
      smiley: 1,
      knife: 0,
      cleaver: -1,
      memory: 1
    },
    actionRight: {
      heart: -1,
      diamond: 1,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: -1,
      knife: 0,
      cleaver: -1,
      memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  // Shelly - Knife, she is one of the 8 special chars that will be revealed as a victim (for her hunting skills she represents knife).
  {
    id: 'chapter4-2',
      imgUrl: '/decks/chapter4/shelly_real.png',
      title: 'Shelly',
      text: "I'm a hunter, but it seems I was hunted. I feel the pain of my wounds, but I still can't remember who did this to me.",
      faction: 'Visitor',
      textLeft: "Must have been a guest here.",
      textRight: "Let it go, knowing isn't important.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: -1,
          knife: 0,
          cleaver: 0,
          memory: 1
      },
      actionRight: {
          heart: 1,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: -1,
          smiley: -1,
          knife: 0,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  // Krystina - ALL
  {
    id: 'chapter4-3',
    imgUrl: '/decks/chapter4/krystina_real.png',
    title: 'Krystina',
    text: "I didn't mean to hurt him, I swear. I'm a herboligist not some guest, I thought they were moondrop flowers.",
    faction: 'Guest',
    textLeft: "Accident or not, actions have consequences.",
    textRight: "So you're a guest too...",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 1,
        smiley: -1,
        knife: 0,
        cleaver: -1,
        memory: 0
    },
        actionRight: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: -1,
        knife: 0,
        cleaver: 0,
        memory: 1
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  
  // Melody - Diamond, she is one of the 8 special chars that will be revealed as a victim (for her vanity she represents DIAMOND).
  {
      id: 'chapter4-4',
      imgUrl: '/decks/chapter4/melody_real.png',
      title: 'Melody',
      text: "I didn't have much in life, but I always had my looks. Apparently I also had a stalker, I never thought my looks would be the death of me.",
      faction: 'Visitor',
      textLeft: "Talk about \"if looks could kill\".",
      textRight: "That's in the past now, you can relax, you're safe.",
      actionLeft: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 1,
          diamond: -1,
          greenAura: 1,
          yellowAura: -1,
          brain: 0,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Rowelda - ALL
  {
      id: 'chapter4-5',
      imgUrl: '/decks/chapter4/rowelda_real.png',
      title: 'Rowelda',
      text: "I thought I was the oldest, unable to relate to anyone. But it seems age doesn't matter here, we all share the same fate, boy.",
      faction: 'Visitor',
      textLeft: "Not all of us.",
      textRight: "I still think you're the oldest.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Bernard - ALL
  {
      id: 'chapter4-6',
      imgUrl: '/decks/chapter4/bernard_real.png',
      title: 'Bernard',
      text: "I was so focused on my cattle, I never took care of myself. Now who will look after them?",
      faction: 'Visitor',
      textLeft: "Even in death you worry about them? You are a good man.",
      textRight: "They've probably been eaten by now.",
      actionLeft: {
          heart: 1,
          diamond: -1,
          greenAura: -1,
          yellowAura: 0,
          brain: -1,
          smiley: -1,
          knife: 0,
          cleaver: -1,
          memory: 0
      },
      actionRight: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: 0,
          knife: 1,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Felix - HEART, he is one of the 8 special chars that will be revealed as a victim (for his purity he represents HEART).
  {
      id: 'chapter4-7',
      imgUrl: '/decks/chapter4/felix_real.png',
      title: 'Felix',
      text: "I'm still so confused, I just want to see my mommy and daddy again.",
      faction: 'Visitor',
      textLeft: "Not gonna happen kiddo, you're dead.",
      textRight: "You will soon, just be patient and rest.",
      actionLeft: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: 1,
          cleaver: 1,
          memory: 1
      },
      actionRight: {
          heart: 1,
          diamond: -1,
          greenAura: 1,
          yellowAura: -1,
          brain: -1,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Alexander - ALL
  {
      id: 'chapter4-8',
      imgUrl: '/decks/chapter4/alexander_real.png',
      title: 'Alexander',
      text: "I went out looking for my sister, the same bastard must've gotten me too, now I'm stuck here.",
      faction: 'Visitor',
      textLeft: "You aren't stuck, the fact that you remember proves it.",
      textRight: "If they got you, they probably got others too, but they're gone now.",
      actionLeft: {
          heart: 1,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: 1,
          knife: 0,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Chapter 2
  // White monk - ALL
  {
      id: 'chapter4-9',
      imgUrl: '/decks/chapter4/hayden_real.png',
      title: 'Hayden',
      text: "My brothers and I studied at an old monastery, we lived a life of peace, yet this tragedy befell us.",
      faction: 'Visitor',
      textLeft: "Doesn't matter how you live your life, it's never guaranteed.",
      textRight: "Both of you? You must've really pissed someone off.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: -1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: -1,
          cleaver: -1,
          memory: 1
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Brown monk - ALL
  {
      id: 'chapter4-10',
      imgUrl: '/decks/chapter4/moses_real.png',
      title: 'Moses',
      text: "The monastery taught me so much, but it never prepared me for this.",
      faction: 'Visitor',
      textLeft: "Death is a part of life, you must accept it.",
      textRight: "Life should be prolonged, not cut short.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: 1,
          smiley: -1,
          knife: 1,
          cleaver: 1,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 1,
          brain: 0,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Blue Fairy - ALL
  {
      id: 'chapter4-11',
      imgUrl: '/decks/chapter4/spinkle_real.png',
      title: 'Sabrina', // Spinkle
      text: "I failed my sisters... When our parents passed I vowed to look over them, but it's my fault they've joined me in the afterlife. I remember it all now, my addictions and how they affected those closest to me. I didn't know what I was doing, I didn't mean to hurt them, I'm so sorry Sarah and Summer, I'm so sorry...",
      faction: 'Guest',
      textLeft: "I've hurt people as well, but I don't know how to make any of it right.",
      textRight: "You let them down, that's why you're being punished. Throwing a pity party now won't save you.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: -1,
          knife: -1,
          cleaver: -1,
          memory: 1
      },
      actionRight: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Purple Fairy - ALL
  {
      id: 'chapter4-12',
      imgUrl: '/decks/chapter4/tinkle_real.png',
      title: 'Sarah', // Tinkle
      text: "I had never seen Sabrina like that before, she was so out of it I don't think she recognized me or Summer. I don't even think she knew where she was. Like when we were kids, we've been playing fairy in the forest all this time forgetting that we died. Will we forget again? Have we remembered before?",
      faction: 'Visitor',
      textLeft: "You could have done something to help her, now look where you all are.",
      textRight: "We all have our drug of choice, some more dangerous than others.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 1
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Green Fairy - ALL
  {
      id: 'chapter4-13',
      imgUrl: '/decks/chapter4/winkle_real.png',
      title: 'Summer', // Winkle
      text: "Spinkle, Winkle and Tinkle? Those are the toy fairies we played with growing up, what a joke. My sisters are Sabrina and Sarah, and I'm Summer. All I remember is waking up to smoke, I still have more questions.",
      faction: 'Visitor',
      textLeft: "Focus on the answers you have now instead of the questions.",
      textRight: "It sounds like there was a terrible accident, no point dwelling on it now, time to move on.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: -1,
          yellowAura: 1,
          brain: 0,
          smiley: 1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Druid  - ALL
  {
      id: 'chapter4-14',
      imgUrl: '/decks/chapter4/deku_real.png',
      title: 'Deku',
      text: "I always loved animals, I was a veterinarian before... Before this. Even now I don't blame them, they didn't mean to harm me.",
      faction: 'Visitor',
      textLeft: "You got too close to nature and experienced the circle of life firsthand.",
      textRight: "Now you pay the price for your obsession with animals, you should've admired them from a distance.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: 1,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: 1,
          smiley: 0,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Rabbit - GREEN AURA, the rabbit is one of the 8 special chars that will be revealed as a victim (this was a rabbit jack killed as a child, represented by GREEN aura for nature).
  {
      id: 'chapter4-15',
      imgUrl: '/decks/chapter4/bounder_real.png',
      title: 'Rabbit', // Bounder
      text: "The afterlife gave me a voice, I was never a human in my past life. This is all so confusing.",
      faction: 'Visitor',
      textLeft: "I used to play with animals like you when I was growing up.",
      textRight: "I guess all dogs do go to heaven and all rabbits end up here.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 1,
          knife: 1,
          cleaver: 0,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Snake - ALL
  {
      id: 'chapter4-16',
      imgUrl: '/decks/chapter4/pentsser_real.png',
      title: 'Peter', // Pentsser
      text: "I was never good at making friends, I grew up playing with snakes. But in the end, even snakes didn't care about me. Maybe if I had more friends growing up I wouldn't have ended up here.",
      faction: 'Guest',
      textLeft: "I feel we shared a similar childhood, perhaps I should've played with humans more than animals.",
      textRight: "Enough! You did nothing wrong, you're where you belong.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: -1,
          yellowAura: 1,
          brain: 0,
          smiley: 0,
          knife: -1,
          cleaver: -1,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: -1,
          smiley: 1,
          knife: -1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Hippie-boy - YELLOW AURA, Ziggy is one of the 8 special chars that will be revealed as a victim (he and jack grew up together, YELLOW aura symbolizes their friendship and sunny days.).
  {
      id: 'chapter4-17',
      imgUrl: '/decks/chapter4/ziggy_real.png',
      title: 'Ziggy',
      text: "Oh man, don't you remember me? We grew up together dude, you and I were the tightest of buds. I can't believe you man, I always thought I could trust you, I looked up to you. I guess I never really knew you, even since we were kids.",
      faction: 'Visitor',
      textLeft: "Ziggy, you seem so familiar, like a distant dream. I'm sorry, I didn't mean to hurt you.",
      textRight: "If we were that close I'd remember you. You're just a hippie stoner mistaking me for someone else.",
      actionLeft: {
          heart: 1,
          diamond: -1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: -1,
          cleaver: 0,
          memory: 1
      },
      actionRight: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Hippie-girl - ALL
  {
      id: 'chapter4-18',
      imgUrl: '/decks/chapter4/powder_real.png',
      title: 'Powder',
      text: "I told Ziggy there was something off about you, I told him but he wouldn't listen. I have nothing to say to you, leave me alone.",
      faction: 'Visitor',
      textLeft: "Throw that shade and negativity somewhere else, I don't have time for you.",
      textRight: "You don't know what you're talking about, you should leave me alone.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 1,
          brain: 0,
          smiley: -1,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Chapter 3
  // Wizard - ALL (twins irl with dark wizard)
  {
      id: 'chapter4-19',
      imgUrl: '/decks/chapter4/geldahn_real.png',
      title: 'Gary', // Geldahn
      text: "He didn't mean to, it was an accident. We just wanted to play with it. Jerry, I forgive you brother.",
      faction: 'Visitor',
      textLeft: "You're too quick to forgive, revenge is the best teacher.",
      textRight: "Your brother betrayed you yet you still love him?",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: -1,
          yellowAura: 1,
          brain: -1,
          smiley: 1,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Dark wizard - ALL (twins irl with wizard)
  {
      id: 'chapter4-20',
      imgUrl: '/decks/chapter4/gahndel_real.png',
      title: 'Jerry', // Gahndel
      text: "Oh, hey. Guess you're wondering what I remembered huh? I'm a guest and I suspect you are too buddy. My brother and I found a gun and fought over who got to look at it first. I didn't even... I didn't mean to... I just...",
      faction: 'Guest',
      textLeft: "Relax, breathe, your brother doesn't blame you and you shouldn't either.",
      textRight: "That was easily avoidable, own your mistakes.",
      actionLeft: {
          heart: 1,
          diamond: -1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: -1,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Temptress - SMILEY, she is one of the 8 special chars that will be revealed as a victim. She was a lady of the night.
  {
      id: 'chapter4-21',
      imgUrl: '/decks/chapter4/luna_real.png',
      title: 'Luna',
      text: "My life wasn't perfect, I met a lot of different men and made a lot of bad choices. But to lose my life behind closed doors, to be discarded without anyone ever knowing, to have the life stabbed out of me without releasing so much as a yelp that someone could hear. Why do men feel the need to take what they want without any regard for others. Why did you choose me...",
      faction: 'Visitor',
      textLeft: "This was my fault..? Please I- I didn't mean to I- I just...",
      textRight: "I had nothing to do with your death, you're here because of your own decisions.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: -1,
          cleaver: -1,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Bullisia - BRAIN, she is one of the 8 special chars that will be revealed as a victim. She was Jack's ex (symbolized as a smiley with varying emotions representing their relationship).
  {
      id: 'chapter4-22',
      imgUrl: '/decks/chapter4/bullisia_real.png',
      title: 'Eliza', // Bullisia
      text: "I thought you loved me, the way I always loved you. But what you did to me... I never thought you would actually do it.",
      faction: 'Visitor',
      textLeft: "Eliza, why are you here? I do love you I swear, I didn't mean to!",
      textRight: "Eliza...",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: -1,
          knife: -1,
          cleaver: -1,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: -1,
          cleaver: 0,
          memory: 1
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // #5 Jason - ALL
  {
      id: 'chapter4-23',
      imgUrl: '/decks/chapter4/jason_real.png',
      title: 'Jason',
      text: "Hahaha I can't believe I forgot about all the good times. You and I are the same bud, not like the rest of these posers. I bet I could score more meat while I'm here hahaha. See you on the other side bro!",
      faction: 'Guest',
      textLeft: "Took the words right out of my mouth.",
      textRight: "I'm not like you, I can change.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: -1,
          yellowAura: 1,
          brain: 0,
          smiley: 1,
          knife: 1,
          cleaver: 0,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: -1,
          yellowAura: 1,
          brain: 1,
          smiley: 0,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // #6 Marge - ALL
  {
      id: 'chapter4-24',
      imgUrl: '/decks/chapter4/marge_real.png',
      title: 'Marge',
      text: "So many people seem to be getting their memories back, yet I still can't remember a thing.",
      faction: 'Visitor',
      textLeft: "Perhaps your death was too traumatic for you, you need more time.",
      textRight: "Maybe you were always in this world.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: -1,
          brain: 1,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Desmond - ALL
  {
      id: 'chapter4-25',
      imgUrl: '/decks/chapter4/desmond_real.png',
      title: 'Desmond',
      text: "You want to know about me? Oh I'm not a human like you guys, I just come here to enjoy the show.",
      faction: 'Demon',
      textLeft: "You really are a demon.",
      textRight: "Sit back and relax, the finale is coming soon.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: -1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: -1,
          brain: 1,
          smiley: 1,
          knife: 1,
          cleaver: -1,
          memory: 1
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Flyn - ALL
  {
      id: 'chapter4-26',
      imgUrl: '/decks/chapter4/flyn_real.png',
      title: 'Flyn',
      text: "Swimming was my life, everything water related really. How could I pass up a wave like that?",
      faction: 'Visitor',
      textLeft: "Easy, you don't surf it.",
      textRight: "I guess swimming was your death too.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: -1,
          brain: 1,
          smiley: 0,
          knife: 0,
          cleaver: 1,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 1,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Keret - ALL
  {
      id: 'chapter4-27',
      imgUrl: '/decks/chapter4/keret_real.png',
      title: 'Keret',
      text: "Surprise surprise I was no alchemist but a magician during my time on earth. Of course they would tell me the trick is too dangerous, that's the whole point. Nobody wants to watch a safe show. I have no regrets.",
      faction: 'Visitor',
      textLeft: "What a stupid way to die.",
      textRight: "Why value your illusions over your life.",
      actionLeft: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: -1,
          smiley: 1,
          knife: 0,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // SOLDIERS
  // Oscar
  {
    id: 'chapter4-29',
    imgUrl: '/decks/chapter4/oscar_real.png',
    title: 'Oscar',
    text: "Stupid Hugo, I should've never listened to him. If he didn't start problems at the bar, none of this would've ever happened!",
    faction: 'Visitor',
    textLeft: "Sounds like you played the sheep and are blaming others for your choices.",
    textRight: "We all make mistakes, you had no way of knowing how it would turn out.",
    actionLeft: {
        heart: -1,
        diamond: 1,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: 1,
        diamond: -1,
        greenAura: 0,
        yellowAura: 0,
        brain: -1,
        smiley: 0,
        knife: -1,
        cleaver: -1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // August
  {
    id: 'chapter4-30',
    imgUrl: '/decks/chapter4/august_real.png',
    title: 'August',
    text: "Those punks got what they deserved, Hugo was right for putting them in their place. Oscar and Dedu just need to grow a pair.",
    faction: 'Guest',
    textLeft: "You guys should've kept to yourself instead of starting problems, look where it landed you.",
    textRight: "As long as it was worth it, who am I to say it was wrong.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 1,
        yellowAura: -1,
        brain: 1,
        smiley: 0,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: -1,
        smiley: 1,
        knife: 0,
        cleaver: -1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Dedu
  {
    id: 'chapter4-31',
    imgUrl: '/decks/chapter4/dedu_real.png',
    title: 'Dedu',
    text: "I should've taken Oscar and left, Hugo and August are just hotheads who can't control their temper, now we have to pay their price.",
    faction: 'Visitor',
    textLeft: "It's your price too, what you did, you did together.",
    textRight: "You did what you thought was right and stuck by your friends.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: -1,
        yellowAura: 1,
        brain: 1,
        smiley: -1,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: 1,
        diamond: -1,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: 1,
        knife: 0,
        cleaver: -1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Captain Hugo
  {
    id: 'chapter4-32',
    imgUrl: '/decks/chapter4/hugo_real.png',
    title: 'Hugo',
    text: "Those lame-ass wannabe posers thought they could step to a real gang? Those soft wimps got what was coming to them. No regrets, none.",
    faction: 'Guest',
    textLeft: "Maybe you have no regrets, but what about your crew?",
    textRight: "That's metal.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 1,
        smiley: 0,
        knife: -1,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: 1,
        knife: 1,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // ELVES
  // Aldwin
  {
    id: 'chapter4-33',
    imgUrl: '/decks/chapter4/aldwin_real.png',
    title: 'Aldwin',
    text: "I was a university professor and head of the arts and science faculty. To think a student would take it this far over a bad grade. Had they simply applied themselves...",
    faction: 'Visitor',
    textLeft: "Faking a grade could've saved your life, you should've just passed them.",
    textRight: "I don't know why you felt the need to mention you were the head of the faculty.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 1,
        smiley: 1,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: -1,
        diamond: 1,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Eldia
  {
    id: 'chapter4-34',
    imgUrl: '/decks/chapter4/eldia_real.png',
    title: 'Eldia',
    text: "If I'm being honest, I'm a bit jealous. I still haven't remembered anything but everyone else seems to have.",
    faction: 'Guest',
    textLeft: "Maybe this is the calm before the storm, who knows what you will remember.",
    textRight: "Jealousy in a place like this? We're all dead you know.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 1,
        yellowAura: -1,
        brain: -1,
        smiley: 1,
        knife: 0,
        cleaver: 0,
        memory: 1
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 1,
        smiley: -1,
        knife: 1,
        cleaver: 1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Fenris
  {
    id: 'chapter4-35',
    imgUrl: '/decks/chapter4/fenris_real.png',
    title: 'Fenris',
    text: "That idiot professor never listened to me. Just because I was his student he thought he was better than me? Bet he doesn't think that anymore.",
    faction: 'Guest',
    textLeft: "Whatever you did, you both ended up here, so probably not that smart of a move.",
    textRight: "You took matters into your own hands, not bad.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 1,
        smiley: -1,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        greenAura: -1,
        yellowAura: 1,
        brain: -1,
        smiley: 1,
        knife: 1,
        cleaver: 0,
        memory: 1
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Estelle
  {
    id: 'chapter4-36',
    imgUrl: '/decks/chapter4/estelle_real.png',
    title: 'Estelle',
    text: "My big sister and I went to a uni party, then everything got blurry and I woke up here. Strange isn't it?",
    faction: 'Visitor',
    textLeft: "You should've stayed home, there were clearly some bad people at that party.",
    textRight: "...",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 1,
        yellowAura: -1,
        brain: 1,
        smiley: 0,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        greenAura: 1,
        yellowAura: -1,
        brain: -1,
        smiley: -1,
        knife: 0,
        cleaver: -1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Aradora
  {
    id: 'chapter4-37',
    imgUrl: '/decks/chapter4/aradora_real.png',
    title: 'Aradora',
    text: "My poor sweet baby sister, I should've never brought you along with me. You wanted to come so bad and I wanted you to experience a university party. I never thought the guys there would... I'm so sorry Estelle.",
    faction: 'Visitor',
    textLeft: "You wanted to make her happy, you can't blame yourself for their actions.",
    textRight: "You didn't know the people but you still chose to bring her, this is on you.",
    actionLeft: {
        heart: 1,
        diamond: -1,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: 1,
        knife: -1,
        cleaver: -1,
        memory: 0
    },
    actionRight: {
        heart: -1,
        diamond: 1,
        greenAura: -1,
        yellowAura: 1,
        brain: 0,
        smiley: -1,
        knife: 1,
        cleaver: 1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // GOBLINS
  // Zig - ALL
  {
      id: 'chapter4-38',
      imgUrl: '/decks/chapter4/zig_real.png',
      title: 'Zack', // Zig
      text: "I guess I got what I deserved. I've lived a short but selfish life, never listening to others, only doing what I wanted and in return, I ended up in a world where nobody could understand me but I could understand them. Talk about karma.",
      faction: 'Visitor',
      textLeft: "You don't even look 18, your price was far too great for your crimes.",
      textRight: "I liked you more when you only spoke gobbledegook.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: -1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      actionRight: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Craz - ALL
  {
      id: 'chapter4-39',
      imgUrl: '/decks/chapter4/craz_real.png',
      title: 'Taz', // Craz
      text: "Looking back, I guess I was pretty stupid. Starting a fight at a bar over nothing, that guy Hugo really wasn't messing around.",
      faction: 'Visitor',
      textLeft: "You should've watched your tongue, you got what was coming to you.",
      textRight: "Perhaps you can take this knowledge to the next life.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 0,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      actionRight: {
          heart: 1,
          diamond: -1,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Ruck - ALL
  {
      id: 'chapter4-40',
      imgUrl: '/decks/chapter4/ruck_real.png',
      title: 'Chuck', // Ruck
      text: "All I wanted to do was ride like the wind. I was in a biker gang, we would ride together every week. I guess I should've stayed in formation instead of trying to impress the new recruits.",
      faction: 'Visitor',
      textLeft: "We live and learn, although I guess in this case you died and learned.",
      textRight: "It wasn't in vain, I'm sure you gave them a lesson they won't forget.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: -1,
          yellowAura: 1,
          brain: 0,
          smiley: 1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 1,
          diamond: -1,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 1,
          knife: -1,
          cleaver: -1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Oorh
  {
    id: 'chapter4-42',
    imgUrl: '/decks/chapter4/oorh_real.png',
    title: 'Oonah', // Oorh
    text: "I was tired of toxic masculinity, I wanted to prove that women could be \"man\" enough too. I entered that ring and my grave at the same time.",
    faction: 'Visitor',
    textLeft: "You had nothing to prove, I hope you see that now.",
    textRight: "You died like a real man.",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 1,
        yellowAura: -1,
        brain: 1,
        smiley: 0,
        knife: 0,
        cleaver: 1,
        memory: 0
    },
    actionRight: {
        heart: -1,
        diamond: 1,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
        smiley: -1,
        knife: 1,
        cleaver: 1,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
]);

export default chapter4;