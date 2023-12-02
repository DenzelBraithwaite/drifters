<script lang="ts">

</script>

<button on:click class="btn"><slot /></button>

<style lang="scss">
  button {
    padding: 0.25rem 0.5rem;
    letter-spacing: 0.05rem;
    font-size: 0.7rem;
    border: none;
    text-align: center;
    border-radius: 1rem;
    color: #fff;
    background-color: #456b73;
    box-shadow: 0 2px 0 #2f494e;
    transition: all 0.2s ease-out;

    &:hover {
      cursor: var(--pointer);
      transform: translateY(1px);
      box-shadow: 0 1px 0 #2f494e;
    }

    &:active {
      box-shadow: none;
      border: 1px solid #2f494e;
      transform: translateY(2px);
    }
  }
</style>