<template>
  <div class="bg-blue-900 text-white text-center text-sm">
    <div class="container mx-auto py-16">
      <div class="mb-4">
        <p>
          Copyright {{ new Date().getFullYear() }} by {{ $static.metadata.siteName}} &middot; Powered by
          <a
            href="https://www.gridsome.org"
            target="_blank"
          >Gridsome</a>
        </p>
      </div>
      <div class="mb-4">
        <ul class="list-reset flex justify-center">
          <li v-for="socialItem in $static.metadata.social" :key="socialItem.name" class="px-4">
            <a :href="socialItem.link" target="_blank" :title="socialItem.name">
              <font-awesome :icon="icon(socialItem.icon)" size="lg"></font-awesome>
            </a>
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <ul class="list-reset flex justify-center">
          <li v-for="navItem in $static.metadata.footerNavigation" :key="navItem.name" class="px-4">
            <g-link
              :to="navItem.link"
              :title="navItem.name"
              v-if="navItem.external!=true"
            >{{ navItem.name}}</g-link>
            <a
              :href="navItem.link"
              target="_blank"
              :title="navItem.name"
              v-if="navItem.external==true"
            >{{ navItem.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    icon(icon) {
      return ['fab', icon]
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName

    social {
      name
      icon
      link
    }
  
    footerNavigation {
        name
        link
        external
    }
  }
}
</static-query>