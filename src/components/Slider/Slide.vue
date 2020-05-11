<template>
  <transition :name="transition">
    <div
      v-show="active"
      class="Slide"
    >
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Slide',
  data() {
    return {
      active: false,
      transition: '',
    };
  },
  methods: {
    // Deactivate and hide the slide and
    // also activate the correct transition.
    hide(direction) {
      this.transition = `Slide--transition-${direction}`;
      this.active = false;
    },
    // Activate and show the slide and
    // also activate the correct transition.
    show(direction) {
      this.transition = `Slide--transition-${direction}`;
      this.active = true;
    },
  },
};
</script>
