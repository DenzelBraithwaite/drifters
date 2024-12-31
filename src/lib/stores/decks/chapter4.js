import { writable } from 'svelte/store';

// TODO: choose 2 special cars for knife and cleaver
const chapter4 = writable([
  // TODO: Add new chapter 4 chars, originals have more dialogue, others have 1.

  // Jessy - ALL
  {
    id: 'chapter4-1a',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "They've been mixing monsters and man here. I don't know what's worse, the fact that the monsters walk among us, or that they think they are one of us.",
    faction: 'Visitor',
    textLeft: "I'm not a monster.",
    textRight: "I'm a monster.",
    actionLeft: {
      heart: 0,
      diamond: 0,
      greenAura: 0,
      yellowAura: 0,
      brain: 0,
      smiley: 1,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    actionRight: {
      heart: 0,
      diamond: 0,
      greenAura: 0,
      yellowAura: 0,
      brain: 1,
      smiley: -1,
      knife: -1,
      cleaver: 0,
      memory: 1
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Chapter 1
  // Mr. Gallock - ALL
  {
    id: 'chapter4-1',
    imgUrl: '/decks/chapter1/angry-cowboy.png',
    title:'Mr. Gallock',
    text: "My darn head is throbbin' from memories of my death. I can feel myself fading away, as if I'm waking up from a bad dream.",
    faction: 'Visitor',
    textLeft: "Leave this place, don't spend another second here.",
    textRight: "Why do you get to leave, of all people?",
    actionLeft: {
      heart: 1,
      diamond: -1,
      greenAura: -1,
      yellowAura: 1,
      brain: 1,
      smiley: 1,
      knife: 0,
      cleaver: 0,
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
  // Shelly - ALL
  {
    id: 'chapter4-2',
      imgUrl: '/decks/chapter1/archer.png',
      title:'Shelly',
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
          heart: 0,
          diamond: 0,
          greenAura: 1,
          yellowAura: 0,
          brain: 1,
          smiley: -1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  // Krystina - ALL
  {
    id: 'chapter4-3',
    imgUrl: '/decks/chapter1/gatherer.png',
    title:'Krystina',
    text: "I didn't mean to hurt him, I swear. I'm a herboligist not some guest, I thought they were moondrop flowers.",
    faction: 'Guest',
    textLeft: "Accident or not, actions have consequences.",
    textRight: "So you're a guest too...",
    actionLeft: {
        heart: -1,
        diamond: 1,
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
        brain: 1,
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
      imgUrl: '/decks/chapter1/villager.png',
      title:'Melody',
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
          knife: 0,
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
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Rowelda - ALL
  {
      id: 'chapter4-5',
      imgUrl: '/decks/chapter1/villager-old.png',
      title:'Rowelda',
      text: "I'm so old I'm dead!",
      faction: 'Visitor',
      textLeft: "Glad you still have a sense of humor, that's the spirit! No pun intended.",
      textRight: "You can rest now, you've earned it.",
      actionLeft: {
          heart: 1,
          diamond: -1,
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
          greenAura: 1,
          yellowAura: -1,
          brain: 0,
          smiley: 1,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Bernard - ALL
  {
      id: 'chapter4-6',
      imgUrl: '/decks/chapter1/cowheard.png',
      title:'Bernard',
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
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: 0,
          knife: -1,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Felix - HEART, he is one of the 8 special chars that will be revealed as a victim (for his purity he represents HEART).
  {
      id: 'chapter4-7',
      imgUrl: '/decks/chapter1/peasant.png',
      title:'Felix',
      text: "I'm still so confused, I just want to see my mommy and daddy again.",
      faction: 'Visitor',
      textLeft: "Not gonna happen kiddo, you're dead.",
      textRight: "You will soon, just be patient and rest.",
      actionLeft: {
          heart: -1,
          diamond: 1,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
          smiley: -1,
          knife: -1,
          cleaver: 0,
          memory: 1
      },
      actionRight: {
          heart: 1,
          diamond: -1,
          greenAura: 1,
          yellowAura: -1,
          brain: -1,
          smiley: 1,
          knife: 1,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Alexander - ALL
  {
      id: 'chapter4-8',
      imgUrl: '/decks/chapter1/villager-brother.png',
      title:'Alexander',
      text: "I went out looking for my sister, the same bastard must've gotten me too, now I'm stuck here.",
      faction: 'Visitor',
      textLeft: "You aren't stuck, the fact that you remember proves it.",
      textRight: "If they got you, they probably got others too, but they're gone now.",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 1,
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
          brain: -1,
          smiley: 1,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Chapter 2
  // White monk - ALL
  {
      id: 'chapter4-9',
      imgUrl: '/decks/chapter2/monk-white-1.png',
      title:'Hayden',
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
      imgUrl: '/decks/chapter2/monk-brown.png',
      title:'Moses',
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
          knife: 0,
          cleaver: 0,
          memory: 1
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 1,
          brain: 1,
          smiley: 1,
          knife: 1,
          cleaver: 1,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Blue Fairy - ALL
  {
      id: 'chapter4-11',
      imgUrl: '/decks/chapter2/fairy-blue.png',
      title:'Spinkle',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Purple Fairy - ALL
  {
      id: 'chapter2-4a',
      imgUrl: '/decks/chapter2/fairy-purple.png',
      title:'Tinkle',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Green Fairy - ALL
  {
      id: 'chapter2-4a',
      imgUrl: '/decks/chapter2/fairy-green.png',
      title:'Winkle',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Druid  - ALL
  {
      id: 'chapter2-5a',
      imgUrl: '/decks/chapter2/druid.png',
      title:'Deku',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Rabbit - GREEN AURA, the rabbit is one of the 8 special chars that will be revealed as a victim (this was a rabbit jack killed as a child, represented by GREEN aura for nature).
  {
      id: 'chapter2-6a',
      imgUrl: '/decks/chapter2/rabbit.png',
      title:'Bounder',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
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
      id: 'chapter2-7a',
      imgUrl: '/decks/chapter2/snake.png',
      title:'Pentsser',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Hippy-boy - YELLOW AURA, Ziggy is one of the 8 special chars that will be revealed as a victim (he and jack grew up together, YELLOW aura symbolizes their friendship and sunny days.).
  {
      id: 'chapter2-8a',
      imgUrl: '/decks/chapter2/hippy-boy.png',
      title:'Ziggy',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Hippy-girl - ALL
  {
      id: 'chapter2-8a',
      imgUrl: '/decks/chapter2/hippy-girl.png',
      title:'Powder',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Chapter 3
  // Wizard - ALL (twins irl with dark wizard)
  {
      id: 'chapter3-1a',
      imgUrl: '/decks/chapter3/wizard.png',
      title: 'Geldahn',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Dark wizard - ALL (twins irl with wizard)
  {
      id: 'chapter3-2a',
      imgUrl: '/decks/chapter3/dark_wizard.png',
      title: 'Gahndel',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Temptress - SMILEY, she is one of the 8 special chars that will be revealed as a victim. She was a lady of the night.
  {
      id: 'chapter3-3a',
      imgUrl: '/decks/chapter3/temptress.png',
      title: 'Luna',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Bullisia - BRAIN, she is one of the 8 special chars that will be revealed as a victim. She was Jack's ex (symbolized as a smiley with varying emotions representing their relationship).
  {
      id: 'chapter3-4a',
      imgUrl: '/decks/chapter3/bullisia.png',
      title: 'Bullisia',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // #5 Jason - ALL
  {
      id: 'chapter3-5a',
      imgUrl: '/decks/chapter3/jason.png',
      title: 'Jason',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // #6 Marge - ALL
  {
      id: 'chapter3-6a',
      imgUrl: '/decks/chapter3/marge.png',
      title: 'Marge',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
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
      id: 'chapter3-7a',
      imgUrl: '/decks/chapter3/desmond.png',
      title: 'Desmond',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Flyn - ALL
  {
      id: 'chapter3-8a',
      imgUrl: '/decks/chapter3/flyn.png',
      title: 'Flyn',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Keret - ALL
  {
      id: 'chapter3-9a',
      imgUrl: '/decks/chapter3/keret.png',
      title: 'Keret',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Bones - ALL
  {
      id: 'chapter3-10a',
      imgUrl: '/decks/chapter3/bones.png',
      title: 'Bones',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // SOLDIERS
  // Oscar
  {
    id: 'chapter1-s-1a',
    imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
    title:'Oscar',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // August
  {
    id: 'chapter1-s-2a',
    imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
    title:'August',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Dedu
  {
    id: 'chapter1-s-3a',
    imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
    title:'Dedu',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Captain Hugo
  {
    id: 'chapter1-s-4a',
    imgUrl: '/decks/chapter1/soldiers/captain.png',
    title:'Hugo',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // ELVES
  // Aldwin
  {
    id: 'chapter2-e-1a',
    imgUrl: '/decks/chapter2/elves/elf-male.png',
    title:'Aldwin',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Eldia
  {
    id: 'chapter2-e-2a',
    imgUrl: '/decks/chapter2/elves/elf-villager.png',
    title:'Eldia',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Fenris
  {
    id: 'chapter2-e-3a',
    imgUrl: '/decks/chapter2/elves/elf-angry.png',
    title:'Fenris',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Estelle
  {
    id: 'chapter2-e-4a',
    imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
    title:'Estelle',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Aradora
  {
    id: 'chapter2-e-5a',
    imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
    title:'Aradora',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // GOBLINS
  // Zig - ALL
  {
      id: 'chapter3-g-1a',
      imgUrl: '/decks/chapter3/goblins/goblin-child.png',
      title:'Zig',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Craz - ALL
  {
      id: 'chapter3-g-2a',
      imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
      title:'Craz',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Ruck - ALL
  {
      id: 'chapter3-g-3a',
      imgUrl: '/decks/chapter3/goblins/goblin-old.png',
      title:'Ruck',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Gerg - ALL
  {
      id: 'chapter3-g-4a',
      imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
      title:'Gerg',
      text: "Coming soon...",
      faction: 'Visitor',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          greenAura: 0,
          yellowAura: 0,
          brain: 0,
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
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Oorh
  {
    id: 'chapter3-g-5a',
    imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
    title:'Oorh',
    text: "Coming soon...",
    faction: 'Visitor',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        greenAura: 0,
        yellowAura: 0,
        brain: 0,
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
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
]);

export default chapter4;