<script>
    // Custom components
    import GameClient from './GameClient.svelte';

    // Stores
    import backgrounds from '../stores/backgroundImgs';
    
    $: bgImg = $backgrounds.active;
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
        transition: background 3s ease-in-out;

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
        background: url('/backgrounds/adventure.png');
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

    .bg__space {
        background: url('/backgrounds/space.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .bg__cherry-blossom {
        background: url('/backgrounds/cherry-blossom.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .bg__magical-forest {
        background: url('/backgrounds/magical-forest.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>