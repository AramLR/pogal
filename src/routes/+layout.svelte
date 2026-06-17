<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<aside></aside>

<main>
  {@render children()}
</main>
