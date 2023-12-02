<script>
  // hooks
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  // Stores
  import cardHovered from '../stores/hoverStatus';

  // props
  export let img = '/public/decks/tutorial/question-mark.png';

  const createEvent = createEventDispatcher();

</script>

<div class="card-wrapper">
  <div class="card" class:card-hover={$cardHovered.hovered}>
    {#if $cardHovered.hovered}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="text" transition:slide={{duration: 75}}>
        {#if $cardHovered.left}
          <p><slot name="text-left" /></p>
        {/if}

        {#if $cardHovered.right}
          <p><slot name="text-right" /></p>
        {/if}
      </span>
      {/if}
      <img class="card-img" src={img} alt="img of card">
  </div>
</div>


<style style="scss">
  .card {
    z-index: 0;
    position: relative;
    width: 100%;
    border-radius: 1rem 1rem 0.5rem 0.5rem;
    background-color: #413747;
    padding: 2.5rem 1rem 1.5rem;
    transition: all 0.3s ease-out;
    margin-bottom: 0.125rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .card-hover {
    z-index: 2;
    box-shadow: 0 4px 12px #000000a8;
  }

  .card-img {
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
    border: 4px solid #00000076;
  }

  .text {
    text-align: center;
    text-shadow: 0 2px 4px #000000e5;
    background-color: #00000090;
    border-radius: 1rem;
    height: 80%;
    width: 90%;
    padding: 0.5rem;
    line-height: 1.15;
    padding-top: 1rem;
    font-size: 1.2rem;
    transition: all 0.3s ease-out;
    z-index: 5;

    position: absolute;
    bottom: 45%;
    right: 50%;
    transform: translate(50%, 50%);
  }
</style>