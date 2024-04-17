import { defineStore } from 'pinia'
export const useNavbarStore = defineStore('navbar', {
    state: () => ({
        logo: require('@/assets/logo.svg'),
        pages: [
            //HOME PAGE
            {
                label: 'home',
                path: '/'
            },
            {
                label: 'regles',
                path: '/how'
            },
            // GAME PAGE
            {
                label: 'jouer',
                path: '/play',
            },
        ],
    })
})