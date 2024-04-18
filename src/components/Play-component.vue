<template>
  <swiper
    :slides-per-view="1"
    :breakpoints="{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 }
    }"
    navigation
    pagination
  >
    <swiper-slide v-for="(image, index) in gameImages" :key="index">
      <transition name="blur-transition">
        <img :src="image.url" :alt="'Game image ' + index" :class="{ 'is-blurred': !image.found }" @click="navigateToGuess(image.id)">
      </transition>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useGameStore } from '@/stores/GameStore';
import { useRouter } from 'vue-router';

const gameStore = useGameStore();
const gameImages = gameStore.gameImages;
const router = useRouter();

function navigateToGuess(id) {
  router.push({ name: 'Guess', params: { id } });
}
</script>

<style scoped>
.is-blurred {
  filter: blur(8px);
}

img {
  border-radius: 7px;
  transition: .5s ease-in-out;
  
  @media (min-width: 991px) {
    &:hover {
      scale: .9;
      transition: .2s ease-in-out;
      cursor: pointer;
    }

    &:active {
      cursor: grabbing;
    }
  }
}
</style>
