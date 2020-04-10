<template>
  <div>
    <nav
      class="hidden md:block lg:block xl:block flex items-center justify-between flex-wrap container mx-auto py-4 transition-opacity"
      v-bind:class="{
        'opacity-100' : showNavigation,
        'opacity-0' : !showNavigation
      }"
    >
      <div class="block flex-grow flex items-center w-auto">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteName }}</span>
        </div>
        <div class="flex-grow">
          <ul class="list-none flex justify-left">
            <li v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name">
              <g-link class="block px-4 py-1" :to="navItem.link" :title="navItem.name" v-if="navItem.external!=true">{{ navItem.name}}</g-link>
              <a class="block px-4 py-1" :href="navItem.link" target="_blank" :title="navItem.name" v-if="navItem.external==true">{{ navItem.name}}</a>
            </li>
            <li>
              <a role="button" @click.prevent="toggleSubNavigation()" class="block px-4 py-1" aria-label="Open Subnavigation" title="Open Subnavigation">
                <font-awesome :icon="['fas', 'ellipsis-h']" size="lg"></font-awesome>
              </a>
            </li>
          </ul>
        </div>

        <div class="inline-block">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-6">
              <search-button v-on="$listeners"></search-button>
            </li>
            <li>
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";
import SearchButton from "~/components/Navbar/SearchButton.vue";

export default {
  props: {
    theme: {
      type: String
    },
    showNavigation: {
      type: Boolean
    }
  },
  methods: {
    toggleSubNavigation: function() {
      this.$emit('toggleSubNavigation')
    }
  },
  components: {
    ThemeSwitcher,
    SearchButton
  }
};
</script>

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