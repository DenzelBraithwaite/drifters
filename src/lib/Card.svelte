<script>
  // hooks
  import { createEventDispatcher } from 'svelte';

  // props
  export let title = '';
  export let img = '/public/decks/tutorial/question-mark.png';
  export let stats = {};
  export let deck = 'starter';

  const createEvent = createEventDispatcher();
  let leftTextVisible = false;
  let rightTextVisible = false;
  let cardHover = false;

  function showLeftText() {
    cardHover = true;
    leftTextVisible = true;
    rightTextVisible = false;
  }

  function showRightText() {
    cardHover = true;
    rightTextVisible = true;
    leftTextVisible = false;
  }

  function hideText() {
    cardHover = false;
    rightTextVisible = false;
    leftTextVisible = false;
  }

  // TODO: Maybe move this back to inline if it's a one liner
  function actionHandler(decision) {
    createEvent('decision', decision);
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card-wrapper">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class="text-left" 
   on:mouseover={showLeftText} 
   on:mouseout={hideText}
   on:click={() => actionHandler('left')}>
    {#if leftTextVisible}
      <p><slot name="text-left" /></p>
    {/if}
  </span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class="text-right" 
   on:mouseover={showRightText} 
   on:mouseout={hideText}
   on:click={() => actionHandler('right')}>
    {#if rightTextVisible}
      <p><slot name="text-right" /></p>
    {/if}
  </span>

  <div class="card" class:card-hover={cardHover}>
    <img class="card-img" src={img} alt="img of card">
    <div class="dialogue-box">
    </div>
  </div>
</div>


<style style="scss">
  .card {
    z-index: 0;
    position: relative;
    width: 100%;
    border-radius: 5rem 1rem 5rem 1rem;
    box-shadow: 0 4px 12px #00000063;
    transition: all 0.3s ease-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .card-hover {
    scale: 1.0125;
    z-index: 2;
    box-shadow: 0 4px 12px #000000a8;
    filter: blur(4px);
  }

  .card-img {
    width: 100%;
    max-height: 450px;
    background-repeat: no-repeat;
    object-fit: cover;
    object-position: center;
    border-radius: 5rem 1rem 5rem 1rem;

  }

  /* TODO: text-left and right are very similar, make one class */
  .text-left {
    text-shadow: 0 2px 4px #000000c3;
    height: 100%;
    width: 50%;
    padding: 1.125rem;
    padding-top: 2rem;
    font-size: 1.5rem;
    border-radius: 5rem 0 0 1rem;
    transition: all 0.3s ease-out;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    &:hover {
      scale: 1.02;
      background-color: #a55bda5b;
      text-align: center;
      cursor: var(--pointer);
    }

    &:active {
      transition: scale 0.3s ease-out;
      scale: 1.01;
      border-radius: 5.5rem 0 0 1.5rem;
    }
  }

  .text-right {
    text-shadow: 0 2px 4px #000000c3;
    height: 100%;
    width: 50%;
    padding: 1.125rem;
    padding-top: 2rem;
    font-size: 1.5rem;
    border-radius: 0 1rem 5rem 0;
    transition: all 0.3s ease-out;
    
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;

    &:hover {
      scale: 1.02;
      background-color: #2cb7b25b;
      text-align: center;
      cursor: var(--pointer);
    }

    &:active {
      scale: 1.01;
      transition: scale 0.3s ease-out;
      border-radius: 0 1.5rem 5.5rem 0;
    }
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