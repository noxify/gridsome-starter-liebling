<template>
  <Transition name="fade">
    <div
      v-if="showModal"
      class="fixed inset-0 w-full h-full overflow-y-auto flex items-center justify-center bg-white z-1000"
      @click.self="close"
    >
      <div class="relative w-full h-full bg-white p-8">
        <button
          aria-label="close"
          class="absolute mr-8 right-0 text-xl border rounded-full border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white h-8 w-8 md:h-12 md:w-12 focus:outline-none"
          @click.prevent="close"
        >
          <font-awesome :icon="['fas', 'times']"></font-awesome>
        </button>
        <div class="mt-12 md:mt-16 overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showModal: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>