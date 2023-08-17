<script>
    // Hooks
    import { onMount } from 'svelte';

    // Custom components
    import Button from './Button.svelte';
    import Card from './Card.svelte';

    // test without labeleled statement
    $: player1 = {
        title: 'Player 1',
        points: 0,
        wins: 0,
        losses: 0,
        hand: [],
        discards: []
    };

    // TODO: Store all decks that user unlocks in a store!
    const fullDeck = {
       
    };

    // TODO: Card has overlay left and right 
    // TODO: each overlay(l-r) has on mouseover which triggers a variable to be true to give card an overlay class and make overlay-text appear 
    // TODO: the game client has mouseover which removes overlays
</script>

<main>
    <div class="game">
        <div class="btn-wrapper">
            <Button bgColor="btn__brown">Left</Button>
            <Button bgColor="btn__brown">Right</Button>
        </div>
        <div class="game-client">
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
                <div class="card-dialogue">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Iusto corporis maxime vero quas error repellat ullam mollitia blanditiis ex quia?</p>
                </div>
                <div class="card-wrapper">
                    <Card>
                        <span slot="text-left">Hello I am text left.</span>
                        <span slot="text-right">Hello I am text right.</span>
                    </Card>
                </div>
                <div class="bottom-text-wrapper">
                    <p>Card title</p>
                    <p>Faction / Group / Association</p>
                </div>
            </div>
        </div>
    </div>
</main>


<style>
    .game-client {
        position: relative;
        height: 90dvh;
        width: 30%;
        max-width: 1500px;
        margin: 0 auto;
        border-radius: 1rem;
        background-color: #001820ec;
        box-shadow: 0 0.25rem 1rem #0a5c77c7;

    }

    .container {
        width: 90%;
        margin: 0 auto;
    }

    .card-wrapper {
        position: relative;
        width: 90%;
        margin: 0 auto 1rem;

    }

    .card-dialogue {
        width: 90%;
        margin: 0 auto 2rem;
    }

    .btn-wrapper {
        width: 40%;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        justify-content: space-between;
    }

    .stats-wrapper {
        height: 15%;
        background-color: #111111;
        border-radius: 1rem 1rem 0 0;
        margin-bottom: 2rem;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .stat-icon {
        fill: none;
        stroke-width: 1.5;
        stroke: #a49a9a;
        width: 5rem;
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