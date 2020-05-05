<template>
 
  <nav
      class="block md:hidden flex items-center justify-between flex-wrap container mx-auto py-4"
    >
      <div class="block flex-grow flex items-center w-auto">
        <div class="flex items-center flex-shrink-0 mr-6">
          <a role="button" @click.prevent="openNavbarModal()" aria-label="Open Navigation" title="Open Navigation">
            <font-awesome :icon="['fas', 'bars']"></font-awesome>
          </a>
        </div>
        <div class="flex-grow text-center font-bold text-lg">
          <span class="font-semibold text-xl tracking-tight">
            {{ $static.metadata.siteName }}
          </span>
        </div>
        
        <div class="inline-block">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-6">
              <search-button v-on="$listeners"></search-button>
            </li>
            <li>
              <theme-switcher v-on="$listeners" :theme="theme"/>
            </li>
            
          </ul>
        </div>

      </div>
    </nav>
</template>

<script>
import ThemeSwitcher from '~/components/Navbar/ThemeSwitcher.vue'
import SearchButton from '~/components/Navbar/SearchButton.vue'

export default {
  props: {
    theme: {
      type: String,
    },
    showNavigation: {
      type: Boolean
    }
  },
  components: {
    ThemeSwitcher,
    SearchButton
  },
  methods: {
    openNavbarModal() {
      this.$emit("openNavbarModal");
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>