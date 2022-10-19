import { createRouter, createWebHistory } from 'vue-router';
import Calculator from "./pages/Calculator.vue";
import Calendar from "./pages/Calendar.vue";
import Chat from "./pages/Chat.vue";
import DcHeros from "./pages/DcHeros.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";
import Modal from "./pages/Modal.vue";
import Slider from "./pages/Slider.vue";
import Tensorflow from "./pages/Tensorflow.vue";
import UserCrued from "./pages/UserCrued.vue";
import store from './store';

const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/modal', component: Modal },
    { path: '/user', component: UserCrued },
    { path: '/tensorflow', component: Tensorflow },
    {
        path: '/chat', component: Chat,
        beforeEnter: (to, from, next) => {
            if (!store.state.isLoggedIn) {
                next("/")
                store.commit('setIsOpen', true);
            } else {
                next()
            }
        }
    },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.middleware) {
//         console.log(middleware)
//         if (middleware) {
//             middleware.default(to, from, next, store)
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// })

export default router;