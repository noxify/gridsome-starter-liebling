<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap md:my-4 md:mx-4">
      <div class="w-full mb-2">
        <h2 class="text-xl mt-0 mb-2">Recent articles</h2>

        <div class="w-full">
          <VueSlickCarousel :arrows="true" :dots="false" class="-mx-4" v-bind="sliderSettings">
            <div v-for="edge in $static.recent.edges" :key="edge.node.id" class="px-4">
              <g-link :to="edge.node.path">
                <div :id="edge.node.id" class>
                  <g-image
                    :src="edge.node.image"
                    :alt="edge.node.title"
                    class="rounded-lg h-32 object-cover w-full"
                  ></g-image>

                  <div class="post-card-content">
                    <h3
                      class="tracking-wider mt-3 mb-3 text-lg font-light max-w-xl"
                    >{{ edge.node.title }}</h3>
                  </div>

                  <div class="post-card-footer">
                    <p class="text-xs">
                      <time :datetime="edge.node.datetime">{{ edge.node.humanTime }}</time>
                      &nbsp;&bull;&nbsp;
                      {{ edge.node.timeToRead }} min read
                    </p>
                  </div>
                </div>
              </g-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="w-full mb-8">
        <h2 class="text-xl mt-2 mb-2">Tags</h2>

        <ul class="flex flex-wrap">
          <li class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-4 mb-4 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full" v-for="tag in $static.tags.edges" :key="tag.node.id">
            <g-link :to="tag.node.path">{{ tag.node.title }}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      sliderSettings: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false,
              infinite: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              infinite: true
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>

<static-query>

query {
  tags: allTag {
    edges {
      node {
        title
        path
      }
    }
  },
  recent : allBlog(limit: 4, sort: { by: "created", order: DESC }) {
    edges {
      node {
        id
        title
        path
        image(width:230, height:130)
        humanTime: created(format: "DD MMM YYYY")
        datetime: created
        timeToRead
      }
    }
  }
}


</static-query>