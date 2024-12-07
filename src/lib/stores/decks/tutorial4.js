import { writable } from 'svelte/store';

const tutorial4 = writable([
  {
    id: 'tutorial4-1',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Congratulations on making it this far, Jack. You're close now, close to the truth.",
    faction: 'Judicator',
    textLeft: "What truth?", // ->tutorial4-2
    textRight: "Didn't you turn red earlier?", // ->tutorial4-2
    location: 'Chatter',
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
    id: 'tutorial4-2',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Very good question, too bad it isn't question time, Jack.",
    faction: 'Judicator',
    textLeft: "Then what's the point of chatter time?", // ->tutorial4-3a
    textRight: "Why mention the truth if you won't tell me?", // ->tutorial4-3b
    location: 'Chatter',
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
    id: 'tutorial4-3a',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Most times are easy to define, chatter is more of a lack of time. Meaning, if it isn't time for anything else, it's chatter time.",
    faction: 'Judicator',
    textLeft: "I'd rather ask questions than chat.", // ->tutorial4-3a-1a
    textRight: "I'd rather answer questions than chat.", // ->tutorial4-3a-1b
    location: 'Chatter',
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
    id: 'tutorial4-3a-1a',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I understand, but unfortunately it isn't question time. Nor is it answer time or choice time. In fact, it's almost story time, Jack.",
    faction: 'Judicator',
    textLeft: "That's new.", // ->tutorial4-4
    textRight: "What's story time?", // ->tutorial4-4
    location: 'Chatter',
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
    id: 'tutorial4-3a-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "I understand, but unfortunately it isn't answer time. Nor is it question time or choice time. In fact, it's almost story time, Jack.",
    faction: 'Judicator',
    textLeft: "That's new.", // ->tutorial4-4
    textRight: "What's story time?", // ->tutorial4-4
    location: 'Chatter',
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
    id: 'tutorial4-3b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "The truth is important, doesn't mean I need to be the one to tell you it. You'll learn a lot through story time.",
    faction: 'Judicator',
    textLeft: "Is that a new time?", // ->tutorial4-4
    textRight: "What's story time?", // ->tutorial4-4
    location: 'Chatter',
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
    id: 'tutorial4-4',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "It's true that you've never had story time before but don't worry, it requires very little of you. All you must do is listen, in fact all you can do is listen.",
    faction: 'Judicator',
    textLeft: "What's your story and why should I care?", // ->tutorial4-5a
    textRight: "Can I request a specific story?", // ->tutorial4-5b
    location: 'Chatter',
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
    id: 'tutorial4-5a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "How charming, you must make friends easily. In fact my story is quite literally my story, I feel as if you've earned it.",
    faction: 'Judicator',
    textLeft: "Oh, thank you.", // ->tutorial4-5a-1a
    textRight: "How kind of you to talk about yourself.", // ->tutorial4-5a-1b
    location: 'Chatter',
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
    id: 'tutorial4-5a-1a',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "My pleasure, Jack.",
    faction: 'Judicator',
    textLeft: "Start story time.", // ->tutorial4-6
    textRight: "Start story time.", // ->tutorial4-6
    location: 'Chatter',
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
    id: 'tutorial4-5a-1b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Uh huh...",
    faction: 'Judicator',
    textLeft: "Start story time.", // ->tutorial4-6
    textRight: "Start story time.", // ->tutorial4-6
    location: 'Chatter',
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
    id: 'tutorial4-5b',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "This isn't bed time, Jack. I'm not here to read you a story, I'm here to tell you mine.",
    faction: 'Judicator',
    textLeft: "Oh, thank you.", // ->tutorial4-5a-1a
    textRight: "How kind of you to talk about yourself.", // ->tutorial4-5a-1b
    location: 'Chatter',
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
    id: 'tutorial4-6',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "First let me reveal my true form.",
    faction: 'Judicator',
    textLeft: "Skip story.", // ->tutorial4-25
    textRight: "Next", // ->tutorial4-7
    location: 'Story',
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
    id: 'tutorial4-7',
    imgUrl: '/decks/tutorial/judicator-demon.png',
    title: 'Judas',
    text: "There jack, are you surprised to finally see me? Did you really believe I was a judicator? Hahahah, I'm a demon Jack, im your demon.",
    faction: 'Demon',
    textLeft: "Back", // ->tutorial4-6
    textRight: "Next", // ->tutorial4-8
    location: 'Story',
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
    id: 'tutorial4-8',
    imgUrl: '/decks/tutorial/judicator-demon.png',
    title: 'Judas',
    text: "I bet you wish to speak now more than ever, what's wrong? Can't seem to speak during story time huh?",
    faction: 'Demon',
    textLeft: "Back", // ->tutorial4-7
    textRight: "Next", // ->tutorial4-9
    location: 'Story',
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
    id: 'tutorial4-9',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Hahahaha just kidding! I'm not a demon Jack, you can relax. Are you ready to see what I really look like?",
    faction: 'Judicator',
    textLeft: "Back", // ->tutorial4-8
    textRight: "Next", // ->tutorial4-10
    location: 'Story',
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
    id: 'tutorial4-10',
    imgUrl: '/decks/tutorial/judicator-angel.png',
    title: 'Judea',
    text: "Here I am, how do you like my wings? I'm an angel Jack, I'm your angel!",
    faction: 'Angel',
    textLeft: "Back", // ->tutorial4-9
    textRight: "Next", // ->tutorial4-11
    location: 'Story',
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
    id: 'tutorial4-11',
    imgUrl: '/decks/tutorial/judicator-white-smile.png',
    title: 'Jude',
    text: "Not buying it this time? Alright, enough jokes then, let me slip into something more familiar.",
    faction: 'Judicator',
    textLeft: "Back", // ->tutorial4-10
    textRight: "Next", // ->tutorial4-12
    location: 'Story',
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
    id: 'tutorial4-12',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Not Jude',
    text: "Hello Jack, allow me to reintroduce myself. My name is not Jude, but it's been a while since I've forgotten what it actually was. Like you, I too was a guest once, long ago.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-11
    textRight: "Next", // ->tutorial4-13
    location: 'Story',
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
    id: 'tutorial4-13',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "Similarly, I woke up confused with no memories. Except, when I awoke I was alone. I wandered helplessly for what felt like an eternity.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-12
    textRight: "Next", // ->tutorial4-14
    location: 'Story',
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
    id: 'tutorial4-14',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "Eventually my judicator appeared before me, except, he had no interest in me. He had a mild curiosity and I could tell he watched me from afar, but never intervened.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-13
    textRight: "Next", // ->tutorial4-15
    location: 'Story',
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
    id: 'tutorial4-15',
    imgUrl: '/decks/tutorial/judicator-human-mad.png',
    title: 'Jude',
    text: "I knew nothing, I travelled from place to place, talking to various guests and visitors without knowing a thing. Eventually, I abandoned my search for answers along with my hope.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-14
    textRight: "Next", // ->tutorial4-16
    location: 'Story',
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
    id: 'tutorial4-16',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "I didn't know it at the time, but I was drifting. With no purpose, I wandered around aimlessly until one day I heard a voice call to me.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-15
    textRight: "Next", // ->tutorial4-17
    location: 'Story',
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
    id: 'tutorial4-17',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "This voice enveloped my whole being, it filled my mind with warmth and comfort and gave me the purpose I'd been longing. I was told that I can leave this place if I wanted, but I'd need to complete another trial.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-16
    textRight: "Next", // ->tutorial4-18
    location: 'Story',
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
    id: 'tutorial4-18',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "Another trial? I never knew I had a first trial. It was explained to me that guests who fail to recover their memories, end up drifting here forever, but some of the \"lucky\" few drifters get a second chance.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-17
    textRight: "Next", // ->tutorial4-19
    location: 'Story',
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
    id: 'tutorial4-19',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "So, it would seem my judicator was given a 2nd chance but abandoned their responsibilities. Whether they didn't understand their role, didn't care about their role or simply wanted me to fail, is unclear.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-18
    textRight: "Next", // ->tutorial4-20
    location: 'Story',
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
    id: 'tutorial4-20',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "My memories were conditionally returned to me under the agreement that I would become a judicator. Unlike guests who can leave this place after retrieving their memories, judicators must continue to judge other guests.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-19
    textRight: "Next", // ->tutorial4-21
    location: 'Story',
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
    id: 'tutorial4-21',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "No timeframe was given, I was only told that the more I judged as an unbiased judicator, the more eyes would appear on my body. When I've obtained enough eyes, symbolizing what I've witnessed and learnt here, I would be granted a 2nd trial.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-20
    textRight: "Next", // ->tutorial4-22
    location: 'Story',
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
    id: 'tutorial4-22',
    imgUrl: '/decks/tutorial/judicator-human-eye-open.png',
    title: 'Jude',
    text: "Do you know how long ago that was... Jack?",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-21
    textRight: "Next", // ->tutorial4-23
    location: 'Story',
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
    id: 'tutorial4-23',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "As I met and watched guest after guest, it quickly became clear that most of them failed their trial. I pondered the reason for this, were they always doomed to fail? Was it fair that their fate lie in the hands of another? Did we want them to pass? What was the point of all this?",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-22
    textRight: "Next", // ->tutorial4-24
    location: 'Story',
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
    id: 'tutorial4-24',
    imgUrl: '/decks/tutorial/judicator-human.png',
    title: 'Jude',
    text: "Eventually, I decided to help as many lost souls as I could. I experimented with methods to help people regain their lost memories, but in the end I realized the most effective method was not to teach them, but to guide them and let them walk on their own.",
    faction: 'Human',
    textLeft: "Back", // ->tutorial4-23
    textRight: "Next", // ->tutorial4-25
    location: 'Story',
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
    id: 'tutorial4-25',
    imgUrl: '/decks/tutorial/judicator-human-mad.png',
    title: 'Jude',
    text: "I create a setting that your mind quickly latches on to: where am I, why are my memories lost, who is this being trying to help me, why is it important to speak with others, protect the mementos and remember? I plant these questions like seeds in the minds of my guests and let them grow as they ponder this.",
    faction: 'Human',
    textLeft: "Restart story.", // ->tutorial4-6
    textRight: "Next", // ->tutorial4-26
    location: 'Story',
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
    id: 'tutorial4-26',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "It may seem strange, but these methods have yielded the best results. Eventually the voice returned to me and told me I would meet you. It told me my final judgement would be determined by your trial. Why you? When I saw your memories, it became much clearer. Trust me Jack, and we will both be able to leave this place. Don't, and we may be lost here forever. We will discuss more later, ready for answer time?",
    faction: 'Judicator',
    textLeft: "If you're human, why choose these strange forms?", // ->tutorial4-27
    textRight: "I'm ready for answer time!", // ->survey4-1
    location: 'Chatter',
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
    id: 'tutorial4-27',
    imgUrl: '/decks/tutorial/judicator-white.png',
    title: 'Jude',
    text: "Strange to you perhaps, but they make no difference to me. I spend most time in this form, simply because it's void of any characteristics. It helps me remain unbiased.",
    faction: 'Judicator',
    textLeft: "I see.", // ->survey4-1
    textRight: "I'm ready for answer time!", // ->survey4-1
    location: 'Chatter',
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

export default tutorial4;