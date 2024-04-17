<template>
    <div class="guess-view">
      <img :src="currentImage.url" :alt="'Guess this game image'" :style="{ filter: `blur(${blurValue}px)` }">
      <form @submit.prevent="submitGuess">
        <input type="text" v-model="guess" placeholder="Enter your guess here">
        <button type="submit">Submit Guess</button>
      </form>
      <p>Attempts left: {{ gameStore.maxAttempts - gameStore.attempts }}</p>
      <button v-if="gameStore.attempts >= gameStore.maxAttempts" @click="resetGame">Reset Game</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useGameStore } from '@/stores/GameStore';
  
  const route = useRoute();
  const router = useRouter();
  const gameStore = useGameStore();
  const guess = ref('');
  const imageId = +route.params.id;
  const currentImage = computed(() => gameStore.currentImage(imageId));
  const blurValue = computed(() => gameStore.imageClarity);
  
  function submitGuess() {
  const isCorrect = gameStore.makeGuess(guess.value, imageId);
  if (isCorrect) {
    gameStore.markAsFound(imageId);
    alert('Correct guess!');
    router.push('/play');
  } else {
    alert('Incorrect, try again!');
  }
  guess.value = '';
}
  
  function resetGame() {
    gameStore.resetGame();
    router.push('/play');
  }
  </script>
  