<template>
  <a role="button" @click.prevent="toggleTheme()"  
      :aria-label="'Toggle ' + nextTheme" 
      :title="'Toggle ' + nextTheme"
      class="toggle-theme"
    >
    
    <font-awesome :icon="['fas', 'sun']" v-if="theme === 'dark'"></font-awesome>
    <font-awesome :icon="['fas', 'moon']" v-if="theme === 'light'"></font-awesome>
  </a>
</template>

<script>
let themes = ['light', 'dark']

export default {
  props: {
    theme: {
      type: String,
    },
  },

  computed: {
    nextTheme() {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },
  methods: {
    toggleTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      window.__setPreferredTheme(themes[nextIndex])

      this.$emit('setTheme', themes[nextIndex])
    }
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== 'undefined') this.$emit('setTheme', window.__theme)
  }
}
</script>