<script>
    import Card from './Card.svelte';
  import Game from './Game.svelte';

    // Stores
    import allDecks from './stores/allDecks';
    import player from './stores/player.js';

    const tutorialDeck = $allDecks.tutorial;
    let gameOver = false;
    let tutorialActive = true;
    let currentCard = {
        imgUrl: tutorialDeck.firstCard.imgUrl,
        title: tutorialDeck.firstCard.title,
        text: tutorialDeck.firstCard.text,
        faction: tutorialDeck.firstCard.faction,
        textLeft: tutorialDeck.firstCard.textLeft,
        textRight: tutorialDeck.firstCard.textRight,
        actionLeft: tutorialDeck.firstCard.actionLeft,
        actionRight: tutorialDeck.firstCard.actionRight
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
        if (isPlayerDead()) gameOver = true;
    }

    function drawCard(deck, card) {

    }

    function playTutorial() {

    }

    function calculateStats(card) {

    }

    function isPlayerDead() {
        if ($player.health <= 0 || $player.sanity <= 0 || $player.hunger <= 0 || $player.impulse <= 0) {
            return true;
        }
    }
</script>

<div class="game-client">
    {#if gameOver}
        <div class="main-menu">
            <h2 class="main-menu-title">Play again?</h2>
            <button on:click={() => gameOver = false}>Yes</button>
        </div>
    {:else}
        <div class="stats-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="stat-icon red-icon">
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
            </svg>                                                                     
        </div>
        <div class="container">
            <div class="card-text">
                <p>{currentCard.text}</p>
            </div>
            <div class="card-wrapper">
                <Card img={currentCard.imgUrl}
                on:decision={actionHandler}>
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
</div>

<style>
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
        background-color: rgba(255, 0, 0, 0.092);
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
        width: 90%;
        height: 5rem;
        margin: 0 auto 2rem;
        font-size: 1.25rem;
    }

    .stats-wrapper {
        height: 12%;
        background-color: #0000007f;
        background: linear-gradient(to right, #0f0814ef, #061a19);
        border-radius: 5rem 1rem 0 0;
        margin-bottom: 2rem;

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
    }
    
    .green-icon {
        stroke: #509150;
    }
    
    .pink-icon {
        stroke: #b07680;
    }
    
    .yellow-icon {
        stroke: #b5b559;
    }
    
    .white-icon {
        stroke: #fff;
    }

    .bottom-text-wrapper {
        text-align: center;
    }
</style>