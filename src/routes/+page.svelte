<script lang="ts">
  import PromptCard from "$lib/components/PromptCard.svelte";
  import { getAllPrompts } from "$lib/services/promptService";

  const allPrompts = getAllPrompts();
</script>

<div class="flex flex-wrap items-stretch gap-4">
  {#each allPrompts as prompt}
    <PromptCard {...prompt} />
  {/each}
</div>
