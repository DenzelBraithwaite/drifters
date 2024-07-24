<script>
  // hooks
  import { slide } from 'svelte/transition';

  // Stores
  import cardHovered from '../stores/hoverStatus';

  // props
  export let img = '/stats/puzzle.svg';
  export let blurImg = false;
  export let location = '';

</script>

<div class="card-wrapper">
  <div class="card" class:card-hover={$cardHovered.hovered}>
    <p class="location">{location}</p>
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
    border: 8px solid #00000076;
  }

  .text {
    text-align: center;
    text-shadow: 0 2px 4px #000000e5;
    background-color: #00000090;
    border-radius: 1rem;
    height: 75%;
    width: 90%;
    padding: 0.5rem;
    line-height: 1.15;
    padding-top: 1rem;
    font-size: 1.2rem;
    transition: all 0.3s ease-out;

    position: absolute;
    transform: translateY(12px);
  }

  .location {
    color: #8a8a8a;
    text-shadow: 1px 1px #456b73;
    line-height: 1;
    background-color: #00000076;
    padding: 0.25rem 0.5rem;
    border-radius: 4px 4px 0 0;

  }

  .cardBlurred {
    filter: blur(10px);
  }
</style>