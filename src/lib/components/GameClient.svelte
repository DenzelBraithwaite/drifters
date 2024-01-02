<script>
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

    $player.unlockedCards = [...tutorial1Deck];
    let gameOver = false;
    let currentCard = $player.unlockedCards[0];
    let menuOpen = false;
    
    // Animations
    let newDeckAlert = false;
    let newDeckAlertText = 'DECK_NAME_HERE';
    let blurCard = false;
    let flashHealth = false;
    let flashAura = false;
    let flashSanity = false;
    let flashImpulse = false;
    let flashMemory = false;
    $: hpMessage = $player.health <= 3 ? 'Low!' : `${$player.health}`;
    $: auraMessage = $player.aura <= 3 ? 'Low!' : `${$player.aura}`;
    $: sanityMessage = $player.sanity <= 3 ? 'Low!' : `${$player.sanity}`;
    $: impulseMessage = $player.impulse >= 7 ? 'High!' : `${$player.impulse}`;
    $: memMessage = $player.memory < 1 ? '0' : `${$player.memory}`;

    function controlStats() {
        player.update(p => {
            if (p.health >= 10) p.health = 10;
            if (p.aura >= 10) p.aura = 10;
            if (p.sanity >= 10) p.sanity = 10;
            if (p.health <= 0) p.impulse = 0;
            return p;
        })
    }

    function statHandler(choice) {
        // Handles stat change and stat flash
        if (choice === 'left') {
            player.update(p => {
                if (currentCard.actionLeft.health) {
                    p.health += currentCard.actionLeft.health;
                    statFlashHandler('health');
                };
                if (currentCard.actionLeft.aura) {
                    statFlashHandler('aura');   
                    p.aura += currentCard.actionLeft.aura;
                }
                if (currentCard.actionLeft.sanity) {
                    statFlashHandler('sanity');   
                    p.sanity += currentCard.actionLeft.sanity;
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
                    statFlashHandler('health');
                    p.health += currentCard.actionRight.health;
                }
                if (currentCard.actionRight.aura) {
                    statFlashHandler('aura');
                    p.aura += currentCard.actionRight.aura
                };
                if (currentCard.actionRight.sanity) {
                    statFlashHandler('sanity');
                    p.sanity += currentCard.actionRight.sanity
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

    function drawRandomCard() {
        const index = Math.floor(Math.random() * $player.unlockedCards.length);
        return $player.unlockedCards[index];
    }

    function toggleBlur(duration = 200) {
        blurCard = true;
        setTimeout(() => blurCard = false, duration);
    }

    function statFlashHandler(stat) {
        switch (stat) {
            case 'health':
                flashHealth = true;
                setTimeout(() => flashHealth = false, 400);
            break;
            case 'aura':
                flashAura = true;
                setTimeout(() => flashAura = false, 400);
            break;
            case 'sanity':
                flashSanity = true;
                setTimeout(() => flashSanity = false, 400);
            break;
            case 'impulse':
                flashImpulse = true;
                setTimeout(() => flashImpulse = false, 400);
            break;
            case 'memory':
                flashMemory = true;
                setTimeout(() => flashMemory = false, 400);
            break;
            default:
                console.log('statFlashHandler did not match :(');
        }

    }

    // TODO: break down into smaller functions
    function actionHandler(event, card) {
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

    function surveyHandler(event) {
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
                    $backgrounds.active = $backgrounds.river;
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

                // If statement avoids duplicates
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
            <div class="menu-wrapper">
                <Button on:click={() => menuOpen = !menuOpen} bgColor={"bg-black"}>Close</Button>
            </div>
        </div>
    {/if}
        <div class="stats-wrapper">
            <p class="stat-icon red-icon" class:flash={flashHealth}>{$player.unlockedDeck.chapter1 ? hpMessage : '?'}</p>
            <p class="stat-icon green-icon" class:flash={flashAura}>{$player.unlockedDeck.chapter2 ? auraMessage : '?'}</p>
            <p class="stat-icon pink-icon" class:flash={flashSanity}>{$player.unlockedDeck.chapter3 ? sanityMessage : '?'}</p>
            <p class="stat-icon yellow-icon" class:flash={flashImpulse}>{$player.unlockedDeck.chapter4 ? impulseMessage : '?'}</p>
            <p class="stat-icon grey-icon" class:flash={flashMemory}>{$player.unlockedDeck.chapter1 ? memMessage : '?'}</p>
        </div>
        <div class="container">
            <div class="card-wrapper" class:cardBlurred={blurCard}>
                <!-- Tutorials -->
                {#if $player.activeDeck === 'survey'}
                    <Card img={currentCard.imgUrl}
                     on:decision={event => surveyHandler(event)}>
                        <span slot="text-left">{currentCard.textLeft}</span>
                        <span slot="text-right">{currentCard.textRight}</span>
                    </Card>

                <!-- Chapters -->
                {:else if $player.activeDeck === 'chapter'}
                    <Card img={currentCard.imgUrl}
                     on:decision={event => actionHandler(event, currentCard)}>
                        <span slot="text-left">{currentCard.textLeft}</span>
                        <span slot="text-right">{currentCard.textRight}</span>
                    </Card>
                {/if}
                <!-- TODO: move under card -->
                <div class="bottom-text-wrapper">
                    <p>{currentCard.title}</p>
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
    <section class="menu-wrapper">
        <span class="btn-menu-wrapper"><MenuButton on:click={() => menuOpen = !menuOpen}>Menu</MenuButton></span>
    </section>
</div>

<style lang="scss">
  /* Menu */
  .menu-wrapper {
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
    z-index: 1000;
    background-color: #090909f9;
    border-radius: 18px 18px 18px 18px;
    height: 100%;
    width: 100%;
    padding: 1rem;
    text-align: center;
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
  .btn-menu-wrapper {
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
    background: linear-gradient(to top, #ada9a7, #a8a4a2, #b5b1ae);
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
    border-radius: 0.5rem;
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
    z-index: 1;

    position: absolute;
    top: 25px;
    right: 50%;
    transform: translateX(50%);


    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .stat-icon {
    fill: none;
    stroke-width: 1.5;
    stroke: #a49a9a;
    width: 4rem;
    font-weight: bold;
    transition: color 0.5s ease-in-out;
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
  .red-icon {
    stroke: #8c2323;
    color: #8c2323;
  }
  
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
    z-index: 1;

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

  .flash {
    color: #fff;
  }
</style>