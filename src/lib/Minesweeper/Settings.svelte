<script>
	import { boardSizeStore, flagActiveStore } from "../../stores";

    const difficulties = [
        {name: "Easy", value: 9},
        {name: "Normal", value: 13},
        {name: "Hard", value: 17},
    ]
</script>

<div class="settings-bar">
   <span>
       
       <label for="boardSize">Difficulty:&nbsp;</label>
       <select
           name="boardSize"
           id="boardSize"
           bind:value={$boardSizeStore}
       >
       {#each difficulties as difficutly}
           <option value={difficutly.value}>
               {difficutly.name}
           </option>
       {/each}
       </select>
   </span>
    <span>
        <button
            style="background-color: {$flagActiveStore ? '#6ae090' : '#e9e9ed'};"
            id="flagButton"
            on:click={() => $flagActiveStore = !$flagActiveStore}
        >Toggle 🚩</button>
    </span>
</div>

<style>
    .settings-bar {
        height: 7.5svh;
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        font-family: 'Courier New', Courier, monospace;
    }
    .settings-bar select {
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }
    .settings-bar button {
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }
</style>
