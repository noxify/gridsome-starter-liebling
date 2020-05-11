<template>
  <Layout>
      <content-header 
        :title="$static.metadata.siteName" 
        :sub="$static.metadata.siteDescription"
        image="phoenix-han-Nqdh0G8rdCc-unsplash.jpg">
      </content-header>

      <div class="container mx-auto">
        <!--div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 my-8 mx-4"-->
          <div class="flex flex-wrap my-4">

          <FeaturedCard v-if="$page.featured.totalCount>0" :records="$page.featured.edges"/>

        
          <CardItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
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
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import FeaturedCard from "~/components/Content/FeaturedCard.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";


export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    CardItem,
    FeaturedCard,
    ContentHeader
  }
};
</script>
