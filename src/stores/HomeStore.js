import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
    state: () => ({
        title: 'Bienvenue au depixelizer'
    })
})