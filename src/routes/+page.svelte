<script lang="ts">
  import PromptCard from "$lib/components/PromptCard.svelte";
  import { getAllPrompts } from "$lib/services/promptService";
  import SearchBar from "$lib/components/SearchBar.svelte";

  const allPrompts = getAllPrompts();
  let searchInput = $state("");
  let formattedSearchInput = $derived(searchInput.toLowerCase());

  let selectedPrompts = $derived(
    allPrompts.filter(
      (prompt) =>
        prompt.description.toLowerCase().includes(formattedSearchInput) ||
        prompt.title.toLowerCase().includes(formattedSearchInput),
    ),
  );
</script>

<SearchBar bind:input={searchInput} />

{#if selectedPrompts.length > 0}
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch"
  >
    {#each selectedPrompts as prompt}
      <PromptCard {...prompt} />
    {/each}
  </div>
{:else}
  <div class="flex justify-center items-center">
    <p class="text-warning text-2xl font-extrabold block m-auto">
      No prompts found
    </p>
  </div>
{/if}
