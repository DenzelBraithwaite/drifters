<script lang="ts">
  // @ts no-check

  // Hooks
  import { fly, fade, blur } from 'svelte/transition';

  // Helpers
  import { surveyDecisionHandler } from '../helpers/surveyDecisionHandler';
  import { updateStatCard } from '../helpers/stats';

  // Components
  import { Button, Card, Circle, MenuButton, MenuDeck } from './index.js';

  // Stores
  import decks from '../stores/decks.js';
  import backgrounds from '../stores/backgroundImgs';
  import player from '../stores/player.js';

  // Types
  import type { CompleteCard } from '../helpers/stats';

  // Decks
  const tutorial1Deck = $decks.tutorial1;
  const tutorial2Deck = $decks.tutorial2;
  const tutorial3Deck = $decks.tutorial3;
  const tutorial4Deck = $decks.tutorial4;
  const tutorialFinalDeck = $decks.tutorialFinal;
  const chapter1Deck = $decks.chapter1;
  const chapter1SoldiersDeck = $decks.soldiers;
  const chapter2Deck = $decks.chapter2;
  const chapter2ElvesDeck = $decks.elves;
  const chapter3Deck = $decks.chapter3;
  const chapter3GoblinsDeck = $decks.goblins;
  const chapter4Deck = $decks.chapter4;
  const chapter4BeingsDeck = $decks.beings;
  const statDeck = {
    health: $decks.health,
    aura: $decks.aura,
    sanity: $decks.sanity,
    impulse: $decks.impulse,
  }

  $player.unlockedCards = [...tutorial1Deck];
  let gameOver = false;
  let currentCard: CompleteCard = $player.unlockedCards[0];
  let menuOpen = false;
  let buttonOnCooldown = false;
  let textBox: HTMLElement;
  let centerBtnVisible = false;
  
  // Game "Animations"
  let newDeckAlert = false;
  let newDeckAlertText = 'DECK_NAME_HERE';
  let blurCard = false;
  let flashHealth = {
    positive: false,
    negative: false
  };
  let flashAura = {
    positive: false,
    negative: false
  };
  let flashSanity = {
    positive: false,
    negative: false
  };
  let flashImpulse = {
    positive: false,
    negative: false
  };
  let flashMemory = {
    positive: false,
    negative: false
  };
  let previewStat = {
    health: false,
    aura: false,
    sanity: false,
    impulse: false
  }

  function controlStats() {
      player.update(p => {
          if (p.health >= 10) p.health = 10;
          if (p.aura >= 10) p.aura = 10;
          if (p.sanity >= 10) p.sanity = 10;
          if (p.impulse <= 0) p.impulse = 0;
          return p;
      })
  }

  function setFlashEffect(stat: number): string {
    if (stat > 0) return 'positive';
    if (stat < 0) return 'negative';
    return 'neutral';
  }

  function statHandler(choice) {
    // Handles stat change and stat flash
    if (choice === 'left') {
      player.update(p => {
        if (currentCard.actionLeft.heart || currentCard.actionLeft.diamond) {
          p.icons.health === 'heart' ? p.health += currentCard.actionLeft.heart : p.health += currentCard.actionLeft.diamond;
          statFlashHandler('health', setFlashEffect(p.icons.health === 'heart' ? currentCard.actionLeft.heart : currentCard.actionLeft.diamond));
        };
        if (currentCard.actionLeft.greenAura || currentCard.actionLeft.yellowAura) {
          p.icons.aura === 'green' ? p.aura += currentCard.actionLeft.greenAura : p.aura += currentCard.actionLeft.yellowAura;
          statFlashHandler('aura', setFlashEffect(p.icons.aura === 'green' ? currentCard.actionLeft.greenAura : currentCard.actionLeft.yellowAura));
        };
        if (currentCard.actionLeft.brain || currentCard.actionLeft.smiley) {
          p.icons.sanity === 'brain' ? p.sanity += currentCard.actionLeft.brain : p.sanity += currentCard.actionLeft.smiley;
          statFlashHandler('sanity', setFlashEffect(p.icons.sanity === 'brain' ? currentCard.actionLeft.brain : currentCard.actionLeft.smiley));
        };
        if (currentCard.actionLeft.knife || currentCard.actionLeft.cleaver) {
          p.icons.impulse === 'knife' ? p.impulse -= currentCard.actionLeft.knife : p.impulse -= currentCard.actionLeft.cleaver;
          statFlashHandler('impulse', setFlashEffect(p.icons.impulse === 'knife' ? currentCard.actionLeft.knife : currentCard.actionLeft.smiley));
        };
        if (currentCard.actionLeft.memory) {
          statFlashHandler('memory', setFlashEffect(currentCard.actionLeft.memory));   
          p.memory += currentCard.actionLeft.memory;
        }
        return p;
      });
    } else if (choice === 'right') {
      player.update(p => {
        if (currentCard.actionRight.heart || currentCard.actionRight.diamond) {
          p.icons.health === 'heart' ? p.health += currentCard.actionRight.heart : p.health += currentCard.actionRight.diamond;
          statFlashHandler('health', setFlashEffect(p.icons.health === 'heart' ? currentCard.actionRight.heart : currentCard.actionRight.diamond));
        };
        if (currentCard.actionRight.greenAura || currentCard.actionRight.yellowAura) {
          p.icons.aura === 'green' ? p.aura += currentCard.actionRight.greenAura : p.aura += currentCard.actionRight.yellowAura;
          statFlashHandler('aura', setFlashEffect(p.icons.aura === 'green' ? currentCard.actionRight.greenAura : currentCard.actionRight.yellowAura));
        };
        if (currentCard.actionRight.brain || currentCard.actionRight.smiley) {
          p.icons.sanity === 'brain' ? p.sanity += currentCard.actionRight.brain : p.sanity += currentCard.actionRight.smiley;
          statFlashHandler('sanity', setFlashEffect(p.icons.sanity === 'brain' ? currentCard.actionRight.brain : currentCard.actionRight.smiley));
        };
        if (currentCard.actionRight.knife || currentCard.actionRight.cleaver) {
          p.icons.impulse === 'knife' ? p.impulse -= currentCard.actionRight.knife : p.impulse -= currentCard.actionRight.cleaver;
          statFlashHandler('impulse', setFlashEffect(p.icons.impulse === 'knife' ? currentCard.actionRight.knife : currentCard.actionRight.smiley));
        };
        if (currentCard.actionRight.memory) {
            statFlashHandler('memory', setFlashEffect(currentCard.actionRight.memory));
            p.memory += currentCard.actionRight.memory
        };
        return p;
      });
    }
  }

  function statFlashHandler(stat: string, statEffect = 'neutral'): void {
    switch (stat) {
      case 'health':
        if (statEffect === 'positive') flashHealth.positive = true;
        if (statEffect === 'negative') flashHealth.negative = true;
        setTimeout(() => {
          flashHealth.positive = false;
          flashHealth.negative = false;
        }, 750);
      break;
      case 'aura':
        if (statEffect === 'positive') flashAura.positive = true;
        if (statEffect === 'negative') flashAura.negative = true;
        setTimeout(() => {
          flashAura.positive = false;
          flashAura.negative = false;
        }, 750);
      break;
      case 'sanity':
        if (statEffect === 'positive') flashSanity.positive = true;
        if (statEffect === 'negative') flashSanity.negative = true;
        setTimeout(() => {
          flashSanity.positive = false;
          flashSanity.negative = false;
        }, 750);
      break;
      case 'impulse':
        if (statEffect === 'positive') flashImpulse.positive = true;
        if (statEffect === 'negative') flashImpulse.negative = true;
        setTimeout(() => {
          flashImpulse.positive = false;
          flashImpulse.negative = false;
        }, 750);
      break;
      case 'memory':
        if (statEffect === 'positive') flashMemory.positive = true;
        setTimeout(() => {
          flashMemory.positive = false;
        }, 750);
      break;
      default:
        console.log('statFlashHandler did not match :(');
    }
  }

  function statImgHandler(statName: string, stat: number): string {
    switch (statName) {
      case 'health':
        if ($player.icons.health === 'heart') {
          if (stat >= 9) return '/stats/heart/heart_100.png';
          if (stat >= 7) return '/stats/heart/heart_75.png';
          if (stat >= 5) return '/stats/heart/heart_50.png';
          if (stat >= 3) return '/stats/heart/heart_25.png';
          if (stat >= 1) return '/stats/heart/heart_1.png';
          if (stat === 0) return '/stats/heart/heart_0.png';
        } else if ($player.icons.health === 'diamond') {
          if (stat >= 9) return '/stats/diamond/diamond_100.png';
          if (stat >= 7) return '/stats/diamond/diamond_75.png';
          if (stat >= 5) return '/stats/diamond/diamond_50.png';
          if (stat >= 3) return '/stats/diamond/diamond_25.png';
          if (stat >= 1) return '/stats/diamond/diamond_1.png';
          if (stat === 0) return '/stats/diamond/diamond_0.png';
        } else return '/stats/puzzle.svg';

      case 'aura':
        if ($player.icons.aura === 'green') {
          if (stat >= 9) return '/stats/green_aura/green_100.png';
          if (stat >= 7) return '/stats/green_aura/green_75.png';
          if (stat >= 5) return '/stats/green_aura/green_50.png';
          if (stat >= 3) return '/stats/green_aura/green_25.png';
          if (stat >= 1) return '/stats/green_aura/green_1.png';
          if (stat === 0) return '/stats/green_aura/green_0.png';
        } else if ($player.icons.aura === 'yellow') {
          if (stat >= 9) return '/stats/yellow_aura/yellow_100.png';
          if (stat >= 7) return '/stats/yellow_aura/yellow_75.png';
          if (stat >= 5) return '/stats/yellow_aura/yellow_50.png';
          if (stat >= 3) return '/stats/yellow_aura/yellow_25.png';
          if (stat >= 1) return '/stats/yellow_aura/yellow_1.png';
          if (stat === 0) return '/stats/yellow_aura/yellow_0.png';
        } else return '/stats/puzzle.svg';

      case 'sanity':
        if ($player.icons.sanity === 'brain') {
          if (stat >= 9) return '/stats/brain/brain_100.png';
          if (stat >= 7) return '/stats/brain/brain_75.png';
          if (stat >= 5) return '/stats/brain/brain_50.png';
          if (stat >= 3) return '/stats/brain/brain_25.png';
          if (stat >= 1) return '/stats/brain/brain_1.png';
          if (stat === 0) return '/stats/brain/brain_0.png';
        } else if ($player.icons.sanity === 'smiley') {
          if (stat >= 9) return '/stats/smiley/smiley_100.png';
          if (stat >= 7) return '/stats/smiley/smiley_75.png';
          if (stat >= 5) return '/stats/smiley/smiley_50.png';
          if (stat >= 3) return '/stats/smiley/smiley_25.png';
          if (stat >= 1) return '/stats/smiley/smiley_1.png';
          if (stat === 0) return '/stats/smiley/smiley_0.png';
        } else return '/stats/puzzle.svg';

        case 'impulse':
        if ($player.icons.impulse === 'knife') {
          if (stat >= 9) return '/stats/knife/knife_100.png';
          if (stat >= 7) return '/stats/knife/knife_75.png';
          if (stat >= 5) return '/stats/knife/knife_50.png';
          if (stat >= 3) return '/stats/knife/knife_25.png';
          if (stat >= 1) return '/stats/knife/knife_1.png';
          if (stat === 0) return '/stats/knife/knife_0.png';
        } else if ($player.icons.impulse === 'cleaver') {
          if (stat >= 9) return '/stats/cleaver/cleaver_100.png';
          if (stat >= 7) return '/stats/cleaver/cleaver_75.png';
          if (stat >= 5) return '/stats/cleaver/cleaver_50.png';
          if (stat >= 3) return '/stats/cleaver/cleaver_25.png';
          if (stat >= 1) return '/stats/cleaver/cleaver_1.png';
          if (stat === 0) return '/stats/cleaver/cleaver_0.png';
        } else return '/stats/puzzle.svg';

      default:
        return '/stats/puzzle.svg';
    }
  }

  function statImgAltTextHandler(statName: string): string {
    if (statName === 'health') return $player.icons.health === 'heart' ? 'Heart icon representing health.' : 'Diamond icon representing health.';
    if (statName === 'aura') return $player.icons.aura === 'green' ? 'green lightning bolt representing aura.' : 'yellow lightning bolt representing aura.';
    if (statName === 'sanity') return $player.icons.sanity === 'brain' ? 'Brain icon representing sanity.' : 'Smiley icon representing sanity.';
    if (statName === 'impulse') return $player.icons.impulse === 'knife' ? 'Knife icon representing impulse.' : 'Cleaver icon representing impulse.';
    if (statName === 'memory') return 'Memory icon representing memory.';
    return 'Icon representing a stat.';
  }

  function drawRandomCard() {
      const index = Math.floor(Math.random() * $player.unlockedCards.length);
      return $player.unlockedCards[index];
  }

  function toggleBlur(duration = 200) {
      blurCard = true;
      setTimeout(() => blurCard = false, duration);
  }

  // TODO: break down into smaller functions
  function actionHandler(event) {
    textBox.scrollTop = 0;
    if (isButtonOnCooldown()) return;
    buttonOnCooldown = true;
    
    const choice = event.detail;
    toggleBlur();
    statHandler(choice);

    if (isPlayerDead()) {
      if ($player.memory < 15) $player.memory = 0;
      else if ($player.memory < 30) $player.memory = 15;
      else if ($player.memory < 45) $player.memory = 30;
      else if ($player.memory < 75) $player.memory = 45;
      gameOver = true;
    }

    // Make sure stats have a limit of 10
    controlStats();

    // Add Beings deck
    if (!$player.unlockedDeck.chapter4Beings && $player.memory >= 52) {
      newDeckAlertText = 'Beings'
      newDeckAlert = true;

      player.update(p => {
        p.unlockedCards = [...chapter4BeingsDeck, ...p.unlockedCards];
        if (!p.unlockedDeck.chapter4Beings) {
          p.displayDecks = [
            ...p.displayDecks,
            {
              title: 'Beings',
              description: 'Special bonus deck',
              img: '/decks/chapter4/beings/purple/glasses.png'
            }
          ]
        }
        p.unlockedDeck.chapter4Beings = true;
        return p;
      });

      setTimeout(() => {
        newDeckAlert = false;
      }, 4500);
    }

    // Add Goblins deck
    if (!$player.unlockedDeck.chapter3Goblins && $player.memory >= 37) {
      newDeckAlertText = 'Goblins'
      newDeckAlert = true;

      player.update(p => {
        p.unlockedCards = [...chapter3GoblinsDeck, ...p.unlockedCards];
        if (!p.unlockedDeck.chapter3GoblinsDeck) {
          p.displayDecks = [
            ...p.displayDecks,
            {
              title: 'Goblins',
              description: 'Bonus deck',
              img: '/decks/chapter3/goblins/goblin-woman.png'
            }
          ]
        }
        p.unlockedDeck.chapter3Goblins = true;
        return p;
      });

      setTimeout(() => {
        newDeckAlert = false;
      }, 4500);
    }

    // Add Elves deck
    if (!$player.unlockedDeck.chapter2Elves && $player.memory >= 22) {
      newDeckAlertText = 'Elves'
      newDeckAlert = true;

      player.update(p => {
        p.unlockedCards = [...chapter2ElvesDeck, ...p.unlockedCards];
        if (!p.unlockedDeck.chapter2Elves) {
          p.displayDecks = [
            ...p.displayDecks,
            {
              title: 'Elves',
              description: 'Bonus deck',
              img: '/decks/chapter2/elves/elf-archer-white.png'
            }
          ]
        }
        p.unlockedDeck.chapter2Elves = true;
        return p;
      });

      setTimeout(() => {
        newDeckAlert = false;
      }, 4500);
    }

    // Add soldier deck
    if (!$player.unlockedDeck.chapter1Soldiers && $player.memory >= 7) {
      newDeckAlertText = 'Soldiers'
      newDeckAlert = true;

      player.update(p => {
        p.unlockedCards = [...chapter1SoldiersDeck, ...p.unlockedCards];
        if (!p.unlockedDeck.chapter1Soldiers) {
          p.displayDecks = [
            ...p.displayDecks,
            {
              title: 'Soldiers',
              description: 'Bonus deck',
              img: '/decks/chapter1/soldiers/captain.png'
            }
          ]
          }
          p.unlockedDeck.chapter1Soldiers = true;
          return p;
      });

      setTimeout(() => {
        newDeckAlert = false;
      }, 4500);
    }

    // Move on to final chapter if enough memory.
    if (!$player.unlockedDeck.tutorialFinal && $player.memory >= 75) { 
      player.update(p => {
        p.activeDeck = 'survey';
        p.unlockedCards = [...tutorialFinalDeck];
        currentCard = p.unlockedCards[0];

        p.unlockedDeck.tutorialFinal = true;
        return p;
      });
          
      backgrounds.update(bg => {
        $backgrounds.active = $backgrounds.darkFinal;
        return bg;
      });
      return;
    }

    // Move on to chapter 4 if enough memory.
    if (!$player.unlockedDeck.tutorial4 && $player.memory >= 45) { 
      player.update(p => {
        p.activeDeck = 'survey';
        p.unlockedCards = [...tutorial4Deck];
        currentCard = p.unlockedCards[0];

        p.unlockedDeck.tutorial4 = true;
        return p;
      });
          
      backgrounds.update(bg => {
        $backgrounds.active = $backgrounds.dark;
        return bg;
      });
      return;
    }

    // Move on to chapter 3 if enough memory.
    if (!$player.unlockedDeck.tutorial3 && $player.memory >= 30) { 
        player.update(p => {
                p.activeDeck = 'survey';
                p.unlockedCards = [...tutorial3Deck];
                currentCard = p.unlockedCards[0];
                p.unlockedDeck.tutorial3 = true;
                return p;
            });
            
        backgrounds.update(bg => {
            $backgrounds.active = $backgrounds.dark;
            return bg;
        });
        return;
    }

    // Move on to chapter 2 if enough memory.
    if (!$player.unlockedDeck.tutorial2 && $player.memory >= 15) { 
        player.update(p => {
            p.activeDeck = 'survey';
            p.unlockedCards = [...tutorial2Deck];
            currentCard = p.unlockedCards[0];

            if (!p.unlockedDeck.tutorial2) {
                p.displayDecks = [
                    ...p.displayDecks,
                    {
                        title: 'Jude',
                        description: 'Question',
                        img: '/decks/tutorial/judicator-blue.png'
                    }
                ]
            }

            p.unlockedDeck.tutorial2 = true;
            return p;
        });
            
        backgrounds.update(bg => {
            $backgrounds.active = $backgrounds.dark;
            return bg;
        });
        return;
    }
    
    // Make sure the same card doesn't appear twice during one playthrough
    const index = Math.floor(Math.random() * $player.unlockedCards.length);
    let newCard = drawRandomCard();

    while (currentCard.id === newCard.id) newCard = drawRandomCard();
    currentCard = newCard;

    if (['stat-health', 'stat-aura', 'stat-sanity', 'stat-impulse'].includes(currentCard.id)) {
      currentCard = updateStatCard(currentCard.id);
    }
  }

  function surveyHandler(event: {detail: 'left' | 'right' | 'center'}) {
    const choice = event.detail;
    textBox.scrollTop = 0;
    if (isButtonOnCooldown()) return;

    currentCard = surveyDecisionHandler(choice, currentCard);
    if (currentCard.id === 'tutorial3-10a' || currentCard.id === 'tutorial3-10b') {
      centerBtnVisible = true;
    } else {
      centerBtnVisible = false;
    }

    toggleBlur();

    // Checks if current card is final survey card
    if (currentCard.id === 'survey4-17') {
      setTimeout(() => {
        player.update(p => {
          p.health = 10;
          p.aura = 10;
          p.sanity = 10;
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter4Deck, statDeck.impulse, statDeck.sanity, statDeck.aura, statDeck.health];

          // Choose stat icon based on answers
          p.icons.impulse = p.iconPoints.knife >= p.iconPoints.cleaver ? 'knife' : 'cleaver';

          if (!p.unlockedDeck.chapter4) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                // TODO: fix knife img size AND update impulse img when victim chosen 
                title: p.icons.impulse === 'knife' ? 'Knife' : 'Cleaver',
                description: 'Impulse momento',
                img: p.icons.impulse === 'knife' ? '/decks/chapter4/jessy.png' : '/decks/chapter4/jessy.png'
              },
              {
                title: 'Impulse Being',
                description: 'Special impulse card',
                img: '/decks/beings/impulse_being.png'
              },
              {
                title: 'Jude',
                description: 'Choice',
                img: '/decks/tutorial/judicator-red-smile.png'
              }
            ]
          }

          p.unlockedDeck.survey4 = true;
          p.unlockedDeck.chapter4 = true;
          return p;
        });
          
        // Change background
        // TODO: get chapter 4 bg
        backgrounds.update(bg => {
          $backgrounds.active = $backgrounds.cosmic;
          return bg;
        });
          
        const index = Math.floor(Math.random() * $player.unlockedCards.length);
        const cardDrawn = $player.unlockedCards[index];
        currentCard = cardDrawn;
      }, 4000);
    }

    if (currentCard.id === 'survey3-12') {
      setTimeout(() => {
        player.update(p => {
          p.health = 10;
          p.aura = 10;
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter3Deck, statDeck.sanity, statDeck.aura, statDeck.health];

          // Choose stat icon based on answers
          p.icons.sanity = p.iconPoints.brain >= p.iconPoints.smiley ? 'brain' : 'smiley';

          if (!p.unlockedDeck.chapter3) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: p.icons.sanity === 'brain' ? 'Brain' : 'Smiley',
                description: 'Sanity momento',
                img: p.icons.sanity === 'brain' ? '/decks/chapter3/bullisia.png' : '/decks/chapter3/temptress.png'
              },
              {
                title: 'Sanity Being',
                description: 'Special sanity card',
                img: '/decks/beings/sanity_being.png'
              }
            ]
          }

          p.unlockedDeck.survey3 = true;
          p.unlockedDeck.chapter3 = true;
          return p;
        });
          
        // Change background
        backgrounds.update(bg => {
            $backgrounds.active = $backgrounds.kingdom;
            return bg;
        });
          
        const index = Math.floor(Math.random() * $player.unlockedCards.length);
        const cardDrawn = $player.unlockedCards[index];
        currentCard = cardDrawn;
      }, 4000);
    }

    if (currentCard.id === 'survey2-14') {
      setTimeout(() => {
        player.update(p => {
          p.health = 10;
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter2Deck, statDeck.aura, statDeck.health];

          // Choose stat icon based on answers
          p.icons.aura = p.iconPoints.yellowAura >= p.iconPoints.greenAura ? 'yellow' : 'green';

          if (!p.unlockedDeck.chapter2) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: p.icons.aura === 'green' ? 'Green Aura' : 'Yellow Aura',
                description: 'Aura memento',
                img: p.icons.aura === 'green' ? '/decks/chapter2/rabbit.png' : '/decks/chapter2/hippy-boy.png'
              },
              {
                title: 'Aura Being',
                description: 'Special aura card',
                img: '/decks/beings/aura_being.png'
              }
            ]
          }

          p.unlockedDeck.survey2 = true;
          p.unlockedDeck.chapter2 = true;
          return p;
        });
          
          // Change background
          backgrounds.update(bg => {
              $backgrounds.active = $backgrounds.magicalForest;
              return bg;
          });
          
          const index = Math.floor(Math.random() * $player.unlockedCards.length);
          const cardDrawn = $player.unlockedCards[index];
          currentCard = cardDrawn;
      }, 4000);
    }

    if (currentCard.id === 'survey1-16') {
      setTimeout(() => {
        player.update(p => {
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter1Deck, statDeck.health];

          // Choose stat icon based on answers
          p.icons.health = p.iconPoints.heart >= p.iconPoints.diamond ? 'heart' : 'diamond';

          // Avoids duplicate decks
          if (!p.unlockedDeck.chapter1) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: 'Jude',
                description: 'Answer',
                img: '/decks/tutorial/judicator-purple-smile.png'
              },
              {
                title: p.icons.health === 'heart' ? 'Heart' : 'Diamond',
                description: 'Health momento',
                img: p.icons.health === 'heart' ? '/decks/chapter1/peasant.png' : '/decks/chapter1/villager.png'
              },
              {
                title: 'Health Being',
                description: 'Special health card',
                img: '/decks/beings/health_being.png'
              }
            ]
          }
        
          p.unlockedDeck.chapter1 = true;
          return p;
        });
          
        backgrounds.update(bg => {
          $backgrounds.active = $backgrounds.village;
          return bg;
        });
          
        const index = Math.floor(Math.random() * $player.unlockedCards.length);
        const cardDrawn = $player.unlockedCards[index];
        currentCard = cardDrawn;
      }, 6500);
    }
  }

  function isPlayerDead() {
    if ($player.health <= 0 || $player.aura <= 0 || $player.sanity <= 0 || $player.impulse >= 10) {
      resetPlayer();
      return true;
    }
    return false;
  }

  function resetPlayer() {
      player.update(p => {
          p.name = 'Jack';
          p.timesReborn += 1;
          p.health = 10;
          p.sanity = 10;
          p.aura = 10;
          p.impulse = 0;

          return p;
      })
  }

  function isButtonOnCooldown() {
    if (buttonOnCooldown) return true;

    buttonOnCooldown = true;
    // TODO: remember to put back to 600
    setTimeout(() => buttonOnCooldown = false, 0);
  }

  function displayPlayerAlignment(): string {
    if ($player.goodPoints - $player.evilPoints > 0) return 'Good';
    else if ($player.evilPoints - $player.goodPoints > 0) return 'Evil';
    else return 'Neutral';
  }

  function displayMemoryCheckpoint(): string {
    if ($player.memory < 15) return '0';
    if ($player.memory < 30) return '15';
    if ($player.memory < 45) return '30';
    if ($player.memory < 75) return '45';
    return '0';
  }

  function playerAlignmentHandler(fieldToReturn: string): string {
    if (fieldToReturn === 'title') {
      if ($player.goodPoints === $player.evilPoints) return 'Neutral';
      if ($player.goodPoints > $player.evilPoints) return 'Good';
      if ($player.goodPoints < $player.evilPoints) return 'Evil';
    } else if (fieldToReturn === 'img') {
      if ($player.goodPoints === $player.evilPoints) return '/alignments/alignment_neutral.png';
      if ($player.goodPoints > $player.evilPoints) return '/alignments/alignment_good.png';
      if ($player.goodPoints < $player.evilPoints) return '/alignments/alignment_evil.png';
    } else if (fieldToReturn === 'points') {
      if ($player.goodPoints === $player.evilPoints) return '0';
      if ($player.goodPoints > $player.evilPoints) return ($player.goodPoints - $player.evilPoints).toString();
      if ($player.goodPoints < $player.evilPoints) return ($player.evilPoints - $player.goodPoints).toString();
    }

    // really just to silence stupid errors, this will always resolve.
    return '';
  }

  // TODO: not working? not accurate.
  function statPreviewHandler(event: {detail: string}): void {
    if (event.detail === 'left') {
      if ($player.icons.health === 'heart' && currentCard.actionLeft.heart !== 0) previewStat.health = true;
      if ($player.icons.health === 'diamond' && currentCard.actionLeft.diamond !== 0) previewStat.health = true;
      if ($player.icons.aura === 'green' && currentCard.actionLeft.greenAura !== 0) previewStat.aura = true;
      if ($player.icons.aura === 'yellow' && currentCard.actionLeft.yellowAura !== 0) previewStat.aura = true;
      if ($player.icons.sanity === 'brain' && currentCard.actionLeft.brain !== 0) previewStat.sanity = true;
      if ($player.icons.sanity === 'smiley' && currentCard.actionLeft.smiley !== 0) previewStat.sanity = true;
      if ($player.icons.impulse === 'knife' && currentCard.actionLeft.knife !== 0) previewStat.impulse = true;
      if ($player.icons.impulse === 'cleaver' && currentCard.actionLeft.cleaver !== 0) previewStat.impulse = true;
    }

    else if (event.detail === 'right') {
      if ($player.icons.health === 'heart' && currentCard.actionRight.heart !== 0) previewStat.health = true;
      if ($player.icons.health === 'diamond' && currentCard.actionRight.diamond !== 0) previewStat.health = true;
      if ($player.icons.aura === 'green' && currentCard.actionRight.greenAura !== 0) previewStat.aura = true;
      if ($player.icons.aura === 'yellow' && currentCard.actionRight.yellowAura !== 0) previewStat.aura = true;
      if ($player.icons.sanity === 'brain' && currentCard.actionRight.brain !== 0) previewStat.sanity = true;
      if ($player.icons.sanity === 'smiley' && currentCard.actionRight.smiley !== 0) previewStat.sanity = true;
      if ($player.icons.impulse === 'knife' && currentCard.actionRight.knife !== 0) previewStat.impulse = true;
      if ($player.icons.impulse === 'cleaver' && currentCard.actionRight.cleaver !== 0) previewStat.impulse = true;
    }
  }

  function statPreviewHider(): void {
    previewStat = {
      health: false,
      aura: false,
      sanity: false,
      impulse: false
    }
  }
</script>

<div class="game-client">
  {#if gameOver}
    <div class="menu">
      <h2 class="main-menu-title">Continue?</h2>
      <p class="text-yellow">You will restart at your last checkpoint with full stats, the only think you lose is memory.</p>
      <!-- has icon class for color -->
      <p><strong>Current memory checkpoint:</strong> <span class="text-green">{displayMemoryCheckpoint()}</p>
      <br>
      <Button on:click={() => gameOver = false}>Yes</Button>
    </div>
  {:else}
  {#if menuOpen}
    <div class="menu" in:fly={{y: 100}} out:fade>
      <h2 class="main-menu-title">Main Menu</h2>
      <main class="menu-content">
        <h3 class="menu-header">Mementos repaired: <span class="menu-text__red">{$player.timesReborn}</span></h3>
        <MenuDeck forAlignment={true} alignment={playerAlignmentHandler('title')} alignmentPoints={playerAlignmentHandler('points')} title={playerAlignmentHandler('title')} img={playerAlignmentHandler('img')} description={'Alignment'}/>
        <h3 class="menu-header">Cards:</h3>
        {#each $player.displayDecks as deck}
          <MenuDeck title={deck.title} img={deck.img} description={deck.description}/>
        {/each}
      </main>
      <div class="menu-bottom-section">
        <Button on:click={() => menuOpen = !menuOpen} bgColor={"bg-black"}>Close</Button>
      </div>
    </div>
  {/if}
    <div class="stats-wrapper">
      <!-- Health icons -->
      <img src={statImgHandler('health', $player.health)} alt={statImgAltTextHandler('health')} class="stat-icon" class:flash-green={flashHealth.positive} class:flash-red={flashHealth.negative} class:stat-icon-preview={previewStat.health}>
      <img src={statImgHandler('aura', $player.aura)} alt={statImgAltTextHandler('aura')} class="stat-icon" class:flash-green={flashAura.positive} class:flash-red={flashAura.negative} class:stat-icon-preview={previewStat.aura}>
      <img src={statImgHandler('sanity', $player.sanity)} alt={statImgAltTextHandler('sanity')} class="stat-icon" class:flash-green={flashSanity.positive} class:flash-red={flashSanity.negative} class:stat-icon-preview={previewStat.sanity}>
      <img src={statImgHandler('impulse', $player.impulse)} alt={statImgAltTextHandler('impulse')} class="stat-icon {$player.icons.impulse === 'knife' ? 'knife-icon' : 'cleaver-icon'}" class:flash-green={flashImpulse.positive} class:flash-red={flashImpulse.negative} class:stat-icon-preview={previewStat.impulse}>
      <p class="memory-stat">
        {$player.unlockedDeck.chapter1 ? $player.memory : '?'}
        <svg class:flash-green={flashMemory.positive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon memory-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
        </svg>
      </p>
    </div>
    <div class="container">
      <div class="card-wrapper">
        <!-- Tutorials -->
        {#if $player.activeDeck === 'survey'}
          <Card img={currentCard.imgUrl} blurImg={blurCard} location={currentCard.location}>
            <span slot="text-left">{currentCard.textLeft}</span>
            <span slot="text-center">
              {#if centerBtnVisible}{currentCard.textCenter}{/if}
            </span>
            <span slot="text-right">{currentCard.textRight}</span>
          </Card>

        <!-- Chapters -->
        {:else if $player.activeDeck === 'chapter'}
          <Card img={currentCard.imgUrl} blurImg={blurCard} location={currentCard.location}>
            <span slot="text-left">{currentCard.textLeft}</span>
            <span slot="text-center">
              {#if centerBtnVisible}{currentCard.textCenter}{/if}
            </span>
            <span slot="text-right">{currentCard.textRight}</span>
          </Card>
        {/if}
        <!-- TODO: move under card -->
        <div class="bottom-text-wrapper">
          <p>{currentCard.title}</p>
          <p>/-|-\</p>
          <p>{currentCard.faction}</p>
        </div>
      </div>
      <!-- TODO: Make dedicated component -->
      <div bind:this={textBox} class="card-text" class:cardBlurred={blurCard}>
        <p class:show={newDeckAlert} class="new-card-alert">New deck unlocked: {newDeckAlertText}!</p>
        <p>{@html currentCard.text}</p>
      </div>
    </div>
  {/if}

  <!-- Circle shapes -->
  {#if !gameOver && $player.activeDeck === 'survey'}
    <span class="circle__left-wrapper"><Circle on:decision={event => surveyHandler(event)} leftOrRight="left"/></span>
    {#if centerBtnVisible}
      <span transition:blur|local={{duration: 1000}} class="circle__center-wrapper"><Circle on:decision={event => surveyHandler(event)} leftOrRight="center"/></span>
    {/if}
    <span class="circle__right-wrapper"><Circle on:decision={event => surveyHandler(event)} leftOrRight="right" /></span>
  {:else if !gameOver && $player.activeDeck === 'chapter'}
    <span class="circle__left-wrapper"><Circle on:hover={statPreviewHandler} on:blur={statPreviewHider} on:decision={event => actionHandler(event)} leftOrRight="left"/></span>
    <span class="circle__right-wrapper"><Circle on:hover={statPreviewHandler} on:blur={statPreviewHider} on:decision={event => actionHandler(event)} leftOrRight="right" /></span>
  {/if}

  <!-- Menu section -->
  <section class="menu-bottom-section">
    {#if !gameOver}
      <span class="btn-menu"><MenuButton on:click={() => menuOpen = !menuOpen}>Menu</MenuButton></span>
    {/if}
  </section>
</div>

<style lang="scss">
  /* Menu */
  .menu-bottom-section {
    background-color: #0000003b;
    border-radius: 5rem 5rem 0 0;
    padding: 0.25rem;
    width: 80%;
    margin: 0 auto; 

    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .menu {
    padding: 1rem;
    height: 625px;
    width: 375px;
    box-shadow: 0 0 100px 100px #000000da;
    outline: 1px solid #a8a4a227; /* adds a bit of visual depth*/
    background-color: #000;
    border-radius: 18px;
    text-align: center;
    z-index: 2;
    transition: all 1s ease-out;

    position: absolute;
  }

  .menu-content {
    background-color: #ffffff05;
    border-radius: 18px 18px 18px 18px;

    height: 85%;
    padding: 2rem 1.5rem 1rem;
    text-align: left;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Bottom design, looks like cartridge slot, also keeps menu button in right spot */
  .btn-menu {
    position: absolute;
    bottom: 32px;
  }

  .menu-header {
    margin-bottom: 0.5rem;
  }

  .menu-text__red {
    color: #500c0c;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .menu-text__blue {
    color: #0c1c50;
    font-weight: bold;
    font-size: 1.25rem;
  }

  /* Game Client */
  .game-client {
    position: relative;
    background: linear-gradient(to top, #ada9a7, #413747da, #456B73ca, #413747da, #b5b1ae);
    padding: 1rem 0.5rem 8.5rem;
    width: 35%;
    min-width: 300px;
    max-width: 400px;
    min-height: 675px;
    max-height: 850px;
    margin: 0 auto;
    border-top: 2px solid #0000001a;
    border-right: 2px solid #0000001a;
    border-left: 3px solid #0000001a;
    border-bottom: 12px solid #00000079;
    border-radius: 18px 18px 18px 18px;
    box-shadow: 0 0 100px #456B73ca;
    outline: 1px solid #a8a4a227; /* adds a bit of visual depth*/
  }

  .container {
    width: 90%;
    background: linear-gradient(to top, #413747da, #456B73ca, #413747da);
    padding: 6px;
    margin: 0 auto;
    border: 2px solid #5c585e5d;
    border-radius: 8px;
    box-shadow: 0 2px 16px 10px #2d0e4242;
  }
  
  /* Card text */
  .card-wrapper {
    position: relative;
    transition: filter 0.1s ease-in;
    font-size: 0.9rem;
    color: #ececec;
    font-weight: bold;
  }

  .card-text {
    position: relative;
    background-color: #170d1d82;
    box-shadow: 0 0.125rem 0.5rem #0000004e;
    width: 100%;
    padding: 0.75rem;
    line-height: 1.15;
    height: 10rem;
    margin: 0 auto;
    font-size: 1.125rem;
    border-radius: 8px;
    overflow-y: scroll;
    transition: filter 0.1s ease-in;
    scroll-behavior: smooth;

      &::-webkit-scrollbar {
        width: 0.5rem;
    }
  }

  .card-text::-webkit-scrollbar-track {
    background-color: #456b7323;
    border-radius: 0.25rem;
  }

  .card-text::-webkit-scrollbar-thumb {
    background-color: #456b73;
    border-radius: 0.25rem;
  }

  /* Stats */
  .stats-wrapper {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    z-index: 1; // Keeps stats above card

    position: absolute;
    top: 30px;
    right: 50%;
    transform: translateX(50%);


    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .stat-icon {
    width: 30px;
    // The padding and border-radius are for when the stat flashes, bg will already be rounded and it won't look goofy.
    padding: 2px; 
    border-radius: 50px;
    transition: background-color 0.5s ease-in-out;
  }
  
  .stat-icon-preview {
    border-bottom: 1px dotted #ae9cb9;
    border-top: 1px dotted #ae9cb9;
  }

  .knife-icon {
    width: 17px;
  }

  .cleaver-icon {
    width: 20px;
  }

  // So that double digit numbers fit neatly inside puzzle icon
  .memory-stat {
    position: relative;
    font-size: 0.9rem;
    font-weight: bold;
    color: #eee;

    .memory-icon {
      fill: #1111112f;
      stroke: #111;
      width: 48px;
  
      position: absolute;
      bottom: 50%;
      right: 50%;
      transform: translate(47%, 52%);
    }
  }

  /* Circle buttons */
  .circle__right-wrapper {
    position: absolute;
    right: 20px;
    bottom: 75px;
  }

  .circle__left-wrapper {
    position: absolute;
    left: 20px;
    bottom: 75px;
  }

  .circle__center-wrapper {
    position: absolute;
    right: 50%;
    bottom: 75px;
    transform: translateX(50%);
  }

  .new-card-alert {
    opacity: 0;
    color: #3ce976;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
    text-shadow: 0 2px 6px #4cb6ad;
    transition: opacity 0.5s ease-out;

    position: absolute;
    top: 0rem;
  }

  // Icon colors
  .text-green {
    stroke: #123312;
    color: #509150;
  }
  
  .pink-icon {
    stroke: #b07680;
    color: #b07680;
  }
  
  .text-yellow {
    stroke: #b5b559;
    color: #b5b559;
  }
  
  .grey-icon {
    stroke: #444;
    color: #444;
  }

  .bottom-text-wrapper {
    width: 100%;
    gap: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    color: #8a8a8a;
    text-shadow: 1px 1px #456b73;

    p:nth-of-type(odd) {
      background-color: #00000076;
      padding: 0.3rem 0.3rem 0.1rem 0.3rem;
      border-radius: 0 0 4px 4px;
      line-height: 1;
      margin-bottom: 3px;
    }
  }

  /* Utility */
  .show {
    display: block;
    opacity: 100%;
  }

  .cardBlurred {
    filter: blur(10px);
  }

  .flash-red {
    background: #f120209d;
  }
  
  .flash-green {
    background: #2bff3daf;
  }
</style>