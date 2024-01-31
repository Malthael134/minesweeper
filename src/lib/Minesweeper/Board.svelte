<script>
	import { boardSizeStore } from "../../stores";
	import Tile from "./Tile.svelte";

    /** @type {number} */
    $: rowLength = $boardSizeStore;

    /** @type {number} */
    $: columnLength = $boardSizeStore;

</script>


<div class="board">
    {rowLength}
    {columnLength}
    <!-- {#each rows as row}
        {#each columns as column}
            <Tile
                id='hi'
                
            />
            {console.log(row, '-', column)}
        {/each}
    {/each}
     -->
</div>


<style>

    .board {
        width: 450px;
        height: 450px;
        border: 10px solid darkgray ;
        
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        
    }

</style>


