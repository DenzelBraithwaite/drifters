<script>
    // Helpers
    import { tutorialHandler } from '../helpers/tutorialHandler';

    import { draw } from 'svelte/transition';
    import Card from './Card.svelte';
    import Game from './Game.svelte';

    // Stores
    import { allDecks, newDeck } from '../stores/allDecks';
    import backgrounds from '../stores/backgroundImgs';

    import player from '../stores/player.js';

    let gameOver = false;
    const tutorialDeck = $allDecks.tutorial;
    const survey1Deck = $allDecks.survey1;
    const chapter1Deck = $allDecks.chapter1;

    // Handles which deck is displayed
    let tutorialActive = false;
    let chapter1Active = true;

    // Tutorial Deck
    let currentTutorialCard = {...tutorialDeck.card1};

    let currentCard = {
        imgUrl: tutorialDeck.card1.imgUrl,
        title: tutorialDeck.card1.title,
        text: tutorialDeck.card1.text,
        faction: tutorialDeck.card1.faction,
        textLeft: tutorialDeck.card1.textLeft,
        textRight: tutorialDeck.card1.textRight,
        actionLeft: tutorialDeck.card1.actionLeft,
        actionRight: tutorialDeck.card1.actionRight
    }

    function drawRandomCard(deck) {
        const cards = Object.keys(deck);
        const index = Math.floor(Math.random() * cards.length);
        const newCard = cards[index];

        currentCard = deck[newCard];
        delete deck[newCard];
        player.update(p => {
            p.cardsDiscovered = [currentCard, ...p.cardsDiscovered];
            return p;
        });
    }

    function drawCard(card) {
        return card;
    }
    
    function actionHandler(event) {
        const choice = event.detail;

        if (choice === 'left') {
            player.update(p => {
                p.health += currentCard.actionLeft.health;
                p.sanity += currentCard.actionLeft.sanity;
                p.hunger += currentCard.actionLeft.hunger;
                p.impulse += currentCard.actionLeft.impulse;
                p.memory += currentCard.actionLeft.memory;
                return p;
            });
        } else if (choice === 'right') {
            player.update(p => {
                p.health += currentCard.actionRight.health;
                p.sanity += currentCard.actionRight.sanity;
                p.hunger += currentCard.actionRight.hunger;
                p.impulse += currentCard.actionRight.impulse;
                p.memory += currentCard.actionRight.memory;
            
                return p;
            });
        }

        // TODO: Check if player died
        if (isPlayerDead()) {
            gameOver = true;
            resetPlayer();
            resetDecks();
        }

        // TODO: Make sure the same card doesn't appear twice during one playthrough
        drawRandomCard(chapter1Deck);
    }

    function playTutorial(event) {
        currentTutorialCard = tutorialHandler(event, currentTutorialCard)
        if (currentTutorialCard.id === survey1Deck.card10.id) {
            setTimeout(() => {
                tutorialActive = false;
                chapter1Active = true;
                currentCard = $allDecks.chapter1.card1;
                $backgrounds.active = 'bg__adventure';
            }, 8000)

        }
    }

    function calculateStats(card) {

    }

    function isPlayerDead() {
        if ($player.health <= 0 || $player.sanity <= 0 || $player.hunger <= 0 || $player.impulse <= 0) {
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
            p.hunger = 6;
            p.impulse = 6;

            return p;
        })
    }

    function resetDecks() {
        allDecks.set({...$newDeck});

    }
</script>

<div class="game-client">
    {#if gameOver}
        <div class="main-menu">
            <h2 class="main-menu-title">Play again?</h2>
            <button on:click={() => gameOver = false}>Yes</button>
        </div>
    {:else}
        {#if tutorialActive}
            <div class="stats-wrapper">
                <p class="red-icon">?</p>
                <p class="green-icon">?</p>
                <p class="pink-icon">?</p>
                <p class="yellow-icon">?</p>
                <p class="white-icon">?</p>
            </div>
            <div class="container">
                <div class="card-text">
                    <p>{currentTutorialCard.text}</p>
                </div>
                <div class="card-wrapper">
                    <Card img={currentTutorialCard.imgUrl}
                    on:decision={event => playTutorial(event)}>
                        <span slot="text-left">{currentTutorialCard.textLeft}</span>
                        <span slot="text-right">{currentTutorialCard.textRight}</span>
                    </Card>
                </div>
                <div class="bottom-text-wrapper">
                    <p>{currentTutorialCard.title}</p>
                    <p>{currentTutorialCard.faction}</p>
                </div>
            </div>
        {:else if chapter1Active}
            <div class="stats-wrapper">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon red-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon green-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon pink-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon yellow-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon white-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>-->
                <p class="red-icon">HP: {$player.health}</p>
                <!-- <p class="green-icon">SNT: {$player.sanity}</p> -->
                <!-- <p class="pink-icon">HGR: {$player.hunger}</p> -->
                <!-- <p class="yellow-icon">IMP: {$player.impulse}</p> -->
                <p class="white-icon">MRY: {$player.memory}</p>
            </div>
            <div class="container">
                <div class="card-text">
                    <p>{currentCard.text}</p>
                </div>
                <div class="card-wrapper">
                    <Card img={currentCard.imgUrl}
                    on:decision={() => actionHandler($allDecks.chapter1)}>
                        <span slot="text-left">{currentCard.textLeft}</span>
                        <span slot="text-right">{currentCard.textRight}</span>
                    </Card>
                </div>
                <div class="bottom-text-wrapper">
                    <p>{currentCard.title}</p>
                    <p>{currentCard.faction}</p>
                </div>
            </div>
        {/if}
    {/if}
</div>

<style lang="scss">
    .game-client {
        position: relative;
        height: 800px;
        width: 30%;
        min-width: 300px;
        max-width: 700px;
        margin: 0 auto;
        border-radius: 5rem 1rem 5rem 1rem;
        background-color: #000000df;
        background: linear-gradient(to right, #150c1dd8, #092726d5);
        box-shadow: 0 0.25rem 1rem #18252f7f;
    }

    .main-menu {
        background-color: #00ff9d25;
        height: 95%;
        width: 90%;
        text-align: center;

        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
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
        background: linear-gradient(to right, #0f0814ef, #061a19);
        width: 100%;
        padding: 0.75rem;
        height: 7rem;
        margin: 1rem auto;
        font-size: 1.25rem;
        border-radius: 0.5rem;
        overflow-y: scroll;



            &::-webkit-scrollbar {
                width: 0.5rem;
        }

    }

    .card-text::-webkit-scrollbar-track {
        background: linear-gradient(to right, #0f0814ef, #061a19);
        border-radius: 0.25rem;

    }

    .card-text::-webkit-scrollbar-thumb {
        background: linear-gradient(to left, #0f0814ef, #00000095);
        border-radius: 0.25rem;

    }

    .stats-wrapper {
        height: 12%;
        background-color: #0000007f;
        background: linear-gradient(to right, #0f0814ef, #061a19);
        border-radius: 5rem 1rem 0 0;
        margin-bottom: 1rem;

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
</style>