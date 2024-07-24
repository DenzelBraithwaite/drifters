import { writable } from 'svelte/store';

// TODO: choose 2 special cars for knife and cleaver
const chapter4 = writable([
  // TODO: Add new chapter 4 chars

  // Jessy - ALL
  {
    id: 'chapter4-1a',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "They've been mixing monsters and man here. I don't know what's worse, the fact that the monsters walk among us, or that they think they are one of us.",
    faction: 'Human',
    textLeft: "I'm not a monster.",
    textRight: "I'm a monster.",
    actionLeft: {
      heart: 0,
      diamond: 0,
      auraGreen: 0,
      auraYellow: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    actionRight: {
      heart: 0,
      diamond: 0,
      auraGreen: 0,
      auraYellow: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter4-1b',
    imgUrl: '/decks/chapter4/jessy.png',
    title: 'Jessy',
    text: "Coming soon...",
    faction: 'Human',
    textLeft: "",
    textRight: "",
    actionLeft: {
      heart: 0,
      diamond: 0,
      auraGreen: 0,
      auraYellow: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    actionRight: {
      heart: 0,
      diamond: 0,
      auraGreen: 0,
      auraYellow: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  
  // Chapter 1
  // Mr. Gallock - ALL
  {
    id: 'chapter1-1a',
    imgUrl: '/decks/chapter1/angry-cowboy.png',
    title:'Mr. Gallock',
    text: "Coming soon...",
    faction: 'Farmer',
    textLeft: "",
    textRight: "",
    actionLeft: {
      heart: 0,
      diamond: 0,
      auraGreen: 0,
      auraYellow: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    actionRight: {
      heart: 0,
      diamond: 0,
      auraGreen: 0,
      auraYellow: 0,
      brain: 0,
      smiley: 0,
      knife: 0,
      cleaver: 0,
      memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
      id: 'chapter1-1b',
      imgUrl: '/decks/chapter1/angry-cowboy.png',
      title:'Mr. Gallock',
      text: "Coming soon...",
      faction: 'Farmer',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Shelly - ALL
  {
      id: 'chapter1-2a',
      imgUrl: '/decks/chapter1/archer.png',
      title:'Shelly',
      text: "Coming soon...",
      faction: 'Hunter',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter1-2b',
      imgUrl: '/decks/chapter1/archer.png',
      title:'Shelly',
      text: "Coming soon...",
      faction: 'Hunter',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Krystina - ALL
  {
      id: 'chapter1-3a',
      imgUrl: '/decks/chapter1/gatherer.png',
      title:'Krystina',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter1-3b',
      imgUrl: '/decks/chapter1/gatherer.png',
      title:'Krystina',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Melody - Diamond, she is one of the 8 special chars that will be revealed as a victim (for her vanity she represents DIAMOND).
  {
      id: 'chapter1-4a',
      imgUrl: '/decks/chapter1/villager.png',
      title:'Melody',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter1-4b',
      imgUrl: '/decks/chapter1/villager.png',
      title:'Meoldy',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Rowelda - ALL
  {
      id: 'chapter1-5a',
      imgUrl: '/decks/chapter1/villager-old.png',
      title:'Rowelda',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter1-5b',
      imgUrl: '/decks/chapter1/villager-old.png',
      title:'Rowelda',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Bernard - ALL
  {
      id: 'chapter1-6a',
      imgUrl: '/decks/chapter1/cowheard.png',
      title:'Bernard',
      text: "Coming soon...",
      faction: 'Cowheard',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
    id: 'chapter1-6a',
    imgUrl: '/decks/chapter1/cowheard.png',
    title:'Bernard',
    text: "Coming soon...",
    faction: 'Cowheard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },

  // Felix - HEART, he is one of the 8 special chars that will be revealed as a victim (for his purity he represents HEART).
  {
      id: 'chapter1-7a',
      imgUrl: '/decks/chapter1/peasant.png',
      title:'Felix',
      text: "Coming soon...",
      faction: 'Peasant',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter1-7b',
      imgUrl: '/decks/chapter1/peasant.png',
      title:'Felix',
      text: "Coming soon...",
      faction: 'Peasant',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Alexander - ALL
  {
      id: 'chapter1-8a',
      imgUrl: '/decks/chapter1/villager-brother.png',
      title:'Alexander',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter1-8b',
      imgUrl: '/decks/chapter1/villager-brother.png',
      title:'Alexander',
      text: "Coming soon...",
      faction: 'Villager',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Chapter 2
  // White monk - ALL
  {
      id: 'chapter2-1a',
      imgUrl: '/decks/chapter2/monk-white-1.png',
      title:'Hayden',
      text: "Coming soon...",
      faction: 'Monk',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-1b',
      imgUrl: '/decks/chapter2/monk-white-1.png',
      title:'Hayden',
      text: "Coming soon...",
      faction: 'Monk',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  
  // Brown monk - ALL
  {
      id: 'chapter2-2a',
      imgUrl: '/decks/chapter2/monk-brown.png',
      title:'Moses',
      text: "Coming soon...",
      faction: 'Moses',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-2b',
      imgUrl: '/decks/chapter2/monk-brown.png',
      title:'Moses',
      text: "Coming soon...",
      faction: 'Moses',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },

  // Blue Fairy - ALL
  {
      id: 'chapter2-3a',
      imgUrl: '/decks/chapter2/fairy-blue.png',
      title:'Spinkle',
      text: "Coming soon...",
      faction: 'Fairy',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-3b',
      imgUrl: '/decks/chapter2/fairy-blue.png',
      title:'Spinkle',
      text: "Coming soon...",
      faction: 'Fairy',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Fairy',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
    id: 'chapter2-4b',
    imgUrl: '/decks/chapter2/fairy-purple.png',
    title:'Tinkle',
    text: "Coming soon...",
    faction: 'Fairy',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
      faction: 'Fairy',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-4b',
      imgUrl: '/decks/chapter2/fairy-green.png',
      title:'Winkle',
      text: "Coming soon...",
      faction: 'Fairy',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Druid',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-5b',
      imgUrl: '/decks/chapter2/druid.png',
      title:'Deku',
      text: "Coming soon...",
      faction: 'Druid',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Lapin',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-6b',
      imgUrl: '/decks/chapter2/rabbit.png',
      title:'Bounder',
      text: "Coming soon...",
      faction: 'Lapin',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Sirpent',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-7b',
      imgUrl: '/decks/chapter2/snake.png',
      title:'Pentsser',
      text: "Coming soon...",
      faction: 'Sirpent',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Human',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-8b',
      imgUrl: '/decks/chapter2/hippy-boy.png',
      title:'Ziggy',
      text: "Coming soon...",
      faction: 'Human',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Human',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter2-8b',
      imgUrl: '/decks/chapter2/hippy-girl.png',
      title:'Powder',
      text: "Coming soon...",
      faction: 'Human',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Wizard',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-1b',
      imgUrl: '/decks/chapter3/wizard.png',
      title: 'Geldahn',
      text: "Coming soon...",
      faction: 'Wizard',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Wizard',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-2b',
      imgUrl: '/decks/chapter3/dark_wizard.png',
      title: 'Gahndel',
      text: "Coming soon...",
      faction: 'Wizard',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Witch',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-3b',
      imgUrl: '/decks/chapter3/temptress.png',
      title: 'Luna',
      text: "Coming soon...",
      faction: 'Witch',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Blacksmith',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-4b',
      imgUrl: '/decks/chapter3/bullisia.png',
      title: 'Bullisia',
      text: "Coming soon...",
      faction: 'Blacksmith',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Butcher',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-5b',
      imgUrl: '/decks/chapter3/jason.png',
      title: 'Jason',
      text: "Coming soon...",
      faction: 'Butcher',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Falconer',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-6b',
      imgUrl: '/decks/chapter3/marge.png',
      title: 'Marge',
      text: "Coming soon...",
      faction: 'Falconer',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Demon',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-7b',
      imgUrl: '/decks/chapter3/desmond.png',
      title: 'Desmond',
      text: "Coming soon...",
      faction: 'Demon',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Merfolk',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-8b',
      imgUrl: '/decks/chapter3/flyn.png',
      title: 'Flyn',
      text: "Coming soon...",
      faction: 'Merfolk',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Alchemist',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-9b',
      imgUrl: '/decks/chapter3/keret.png',
      title: 'Keret',
      text: "Coming soon...",
      faction: 'Alchemist',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
      faction: 'Dead',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
      id: 'chapter3-10b',
      imgUrl: '/decks/chapter3/bones.png',
      title: 'Bones',
      text: "Coming soon...",
      faction: 'Dead',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter1-s-1a',
    imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
    title:'Oscar',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter1-s-2a',
    imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
    title:'August',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter1-s-3a',
    imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
    title:'Dedu',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter1-s-4a',
    imgUrl: '/decks/chapter1/soldiers/captain.png',
    title:'Hugo',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter2-e-1a',
    imgUrl: '/decks/chapter2/elves/elf-male.png',
    title:'Aldwin',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter2-e-2a',
    imgUrl: '/decks/chapter2/elves/elf-villager.png',
    title:'Eldia',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter2-e-3a',
    imgUrl: '/decks/chapter2/elves/elf-angry.png',
    title:'Fenris',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter2-e-4a',
    imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
    title:'Estelle',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter2-e-5a',
    imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
    title:'Aradora',
    text: "Coming soon...",
    faction: 'Wizard',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
      faction: 'Goblin',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
    id: 'chapter3-g-1a',
    imgUrl: '/decks/chapter3/goblins/goblin-child.png',
    title:'Zig',
    text: "Coming soon...",
    faction: 'Goblin',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
      faction: 'Goblin',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
    id: 'chapter3-g-2a',
    imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
    title:'Craz',
    text: "Coming soon...",
    faction: 'Goblin',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
      faction: 'Goblin',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
    id: 'chapter3-g-3a',
    imgUrl: '/decks/chapter3/goblins/goblin-old.png',
    title:'Ruck',
    text: "Coming soon...",
    faction: 'Goblin',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
      faction: 'Goblin',
      textLeft: "",
      textRight: "",
      actionLeft: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      actionRight: {
          heart: 0,
          diamond: 0,
          auraGreen: 0,
          auraYellow: 0,
          brain: 0,
          smiley: 0,
          knife: 0,
          cleaver: 0,
          memory: 0
      },
      location: 'Choice',
      appearsWithIcon: ''
  },
  {
    id: 'chapter3-g-4a',
    imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
    title:'Gerg',
    text: "Coming soon...",
    faction: 'Goblin',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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
    faction: 'Goblin',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    location: 'Choice',
    appearsWithIcon: ''
  },
  {
    id: 'chapter3-g-5a',
    imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
    title:'Oorh',
    text: "Coming soon...",
    faction: 'Goblin',
    textLeft: "",
    textRight: "",
    actionLeft: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
        brain: 0,
        smiley: 0,
        knife: 0,
        cleaver: 0,
        memory: 0
    },
    actionRight: {
        heart: 0,
        diamond: 0,
        auraGreen: 0,
        auraYellow: 0,
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