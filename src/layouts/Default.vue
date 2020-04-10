<template>
  <div id="app" dark>
    <navbar></navbar>
    
    <slot />
    
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
export default {
  components: {
    Navbar
  }
};
</script>