<script lang="ts">
  import type { Prompt } from "$lib/types/prompt";
  import { copy } from "$lib/services/clipboard";
  import Toast from "$lib/components/Toast.svelte";
  import type { Props } from "$lib/components/Toast.svelte";

  const { title, description, prompt, id }: Prompt = $props();
  let toast = $state<Props | null>(null);

  async function copyPrompt() {
    const result = await copy(prompt);
    toast = {
      type: result.result,
      message: result.message,
    };

    setTimeout(() => (toast = null), 2000);
  }
</script>

<section
  class="card bg-neutral text-neutral-content border border-base-300 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
>
  <article class="card-body p-6 gap-y-3 flex-1 flex flex-col">
    <h2 class="card-title text-xl font-bold tracking-tight text-white">
      {title}
    </h2>

    <p class="text-sm leading-relaxed text-neutral-content line-clamp-4 flex-1">
      {description}
    </p>

    <div class="card-actions justify-end mt-auto pt-2">
      <button
        class="btn btn-primary btn-sm min-h-0 h-9 px-4 rounded-lg normal-case font-medium"
        onclick={copyPrompt}
      >
        Copy
      </button>
      <a
        href="/prompt/{id}"
        class="btn btn-accent btn-sm min-h-0 h-9 px-4 rounded-lg normal-case font-medium"
      >
        View
      </a>
    </div>
  </article>
</section>

{#if toast}
  <Toast {...toast} />
{/if}
