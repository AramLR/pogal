<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPromptById } from "$lib/services/promptService";
  import { writeText } from "@tauri-apps/plugin-clipboard-manager";
  import Toast from "$lib/components/Toast.svelte";
  import type { Props } from "$lib/components/Toast.svelte";
  import type { Prompt } from "$lib/types/prompt";

  const { params }: PageProps = $props();
  let prompt = $state<Prompt | undefined>();
  let toast = $state<Props | null>(null);

  $effect(() => {
    getPromptById(params.id).then((result) => {
      prompt = result;
    });
  });

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
  <section class="mx-auto h-full w-full max-w-4xl p-4 sm:p-6 lg:p-8">
    <article class="flex flex-col gap-6">
      <h1
        class="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content leading-tight"
      >
        {prompt.title}
      </h1>

      <p
        class="text-base sm:text-lg text-base-content/80 leading-relaxed text-left"
      >
        {prompt.description}
      </p>

      <button
        class="btn btn-primary w-full sm:w-auto self-start shadow-md gap-2"
        onclick={copyPrompt}
      >
        Copy to clipboard!
      </button>

      <div class="w-full min-w-0">
        <div
          class="mockup-code bg-neutral text-neutral-content shadow-xl border border-neutral-focus w-full"
        >
          <div
            class="max-h-137.5 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-focus custom-scroll"
          >
            <pre
              class="whitespace-pre-wrap wrap-break-word bg-transparent my-0 p-0"><code
                class="block px-4 py-2 sm:px-8 font-mono text-sm leading-relaxed tracking-normal select-all"
                >{prompt.prompt}</code
              ></pre>
          </div>
        </div>
      </div>
    </article>
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
