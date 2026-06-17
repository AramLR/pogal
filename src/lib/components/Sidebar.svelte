<script lang="ts">
  import type { Route } from "$lib/types/route";

  const routes: Route[] = [
    {
      id: "home",
      displayName: "Home",
      url: "/",
    },
    {
      id: "about",
      displayName: "About",
      url: "/about",
    },
  ];
</script>

<ul class="menu bg-base-200 rounded-box w-56 h-screen">
  <li class="menu-title">Pogal</li>
  {#each routes as { displayName, url }}
    <li><a href={url}>{displayName}</a></li>
  {/each}
</ul>
