import { createApp } from 'vue';

import App from './App.vue';
import './assets/style.css';
import AppHeader from "./components/AppHeader.vue";
import GoogleLogin from "./components/GoogleLogin.vue";
import LoginModal from "./components/LoginModal.vue";
import router from './router';
import store from './store/index';




const app = createApp(App)
app.component('AppHeader', AppHeader)
app.component('GoogleLogin', GoogleLogin)
app.component('LoginModal', LoginModal)
app.use(router)
app.use(store)
app.mount('#app')
