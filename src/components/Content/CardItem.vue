<template>
  <div class="post-card rounded-lg hover:shadow-xl" :id="record.id">
    <div class="post-card-author pt-4 pl-4" v-tooltip="{content:this.authors, placement:'right'}">
      <g-link
        :to="record.author[0].path"
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
        @mouseover.native="showTooltip = true"
        @mouseleave.native="showTooltip = false"
      >
        <g-image
          :src="record.author[0].image"
          :alt="record.author[0].name"
          class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
        />
      </g-link>
    </div>

    <g-link :to="record.path" class="post-card-image-link">
      <div v-if="record.featured" class="absolute top-0 right-0 pr-4 pt-4 z-10">
        <span
          class="w-6 h-6 relative block text-center leading-tight bg-white border border-gray-300 text-black rounded-full"
        >
          <font-awesome :icon="['fas', 'star']" size="xs"></font-awesome>
        </span>
      </div>
      <g-image :src="record.image" :alt="record.title" class="post-card-image"></g-image>
    </g-link>
    <div class="post-card-content h-full rounded-b-lg">
      <g-link :to="record.category.path" class="flex-col relative flex justify-between px-6 pt-4">
        <p class="text-xs tracking-wide font-medium mt-3">{{ record.category.title }}</p>
      </g-link>
      <g-link :to="record.path" class="flex-col relative flex justify-between rounded-b-lg px-6 h-40 mt-2">
        <h3 class="post-card-title tracking-wide mt-0">{{ record.title }}</h3>

        <div class="text-xs leading-none absolute bottom-0 pb-6">
            <p>  
              <time :datetime="record.datetime">{{ record.humanTime }}</time>
              &nbsp;&bull;&nbsp;
              {{ record.timeToRead }} min read
            </p>
          </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {}
  },
  computed: {
    authors() {
      let tooltipText = [];
      for (let index = 0; index < this.record.author.length; index++) {
        if (index == 0) {
          tooltipText.push(`Posted by ${this.record.author[index].name}`);
        } else {
          if (index == 1) {
            tooltipText.push(
              `<br> Among with ${this.record.author[index].name}`
            );
          } else {
            tooltipText.push(`, ${this.record.author[index].name}`);
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