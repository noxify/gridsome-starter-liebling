<template>
  <Layout>
    <content-header :image="$page.author.cover" :staticImage="false">
      <div class="text-center text-white bg-gray-800 bg-opacity-50 lg:py-32 md:py-24 sm:py-16 py-8">
        <div class="w-full">
          <g-image
            :src="$page.author.image"
            width="100"
            height="100"
            class="md:h-32 md:w-32 h-24 w-24 rounded-full bg-white border-4 border-white mx-auto"
          ></g-image>
        </div>
        <div class="w-full text-center pb-5">
          <h2 class="sm:text-5xl text-3xl font-extrabold">{{ $page.author.name }}</h2>
          <p class="sm:text-xl font-sans">{{ $page.author.bio }}</p>
        </div>
        <div class="w-full text-center">
          {{ $page.author.belongsTo.totalCount }} {{ postLabel }}
          &nbsp;&bull;&nbsp;
          <a
            :href="$page.author.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white"
          >
            <font-awesome :icon="['fab', 'facebook']" />
          </a>
          &nbsp;
          <a
            :href="$page.author.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white"
          >
            <font-awesome :icon="['fab', 'twitter']" />
          </a>
          &nbsp;
          <a
            :href="$page.author.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white"
          >
            <font-awesome :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
    </content-header>

    <div class="container mx-auto">
      <div class="flex flex-wrap my-4">
        <CardItem
          v-for="edge in $page.author.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.author.path"
          :currentPage="$page.author.belongsTo.pageInfo.currentPage"
          :totalPages="$page.author.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.author.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    author(id: $id) {
      name
      path
      bio
      image(width:150, height:150)
      cover
      facebook
      twitter
      linkedin
      belongsTo(perPage: 6, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
              id
              title
              image(width: 800)
              path
              timeToRead
              featured
              humanTime: created(format: "DD MMM YYYY")
              datetime: created
              category {
                id
                title
                path
              }
              author {
                id
                name
                image(width: 64, height: 64, fit: inside)
                path
              }
            }
          }
        }
      }
    }  
  }
</page-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import Pagination from "~/components/Content/Pagination.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
  components: {
    Pagination,
    CardItem,
    ContentHeader
  },
  computed: {
    postLabel: function() {
      var pluralize = require("pluralize");
      return pluralize("post", this.$page.author.belongsTo.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$page.author.name
    };
  }
};
</script>
