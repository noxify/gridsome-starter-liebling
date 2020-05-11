<template>
  <div class="w-full lg:w-2/3 px-4 my-4 items-stretch">
    <div
      class="featured-post-card bg-gray-200 rounded-lg hover:shadow-xl z-100 h-half-screen lg:h-full"
    >
      <VueSlickCarousel :arrows="true" :dots="false" class="h-full rounded-lg">
        <div class="h-full relative" v-for="edge in records" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <div class="h-full relative" :id="edge.node.id">
              <g-image
                :src="edge.node.image"
                :alt="edge.node.title"
                class="rounded-lg object-cover absolute -z-10 h-full w-full"
              ></g-image>

              <div class="featured-label absolute top-0 right-0 pr-10 pt-10 z-10">
                <span
                  class="p-1 relative block text-center text-xs leading-tight bg-white border border-gray-300 text-black rounded-full"
                >
                  <font-awesome :icon="['fas', 'star']"></font-awesome>Featured
                </span>
              </div>

              <div
                class="post-card-author pt-4 mt-6 pl-10"
                v-tooltip="{classes:'card-author-tooltip', content:authors(edge.node), placement:'right'}"
              >
                <g-link
                  :to="edge.node.author[0].path"
                  @mouseover="showTooltip = true"
                  @mouseleave="showTooltip = false"
                  @mouseover.native="showTooltip = true"
                  @mouseleave.native="showTooltip = false"
                >
                  <g-image
                    :src="edge.node.author[0].image"
                    :alt="edge.node.author[0].name"
                    class="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
                  />
                </g-link>
              </div>

              <div class="post-card-content">
                <p class="tracking-wide font-semibold mt-3">
                  <g-link :to="edge.node.category.path">{{ edge.node.category.title }}</g-link>
                </p>

                <h3 class="tracking-wider mt-3 mb-3 text-4xl max-w-xl">{{ edge.node.title }}</h3>
              </div>

              <div class="post-card-footer">
                <p>
                  <time :datetime="edge.node.datetime">{{ edge.node.humanTime }}</time>
                  &nbsp;&bull;&nbsp;
                  {{ edge.node.timeToRead }} min read
                </p>
              </div>
            </div>
          </g-link>
        </div>
        <template #prevArrow>
          <div class="w-16 h-16 mr-10 z-40">
            <font-awesome :icon="['fas', 'arrow-left']" size="lg"></font-awesome>
          </div>
        </template>
        <template #nextArrow>
          <div class="w-16 h-16 z-50">
            <font-awesome :icon="['fas', 'arrow-right']" size="lg"></font-awesome>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  props: {
    records: {}
  },
  components: {
    VueSlickCarousel
  },
  methods: {
    authors(record) {
      let tooltipText = [];
      for (let index = 0; index < record.author.length; index++) {
        if (index == 0) {
          tooltipText.push(`Posted by ${record.author[index].name}`);
        } else {
          if (index == 1) {
            tooltipText.push(`<br> Among with ${record.author[index].name}`);
          } else {
            tooltipText.push(`, ${record.author[index].name}`);
          }
        }
      }

      return tooltipText.join("");
    }
  }
};
</script>

<style>
</style>