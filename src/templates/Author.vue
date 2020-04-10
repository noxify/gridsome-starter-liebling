<template>
  <Layout>
    <div class="header relative" id="header">
      <g-image
        :src="$page.author.cover"
        width="2000"
        class="object-cover w-full absolute -z-10 h-full w-full"
      ></g-image>

      <div class="container w-full mx-auto flex flex-wrap py-12 md:py-24 text-white tracking-wider">
        <div class="items-center mx-auto p-0">
          <g-image
            :src="$page.author.image"
            width="100"
            height="100"
            class="md:h-32 md:w-32 h-24 w-24 rounded-full bg-white border-4 border-white self-center"
          ></g-image>
        </div>
        <div class="w-full text-center pb-5">
          <h2
            class="py-4 mb-0 text-2xl md:text-3xl tracking-normal font-bold"
          >{{ $page.author.name}}</h2>
          <span class="text-lg">{{ $page.author.bio }}</span>
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
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 my-8">
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
              title
              excerpt
              image(width:800)
              path
              timeToRead
              humanTime : created(format:"DD MMM YYYY")
              datetime : created
              category {
                id
                title
              }
              author {
                id
                name
                image(width:64, height:64, fit:inside)
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

export default {
  components: {
    Pagination,
    CardItem
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
