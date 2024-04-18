<template>
<main>
    <div id="pixel-container"></div>
    <div id="title-container">
        <h1>{{ homeStore.title }}</h1>
    </div>
    <div id="catch-container">
        <h2>Connaissez-vous vraiment vos classiques ?</h2>
    </div>
</main>
</template>

<script setup>
import { useHomeStore } from '@/stores/HomeStore';
const homeStore = useHomeStore();
</script>
<style lang="scss" scoped>
main {
    opacity: 0;
    animation: appear .5s .5s ease-in-out forwards;
#pixel-container {
    perspective: 600px;
    height: 150px;
    width: 150px;
    margin: 50px auto 50px auto;
    outline: 1px solid rgba(255, 255, 255, 0.199);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    animation: primary-cube 5s .3s forwards;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.192);
    position: relative;
    transform-style: preserve-3d;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 75px;
        height: 75px;
        background-color: white;
        animation: secondary-cube 5s .3s forwards;
        border-radius: 7px;
    }

    &::before {
        content: '';
        position: absolute;
        left: 100%;
        top: 100%;
        transform: translate(-100%, -100%);
        width: 75px;
        height: 75px;
        background-color: white;
        animation: tertiary-cube 5s .3s forwards;
        border-radius: 7px;
    }
}


#title-container {
    opacity: 0;
    animation: appear .5s 1s ease-in-out forwards;
    margin: 10% auto 10% auto;
}

#catch-container {
    opacity: 0;
    animation: appear .5s 1.3s ease-in-out forwards;
}
}
/* KEYFRAMES */
@keyframes primary-cube {
    0% {
        background-color: red;
        border-radius: 7px;
        transform: rotate(45deg);
    }

    25% {
        background-color: black;
        border-radius: none;
        transform: rotate(90deg);
    }

    50% {
        background-color: purple;
        border-radius: 7px;
        transform: rotate(-90deg);
    }

    75% {
        background-color: yellow;
        border-radius: none;
        transform: rotate(180deg);
    }

    100% {
        background-color: blue;
        border-radius: 7px;
        transform: rotate(0);
    }
}

@keyframes secondary-cube {
    0% {
        background-color: purple;
        border-radius: none;
        filter: blur(30px);
    }
    
    25% {
        background-color: red;
        border-radius: 7px;
        filter: blur(0);
      
    }
    
    50% {
        border-radius: none;
        background-color: black;
        filter: blur(10px);
       
    }

    75% {
        background-color: orange;
        border-radius: 7px;
        filter: blur(20px);
   
    }
    
    100% {
        border-radius: none;
        background-color: blue;
        filter: blur(0);
      
    }
}

@keyframes tertiary-cube {
    0% {
        border-radius: none;
        background-color: orange;
        filter: blur(10px);
    }
    
    25% {
        border-radius: 7px;
        background-color: green;
        filter: blur(20px);
        
    }
    
    50% {
        background-color: red;
        border-radius: none;
        filter: blur(0);
        
    }
    
    75% {
        background-color: purple;
        border-radius: 7px;
        filter: blur(30px);
   
    }
    
    100% {
        border-radius: none;
        background-color: blue;
        filter: blur(0);
      
    }
}
</style>