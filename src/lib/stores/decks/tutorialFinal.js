import { get, writable } from 'svelte/store';
import player from '../player';

const tutorialFinal = writable([
  {
    id: 'tutorial-final-1',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "You really did it, you made it to the end of your trial...",
    faction: 'Judicator',
    textLeft: "Thanks to you.", // ->tutorial-final-2a
    textRight: "You seem concerned?", // ->tutorial-final-2b
    location: 'Chatter',
    actionLeft: {
      good: 1,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-2a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "I may have guided you, but it was your choices that brought you here. And now that you are here, it's time we see to it that you leave this place once and for all.",
    faction: 'Judicator',
    textLeft: "That's all I've ever wanted.", // ->tutorial-final-3a
    textRight: "Not without you.", // ->tutorial-final-3b
    location: 'Chatter',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-2b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Do I? I suppose I'm only now considering the reality of leaving this place. I've dreamt of leaving many times, but I never thought this day would truly come. It's time we leave this place, starting with you.",
    faction: 'Judicator',
    textLeft: "I'll see you on the other side.", // ->tutorial-final-3a
    textRight: "I won't leave without you.", // ->tutorial-final-3b
    location: 'Chatter',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-3a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "That's the spirit! Now then, no more smoke and mirrors, no more time for this and that. I'm going to ask you a very straightforward question, the last question I'll ever ask you. Let me know when you're ready.",
    faction: 'Friend',
    textLeft: "Ready", // ->tutorial-final-4
    textRight: "Not ready", // ->tutorial-final-3b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  {
    id: 'tutorial-final-3b',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Thank you, but worrying about yourself is the best way to help me. Now then, no more smoke and mirrors, no more time for this and that. I'm going to ask you a very straightforward question, the last question I'll ever ask you. Let me know when you're ready.",
    faction: 'Friend',
    textLeft: "Ready", // ->tutorial-final-4
    textRight: "Not ready", // ->tutorial-final-3b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  {
    id: 'tutorial-final-3b-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I understand, you need a moment to process this. Please, take as long as you need and let me know when you wish to proceed.",
    faction: 'Friend',
    textLeft: "Ready", // ->tutorial-final-4
    textRight: "Not ready", // ->tutorial-final-3b-1b (intentional loop)
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-4',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Would you like to remember?",
    faction: 'Friend',
    textLeft: "Yes", // ->tutorial-final-5
    textRight: "No", // ->tutorial-final-4-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  {
    id: 'tutorial-final-4-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Jack, I'm going to assume you answered quickly and didn't hear what I said. I asked, would you like to remember?",
    faction: 'Friend',
    textLeft: "Yes", // ->tutorial-final-5
    textRight: "No", // ->tutorial-final-4-1b-1b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  {
    id: 'tutorial-final-4-1b-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I see now you understood me but still choose to forget. I will ask you one last time and then your choice will be final. Would you like to remember?",
    faction: 'Friend',
    textLeft: "Yes", // ->tutorial-final-5
    textRight: "No", // ->tutorial-final-quit-1
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  // v-- Fast ending for those who don't wish to remember. Short ending --v
  {
    id: 'tutorial-final-quit-1',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "You would doom us both simply out of fear of what your memories may hold? After meeting the guests, you're now hesitant on revealing your true self. But Jack, you are so close, all you have to do is remember and everything will be over.",
    faction: 'Friend',
    textLeft: "I'm just not ready.", // ->tutorial-final-quit-2
    textRight: "I changed my mind, I'm sorry.", // ->tutorial-final-5
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 100,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-2',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I- I understand Jack. It truly is a shame then, there's nothing more I can do for you, nothing more you can do for yourself and nothing that can be done for me either. I hope you don't change your mind because it's too late now.",
    faction: 'Friend',
    textLeft: "", // ->tutorial-final-quit-3
    textRight: "", // ->tutorial-final-quit-3
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-3',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "You won't be able to speak anymore Jack, you've lost your right to make decisions, one of many luxuries you've lost, more than you currently grasp. One day you will come to regret your decision, when you've experienced what I have.",
    faction: 'Friend',
    textLeft: "", // ->tutorial-final-quit-4
    textRight: "", // ->tutorial-final-quit-4
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-4',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I suppose this is what you would call the \"bad ending\", so congratulations Jack, you've doomed us both and now I feel myself drifting away. You know, you're just like my judicator in the end.",
    faction: '???',
    textLeft: "", // ->tutorial-final-quit-5
    textRight: "", // ->tutorial-final-quit-5
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-5',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Abandoned by all, this life was never fair to me, but then again, I suppose this is what I truly deserve... what we truly deserve Jack. You would have understood what I mean had you just remembered.",
    faction: '???',
    textLeft: "", // ->tutorial-final-quit-6
    textRight: "", // ->tutorial-final-quit-6
    location: '???',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-6',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: '???',
    text: "Well so be it then, this is goodbye. Of course, you don't always make this decision, sometimes you choose to remember. Until next time Jack.",
    faction: '???',
    textLeft: "", // ->tutorial-final-quit-7
    textRight: "", // ->tutorial-final-quit-7
    location: '???',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-7',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: '???',
    text: "What? You didn't truly think you could actually escape did you? This is your limbo Jack, cursed to repeat these trials until the end of all time, as am I. I wonder who bears a heavier curse, you who remains ignorant or me who knows the truth but cannot change it.",
    faction: '???',
    textLeft: "", // ->tutorial-final-quit-8
    textRight: "", // ->tutorial-final-quit-8
    location: '???',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-quit-8',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: '???',
    text: "You're feeling tired Jack... So very very... very...",
    faction: '???',
    textLeft: "", // ->tutorial1-1
    textRight: "", // ->tutorial1-1
    location: '???',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // ^-- Short ending --^
  {
    id: 'tutorial-final-5',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "That settles it then, there's nothing left to do now but close your eyes and concentrate.",
    faction: 'Friend',
    textLeft: "Close eyes", // ->tutorial-final-6
    textRight: "Peek", // ->tutorial-final-5-1b
    location: 'Judgement',
    actionLeft: {
      good: 1,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  {
    id: 'tutorial-final-5-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Jack...",
    faction: 'Friend',
    textLeft: "Close eyes", // ->tutorial-final-6
    textRight: "Close eyes", // ->tutorial-final-6
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-6',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "...",
    faction: '',
    textLeft: "Okay, now what?", // ->tutorial-final-7a
    textRight: "...", // ->tutorial-final-7b
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-7a',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "shh... just try to remember a time you were happy.",
    faction: '',
    textLeft: "A time I was happy...", // ->tutorial-final-8a
    textRight: "...", // ->tutorial-final-8b
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-7b',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "Now, try to remember a time you were happy.",
    faction: '',
    textLeft: "Happy...", // ->tutorial-final-8a
    textRight: "...", // ->tutorial-final-8b
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-8a',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "Yes, remember the mixture of emotions and feelings you felt in that moment. What was it that lit a smile across your face so effortlessly?",
    faction: '',
    textLeft: "...", // ->tutorial-final-9
    textRight: "...", // ->tutorial-final-9
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-8b',
    imgUrl: '/decks/tutorial/black.png',
    title: '',
    text: "Remember the mixture of emotions and feelings you felt in that moment. What was it that lit a smile across your face so effortlessly?",
    faction: '',
    textLeft: "...", // ->tutorial-final-9(felix/melody)
    textRight: "...", // ->tutorial-final-9(felix/melody)
    location: '',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },

  // Heart / Diamond
  {
    id: 'tutorial-final-9-felix',
    imgUrl: '/decks/special_chars/felix_dead.png',
    title: 'Felix',
    text: 'Heart momento, Felix.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-10(ziggy/bounder)
    textRight: "", // ->tutorial-final-10(ziggy/bounder)
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-9-melody',
    imgUrl: '/decks/special_chars/melody_dead.png',
    title: 'Melody',
    text: 'Diamond momento, Melody.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-10(ziggy/bounder)
    textRight: "", // ->tutorial-final-10(ziggy/bounder)
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Green Aura / Yellow Aura
  {
    id: 'tutorial-final-10-ziggy',
    imgUrl: '/decks/special_chars/ziggy_dead.png',
    title: 'Ziggy',
    text: 'Green aura momento, Ziggy.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-11(eliza/luna)
    textRight: "", // ->tutorial-final-11(eliza/luna)
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-10-bounder',
    imgUrl: '/decks/special_chars/bounder_dead.png',
    title: 'Bounder',
    text: 'Yellow aura momento, Bounder.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-11(eliza/luna)
    textRight: "", // ->tutorial-final-11(eliza/luna)
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Brain / Smiley
  {
    id: 'tutorial-final-11-eliza',
    imgUrl: '/decks/special_chars/bullisia_dead.png',
    title: 'Eliza',
    text: 'Brain momento, Eliza.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-12(shelly/marge)
    textRight: "", // ->tutorial-final-12(shelly/marge)
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-11-luna',
    imgUrl: '/decks/special_chars/luna_dead.png',
    title: 'Luna',
    text: 'Smiley momento, Luna.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-12(shelly/marge)
    textRight: "", // ->tutorial-final-12(shelly/marge)
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Knife / Cleaver
  {
    id: 'tutorial-final-12-shelly',
    imgUrl: '/decks/special_chars/shelly_dead.png',
    title: 'Shelly',
    text: 'Knife momento, Shelly.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-13
    textRight: "", // ->tutorial-final-13
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-12-marge',
    imgUrl: '/decks/special_chars/marge_dead.png',
    title: 'Marge',
    text: 'Cleaver momento, Marge.',
    faction: 'Memories',
    textLeft: "", // ->tutorial-final-13
    textRight: "", // ->tutorial-final-13
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-13',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Behold, your victims.",
    faction: 'Friend',
    textLeft: "My victims?", // ->tutorial-final-14
    textRight: "I don't understand.", // ->tutorial-final-14
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-14',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "I think deep down you know what I'm saying. The reason why you're here Jack, the reason why you're a guest and the reason why I've been assigned to you.",
    faction: 'Friend',
    textLeft: "Please, stop.", // ->tutorial-final-15a
    textRight: "This can't be.", // ->tutorial-final-15b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-15a',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "There's no stopping now Jack, it's judgement time. During your time on earth you tortured and murdered several people. They've all been brought here with you as visitors. I too walked a similar path and was invited as a guest, you and I are the same Jack.",
    faction: 'Friend',
    textLeft: "...", // ->tutorial-final-16
    textRight: "...", // ->tutorial-final-16
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-15b',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "But it is Jack, this is the truth.  During your time on earth you tortured and murdered several people. They've all been brought here with you as visitors. I too walked a similar path and was invited as a guest, you and I are the same Jack.",
    faction: 'Friend',
    textLeft: "...", // ->tutorial-final-16
    textRight: "...", // ->tutorial-final-16
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-16',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "I know, it's a lot to take in. Jack seemed appropriate since you were quite the \"ripper\" yourself. You tore apart countless families and not just those of humans, you tortured and murdered animals as well. Your actions earned you a special invitation to the afterlife as our guest of judgement.",
    faction: 'Friend',
    textLeft: "I remember now, how I died.", // ->tutorial-final-17a
    textRight: "How many lives did I take?", // ->tutorial-final-17b
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-17a',
    imgUrl: '/decks/tutorial/judicator-judgement_smile.png',
    title: 'Jude',
    text: "Not very courageous were you? When authorities were closing in on you, you took your final life, your own. I must say, I'm surprised you were even given a trial with the atrocities you performed. Truly impressive Jack, and I don't say that lightly.",
    faction: 'Friend',
    textLeft: "...", // ->tutorial-final-18
    textRight: "...", // ->tutorial-final-18
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-17b',
    imgUrl: '/decks/tutorial/judicator-judgement_smile.png',
    title: 'Jude',
    text: "More than 4 Jack, certainly a lot more than 4. I must say, I'm surprised you were even given a trial with the atrocities you performed. Truly impressive Jack, and I don't say that lightly.",
    faction: 'Friend',
    textLeft: "...", // ->tutorial-final-18
    textRight: "...", // ->tutorial-final-18
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-18',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Relax, there may be a happy ending for you after all. I've watched your interactions and I've been given the authority to decide if you deserve another chance at life or not. Were you remorseful in your pursuit for the truth, did you change as you regained your memories, or are you doomed to repeat the same mistakes again and again. I will be the one to answer these questions \"Jack\", now let's take a look at how far you've come.",
    faction: 'Friend',
    textLeft: "I'm ready for my judgement.", // ->tutorial-final-19
    textRight: "I'm ready for my judgement.", // ->tutorial-final-19
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-19',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Your actions have revealed the truth in your heart and as a result, you unconsciously selected 4 mementos. Each of these mementos represent victims whose lives you stole. Four victims, four visitors and four stories unfinished.",
    faction: 'Friend',
    textLeft: "Tell me their stories.", // ->tutorial-final-20a
    textRight: "I don't want to hear their stories.", // ->tutorial-final-20b
    location: 'Judgement',
    actionLeft: {
      good: 1,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 1,
    }
  },
  {
    id: 'tutorial-final-20a',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Indeed I shall and after their stories have been told, I will reveal your final judgement. There are 3 possibilities for you: first, you are reborn without any knowledge or recollection of your time spent here as a guest. You will be given a new chance at life, don't waste it. Second, you are damned for eternity never to walk the earth again, cast into the void. I would not wish this fate on anyone Jack. Lastly, in the most rarest of cases, you will become a judicator awaiting another trial to decide your fate. This only happens in the event that a soul cannot be adequately judged. Are you ready Jack?",
    faction: 'Friend',
    textLeft: "I'm ready.", // ->tutorial-final-heart/diamond-story-1
    textRight: "I am.", // ->tutorial-final-heart/diamond-story-1
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-20b',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "There's no hiding from them now Jack, I will reveal their stories followed by your final judgement. There are 3 possibilities for you: first, you are reborn without any knowledge or recollection of your time spent here as a guest. You will be given a new chance at life, don't waste it. Second, you are damned for eternity never to walk the earth again, cast into the void. I would not wish this fate on anyone Jack. Lastly, in the most rarest of cases, you will become a judicator awaiting another trial to decide your fate. This only happens in the event that a soul cannot be adequately judged. Are you ready Jack?",
    faction: 'Friend',
    textLeft: "I'm ready.", // ->tutorial-final-heart/diamond-story-1
    textRight: "I am.", // ->tutorial-final-heart/diamond-story-1
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Heart Story
  {
    id: 'tutorial-final-heart-story-1',
    imgUrl: '/decks/special_chars/felix.png',
    title: 'Felix',
    text: "Felix was your first human victim, he was a child who went to the same school as you, although he was several grades younger.",
    faction: 'Memories',
    textLeft: "Felix...", // -> tutorial-final-heart-story-2
    textRight: "Stop...", // -> tutorial-final-heart-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-heart-story-2',
    imgUrl: '/decks/special_chars/felix.png',
    title: 'Felix',
    text: "When you were only 12 years old, you took his life one day when he was out swimming alone by the lake. You followed him and pretended to make friends with him, claiming you knew where buried treasure was but you would need to swim to a secret island to find it.",
    faction: 'Memories',
    textLeft: "Please...", // -> tutorial-final-heart-story-3
    textRight: "I don't want to hear this...", // -> tutorial-final-heart-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-heart-story-3',
    imgUrl: '/decks/special_chars/felix_dead.png',
    title: 'Felix',
    text: "As soon as you two were isolated in the water, you drowned him with your bare hands and never spoke a word of it. The body was found the next day and you played the victim who lost a friend. You never told anyone about that day, soon after you never thought about it again.",
    faction: 'Memories',
    textLeft: "No more...", // -> tutorial-final- green / yellow
    textRight: "I'm so sorry Felix...", // -> tutorial-final- green / yellow
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  // Diamond Story
  {
    id: 'tutorial-final-diamond-story-1',
    imgUrl: '/decks/chapter4/melody_real.png',
    title: 'Melody',
    text: "Melody was a girl you met in college, you were both in many classes together and soon the two of you quickly hit it off.",
    faction: 'Memories',
    textLeft: "Melody...", // -> tutorial-final-diamond-story-2
    textRight: "Stop...", // -> tutorial-final-diamond-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-diamond-story-2',
    imgUrl: '/decks/chapter4/melody_real.png',
    title: 'Melody',
    text: "You had studied at the library on campus a few times so she was comfortable with you. That's what you waited for Jack, her trust.",
    faction: 'Memories',
    textLeft: "Please...", // -> tutorial-final-diamond-story-3
    textRight: "I don't want to hear this...", // -> tutorial-final-diamond-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-diamond-story-3',
    imgUrl: '/decks/special_chars/melody_dead.png',
    title: 'Melody',
    text: "When your roommate was out of town you invited her over to study, except you had something else planned for her didn't you? You strangled her by your desk and threw the body in the dumpster. Shortly afterwards you printed missing posters, even bringing yourself to shed tears for her to sell the part. Quite the actor.",
    faction: 'Memories',
    textLeft: "No more...", // -> tutorial-final- green / yellow
    textRight: "I'm so sorry Melody...", // -> tutorial-final- green / yellow
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  // Green Aura Story
  {
    id: 'tutorial-final-green-story-1',
    imgUrl: '/decks/chapter4/ziggy_real.png',
    title: 'Ziggy',
    text: "Ziggy was your best friend since high school, he may have been one of the only people you ever truly cared about, if such feelings were available to you.",
    faction: 'Memories',
    textLeft: "Ziggy...", // -> tutorial-final-green-story-2
    textRight: "Stop...", // -> tutorial-final-green-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-green-story-2',
    imgUrl: '/decks/chapter4/ziggy_real.png',
    title: 'Ziggy',
    text: "You guys would kick it together weekly. You'd watch movies together, smoke together, play sports together, you were like brothers. At least, you were like a brother to him.",
    faction: 'Memories',
    textLeft: "Forgive me...", // -> tutorial-final-green-story-3
    textRight: "I can't do this...", // -> tutorial-final-green-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-green-story-3',
    imgUrl: '/decks/special_chars/ziggy_dead.png',
    title: 'Ziggy',
    text: "But the closer you got and the more he trusted you, the more your impulses grew. He had never done anything to harm you, which made it all the more enticing, he would never see it coming. You took his life during a hiking trip, mutilating him in the woods over the span of several days. You claimed he got lost on your hiking trip but his girlfriend Powder never believed you.",
    faction: 'Memories',
    textLeft: "I'm so sorry Ziggy...", // -> tutorial-final- brain / smiley
    textRight: "I'm so sorry Powder...", // -> tutorial-final- brain / smiley
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  // Yellow Aura Story
  {
    id: 'tutorial-final-yellow-story-1',
    imgUrl: '/decks/chapter4/bounder_real.png',
    title: 'Bounder',
    text: "Bounder was your first childhood pet, and your very first kill.",
    faction: 'Memories',
    textLeft: "Bounder...", // -> tutorial-final-yellow-story-2
    textRight: "Stop...", // -> tutorial-final-yellow-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-yellow-story-2',
    imgUrl: '/decks/chapter4/bounder_real.png',
    title: 'Bounder',
    text: "You always had impulses, one day you forgot to feed your rabbit and he seemed to be more lethargic. You starved him for another day, then another...",
    faction: 'Memories',
    textLeft: "Forgive me...", // -> tutorial-final-yellow-story-3
    textRight: "I can't do this...", // -> tutorial-final-yellow-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-yellow-story-3',
    imgUrl: '/decks/special_chars/bounder_dead.png',
    title: 'Bounder',
    text: "You fed him scraps and watched as he grew thin. I believe this was the moment you realized who you truly were, what you truly were. Eventually, you took him into the woods and broke his neck slowly, watching him squirm not with remorse, but satisfaction. When he stopped moving, you felt only the urge to do it again. Little did you know...",
    faction: 'Memories',
    textLeft: "I'm so sorry Bounder...", // -> tutorial-final- brain / smiley
    textRight: "I'm so sorry mom, dad...", // -> tutorial-final- brain / smiley
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Brain Story
  {
    id: 'tutorial-final-brain-story-1',
    imgUrl: '/decks/special_chars/bullisia_dead.png',
    title: 'Eliza',
    text: "Eliza was your first and only girlfriend. You stayed together for years, trying to give her what you never had to offer. She loved you more than she loved herself, more than she loved anyone or anything. She loved you more than life itself.",
    faction: 'Memories',
    textLeft: "Eliza...", // -> tutorial-final-brain-story-2
    textRight: "No...", // -> tutorial-final-brain-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-brain-story-2',
    imgUrl: '/decks/special_chars/bullisia_dead_smile_1.png',
    title: 'Eliza',
    text: "Deep down she always knew what you were, and she never loved you any less because of it. If there was ever a soulmate for you, it was her. But the stronger the bond, the stronger the urges. You held on for years, but eventually it became too strong...",
    faction: 'Memories',
    textLeft: "Forgive me...", // -> tutorial-final-brain-story-3
    textRight: "I can't do this...", // -> tutorial-final-brain-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-brain-story-3',
    imgUrl: '/decks/special_chars/bullisia_dead_smile_2.png',
    title: 'Eliza',
    text: "Her death may have been the only one to bring you pain, as you did it quickly in her sleep. But she woke up before you finished and to your surprise, she didn't fight it. She only smiled at you, staring into your eyes as you watched the life leave hers.",
    faction: 'Memories',
    textLeft: "I couldn't help myself...", // -> tutorial-final- brain / smiley
    textRight: "I'm so, so sorry Eliza...", // -> tutorial-final- brain / smiley
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 1,
    },
    actionRight: {
      good: 1,
      evil: 0,
    }
  },
  // Smiley Story
  {
    id: 'tutorial-final-smiley-story-1',
    imgUrl: '/decks/chapter4/luna_real.png',
    title: 'Luna',
    text: "By the time you met Luna you were already too far gone. At this point there were no mistakes or happy accidents, you hunted your victims.",
    faction: 'Memories',
    textLeft: "Luna...", // -> tutorial-final-smiley-story-2
    textRight: "...", // -> tutorial-final-smiley-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-smiley-story-2',
    imgUrl: '/decks/chapter4/luna_real.png',
    title: 'Luna',
    text: "Luna was what you might refer to as a 7/11 run. Like when you're craving cigarettes so you head to the corner store to pick some up. You had seen her on the corner before, she would be a nice quick kill to take the edge off and quench your thirst for blood. You picked her up in the dead of night, never to see another morning.",
    faction: 'Memories',
    textLeft: "Forgive me...", // -> tutorial-final-smiley-story-3
    textRight: "...", // -> tutorial-final-smiley-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-smiley-story-3',
    imgUrl: '/decks/special_chars/luna_dead.png',
    title: 'Luna',
    text: "You slept with her then stabbed her in your car when you were finished. You dumped her on the street like trash, refusing to spend time hiding a body nobody would care to find.",
    faction: 'Memories',
    textLeft: "I couldn't help myself...", // -> tutorial-final- brain / smiley
    textRight: "...", // -> tutorial-final- brain / smiley
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Knife Story
  {
    id: 'tutorial-final-knife-story-1',
    imgUrl: '/decks/chapter4/shelly_real.png',
    title: 'Shelly',
    text: "Shelly worked at your local gas station, you had seen her plenty of times and always knew one day you would take her life. She also hunted in her free time so you felt it justified, not that it mattered.",
    faction: 'Memories',
    textLeft: "Shelly...", // -> tutorial-final-knife-story-2
    textRight: "...", // -> tutorial-final-knife-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-knife-story-2',
    imgUrl: '/decks/chapter4/shelly_real.png',
    title: 'Shelly',
    text: "You waited until she got off work one late night. You knocked her out from behind and dragged her to your basement. You kept her there for weeks, skinning her slowly as if dissecting an animal for a science experiment.",
    faction: 'Memories',
    textLeft: "I remember this...", // -> tutorial-final-knife-story-3
    textRight: "She was the one...", // -> tutorial-final-knife-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-knife-story-3',
    imgUrl: '/decks/special_chars/shelly_dead.png',
    title: 'Shelly',
    text: "You pushed your luck though, having too much fun. One day when you returned home, she was gone. She managed to escape and for the first time in your life you felt true fear. I believe this is what caused you to commit suicide in the end. Unbeknownst to you she died of her injuries shortly after being brought to a hospital, she never uttered a word.",
    faction: 'Memories',
    textLeft: "She didn't..?", // -> tutorial-final-alignment
    textRight: "...", // -> tutorial-final-alignment
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  // Cleaver Story
  {
    id: 'tutorial-final-cleaver-story-1',
    imgUrl: '/decks/chapter4/marge_real.png',
    title: 'Marge',
    text: "Interestingly enough, Marge was perhaps the only person you didn't actually mean to kill. Unfortunately, intentional or not you did take her life.",
    faction: 'Memories',
    textLeft: "Marge...", // -> tutorial-final-cleaver-story-2
    textRight: "...", // -> tutorial-final-cleaver-story-2
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-cleaver-story-2',
    imgUrl: '/decks/chapter4/marge_real.png',
    title: 'Marge',
    text: "She was a veterinarian who had noticed your lack of empathy for animals. You feared she might expose you one day so you always kept her close to you, but even closer to your blade.",
    faction: 'Memories',
    textLeft: "Right...", // -> tutorial-final-cleaver-story-3
    textRight: "I wasn't going to hurt her...", // -> tutorial-final-cleaver-story-3
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-cleaver-story-3',
    imgUrl: '/decks/special_chars/marge_dead.png',
    title: 'Marge',
    text: "But before you ever had to make that decision, you accidentally offered her food she was highly allergic to. Before she could reach for her purse, you latched onto her and didn't let go until she slowly suffocated. You then played it off as an accidental allergic reaction that killed her, although you could have saved her life that day.",
    faction: 'Memories',
    textLeft: "I can't listen anymore", // -> tutorial-final-alignment
    textRight: "...", // -> tutorial-final-alignment
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Those are the stories behind the mementos you chose, and now as promised I shall deliver my final verdict.",
    faction: 'Friend',
    textLeft: "", // -> tutorial-final-alignment-good/neutral/evil
    textRight: "", // -> tutorial-final-alignment-good/neutral/evil
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment-good-1',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Jack, we know the horrors you committed on earth are unspeakable, but after watching you interact with the fellow guests and visitors of this world, I have deemed you capable of change and worthy of another chance. You shall be sent for reincarnation, so relax, you did it. You're going home Jack, home to a place you've never been before. But if you slip up, you'll end up right back here. I hope you've truly learnt from your mistakes and change your ways, for your sake and the sake of others. You're free now Jack, you're free. I suppose you can consider this a \"good\" ending.",
    faction: 'Friend',
    textLeft: "I'm free..?", // -> tutorial-final-alignment-good-2
    textRight: "I get another chance?", // -> tutorial-final-alignment-good-2
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment-good-2',
    imgUrl: '/decks/tutorial/judicator-judgement_smile.png',
    title: 'Jude',
    text: "Yes Jack, most are not so lucky, so don't ruin this extra chance you've been given. Take care now and thank you, in the process you have liberated me as well. Goodbye Jack, goodbye.",
    faction: 'Friend',
    textLeft: "Goodbye Jude.", // -> tutorial1-1
    textRight: "Smell ya later dummy!", // -> tutorial1-1
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment-neutral-1',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Jack, we know the horrors you committed on earth are unspeakable, but after watching you interact with the fellow guests and visitors of this world, I find it difficult to determine if you'd benefit from reincarnation. But I also don't feel comfortable sending you to the void. I believe it's best that you follow in my footsteps and become a judicator, awaiting a trial that may truly judge your soul.",
    faction: 'Friend',
    textLeft: "What does this mean?", // -> tutorial-final-alignment-neutral-2
    textRight: "So, I get another chance?", // -> tutorial-final-alignment-neutral-2
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment-neutral-2',
    imgUrl: '/decks/tutorial/judicator-judgement_smile.png',
    title: 'Jude',
    text: "It means you're not out of the woods yet. I'm not sure how much longer you will need to stay here but you cannot leave just yet. Seems you and I will be getting to know each other even more Jack. Let's not waste any time, when I snap my fingers, you will fall asleep.",
    faction: 'Friend',
    textLeft: "Jude wait!", // -> tutorial1-1
    textRight: "Wait I have a question!", // -> tutorial1-1
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment-evil-1',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "Jack, we know the horrors you committed on earth are unspeakable, but after watching you interact with the fellow guests and visitors of this world, I find that not much has changed. You still behave selfishly and cruel with no regard to those around you. I find it unlikely that you will benefit from reincarnation. Therefore I'm sorry Jack, but I think it's best if you're sent to the void.",
    faction: 'Friend',
    textLeft: "What does this mean?", // -> tutorial-final-alignment-evil-2
    textRight: "So, that's it for me?", // -> tutorial-final-alignment-evil-2
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-alignment-evil-2',
    imgUrl: '/decks/tutorial/judicator-judgement.png',
    title: 'Jude',
    text: "I'm sorry Jack, I warned you that all I could do was guide you. You brought this fate upon yourself and unfortunately there is no time to waste. You have failed Jack, this is the worst possible outcome. Goodbye forever, you have doomed us both.",
    faction: 'Friend',
    textLeft: "Jude wait!", // -> tutorial1-1
    textRight: "Wait I have a question!", // -> tutorial1-1
    location: 'Judgement',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },

  // 🟠🟠🟠 This is so I can flash all victims quickly 🟠🟠🟠
  {
    id: 'tutorial-final-heart',
    imgUrl: '/decks/special_chars/felix_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-diamond',
    imgUrl: '/decks/special_chars/melody_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-green',
    imgUrl: '/decks/special_chars/ziggy_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-yellow',
    imgUrl: '/decks/special_chars/bounder_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-brain',
    imgUrl: '/decks/special_chars/bullisia_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-smiley',
    imgUrl: '/decks/special_chars/luna_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-knife',
    imgUrl: '/decks/special_chars/shelly_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
  {
    id: 'tutorial-final-cleaver',
    imgUrl: '/decks/special_chars/marge_dead.png',
    title: '',
    text: "",
    faction: 'Memories',
    textLeft: "",
    textRight: "",
    location: 'Memories',
    actionLeft: {
      good: 0,
      evil: 0,
    },
    actionRight: {
      good: 0,
      evil: 0,
    }
  },
]);

export default tutorialFinal;