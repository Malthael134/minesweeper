<script>
import {
        boardSizeStore,
        mineCountStore,
        boardPixelStore,
        flagActiveStore,
        tilesClickedStore,
        gameOverStore,
} from '../../stores';

import {
    Progress
} from '$lib/components';

import { fontSizeStore } from "../../configStores";

    let percentageCleared = 0;

    tilesClickedStore.subscribe(value => {
        percentageCleared = (value / ($boardSizeStore * $boardSizeStore - $mineCountStore)) * 100;
        console.log(percentageCleared);
    });

    $: progressBar = {
        text: `Percentage Cleared ${Math.floor(percentageCleared)}%`,
        max: 100,
        value: percentageCleared,
        width: `${$boardPixelStore}px`,
        height: "20px",
    }

</script>


<div
    class="stats"
    style="
    --font-size: {$fontSizeStore};
">
    <br><br><br>
    <Progress
        {...progressBar}
    />

    <br><br><br>

    <!-- Debug -->
    <div>
        <br>
        Board Size {$boardSizeStore} x {$boardSizeStore}
        <br>
        Mines: {$mineCountStore}
        <br>
        Pixel Size {$boardPixelStore}px<sup>2</sup>
        <br>
        Flag active: {$flagActiveStore}
        <br>
        Tiles clicked {$tilesClickedStore}
        <br>
    </div>

</div>




<style>
.stats {
    text-align: center;
    color: #004e91;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: var(--font-size);
}
</style>
