<script>
  // hooks
  import { createEventDispatcher } from 'svelte';

  // props
  export let title = '';
  export let img = '/public/card-bg.png';
  export let stats = {};
  export let deck = 'starter';

  const createEvent = createEventDispatcher();

  function cardClickHandler(event) {    
    createEvent('cardClick', {
    })
  }

  function capitalize(string){
    const firstHalf = string[0].toUpperCase();
    const secondHalf = string.slice(1);
    return firstHalf + secondHalf;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={cardClickHandler} class="card">
  <img class="card-img" src={img} alt="img of card">
  <div class="dialogue-box">
    <p class="card- "><slot /></p>
    <p class="card-text"><slot /></p>
  </div>
</div>

<style>
  .card {
    z-index: 0;
    cursor: pointer;
    position: relative;
    width: 10.5rem;
    height: 14.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 4px 12px #00000063;
    transition: all 0.3s ease-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .card:hover {
    scale: 1.4;
    z-index: 2;
    box-shadow: 0 4px 12px #000000a8;
  }

  .card-bottom-section {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ffffff3b;
    overflow-y: scroll;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 1.125;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-title {
    color: #ddd;
    width: 100%;
    height: 4rem;
    text-shadow: 0 2px 8px #000000a8;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    z-index: 10;
    white-space: nowrap;
    font-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-img {
    height: 55%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .bottom-section-wrapper::-webkit-scrollbar,
  .card-bottom-section::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }

  .bottom-section-wrapper {
    width: 90%;
    padding-bottom: 0.9rem;
    font-size: 0.85rem;
    color: #ebebeb;
    text-shadow: 0 1px 3px #0000008f;
    padding-top: 0.5rem;
    overflow-y: scroll;
  }

    /* Animation */
    @keyframes slideInLeft {
    from {
      transform: translateX(100px);
    }

    to {
      transform: translateX(0);
    }
  }

  .slide-in {
    /* Animation */
    animation-name: slideInLeft;
    animation-duration: 1s;
    /* animation-timing-function: ; */
    /* animation-delay: ; */
    /* animation-iteration-count: ; */
    /* animation-direction: ; */
    /* animation-fill-mode: ; */
  }

</style>