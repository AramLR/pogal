<script lang="ts">
  import type { Prompt } from "$lib/types/prompt";

  const { title, description, id }: Prompt = $props();
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
      <a
        href="/prompt/{id}"
        class="btn btn-accent btn-sm min-h-0 h-9 px-4 rounded-lg normal-case font-medium"
      >
        View
      </a>
    </div>
  </article>
</section>
