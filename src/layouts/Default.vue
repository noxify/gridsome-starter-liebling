<template>
  <div id="app" dark>
    <navbar></navbar>

    <slot />

    <v-footer></v-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar/Navbar.vue";
import VFooter from "~/components/Partials/Footer.vue";
export default {
  components: {
    Navbar,
    VFooter
  }
};
</script>