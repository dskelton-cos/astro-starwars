<script>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@rgossiaux/svelte-headlessui";
</script>

<Disclosure>
  <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">Is team pricing available?</DisclosureButton>

  <DisclosurePanel class="mt-2 pr-12">
    Yes! You can purchase a license that you can share with your entire team.
  </DisclosurePanel>
</Disclosure>
