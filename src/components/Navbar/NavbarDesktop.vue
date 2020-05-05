<template>
  <div>
    <nav
      class="hidden md:block lg:block xl:block flex items-center justify-between flex-wrap container mx-auto py-4 z-20"
    >
      <div class="block flex-grow flex items-center w-auto">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteName }}</span>
        </div>
        <div class="flex-grow">
          <ul class="list-none flex justify-left">
            <li v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name">
              <g-link
                class="block px-4 py-1"
                :to="navItem.link"
                :title="navItem.name"
                v-if="navItem.external!=true && navItem.children.length <=0"
              >{{ navItem.name}}</g-link>
              <a
                class="block px-4 py-1"
                :href="navItem.link"
                target="_blank"
                :title="navItem.name"
                v-if="navItem.external==true && navItem.children.length <=0"
              >{{ navItem.name}}</a>

              <v-popover offset="16" v-if="navItem.children.length > 0">
                <a class="block px-4 py-1">
                  {{ navItem.name }}
                  <font-awesome :icon="['fas', 'angle-down']"></font-awesome>
                </a>

                <template slot="popover">
                  <ul>
                    <li v-for="subItem in navItem.children" :key="subItem.name">
                      <g-link
                        class="block px-4 py-1"
                        :to="subItem.link"
                        :title="subItem.name"
                        v-if="subItem.external!=true"
                      >{{ subItem.name}}</g-link>
                      <a
                        class="block px-4 py-1"
                        :href="subItem.link"
                        target="_blank"
                        :title="subItem.name"
                        v-if="subItem.external==true"
                      >{{ subItem.name}}</a>
                    </li>
                  </ul>
                </template>
              </v-popover>
            </li>
            <li>
              <a
                role="button"
                @click.prevent="toggleSubNavigation()"
                class="block px-4 py-1"
                aria-label="Open Subnavigation"
                title="Open Subnavigation"
                v-bind:class="{
                  'text-blue-600' : showSubNavigation,
                  '' : !showSubNavigation
                }"
              >
                <font-awesome :icon="['fas', 'ellipsis-h']" size="lg"></font-awesome>
              </a>

              <div
                v-click-outside="onClickOutside"
                class="p-6 mega-menu mb-16 border-t border-gray-200 shadow-xl bg-white transition-opacity"
                v-bind:class="{
                  'opacity-100' : showSubNavigation,
                  'opacity-0' : !showSubNavigation
                }"
              >
                <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                  <div class="w-full mb-8">
                    <h2 class="font-bold text-2xl">Main Hero Message for the menu section</h2>
                    <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                  </div>
                  <ul
                    class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                  >
                    <div class="flex items-center">
                      <svg
                        class="h-8 mb-3 mr-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"
                        />
                      </svg>
                      <h3 class="font-bold text-xl text-bold mb-2">Heading 1</h3>
                    </div>
                    <p
                      class="text-sm"
                    >Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                    <div class="flex items-center py-3">
                      <svg
                        class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                        />
                      </svg>
                      <a
                        href="#"
                        class="bold border-b-2 border-blue-300 hover:text-blue-300"
                      >Find out more...</a>
                    </div>
                  </ul>
                  <ul
                    class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                  >
                    <div class="flex items-center">
                      <svg
                        class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"
                        />
                      </svg>
                      <h3 class="font-bold text-xl text-bold mb-2">Heading 2</h3>
                    </div>
                    <p
                      class="text-sm"
                    >Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                    <div class="flex items-center py-3">
                      <svg
                        class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                        />
                      </svg>
                      <a
                        href="#"
                        class="bold border-b-2 border-blue-300 hover:text-blue-300"
                      >Find out more...</a>
                    </div>
                  </ul>
                  <ul
                    class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3"
                  >
                    <div class="flex items-center">
                      <svg
                        class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                        />
                      </svg>
                      <h3 class="font-bold text-xl text-bold mb-2">Heading 3</h3>
                    </div>
                    <p
                      class="text-sm"
                    >This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                    <div class="flex items-center py-3">
                      <svg
                        class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                        />
                      </svg>
                      <a
                        href="#"
                        class="bold border-b-2 border-blue-300 hover:text-blue-300"
                      >Find out more...</a>
                    </div>
                  </ul>
                  <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <div class="flex items-center">
                      <svg
                        class="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                        />
                      </svg>
                      <h3 class="font-bold text-xl text-bold mb-2">Heading 4</h3>
                    </div>
                    <p
                      class="text-sm"
                    >This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                    <div class="flex items-center py-3">
                      <svg
                        class="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                        />
                      </svg>
                      <a
                        href="#"
                        class="bold border-b-2 border-blue-300 hover:text-blue-300"
                      >Find out more...</a>
                    </div>
                  </ul>
                </div>
              </div>
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
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue";
import VPopover from 'v-tooltip'

export default {
  data: function() {
    return {
      showSubNavigation: false,
      vcoConfig: {
        events: ["dblclick", "click"],
        isActive: true
      }
    };
  },
  props: {
    theme: {
      type: String
    }
  },
  methods: {
    toggleSubNavigation() {
      this.showSubNavigation = !this.showSubNavigation;
    },
    onClickOutside(event) {
      if (!event.defaultPrevented && this.showSubNavigation == true) {
        this.toggleSubNavigation();
      }
    }
  },
  components: {
    ThemeSwitcher,
    SearchButton,
    Subnavigation,
    VPopover
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
      children {
        name
        link
        external
      }
    }
  }
}
</static-query>