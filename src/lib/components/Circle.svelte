<script>
  // @ts-nocheck

  // Stores
  import cardHovered from '../stores/hoverStatus.js';

  // Hooks
  import { createEventDispatcher } from 'svelte';
    
  // Props
  export let leftOrRight;

  const createEvent = createEventDispatcher();

  function showLeftText() {
    cardHovered.update(store => {
      return {
        hovered: true,
        left: true,
        center: false,
        right: false
      }
    });
    createEvent('hover', 'left');
  }

  function showRightText() {
    cardHovered.update(store => {
      return {
        hovered: true,
        left: false,
        center: false,
        right: true
      }
    });
    createEvent('hover', 'right');
  }

  function showCenterText() {
    cardHovered.update(store => {
      return {
        hovered: true,
        left: false,
        center: true,
        right: false
      }
    });
    createEvent('hover', 'center');
  }

  function hideText() {
    cardHovered.update(store => {
      return {
        hovered: false,
        left: false,
        center: false,
        right: false
      }
    });
    createEvent('blur');
  }

  function actionHandler(decision) {
    createEvent('decision', decision);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if leftOrRight === 'left'}
  <div on:mouseenter={showLeftText} on:mouseleave={hideText} on:click={() => actionHandler('left')} class="circle bg-blue"></div>
{:else if leftOrRight === 'right'}
  <div on:mouseenter={showRightText} on:mouseleave={hideText} on:click={() => actionHandler('right')} class="circle bg-purple"></div>
{:else if leftOrRight === 'center'}
  <div on:mouseenter={showCenterText} on:mouseleave={hideText} on:click={() => actionHandler('center')} class="circle bg-blue-purple"></div>
{/if}

<style lang="scss">
  .circle{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: all 0.2s ease-out;

    &:hover {
      cursor: var(--pointer);
      transform: translateY(1px);
    }

    &:active {
      transform: translateY(5px);
    }
  }

  .bg-purple {
    background-color: #413747;
    box-shadow: 0 6px 0 #2a242e;

    &:hover {
      box-shadow: 0 5px 0 #2a242e;
    }

    &:active {
      box-shadow: none;
      border: 1px solid #2a242e;
    }
  }

  .bg-blue {
    background-color: #456b73;
    box-shadow: 0 6px 0 #2f494e;
      
    &:hover {
        box-shadow: 0 5px 0 #2f494e;
      }

    &:active {
      box-shadow: none;
      border: 1px solid #2f494e;
    }
  }

  .bg-blue-purple {
    border: 1px solid #26242e;
    background: linear-gradient(310deg, #456b73, #413747 65%);
    box-shadow: 0 6px 0 #1d1b24;
    
    &:hover {
      box-shadow: 0 6px 0 #26242e;
      }

    &:active {
      box-shadow: none;
      border: 1px solid #2f494e;
    }
  }
</style>