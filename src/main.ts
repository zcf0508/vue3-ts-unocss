import { createApp } from "vue";
import App from "./App.vue";
import { hamiVuex } from "@/store";
import router from "@/router";
import "virtual:windi.css";
import "virtual:windi-devtools";
import 'animate.css';

createApp(App).use(hamiVuex).use(router).mount("#app");
