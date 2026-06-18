<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPromptById } from "$lib/services/promptService";

  const { params }: PageProps = $props();
  const prompt = $derived(getPromptById(params.id));
</script>

<h1>{prompt?.title}</h1>
