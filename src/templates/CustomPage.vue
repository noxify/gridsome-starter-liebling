<template>
  <Layout>
    <content-header :title="$page.page.title" :sub="$page.page.subtitle"></content-header>

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">

      <div class="lg:mx-32 md:mx-16 px-4 mb-8">
        <section class="post-content container mx-auto relative dark:text-gray-400">
          <div v-html="$page.page.content"></div>
        </section>
      </div>
    </div>

  
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    page: customPage(id: $id) {
      title
      subtitle
      content
    }
  }
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import mediumZoom from "medium-zoom";

export default {
  components: {
    ContentHeader
  },
  metaInfo() {
    return {
      title: this.$page.page.title
    };
  },
  mounted() {
    mediumZoom(".post-content img");
  }
};
</script>