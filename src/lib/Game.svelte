<script>
    // Hooks
    import { onMount } from 'svelte';

    // Custom components
    import GameClient from '../lib/GameClient.svelte';

    let bgImg = 'bg__dark-bg';

    
</script>

<header>
    <p class="version">Version: Beta 1.0</p>
</header>

<main class="{bgImg}">
    <div class="game">
        <GameClient />
    </div>
</main>

<footer>
    <!-- <p>copyright...</p> -->
    <!-- <a target="_blank" href="https://icons8.com/icon/9L9i0wP3MWGL/cursor">Cursor</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
</footer>


<style>
    .version {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    .game {
        width: 100%;
    }

    main {
        height: 100dvh;

        display: flex;
        justify-content: center;
        align-items: center;
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

    /* background images */
    .bg__adventure {
        background: url('/backgrounds/adventure-bg.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
    }

    .bg__dark-forest {
        background: url('/backgrounds/dark-forest.png');
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
    }

    .bg__dark-bg {
        background: url('/backgrounds/dark-bg.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .bg__cherry-blossom-bg {
        background: url('/backgrounds/cherry-blossom.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>