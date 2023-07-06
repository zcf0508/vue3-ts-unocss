import { createApp } from 'vue';
import App from './App.vue';
import { hamiVuex } from '@/store';
import router from '@/router';
import 'animate.css';
import 'uno.css';

createApp(App).use(hamiVuex).use(router).mount('#app');
