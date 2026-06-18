<script lang="ts">
  import type { Prompt } from "$lib/types/prompt";

  const { title, description, id }: Prompt = $props();
</script>

<section class="card w-75 card-xs shadow-sm bg-neutral text-neutral-content">
  <article class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <a href="/prompts/{id}" class="btn btn-accent">View</a>
    </div>
  </article>
</section>
