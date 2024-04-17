// src/stores/GameStore.js
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    currentGuess: '',
    attempts: 0,
    maxAttempts: 5,
    gameImages: JSON.parse(localStorage.getItem('gameImages')) || [
      { url: require('@/assets/game/image1.svg'), id: 0, title: 'splinter cell', found: false },
      { url: require('@/assets/game/image2.svg'), id: 1, title: 'fallout 4', found: false },
      { url: require('@/assets/game/image3.svg'), id: 2, title: 'ori and the will of the wisps', found: false },
      { url: require('@/assets/game/image4.svg'), id: 2, title: 'far cry 4', found: false },

    ]
  }),
  getters: {
    imageClarity: (state) => {
      const maxBlur = 20;
      const minBlur = 0;
      return Math.max(minBlur, maxBlur - state.attempts * 4);
    },
    currentImage: (state) => (id) => {
      return state.gameImages.find(image => image.id === id);
    }
  },
  actions: {
    markAsFound(id) {
      const image = this.gameImages.find(image => image.id === id);
      if (image) {
        image.found = true;
        this.saveGameState();
      }
    },
    saveGameState() {
      localStorage.setItem('gameImages', JSON.stringify(this.gameImages));
    },
    makeGuess(guess, imageId) {
      this.currentGuess = guess;
      this.attempts++;
      const image = this.currentImage(imageId);
      if (guess.toLowerCase() === image.title.toLowerCase()) {
        return true;
      }
      return false;
    },
    resetGame() {
      this.currentGuess = '';
      this.attempts = 0;
    }
  }
});
