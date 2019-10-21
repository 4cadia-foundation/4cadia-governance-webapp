<template>
  <div id="app">
    <v-header />
    <div class="main">
      <router-view />
    </div>
    <div>
      <v-footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    'v-header': Header,
    'v-footer': Footer

  },
  created () {
  }
}
</script>

<style>
@import "./assets/styles/variables.css";
@import "./assets/styles/base.css";
@import "./assets/styles/typography.css";
@import "./assets/styles/utils.css";
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
