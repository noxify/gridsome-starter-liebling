<template>
  <a role="button" @click.prevent="openSearchModal()" aria-label="Open Search" title="Open Search">
    <font-awesome :icon="['fas', 'search']"></font-awesome>
  </a>
</template>

<script>
export default {
  methods: {
    openSearchModal() {
      this.$emit("openSearchModal");
    }
  }
};
</script>

<style>
</style>