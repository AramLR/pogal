<script lang="ts">
  export interface Props {
    type: "success" | "error" | "info" | "warning";
    message: string;
  }

  let { type = "info", message }: Props = $props();
</script>

<div class="toast toast-end">
  <div
    class={{
      alert: true,
      "alert-success": type == "success",
      "alert-info": type == "info",
      "alert-error": type == "error",
      "alert-warning": type == "warning",
    }}
  >
    <span>{message}</span>
  </div>
</div>
