<script>
    // Helpers
    import { tutorialHandler } from '../helpers/tutorialHandler';

    import { draw } from 'svelte/transition';
    import Card from './Card.svelte';
    import Game from './Game.svelte';
    import Button from './Button.svelte';
    import MenuDeck from './MenuDeck.svelte';

    // Stores
    import { allDecks, newDeck } from '../stores/allDecks';
    import backgrounds from '../stores/backgroundImgs';

    import player from '../stores/player.js';

    // Decks
    const tutorial1Deck = $allDecks.tutorial1;
    const tutorial2Deck = $allDecks.tutorial2;
    const survey1Deck = $allDecks.survey1;
    const survey2Deck = $allDecks.survey2;
    const chapter1Deck = $allDecks.chapter1;
    const chapter1SoldiersDeck = $allDecks.chapter1Soldiers;
    const chapter2ElvesDeck = $allDecks.chapter2Elves;
    const chapter2Deck = $allDecks.chapter2;

    $player.unlockedCards = [...tutorial1Deck];
    let newDeckAlert = false;
    let newDeckAlertText = 'DECK_NAME_HERE';
    let gameOver = false;
    let currentCard = $player.unlockedCards[0];
    let menuOpen = false;
    $: hpMessage = $player.health <= 3 ? 'HP: Low!' : `HP:${$player.health}`;
    $: sanityMessage = '?'; 
    $: energyMessage = $player.energy <= 3 ? 'Energy: Low!': `Energy: ${$player.energy}`;
    $: impulseMessage = '?';
    $: memMessage = $player.memory < 1 ? 'No memory' : `MEM:${$player.memory}`;
    console.log($player.energy);

    function drawRandomCard() {
        const index = Math.floor(Math.random() * $player.unlockedCards.length);
        return $player.unlockedCards[index];
    }
    
    // TODO: break down into smaller functions
    function actionHandler(event) {
        const choice = event.detail;

        if (choice === 'left') {
            player.update(p => {
                p.health += currentCard.actionLeft.health;
                p.sanity += currentCard.actionLeft.sanity;
                p.energy += currentCard.actionLeft.energy;
                p.impulse += currentCard.actionLeft.impulse;
                p.memory += currentCard.actionLeft.memory;
                return p;
            });
        } else if (choice === 'right') {
            player.update(p => {
                p.health += currentCard.actionRight.health;
                p.sanity += currentCard.actionRight.sanity;
                p.energy += currentCard.actionRight.energy;
                p.impulse += currentCard.actionRight.impulse;
                p.memory += currentCard.actionRight.memory;
                return p;
            });
        }

        // TODO: Finish this properly
        if (isPlayerDead()) {
            gameOver = true;
            resetPlayer();
            resetDecks();
        }

        // Add Elves deck
        if (!$player.unlockedDeck.chapter2Elves && $player.memory >= 25) {
            newDeckAlertText = 'Elves'
            newDeckAlert = true;

            player.update(p => {
                p.unlockedCards = [...chapter2ElvesDeck, ...p.unlockedCards];
                if (!p.unlockedDeck.chapter2Elves) {
                    p.displayDecks = [
                        ...p.displayDecks,
                        {
                            title: 'Chapter2/Elves',
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
                            title: 'Chapter1/Soldiers',
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

        // Move on to chapter 2 if enough memory.
        if (!$player.unlockedDeck.tutorial2 && $player.memory >= 15) { 
            player.update(p => {
                    p.activeDeck = 'tutorial';
                    p.unlockedCards = [...tutorial2Deck];
                    currentCard = p.unlockedCards[0];

                    if (!p.unlockedDeck.tutorial2) {
                        p.displayDecks = [
                            ...p.displayDecks,
                            {
                                title: 'Tutorial2/Survey2',
                                img: '/decks/tutorial/judicator-white-smile.png'
                            }
                        ]
                    }

                    p.unlockedDeck.tutorial2 = true;
                    return p;
                });
                
            backgrounds.update(bg => {
                $backgrounds.active = $backgrounds.space;
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

    function playTutorial(event) {
        currentCard = tutorialHandler(event, currentCard);

        // Checks if current card is final survey card
        if (currentCard.id === 'survey2-12') {
            setTimeout(() => {
                player.update(p => {
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
                    $backgrounds.active = $backgrounds.adventure;
                    return bg;
                });
                
                const index = Math.floor(Math.random() * $player.unlockedCards.length);
                const cardDrawn = $player.unlockedCards[index];
                currentCard = cardDrawn;
            }, 6500);
        }
    }

    function isPlayerDead() {
        if ($player.health <= 0 || $player.energy <= 0 || $player.sanity <= 0 || $player.impulse >= 10) {
            resetPlayer();
            return true;
        }
    }

    function resetPlayer() {
        player.update(p => {
            p.name = 'unknown';
            p.timesReborn += 1;
            p.health = 6;
            p.sanity = 6;
            p.energy = 6;
            p.impulse = 6;

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
            <h2 class="main-menu-title">Play again?</h2>
            <button on:click={() => gameOver = false}>Yes</button>
        </div>
    {:else}
    {#if menuOpen}
        <div class="menu">
            <h2 class="main-menu-title">Main Menu</h2>
            <main class="menu-content">
                <h3>Decks Unlocked:</h3>
                    {#each $player.displayDecks as deck}
                        <MenuDeck title={deck.title} img={deck.img}/>
                    {/each}
            </main>
            <div class="menu-wrapper">
                <Button on:click={() => menuOpen = !menuOpen} bgColor={"bg-black"}>Menu</Button>
            </div>
        </div>
    {/if}
        <div class="stats-wrapper">
            <p class="red-icon">{$player.unlockedDeck.chapter1 ? hpMessage : '?'}</p>
            <p class="green-icon">{$player.unlockedDeck.chapter2 ? energyMessage : '?'}</p>
            <p class="pink-icon">{$player.unlockedDeck.chapter3 ? sanityMessage : '?'}</p>
            <p class="yellow-icon">{$player.unlockedDeck.chapter4 ? impulseMessage : '?'}</p>
            <p class="white-icon">{$player.unlockedDeck.chapter1 ? memMessage : '?'}</p>
        </div>
        <div class="container">
            <div class="card-text">
                <p class:show={newDeckAlert} class="new-card-alert">New deck unlocked: {newDeckAlertText}!</p>
                <p>{currentCard.text}</p>
            </div>
            <div class="card-wrapper">
                <!-- TODO: different conditions? active? -->
                <!-- Tutorials -->
                {#if $player.activeDeck === 'tutorial' || $player.activeDeck === 'survey'}
                    <Card img={currentCard.imgUrl}
                     on:decision={event => playTutorial(event)}>
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
            </div>
            <div class="bottom-text-wrapper">
                <p>{currentCard.title}</p>
                <p>{currentCard.faction}</p>
            </div>
        </div>
    {/if}
    <div class="menu-wrapper">
        <Button on:click={() => menuOpen = !menuOpen} bgColor={"bg-black"}>Menu</Button>
    </div>
</div>

<style lang="scss">
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
        border-radius: 5rem 1rem 5rem 1rem;
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
        border-radius: 5rem 1rem 5rem 1rem;
        height: 85%;
        padding: 2rem 1.5rem 1rem;
        text-align: left;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .game-client {
        position: relative;
        padding: 5rem 1rem;
        width: 30%;
        min-width: 475px;
        max-width: 700px;
        min-height: 825px;
        margin: 0 auto;
        border: 4px solid #00000079;
        border-radius: 5rem 1rem 5rem 1rem;
        background-color: #000000df;
        background: linear-gradient(to right, #000000, #090218e4, #000000);
        box-shadow: 0 0.5rem 2rem 0.5rem #0c00387e;
    }

    .container {
        width: 90%;
        margin: 0 auto;
    }

    .card-wrapper {
        position: relative;
        margin-bottom: 1rem;
    }

    .card-text {
        position: relative;
        background-color: #0f0f0f53;
        box-shadow: 0 0.125rem 0.5rem #0000004e;
        width: 100%;
        padding: 0.75rem;
        line-height: 1.4;
        height: 7rem;
        margin: 1rem auto;
        font-size: 1.125rem;
        border-radius: 0.5rem;
        overflow-y: scroll;

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

    .stats-wrapper {
        background-color: #0000007f;
        background: linear-gradient(to top, #000000e6, #0f0228ab, #000000e6);
        border-radius: 5rem 1rem 0 0;
        margin-bottom: 1rem;
        padding: 2rem;
        width: 100%;
        box-shadow: 0 0.5rem 0.5rem #0000004e;

        position: absolute;
        top: 0;
        right: 50%;
        transform: translate(50%);


        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .stat-icon {
        fill: none;
        stroke-width: 1.5;
        stroke: #a49a9a;
        width: 4rem;
    }

    .red-icon {
        stroke: #8c2323;
        color: #8c2323;
    }
    
    .green-icon {
        stroke: #509150;
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
    
    .white-icon {
        stroke: #fff;
        color: #fff;
    }

    .bottom-text-wrapper {
        text-align: center;
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

    .show {
        display: block;
        opacity: 100%;
    }
</style>