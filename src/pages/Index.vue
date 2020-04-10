<template>
  <Layout>
    <div class="container mx-auto">
      <div class="sm:pxi-0 mx-auto overflow-x-hidden">
        <!--div class="flex flex-wrap with-large pt-16 pb-16 mx-4 sm:-mx-4"-->
        <!--FeaturedCard v-if="$page.featured.totalCount>0" :records="$page.featured.edges"/ -->

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 my-8">
          <CardItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($page: Int) {
    featured: allBlog(limit: 4, filter: { featured: { eq: true } }, sortBy:"created") {
      totalCount
      edges {
        node {
          id
          title
          image(width: 800)
          path
          timeToRead
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
          category {
            id
            title
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
    entries: allBlog(perPage: 24, page: $page, sortBy:"created") @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
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
</page-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import FeaturedCard from "~/components/Content/FeaturedCard.vue";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    CardItem,
    FeaturedCard
  }
};
</script>
