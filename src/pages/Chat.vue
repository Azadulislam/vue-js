<template>
    <div class="flex w-full">
        <div class="m-auto">
            <h1 class="text-center text-2xl mt-5 mb-3">Real time Chat</h1>
            <div class="border rounded-lg w-60">
                <div class="h-64 p-2">
                    <div v-for="chat in state.chats" :class="userId=== chat.userId?'text-right':''">
                        {{ chat.message }}
                    </div>
                </div>
                <div class="h-8 p-2">
                    <input class="border rounded shadow p-1" type="text" @keydown.enter="addMessage" v-model="state.message" placeholder="Type message here">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import app from "./utilities/firebase";
    // import app from "./utilities/firebase";
    export default {
        setup(){
            const state = reactive({
                chats:{},
                message: '',
                dbref: '',
            });
            const store = useStore();
            const userId = computed(()=> store.state.authUser.uid)
            
            onMounted( () => {
                const db = getDatabase();
                state.dbref = ref(db, 'chats' );
               
                const auth = getAuth(app);
                // console.log(auth.currentUser);
                onValue(ref(db, 'chats' ),async (snapshot) => {
                    state.chats = await snapshot.val();
                    console.log(snapshot.val());
                });
            });
            
            function addMessage(){
                const db = getDatabase();
                const chatref = ref(db, 'chats');
                const newChat = push(chatref);
                set(newChat, {
                    userId: userId,
                    message: state.message,
                });
                state.message = "";
            }
            return { state, addMessage, userId }
        },

    }
</script>