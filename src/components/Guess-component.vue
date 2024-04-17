<template>
    <div class="guess-view">
      <img :src="currentImage.url" :alt="'Guess this game image'" :style="{ filter: `blur(${blurValue}px)` }">
      <form @submit.prevent="submitGuess">
        <input type="text" v-model="guess" placeholder="Tenter votre chance ici...">
        <button type="submit" class="btn">Valider</button>
      </form>
      <p>Essais restants: {{ gameStore.maxAttempts - gameStore.attempts }}</p>
      <button v-if="gameStore.attempts >= gameStore.maxAttempts" @click="resetGame">Reset Game</button>
    </div>
    <Snackbar :message="snackbarMessage" :duration="3000" v-if="showSnackbar" />
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useGameStore } from '@/stores/GameStore';
  import { useToast } from 'vue-toastification';
  
  const route = useRoute();
  const router = useRouter();
  const gameStore = useGameStore();
  const guess = ref('');
  const imageId = +route.params.id;
  const currentImage = computed(() => gameStore.currentImage(imageId));
  const blurValue = computed(() => gameStore.imageClarity);
  const toast = useToast();
  
  function submitGuess() {
  const isCorrect = gameStore.makeGuess(guess.value, imageId);
  if (isCorrect) {
    gameStore.markAsFound(imageId);
    // alert('Correct guess!');
    toast.success('Bien joué :) !');
    router.push('/play');
  } else {
    // alert('Incorrect, try again!');
    toast.error('Dommage :(');
  }
  guess.value = '';
}
  
  function resetGame() {
    gameStore.resetGame();
    router.push('/play');
  }
  </script>
<style scoped>
img {
  margin: 40px auto 40px auto;
}

form {

  input {
    border: none;
    border-bottom: 1px solid black;
    transition: .5s ease;

    &:active,  &:focus {
      outline: none;
      border-bottom: 1px solid red;
      transition: .5s ease;
    }
  }
  button {
    border: none;
    background-color: transparent;
    margin-left: 10px;
  }
}
</style>