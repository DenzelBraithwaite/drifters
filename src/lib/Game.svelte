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

</script>

<main>
    <div class="game-board">
        <h1>Hello World</h1>
        <Card />
    </div>
</main>


<style>
    .game-board {
        position: relative;
        height: 85dvh;
        width: 90%;
        padding: 0.5rem;
        max-width: 1500px;
        margin: 1rem auto;
        border-radius: 1rem;
        background-color: #200f009d;
        box-shadow: 0 4px 20px #000000;
        border: 2px solid #e4802e3f;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

    }
</style>