<script lang="ts">
  // @ts no-check

  // Hooks
  import { fly, fade } from 'svelte/transition';

  // Helpers
  import { tutorialHandler } from '../helpers/tutorialHandler';

  // Components
  import { Button, Card, Circle, MenuButton, MenuDeck } from './index.js';

  // Stores
  import decks from '../stores/decks.js';
  import backgrounds from '../stores/backgroundImgs';
  import player from '../stores/player.js';

  // Decks
  const tutorial1Deck = $decks.tutorial1;
  const tutorial2Deck = $decks.tutorial2;
  const tutorial3Deck = $decks.tutorial3;
  const tutorial4Deck = $decks.tutorial4;
  const survey1Deck = $decks.survey1;
  const survey2Deck = $decks.survey2;
  const survey3Deck = $decks.survey3;
  const survey4Deck = $decks.survey4;
  const chapter1Deck = $decks.chapter1;
  const chapter1SoldiersDeck = $decks.soldiers;
  const chapter2Deck = $decks.chapter2;
  const chapter2ElvesDeck = $decks.elves;
  const chapter3Deck = $decks.chapter3;
  const chapter3GoblinsDeck = $decks.goblins;
  // const chapter4ToBeDecidedDeck = $decks.chapter4ToBeDecidedDeck;
  // const chapter4Deck = $decks.chapter4;

  $player.unlockedCards = [...tutorial3Deck];
  let gameOver = false;
  let currentCard = $player.unlockedCards[0];
  let menuOpen = false;
  let buttonOnCooldown = false;
  
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
  // TODO: remove after impulse icon is complete
  $: impulseMessage = $player.impulse >= 7 ? 'High!' : `${$player.impulse}`;

  function controlStats() {
      player.update(p => {
          if (p.health >= 10) p.health = 10;
          if (p.aura >= 10) p.aura = 10;
          if (p.sanity >= 10) p.sanity = 10;
          if (p.health <= 0) p.impulse = 0;
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
          if (currentCard.actionLeft.health) {
            p.health += currentCard.actionLeft.health;
            statFlashHandler('health', setFlashEffect(currentCard.actionLeft.health));
          };
          if (currentCard.actionLeft.aura) {
            p.aura += currentCard.actionLeft.aura;
            statFlashHandler('aura', setFlashEffect(currentCard.actionLeft.aura));
          }
          if (currentCard.actionLeft.sanity) {
            p.sanity += currentCard.actionLeft.sanity;
            statFlashHandler('sanity', setFlashEffect(currentCard.actionLeft.sanity));
          }
          if (currentCard.actionLeft.impulse) {
            statFlashHandler('impulse');   
            p.impulse += currentCard.actionLeft.impulse;
          }
          if (currentCard.actionLeft.memory) {
            statFlashHandler('memory');   
            p.memory += currentCard.actionLeft.memory;
          }
          return p;
        });
      } else if (choice === 'right') {
        player.update(p => {
          if (currentCard.actionRight.health) {
            p.health += currentCard.actionRight.health;
            statFlashHandler('health', setFlashEffect(currentCard.actionRight.health));
          }
          if (currentCard.actionRight.aura) {
            p.aura += currentCard.actionRight.aura;
            statFlashHandler('aura', setFlashEffect(currentCard.actionRight.aura));
          };
          if (currentCard.actionRight.sanity) {
            p.sanity += currentCard.actionRight.sanity;
            statFlashHandler('sanity', setFlashEffect(currentCard.actionRight.sanity));
          };
          if (currentCard.actionRight.impulse) {
              statFlashHandler('impulse');
              p.impulse += currentCard.actionRight.impulse
          };
          if (currentCard.actionRight.memory) {
              statFlashHandler('memory');
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

      default:
        return '/stats/puzzle.svg';
    }
  }

  function statImgAltTextHandler(statName: string): string {
    if (statName === 'health') return $player.icons.health === 'heart' ? 'Heart icon representing health.' : 'Diamond icon representing health.';
    if (statName === 'aura') return $player.icons.aura === 'green' ? 'green lightning bolt representing aura.' : 'yellow lightning bolt representing aura.';
    if (statName === 'sanity') return $player.icons.sanity === 'brain' ? 'Brain icon representing sanity.' : 'Smiley icon representing sanity.';
    if (statName === 'impulse') return 'Lightning bolt icon representing impulse.';
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
      if (isButtonOnCooldown()) return;
      buttonOnCooldown = true;
      
      const choice = event.detail;
      toggleBlur();
      statHandler(choice);

      // TODO: Finish this properly
      if (isPlayerDead()) {
          gameOver = true;
          resetDecks();
      }

      // Make sure stats have limit 10
      controlStats();

      // Add Goblins deck (short: 16, long: 50)
      if (!$player.unlockedDeck.chapter3Goblins && $player.memory >= 50) {
          newDeckAlertText = 'Goblins'
          newDeckAlert = true;

          player.update(p => {
              p.unlockedCards = [...chapter3GoblinsDeck, ...p.unlockedCards];
              if (!p.unlockedDeck.chapter3GoblinsDeck) {
                  p.displayDecks = [
                      ...p.displayDecks,
                      {
                          title: 'Chapter3 / Goblins',
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

      // Add Elves deck (short: 22, long: 10)
      if (!$player.unlockedDeck.chapter2Elves && $player.memory >= 22) {
          newDeckAlertText = 'Elves'
          newDeckAlert = true;

          player.update(p => {
              p.unlockedCards = [...chapter2ElvesDeck, ...p.unlockedCards];
              if (!p.unlockedDeck.chapter2Elves) {
                  p.displayDecks = [
                      ...p.displayDecks,
                      {
                          title: 'Chapter2 / Elves',
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

      // Add soldier deck (short: 2, long: 7)
      if (!$player.unlockedDeck.chapter1Soldiers && $player.memory >= 7) {
          newDeckAlertText = 'Soldiers'
          newDeckAlert = true;

          player.update(p => {
              p.unlockedCards = [...chapter1SoldiersDeck, ...p.unlockedCards];
              if (!p.unlockedDeck.chapter1Soldiers) {
                  p.displayDecks = [
                      ...p.displayDecks,
                      {
                          title: 'Chapter1 / Soldiers',
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

      // Move on to chapter 3 if enough memory. (short: 13, long: 40)
      if (!$player.unlockedDeck.tutorial3 && $player.memory >= 30) { 
          player.update(p => {
                  p.activeDeck = 'survey';
                  p.unlockedCards = [...tutorial3Deck];
                  currentCard = p.unlockedCards[0];

                  // TODO: Confirm why this is here, I believe it's to avoid user's extra clicks to create multiple deck images.
                  if (!p.unlockedDeck.tutorial3) {
                      p.displayDecks = [
                          ...p.displayDecks,
                          {
                              title: 'Tutorial3 / Survey3',
                              img: '/decks/tutorial/judicator-purple.png'
                          }
                      ]
                  }

                  p.unlockedDeck.tutorial3 = true;
                  return p;
              });
              
          backgrounds.update(bg => {
              $backgrounds.active = $backgrounds.dark;
              return bg;
          });
          return;
      }

      // Move on to chapter 4 if enough memory. (short: 20?, long: 65)
      if (!$player.unlockedDeck.tutorial4 && $player.memory >= 65) { 
          player.update(p => {
              p.activeDeck = 'survey';
              p.unlockedCards = [...tutorial4Deck];
              currentCard = p.unlockedCards[0];

              // TODO: Confirm why this is here, I believe it's to avoid user's extra clicks to create multiple deck images.
              if (!p.unlockedDeck.tutorial4) {
                  p.displayDecks = [
                      ...p.displayDecks,
                      {
                          title: 'Tutorial4 / Survey4',
                          img: '/decks/tutorial/judicator-purple-smile.png'
                      }
                  ]
              }

              p.unlockedDeck.tutorial4 = true;
              return p;
          });
              
          backgrounds.update(bg => {
              $backgrounds.active = $backgrounds.dark;
              return bg;
          });
          return;
      }

      // Move on to chapter 2 if enough memory. (short: 5, long: 15)
      if (!$player.unlockedDeck.tutorial2 && $player.memory >= 15) { 
          player.update(p => {
              p.activeDeck = 'survey';
              p.unlockedCards = [...tutorial2Deck];
              currentCard = p.unlockedCards[0];

              if (!p.unlockedDeck.tutorial2) {
                  p.displayDecks = [
                      ...p.displayDecks,
                      {
                          title: 'Tutorial2 / Survey2',
                          img: '/decks/tutorial/judicator-white-smile.png'
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
  }

  function isButtonOnCooldown() {
      if (buttonOnCooldown) return true;

      buttonOnCooldown = true;
      setTimeout(() => buttonOnCooldown = false, 750);
  }

  function surveyHandler(event) {
    if (isButtonOnCooldown()) return;

    currentCard = tutorialHandler(event, currentCard);
    toggleBlur();

    // Checks if current card is final survey card
    if (currentCard.id === 'survey3-12') {
      setTimeout(() => {
        player.update(p => {
          p.health = 10;
          p.aura = 10;
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter3Deck];

          // Choose stat icon based on answers
          p.icons.sanity = p.iconPoints.brain >= p.iconPoints.smiley ? 'brain' : 'smiley';

          if (!p.unlockedDeck.chapter3) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: 'Chapter3',
                img: '/decks/chapter3/temptress.png'
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

    if (currentCard.id === 'survey2-12') {
      setTimeout(() => {
        player.update(p => {
          p.health = 10;
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter2Deck];

          // Choose stat icon based on answers
          p.icons.aura = p.iconPoints.yellowAura >= p.iconPoints.greenAura ? 'yellow' : 'green';

          if (!p.unlockedDeck.chapter2) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: 'Chapter2',
                img: '/decks/chapter2/druid.png'
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

    if (currentCard.id === 'survey1-14') {
      setTimeout(() => {
        player.update(p => {
          p.activeDeck = 'chapter';
          p.unlockedCards = [...chapter1Deck];

          // Choose stat icon based on answers
          p.icons.health = p.iconPoints.heart >= p.iconPoints.diamond ? 'heart' : 'diamond';

          // Avoids duplicate decks
          if (!p.unlockedDeck.chapter1) {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: 'Chapter1',
                img: '/decks/chapter1/peasant.png'
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

  function resetDecks() {
      // allDecks.set({...$newDeck});
  }
</script>

<div class="game-client">
  {#if gameOver}
    <div class="menu">
      <h2 class="main-menu-title">Continue?</h2>
      <Button on:click={() => gameOver = false}>Yes</Button>
    </div>
  {:else}
  {#if menuOpen}
    <div class="menu" in:fly={{y: 100}} out:fade>
      <h2 class="main-menu-title">Main Menu</h2>
      <main class="menu-content">
        <h3 class="menu-header">Times died: <span class="menu-deaths">{$player.timesReborn}</span></h3>
        <h3 class="menu-header">Decks Unlocked:</h3>
        {#each $player.displayDecks as deck}
          <MenuDeck title={deck.title} img={deck.img}/>
        {/each}
      </main>
      <div class="menu-bottom-section">
        <Button on:click={() => menuOpen = !menuOpen} bgColor={"bg-black"}>Close</Button>
      </div>
    </div>
  {/if}
    <div class="stats-wrapper">
      <!-- Health icons -->
      <img src={statImgHandler('health', $player.health)} alt={statImgAltTextHandler('health')} class="stat-icon" class:flash-green={flashHealth.positive} class:flash-red={flashHealth.negative}>
      <img src={statImgHandler('aura', $player.aura)} alt={statImgAltTextHandler('aura')} class="stat-icon" class:flash-green={flashAura.positive} class:flash-red={flashAura.negative}>
      <img src={statImgHandler('sanity', $player.sanity)} alt={statImgAltTextHandler('sanity')} class="stat-icon" class:flash-green={flashSanity.positive} class:flash-red={flashSanity.negative}>
      <p class="stat-icon yellow-icon" class:flash={flashImpulse}>{$player.unlockedDeck.chapter4 ? impulseMessage : '?'}</p>
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
          <Card img={currentCard.imgUrl} blurImg={blurCard}
            on:decision={event => surveyHandler(event)}>
            <span slot="text-left">{currentCard.textLeft}</span>
            <span slot="text-right">{currentCard.textRight}</span>
          </Card>

        <!-- Chapters -->
        {:else if $player.activeDeck === 'chapter'}
          <Card img={currentCard.imgUrl} blurImg={blurCard}
            on:decision={event => actionHandler(event, currentCard)}>
            <span slot="text-left">{currentCard.textLeft}</span>
            <span slot="text-right">{currentCard.textRight}</span>
          </Card>
        {/if}
        <!-- TODO: move under card -->
        <div class="bottom-text-wrapper">
          <p>{currentCard.title}</p>
          <p>•</p>
          <p>{currentCard.faction}</p>
        </div>
      </div>
      <!-- TODO: Make dedicated component -->
      <div class="card-text" class:cardBlurred={blurCard}>
        <p class:show={newDeckAlert} class="new-card-alert">New deck unlocked: {newDeckAlertText}!</p>
        <p>{currentCard.text}</p>
      </div>
    </div>
  {/if}

  <!-- Circle shapes -->
  {#if $player.activeDeck === 'survey'}
      <span class="circle__left-wrapper"><Circle on:decision={event => surveyHandler(event)} leftOrRight="left"/></span>
      <span class="circle__right-wrapper"><Circle on:decision={event => surveyHandler(event)} leftOrRight="right" /></span>
    {:else if $player.activeDeck === 'chapter'}
      <span class="circle__left-wrapper"><Circle on:decision={event => actionHandler(event)} leftOrRight="left"/></span>
      <span class="circle__right-wrapper"><Circle on:decision={event => actionHandler(event)} leftOrRight="right" /></span>
    {/if}

  <!-- Menu section -->
  <section class="menu-bottom-section">
    <span class="btn-menu"><MenuButton on:click={() => menuOpen = !menuOpen}>Menu</MenuButton></span>
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
    background-color: #090909f9;
    border-radius: 18px 18px 18px 18px;
    height: 100%;
    width: 100%;
    padding: 1rem;
    text-align: center;
    z-index: 2; // to be above game client and stats
    transition: all 0.3s ease-out;

    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .menu-content {
    background-color: #00000090;
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
    margin-bottom: 1rem;
  }

  .menu-deaths {
    color: #500c0c;
    font-weight: bold;
    font-size: 1.5rem;
  }

  /* Game Client */
  .game-client {
    position: relative;
    background: linear-gradient(to top, #ada9a7, #413747da, #456B73ca, #413747da, #b5b1ae);
    padding: 1rem 0.5rem 8.5rem;
    width: 35%;
    min-width: 300px;
    max-width: 400px;
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
    margin: 0 auto;
    border: 2px solid #5c585e5d;
    padding: 6px;
    border-radius: 8px;
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
    background-color: #00000083;
    box-shadow: 0 0.125rem 0.5rem #0000004e;
    width: 100%;
    padding: 0.75rem;
    line-height: 1.15;
    height: 7.5rem;
    margin: 0 auto;
    font-size: 1.125rem;
    border-radius: 8px;
    overflow-y: scroll;
    transition: filter 0.1s ease-in;

      &::-webkit-scrollbar {
        width: 0.5rem;
    }
  }

  .card-text::-webkit-scrollbar-track {
    background-color: #000;
    border-radius: 0.25rem;
  }

  .card-text::-webkit-scrollbar-thumb {
    background-color: #151515;
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
  .green-icon {
    stroke: #123312;
    color: #509150;
  }
  
  .pink-icon {
    stroke: #b07680;
    color: #b07680;
  }
  
  .yellow-icon {
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