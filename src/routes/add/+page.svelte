<script lang="ts">
  import { goto } from "$app/navigation";
  import { addPrompt } from "$lib/services/promptService";

  let title = $state("");
  let description = $state("");
  let prompt = $state("");
  let isSaving = $state(false);
  let errorMessage = $state("");

  async function handleSubmit() {
    errorMessage = "";

    if (!title.trim() || !description.trim() || !prompt.trim()) {
      errorMessage = "Please complete all fields before saving.";
      return;
    }

    isSaving = true;

    try {
      await addPrompt(title.trim(), description.trim(), prompt.trim());
      await goto("/");
    } catch (error) {
      console.error("Unable to save prompt", error);
      errorMessage = "The prompt could not be saved. Please try again.";
      isSaving = false;
    }
  }
</script>

<section class="mx-auto w-full max-w-3xl">
  <div class="mb-8">
    <p class="text-sm font-semibold uppercase tracking-widest text-primary">
      Prompt library
    </p>
    <h1 class="mt-2 text-3xl font-extrabold tracking-tight text-base-content">
      Add a new prompt
    </h1>
    <p class="mt-2 text-base-content/70">
      Save a reusable prompt to your local library.
    </p>
  </div>

  <form
    class="flex flex-col gap-6"
    onsubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
  >
    <label class="form-control w-full">
      <span class="label-text mb-2 font-semibold">Title</span>
      <input
        class="input input-bordered w-full"
        type="text"
        placeholder="e.g. Meeting summary"
        bind:value={title}
        required
      />
    </label>

    <label class="form-control w-full">
      <span class="label-text mb-2 font-semibold">Description</span>
      <textarea
        class="textarea textarea-bordered min-h-28 w-full"
        placeholder="What is this prompt useful for?"
        bind:value={description}
        required
      ></textarea>
    </label>

    <label class="form-control w-full">
      <span class="label-text mb-2 font-semibold">Prompt</span>
      <textarea
        class="textarea textarea-bordered min-h-64 w-full font-mono text-sm leading-relaxed"
        placeholder="Write the prompt here..."
        bind:value={prompt}
        required
      ></textarea>
    </label>

    {#if errorMessage}
      <p class="text-error" role="alert">{errorMessage}</p>
    {/if}

    <div class="flex flex-wrap justify-end gap-3">
      <a class="btn btn-ghost" href="/">Cancel</a>
      <button class="btn btn-primary" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save prompt"}
      </button>
    </div>
  </form>
</section>
