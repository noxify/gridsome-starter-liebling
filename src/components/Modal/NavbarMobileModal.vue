<template>
  <div>
    <div class="menu-links">
      <ul>
        <li v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name">
          <g-link class="block px-4 py-1" :to="navItem.link" :title="navItem.name" v-if="navItem.external!=true">{{ navItem.name}}</g-link>
          <a class="block px-4 py-1" :href="navItem.link" target="_blank" :title="navItem.name" v-if="navItem.external==true">{{ navItem.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<static-query>
query {
  metadata {
    siteName
    headerNavigation {
      name
      link
      external
    }
  }
}
</static-query>
<script>


export default {
  components: {
  }
};
</script>

<style>
</style>