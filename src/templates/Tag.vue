<template>
  <Layout>
    <content-header :title="$page.tag.title" :sub="subTitle"></content-header>

    <div class="container mx-auto">
      <div class="flex flex-wrap my-4">
        <CardItem
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.tag.path"
          :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
          :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    tag(id: $id) {
      title
      path
      belongsTo(perPage: 5, page: $page) @paginate {
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
      return pluralize("post", this.$page.tag.belongsTo.totalCount);
    },
    subTitle: function() {
      return `A collection of ${this.$page.tag.belongsTo.totalCount} ${this.postLabel}`;
    }
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    };
  }
};
</script>
