<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPromptById } from "$lib/services/promptService";
  import { writeText } from "@tauri-apps/plugin-clipboard-manager";
  import Toast from "$lib/components/Toast.svelte";
  import type { Props } from "$lib/components/Toast.svelte";

  const { params }: PageProps = $props();
  const prompt = $derived(getPromptById(params.id));
  let toast = $state<Props | null>(null);

  async function copyPrompt() {
    try {
      await writeText(prompt!.prompt);
      toast = {
        type: "success",
        message: "Prompt copied to clipboard successfully",
      };
    } catch (error) {
      toast = {
        type: "error",
        message:
          "There was a problem trying to copy the prompt to your clipboard",
      };
    }

    setTimeout(() => (toast = null), 2000);
  }
</script>

{#if prompt}
  <section class="bg-base-200 h-full rounded-2xl p-6">
    <article class="flex flex-col gap-7">
      <h1 class="text-5xl font-bold">{prompt.title}</h1>
      <p class="text-xl text-justify">{prompt.description}</p>
      <ul class="list bg-base-100 shadow-md rounded-box">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Use cases</li>

        {#each prompt.useCases as useCase}
          <li class="list-row">{useCase}</li>
        {/each}
      </ul>
      <div class="mockup-code w-full">
        <pre class="whitespace-pre-wrap break-words"><code class="block px-10"
            >{prompt.prompt}</code
          ></pre>
      </div>

      <button class="btn btn-primary w-50 m-auto" onclick={copyPrompt}
        >Copy to clipboard!</button
      >
    </article>
  </section>
{/if}

{#if toast}
  <Toast {...toast} />
{/if}
