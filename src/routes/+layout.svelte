<script lang="ts">
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";

  let { children } = $props();
</script>

<aside>
  <Sidebar />
</aside>

<main>
  {@render children()}
</main>

<style>
  :global(#root) {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1fr;
  }
</style>
