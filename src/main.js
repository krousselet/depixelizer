import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const pinia = createPinia()
const options = {
    position: "bottom-center",
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    closeOnClick: true,
    draggable: true,
    draggablePercent: .6
};

createApp(App).use(router).use(pinia).use(Toast, options).mount('#app')
