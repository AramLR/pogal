<script lang="ts">
  import PromptCard from "$lib/components/PromptCard.svelte";
  import { getAllPrompts } from "$lib/services/promptService";

  const allPrompts = getAllPrompts();
</script>

{#if allPrompts.length > 0}
  <div class="flex flex-wrap items-stretch gap-4">
    {#each allPrompts as prompt}
      <PromptCard {...prompt} />
    {/each}
  </div>
{:else}
  <div class="flex justify-center items-center h-full">
    <p class="text-warning text-2xl font-extrabold block m-auto">
      No prompts found
    </p>
  </div>
{/if}
