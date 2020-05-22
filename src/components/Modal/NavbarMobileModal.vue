<template>
  <div>
    <div class="w-full mb-2 overflow-y-auto">
      <h2 class="font-thin text-xl">Navigation</h2>
      <div class="menu-links">
        <ul>
          <li
            v-for="navItem in $static.metadata.headerNavigation"
            :key="navItem.name"
            class="px-4 py-1"
          >
            <g-link
              class="block py-1"
              :to="navItem.link"
              :title="navItem.name"
              v-if="navItem.external!=true && navItem.children.length <=0"
            >{{ navItem.name}}</g-link>
            <a
              class="block"
              :href="navItem.link"
              target="_blank"
              :title="navItem.name"
              v-if="navItem.external==true && navItem.children.length <=0"
            >{{ navItem.name}}</a>
            <ClientOnly>
              <v-popover
                placement="right"
                popoverClass="mobile-navbar-popover"
                offset="16"
                v-if="navItem.children.length > 0"
              >
                <a class="block py-1" style="cursor:pointer;">
                  {{ navItem.name }}
                  <font-awesome :icon="['fas', 'angle-right']"></font-awesome>
                </a>

                <template slot="popover">
                  <ul>
                    <li
                      v-for="subItem in navItem.children"
                      :key="subItem.name"
                      class="px-4 py-2 submenu-item hover:text-white"
                    >
                      <g-link
                        class="block"
                        :to="subItem.link"
                        :title="subItem.name"
                        v-if="subItem.external!=true"
                      >{{ subItem.name}}</g-link>
                      <a
                        class="block"
                        :href="subItem.link"
                        target="_blank"
                        :title="subItem.name"
                        v-if="subItem.external==true"
                      >{{ subItem.name}}</a>
                    </li>
                  </ul>
                </template>
              </v-popover>
            </ClientOnly>
          </li>
        </ul>
      </div>
    </div>
    <div class="mobileSubnav">
      <subnavigation />
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
      children {
        name
        link
        external
      }
    }
  }
}
</static-query>
<script>
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue";

export default {
  components: {
    Subnavigation
  }
};
</script>

<style>
</style>