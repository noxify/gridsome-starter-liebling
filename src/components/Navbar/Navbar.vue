<template>
  <div class="h-16">
    <headroom :downTolerance="10" :upTolerance="20" :offset="15" @unpin="navbarUnpinned=true" @pin="navbarUnpinned=false">
      <navbar-desktop
        @setTheme="setTheme"
        @openSearchModal="openSearchModal"
        :theme="this.theme"
        :hideSubnav="this.navbarUnpinned"
      />

      <navbar-mobile
        @setTheme="setTheme"
        @openSearchModal="openSearchModal"
        @openNavbarModal="openNavbarModal"
        :theme="this.theme"
      />


    </headroom>

    <modal :showModal="this.showSearchModal" @close="closeSearchModal">
      <search-modal></search-modal>
    </modal>

    <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
      <navbar-modal></navbar-modal>
    </modal>
  </div>
</template>

<script>
import NavbarDesktop from "~/components/Navbar/NavbarDesktop.vue";
import NavbarMobile from "~/components/Navbar/NavbarMobile.vue";
import Modal from "~/components/Modal/Modal.vue";
import SearchModal from "~/components/Modal/SearchModal.vue";
import NavbarModal from "~/components/Modal/NavbarMobileModal.vue";
import { headroom } from "vue-headroom";

export default {
  data: function() {
    return {
      theme: "light",
      showSearchModal: false,
      showNavbarModal: false,
      headerHeight: 100,
      navbarUnpinned: false
    };
  },
  components: {
    NavbarDesktop,
    NavbarMobile,
    Modal,
    SearchModal,
    NavbarModal,
    headroom
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    },
    openSearchModal() {
      this.showSearchModal = true;
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },
    openNavbarModal() {
      this.showNavbarModal = true;
    },
    closeNavbarModal() {
      this.showNavbarModal = false;
    }
    
  },
  watch:{
    $route (to, from){
      this.closeNavbarModal();
      this.closeSearchModal();
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
