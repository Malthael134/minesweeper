<script>
	import { boardSizeStore } from "../../stores";

    const difficulties = [
        {name: "Easy", value: 9},
        {name: "Normal", value: 12},
        {name: "Hard", value: 15},
    ]

</script>


<label for="boardSize">Difficulty</label>
<div class="settings-bar">

    <div>
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
    </div>

</div>

<style>
    .settings-bar {
        display: flex;
        flex-direction: row;
    }
</style>


