<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Loyout/Navbar'
import Footer from './components/Loyout/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>
