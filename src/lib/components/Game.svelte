<script>
  // Custom components
  import GameClient from './GameClient.svelte';

  // Stores
  import backgrounds from '../stores/backgroundImgs';
  
  $: bgImg = $backgrounds.active;
</script>

<header>
  <p class="version">Version: Beta 1.3</p>
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
  .bg__village {
    background: url('/backgrounds/village.png');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
  }

  .bg__dark {
    background: url('/backgrounds/dark_2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg__magical-forest {
    background: url('/backgrounds/forest.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg__kingdom {
    background: url('/backgrounds/kingdom.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>