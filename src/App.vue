<template lang="">
  <AppHeader/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to='body'>
  <LoginModal v-if="isLoginOpen"/>
  </teleport>
</template>


<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './pages/utilities/firebase';
import store from './store/index';
  export default {
    data(){
        return{
          state: this.$store.state,
          authUser: {},
        }
    },
    computed:{
      isLoginOpen(){
        return this.$store.state.isOpen;
      }
    },
    mounted(){
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          store.commit('setIsLoggedIn', true)
          store.commit('setAuthUser', user)
        } else {
          store.commit('setIsLoggedIn', false)
          store.commit('setAuthUser', {})
        }
      });
      
    }
  }
</script>