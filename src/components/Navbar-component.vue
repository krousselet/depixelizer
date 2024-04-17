<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <img :src="navbarStore.logo" alt="logo du jeu depixelizer">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                     <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li v-for="(page, pageIndex) in navbarStore.pages" :key="pageIndex" class="nav-item">
                                <router-link :to="page.path">{{ page.label }}</router-link> |
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useNavbarStore } from '@/stores/NavbarStore';
const navbarStore = useNavbarStore();
</script>