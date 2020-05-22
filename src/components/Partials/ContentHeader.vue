<template>
  <div>
    <div class="text-center bg-gray-200 py-20" v-if="!hasImage">
      <h2 v-if="title!=null" class="text-5xl font-extrabold">{{ title }}</h2>
      <p v-if="sub!=null" class="text-gray-600 text-light font-sans">{{ sub }}</p>
    </div>

    <div v-if="hasImage" class="relative mt-0 h-auto">
      <g-image
        v-if="hasImage && staticImage"
        :src="require(`!!assets-loader!@pageImage/${image}`)"
        width="1400"
        height="400"
        class="object-cover absolute -z-10 h-full w-full"
      ></g-image>

      <g-image
        v-if="hasImage && !staticImage"
        :src="image"
        width="1400"
        height="400"
        class="object-cover absolute -z-10 h-full w-full"
      ></g-image>

      <slot>
        <div
          class="text-center text-white bg-gray-800 lg:py-48 md:py-32 sm:py-24 py-16"
          :class='`bg-opacity-${darken}`'
        >
          <h2 v-if="title!=null" class="sm:text-5xl text-3xl font-extrabold">{{ title }}</h2>
          <p v-if="sub!=null" class="sm:text-xl font-sans">{{ sub }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    sub: {
      type: String,
      default: null
    },
    image: {
      type: String | Object,
      default: null
    },
    staticImage: {
      type: Boolean,
      default: true
    },
    darken: {
      type: Number,
      default: 50
    }
  },
  computed: {
    hasImage() {
      return this.image ? true : false;
    }
  }
};
</script>

<style>
</style>