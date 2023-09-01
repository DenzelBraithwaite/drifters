<script lang="ts">
    import { Link } from 'svelte-routing';

    export let customClasses = '';
    export let bgColor = '';

    // For game
    export let round = false;

    // For forms
    export let btnSubmit = false;

    // For links (anchors)
    export let btnLink = false;
    export let path = '';
</script>

{#if btnSubmit}
    <button on:click type="submit" class="{customClasses} {bgColor}"><slot /></button>
{:else if btnLink}
    <Link to="{path}">
        <button on:click class="{customClasses} {bgColor}"><slot /></button>
    </Link>
{:else if round}
    <button on:click class="round {customClasses}"><slot /></button>
{:else}
    <button on:click class="{customClasses} {bgColor}"><slot /></button>
{/if}

<style lang="scss">
    button {
        padding: 0.75rem;
        border: none;
        font-size: 0.75rem;
        text-align: center;
        border-radius: 0.25rem;
        margin: 0.5rem 0;
        transition: background-color 0.3s ease-out;
    }

    /* background colors */                
    .bg-black {
        background-color: #060606;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 0.25rem 0.5rem #00000073;
        transition: box-shadow 0.3s ease-out;

        &:hover {
            // box-shadow: 0 0 10rem #3a109c;
            box-shadow: 0 -5rem 20rem 4rem #3a109c;
        }

        &:active {
            background-color: #0d0d0d;
        }
    } 
</style>