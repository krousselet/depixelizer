<template>
    <NavbarComponent></NavbarComponent>
    <PlayComponent></PlayComponent>
</template>
  
  <script>
  // @ is an alias to /src
  import NavbarComponent from '@/components/Navbar-component.vue'
  import PlayComponent from '@/components/Play-component.vue'
  
  export default {
    name: 'PlayView',
    components: {
        NavbarComponent,
        PlayComponent,
    }
  }
  </script>
  