<script>
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from "@rgossiaux/svelte-headlessui";
  let isOpen = true;
</script>

<Dialog open={isOpen} on:close={() => (isOpen = false)}>
  <DialogOverlay />

  <DialogTitle>Deactivate account</DialogTitle>
  <DialogDescription>
    This will permanently deactivate your account
  </DialogDescription>

  <p>
    Are you sure you want to deactivate your account? All of your data will be
    permanently removed. This action cannot be undone.
  </p>

  <button on:click={() => (isOpen = false)}>Deactivate</button>
  <button on:click={() => (isOpen = false)}>Cancel</button>
</Dialog>
