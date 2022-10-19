<template>
    <div>
        <section @click="close" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="m-auto z-20 bg-white p-2 rounded w-1/3">
                    <h1 class="text-2xl text-center mb-2">Login</h1>
                    <form action="" @submit.prevent="submit">
                        <div class="my-2">
                            <label for="username">User Name</label>
                            <input type="text" ref="emailField" v-model="form.username" class="w-full shadow border rounded  my-2 p-2" placeholder="User Name">
                        </div>
                        <div class="my-2">
                            <label for="password">Password</label>
                            <input type="password" ref="passwordField" v-model="form.password" class="border shadow rounded w-full my-2 p-2" placeholder="Password">
                        </div>
                        <div class="my-2">
                            <button class="w-full rounded bg-gradient-to-r from-red-500 to-pink-600 text-white p-2" type="submit">
                                <span v-if="!isLoading">Login</span>
                                <span v-else>...</span>
                            </button>
                        </div>
                    </form>
                    <p class="text-center">Or</p>
                    <GoogleLogin @close-google-login="close"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../pages/utilities/firebase';
import store from "../store";
import GoogleLogin from './GoogleLogin.vue';

    export default {
    mounted() {
        this.$refs.emailField.focus();
        this.$refs.passwordField.focus();
        
    },
    computed:{
        
    },
    data() {
        return {
            form: {
                username: "user1@gmail.com",
                password: "password",
            },
            isLoading: false,
        };
    },
    methods: {
        submit() {
            this.isLoading = true;
            // const user = "azad@gmail.com";
            // const password = "password";
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, this.form.username, this.form.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    this.close()
                    this.isLoading = false;
                    // ...
                })
                .catch((error) => {
                    console.log(error)
                });
            
        },
        close() {
            store.commit('setIsOpen', false);
        }
    },
    components: { GoogleLogin }
}
</script>