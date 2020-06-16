<template>
  <Layout>
    <content-header
      :title="$static.metadata.siteName"
      :sub="$static.metadata.siteDescription"
      image="phoenix-han-Nqdh0G8rdCc-unsplash.jpg"
    ></content-header>

    <div class="container mx-auto">
      <transition-group name="fade" class="flex flex-wrap my-4" tag="div">
        <FeaturedCard
          key="featured_post"
          v-if="$page.featured.totalCount>0"
          :records="$page.featured.edges"
        />
        <CardItem v-for="{ node } of loadedPosts" :key="node.id" :record="node" />
      </transition-group>
      <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
          <div slot="no-more"></div>
          <div slot="no-results"></div>
        </infinite-loading>
      </ClientOnly>
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
    entries: allBlog(perPage: 6, page: $page, sortBy:"created") @paginate {
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
  },

  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    };
  },
  created() {
    this.loadedPosts.push(...this.$page.entries.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.entries.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/infinity/${this.currentPage + 1}`);
        if (data.entries.edges.length) {
          this.currentPage = data.entries.pageInfo.currentPage;
          this.loadedPosts.push(...data.entries.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: ease opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>