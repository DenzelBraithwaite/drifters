<script>
  // hooks
  import { slide } from 'svelte/transition';

  // Stores
  import cardHovered from '../stores/hoverStatus';

  // props
  export let img = '/public/decks/tutorial/question-mark.png';
  export let blurImg = false;

</script>

<div class="card-wrapper">
  <div class="card" class:card-hover={$cardHovered.hovered}>
    {#if $cardHovered.hovered}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="text" class:cardBlurred={blurImg} transition:slide={{duration: 75}}>
        {#if $cardHovered.left}
          <p><slot name="text-left" /></p>
        {/if}

        {#if $cardHovered.right}
          <p><slot name="text-right" /></p>
        {/if}
      </span>
      {/if}
      <img src={img} alt="img of card" class="card-img" class:cardBlurred={blurImg}>
  </div>
</div>


<style style="scss">
  .card {
    position: relative;
    width: 100%;
    border-radius: 16px 16px 8px 8px;
    background-color: #413747;
    padding: 48px 16px 24px;
    transition: all 0.3s ease-out;
    margin-bottom: 0.125rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .card-hover {
    box-shadow: 0 4px 12px #413747;
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
    height: 82%;
    width: 90%;
    padding: 0.5rem;
    line-height: 1.15;
    padding-top: 1rem;
    font-size: 1.2rem;
    transition: all 0.3s ease-out;

    position: absolute;
  }

  .cardBlurred {
    filter: blur(10px);
  }
</style>