import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "@/store";
import router from "@/router";
import 'virtual:windi.css'
import 'virtual:windi-devtools' 

createApp(App).use(store, key).use(router).mount("#app");
