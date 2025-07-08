import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./stars";

createApp(App)
  .use(router)
  .mount('#app');

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1.0";
});
