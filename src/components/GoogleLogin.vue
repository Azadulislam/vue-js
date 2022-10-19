<template>
    <section class="my-3 text-center">
        <button class="border rounded p-2" @click="googleLogin">Login With Google</button>
    </section>
</template>
<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../pages/utilities/firebase';
export default {
    methods:{
        googleLogin(){
            const provider = new GoogleAuthProvider(app);
            const auth = getAuth(app);
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    this.isLoggedIn = true;
                    this.$emit("close-google-login");
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
             
        }
    }
}
</script>