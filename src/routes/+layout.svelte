<script>
    import {
        fontSizeStore,
    } from '../configStores';
</script>

<main style="
    --font-size: {$fontSizeStore};
">
    <div>
        <slot />
    </div>
</main>

<style>
    :global(*) {
        font-size: var(--font-size);
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
