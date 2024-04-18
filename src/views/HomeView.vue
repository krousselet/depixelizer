<template>
  <NavbarComponent></NavbarComponent>
  <HomeComponent></HomeComponent>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/Navbar-component.vue'
import HomeComponent from '@/components/Home-component.vue'

export default {
  name: 'HomeView',
  created() {
    console.log("HomeView created");
  },
  mounted() {
    console.log("HomeView mounted");
  },
  components: {
    NavbarComponent,
    HomeComponent
  }
}
</script>