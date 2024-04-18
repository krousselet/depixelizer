<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "VT323", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-size: 20px;
  @media (min-width: 991px) {
    font-size: 32px;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    @media (min-width: 991px) {
      letter-spacing: 3px;
  }

    &.router-link-exact-active {
      color: white;
      text-transform: capitalize;
    }
  }
}

body {
  height: 100svh;
  background: linear-gradient(#6C54FF, #00E0FF);
}

ul, li {
  list-style: none;
}

/* VIEW TRANSITIONS */

.fade-enter-active, .fade-leave-active {
  transition: all 300ms;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(60px);
}

/* KEYFRAMES */
@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>
