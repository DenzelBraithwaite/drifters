<script>
  export let title = 'Deck title';
  export let description = 'Deck description';
  export let img = 'Img path';
  export let forAlignment = false;
  export let alignment = 'Neutral';
  export let alignmentPoints = '0';
</script>

<div class="wrapper">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="{img}" alt="Image of deck">
  <div>
    <p class="title">{title}
      {#if forAlignment}
        <span class="alignment__{alignment}">+{alignmentPoints}</span>
      {/if}
    </p>
    <p class="description">{description}</p>
  </div>
</div>

<style lang="scss">
  .wrapper {
    padding: 0.5rem;
    margin: 0.5rem 0 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    &:hover {
      background-color: #ffffff0b;
      box-shadow: 0 0 0.5rem 0.25rem #0c00387e;
    }
  }

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-out;

    &:hover {
      scale: 2.5;
      transform: translateX(1.25rem);
    }
  }

  .title {
    font-weight: bold;
  }

  .description {
    font-size: 0.75rem;
  }

  // The alignments are uppercased cuz I'm piggybacking off the alignment title
  .alignment__Neutral {
    color: #f0e19e;
  }

  .alignment__Good {
    color: #92d5f0;
  }

  .alignment__Evil {
    color: #ee7070;
  }
</style>