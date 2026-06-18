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
  <section class="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 h-full">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <article class="lg:col-span-2 flex flex-col gap-6">
        <div>
          <h1
            class="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content leading-tight"
          >
            {prompt.title}
          </h1>
        </div>

        <p
          class="text-base sm:text-lg text-base-content/80 leading-relaxed text-left"
        >
          {prompt.description}
        </p>

        {#if prompt.useCases && prompt.useCases.length > 0}
          <div
            class="bg-base-100 border border-base-200 shadow-sm rounded-xl overflow-hidden"
          >
            <div
              class="px-4 pt-4 pb-2 text-xs font-bold uppercase tracking-wider text-base-content/50"
            >
              Ideal Use Cases
            </div>
            <ul class="divide-y divide-base-200">
              {#each prompt.useCases as useCase}
                <li
                  class="p-4 text-sm text-base-content/90 flex items-start gap-3"
                >
                  <span class="text-primary mt-0.5">➔</span>
                  <span>{useCase}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/if}

        <button
          class="btn btn-primary btn-block sm:w-auto shadow-md gap-2"
          onclick={copyPrompt}
        >
          Copy to clipboard!
        </button>
      </article>

      <div class="lg:col-span-3 w-full">
        <div
          class="mockup-code bg-neutral text-neutral-content shadow-xl border border-neutral-focus w-full"
        >
          <div
            class="max-h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-focus custom-scroll"
          >
            <pre
              class="whitespace-pre-wrap break-words bg-transparent my-0 p-0"><code
                class="block px-8 py-2 font-mono text-sm leading-relaxed tracking-normal select-all"
                >{prompt.prompt}</code
              ></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

{#if toast}
  <Toast {...toast} />
{/if}

<style>
  /* Optional: Custom clean scrollbar styling for the prompt window */
  .custom-scroll::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>
