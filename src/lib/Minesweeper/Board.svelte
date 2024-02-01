<script>
	import { boardSizeStore } from "../../stores";
    
    /** @type {number[]} rows */
    $: rows = Array.from(
        {length: $boardSizeStore},
        (_, i) => i
    );
    
    /** @type {number[]} columns */
    $: columns = Array.from(
        {length: $boardSizeStore},
        (_, i) => i
    );

    

</script>


<div
    class="board"
    style="--board-size: {'auto' + (" auto".repeat($boardSizeStore-1))}"
>
{#each rows as row}
    {#each columns as column}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="tile"
            id={`${row.toString()}-${column.toString()}`}
            on:click={() => {console.log('Hi')}}
        ></div>
    {/each}
{/each}
</div>


<style>

    .board {
        width: 500px;
        height: 500px;
        border: 10px solid #555;
        border-radius: 10px;
        
        margin: 0;

        display: grid;
        row-gap: 0;
        grid-template-rows: var(--board-size);
        grid-template-columns: var(--board-size);

    }

    .board :nth-child(2n-1) {
        background-color: #666;
    }

    .board :nth-child(2n-1):hover {
        cursor: pointer;
        background-color: #777;
    }
    .board :nth-child(2n) {
        background-color: #aaa;
    }
    .board :nth-child(2n):hover {
        cursor: pointer;
        background-color: #bbb;
    }
</style>
