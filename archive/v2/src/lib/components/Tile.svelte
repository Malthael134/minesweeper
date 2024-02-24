<script lang="ts">
    import { 
        Bomb,
        Burst,
        Flag,
        Number,
    } from "$lib/components/index"

    export let adjacentMines: number = 0;

    export let clicked: boolean;
</script>

<div>
{#if clicked}
    <Number number={adjacentMines} />
{/if}
</div>
