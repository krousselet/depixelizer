<template>
    <NavbarComponent></NavbarComponent>
    <GuessComponent></GuessComponent>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavbarComponent from '@/components/Navbar-component.vue'
  import GuessComponent from '@/components/Guess-component.vue'
  
  export default {
    name: 'GuessView',
    components: {
      NavbarComponent,
      GuessComponent
    }
  }
  </script>