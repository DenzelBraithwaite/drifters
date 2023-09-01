<script>
    export let title = 'Deck title';
    export let img = 'Img path';
</script>

<div class="wrapper">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="{img}" alt="Image of deck">
    <p>{title}</p>
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
</style>