<template>
  <div>
  <div class="shadow-md">
    <navbar-desktop 
      @setTheme="setTheme" 
      @openSearchModal="openSearchModal" 
      @toggleSubNavigation="toggleSubNavigation"
      :showNavigation="scrollPosition<headerHeight"
      :theme="this.theme"/>
    <navbar-mobile 
      @setTheme="setTheme" 
      @openSearchModal="openSearchModal" 
      @openNavbarModal="openNavbarModal"
      :showNavigation="scrollPosition<headerHeight"
      :theme="this.theme"/>    
    </div>

    <subnavigation v-if="showSubNavigation"></subnavigation>

    <modal :showModal="this.showSearchModal" @close="closeSearchModal">

      <search-modal></search-modal>

    </modal>

    <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">

      <navbar-modal></navbar-modal>

    </modal>
  </div>
</template>

<script>
import NavbarDesktop from "~/components/Navbar/NavbarDesktop.vue"
import NavbarMobile from "~/components/Navbar/NavbarMobile.vue"
import Modal from "~/components/Modal/Modal.vue"
import SearchModal from "~/components/Modal/SearchModal.vue"
import NavbarModal from "~/components/Modal/NavbarMobileModal.vue"
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue"

export default {
  data: function() {
    return {
      theme: "light",
      showSearchModal: false,
      showNavbarModal: false,
      showSubNavigation: false,
      scrollPosition: 0,
      headerHeight: 100
    };
  },
  components: {
    NavbarDesktop,
    NavbarMobile,
    Modal,
    SearchModal,
    NavbarModal,
    Subnavigation
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    },
    openSearchModal() {
      this.showSearchModal=true;
    },
    closeSearchModal() {
      this.showSearchModal=false;
    },
    openNavbarModal() {
      this.showNavbarModal=true;
    },
    closeNavbarModal() {
      this.showNavbarModal=false;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleSubNavigation() {
      this.showSubNavigation = !this.showSubNavigation
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    
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