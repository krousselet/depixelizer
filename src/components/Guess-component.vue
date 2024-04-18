<template>
    <div class="guess-view">
      <img :src="currentImage.url" :alt="'Guess this game image'" :style="{ filter: `blur(${blurValue}px)` }">
      <form @submit.prevent="submitGuess">
        <input type="text" v-model="guess" placeholder="Proposition...">
        <button type="submit" class="btn">Valider</button>
      </form>
      <p>Essais restants:
        <Transition name="fade" mode="out-in">
          <span :key="'remaining-' + gameStore.attempts" :class="{blink: gameStore.attempts === 4}">{{ gameStore.maxAttempts - gameStore.attempts }}</span>
        </Transition>
      </p>
    
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
    toast.success('Bien joué :) !');
    router.push('/play');
  } else {
    toast.error('Dommage :(');
  }
  guess.value = '';
}
  
  function resetGame() {
    gameStore.resetGame();
    router.push('/play');
  }
</script>

<style lang="scss" scoped>
img {
  margin: 40px auto 40px auto;
}

form {
  
  input {
    border: none;
    border-bottom: 1px solid black;
    transition: .5s ease;
    background-color: transparent;

    &::placeholder {
      color: white;
    }

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

.blink {
  opacity: 0;
  animation: blink .3s 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>