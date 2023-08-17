<script>
  // hooks
  import { createEventDispatcher } from 'svelte';

  // props
  export let title = '';
  export let img = '/public/humans/villager.png';
  export let stats = {};
  export let deck = 'starter';

  const createEvent = createEventDispatcher();
  let leftTextVisible = true;
  let rightTextVisible = true;

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
    {#if leftTextVisible}
      <!-- <p class="text-left"><slot name="text-left"/></p> -->
    {/if}
    {#if rightTextVisible}
      <!-- <p class="text-right"><slot name="text-right"/></p> -->
    {/if}
  </div>
</div>

<style>
  .card {
    z-index: 0;
    cursor: pointer;
    position: relative;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 4px 12px #00000063;
    transition: all 0.3s ease-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .card:hover {
    scale: 1.05;
    z-index: 2;
    box-shadow: 0 4px 12px #000000a8;
  }

  .card-img {
    width: 100%;
    height: 480px;
    object-fit: contain;
    object-position: center;
    border-radius: 1rem;
    background-color: rgba(116, 176, 255, 0.781);
  }

  .text-left {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
  }

  .text-right {
    position: absolute;
    top: 2rem;
    right: 0;
    font-size: 2rem;
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