<template>
  <div class="h-16">
    <headroom :downTolerance="10" :upTolerance="20" :offset="15">
      <navbar-desktop
        @setTheme="setTheme"
        @openSearchModal="openSearchModal"
        :theme="this.theme"
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
      headerHeight: 100
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