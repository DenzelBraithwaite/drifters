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
        right: false
      }
    });
  }

  function showRightText() {
    cardHovered.update(store => {
      return {
        hovered: true,
        left: false,
        right: true
      }
    });
  }

  function hideText() {
    cardHovered.update(store => {
      return {
        hovered: false,
        left: false,
        right: false
      }
    });
  }

    function actionHandler(decision) {
      createEvent('decision', decision);
    }
</script>

{#if leftOrRight === 'left'}
    <div on:mouseenter={showLeftText} on:mouseleave={hideText} on:click={() => actionHandler('left')} class="circle bg-blue"></div>
{:else if leftOrRight === 'right'}
    <div on:mouseenter={showRightText} on:mouseleave={hideText} on:click={() => actionHandler('right')} class="circle bg-purple"></div>
{/if}

<style>
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
</style>