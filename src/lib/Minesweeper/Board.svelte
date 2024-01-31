<script>
	import { boardSizeStore } from "../../stores";
	import Tile from "./Tile.svelte";
    
    /** @type {number[]} rows */
    const rows = Array.from(
        {length: $boardSizeStore},
        (_, i) => i
    );
    
    /** @type {number[]} columns */
    const columns = Array.from(
        {length: $boardSizeStore},
        (_, i) => i
    );

    console.log(rows, columns);

</script>


<div
    class="board"
    style="--board-size: {'auto' + (" auto".repeat($boardSizeStore-1))}"
>
{#each rows as row}
    {#each columns as column}
        <Tile
            class="tile"
            id={`${row.toString()}-${column.toString()}`}
        />
    {/each}
{/each}
</div>


<style>

    .board {
        width: 500px;
        height: 500px;
        border: 10px solid #555;
        border-radius: 10px;
        
        margin: 0 auto;
        flex-wrap: wrap;
        
        display: grid;
        row-gap: 0;
        grid-template-rows: var(--board-size);
        grid-template-columns: var(--board-size);

    }

    .board :global(.tile):nth-child(2n-1) {
        background-color: #666;
    }
    .board :global(.tile):nth-child(2n) {
        background-color: #999;
    }
</style>


