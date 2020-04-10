<template>
  <div class="w-4/6 px-0 sm:px-4">
    <VueSlickCarousel>
      <a href="#" v-for="record in records" :key="record.node.id">
        <g-image
          :src="record.node.image"
          class="featured-post-image rounded-lg"
          :alt="record.node.title"
        />
        <div>
          <p class="font-bold text-sm uppercase">{{ record.node.title}}</p>
          <p class="text-3xl font-bold">{{ record.node.category.title }}</p>
        </div>
      </a>

      
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: {
    records: {}
  },
  components: { VueSlickCarousel }
};
</script>

<style>
</style>