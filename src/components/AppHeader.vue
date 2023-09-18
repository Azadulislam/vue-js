<template>
    <header>
        <nav class="px-4 py-2 w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white">
            <router-link class="mx-2" v-for="item in linkList" :key="item.to" :to="item.to">{{ item.title }}</router-link>
            <button v-if="!isLoggedIn" class="mx-2" @click="openLogin">Login</button>
            <button v-else class="mx-2" @click="logout">Logout</button>
        </nav>
    </header>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
import app from '../pages/utilities/firebase';
import store from '../store';
                
    export default{
        data(){
            return {
                linkList : [
                    {title :'Dc Heros', to: '/dc-heros'},
                    {title :'Calendar', to: '/calendar'},
                    {title :'Markdown', to: '/markdown'},
                    {title :'Slider', to: '/slider'},
                    {title :'Calculator', to: '/calculator'},
                    {title :'Modal', to: '/modal'},
                    {title :'Chat', to: '/chat'},
                    {title :'User', to: '/user'},
                    {title :'Tensorflow', to: '/tensorflow'},
                ],
            }
        },
        computed:{
            isLoggedIn(){
                return this.$store.state.isLoggedIn;
            }
        },
        methods:{
            logout(){
                const auth = getAuth(app);
                signOut(auth).then(() => {
                    // isLoggedIn = false;
                }).catch((error) => {
                // An error happened.
                });
            },
            openLogin(){
                store.commit("setIsOpen", true);
            }
        }
    }
</script>