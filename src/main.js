// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

//import VTooltip from 'v-tooltip'
import {
  VTooltip,
  VPopover,
  VClosePopover
} from 'v-tooltip'

import '~/assets/scss/main.scss'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
  config,
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import {
  fab
} from '@fortawesome/free-brands-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css';
import ClickOutside from 'v-click-outside'


config.autoAddCss = false;
library.add(fas);
library.add(fab);

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  Vue.use(ClickOutside)
  
  if( isClient ) {
    VTooltip.options.defaultPlacement = 'top-end';
    VTooltip.options.defaultClass = 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-gray-400 max-w-xs ml-2 mt-3';
    VTooltip.options.defaultBoundariesElement = document.body;

    Vue.directive('tooltip', VTooltip)
    Vue.directive('close-popover', VClosePopover)
    Vue.component('v-popover', VPopover)
  }
}