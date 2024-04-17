<template>
    <NavbarComponent></NavbarComponent>
    <HowComponent></HowComponent>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavbarComponent from '@/components/Navbar-component.vue'
  import HowComponent from '@/components/How-component.vue'
  
  export default {
    name: 'HowView',
    components: {
      NavbarComponent,
      HowComponent
    }
  }
  </script>