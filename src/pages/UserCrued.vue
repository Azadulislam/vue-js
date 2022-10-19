<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div class="my-10">
                <div class="flex justify-end">
                    <button class="border rounded bg-green-500 shadow-lg hover:bg-green-600 p-2 mb-5 text-white transition duration-500" @click="newItem = true">Add</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th class="px-4 py-2 border">Id</th>
                            <th class="px-4 py-2 border">Name</th>
                            <th class="px-4 py-2 border">Email</th>
                            <th class="px-4 py-2 border">Avatar</th>
                            <th class="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in state.data" :key="user.id">
                            <td class="px-4 py-2 border">{{user._id}}</td>
                            <td class="px-4 py-2 border">{{user.name}}</td>
                            <td class="px-4 py-2 border">{{user.email}}</td>
                            <td class="px-4 py-2 border"><img class="w-20 rounded-full" :src="user.avatar" :alt="user.first_name"></td>
                            <td class="px-4 py-2 border">
                                <button class="border bg-red-600 text-white shadow rounded p-2" @click="destroy(user._id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-between mt-5">
                    <button class="p-2 border rounded hover:cursor-pointer" @click="prev" :disabled="state.data.page === 1" :class="state.data.page === 1?'bg-gray-200':' hover:shadow'">Prev</button>
                    <button class="p-2 border rounded hover:cursor-pointer" @click="next" :disabled="state.data.page == state.data.total_pages" :class="state.data.page === state.data.total_pages?'bg-gray-200':' hover:shadow'">Next</button>
                </div>
            </div>
        </div>
    </section>
    <teleport to='body'>
        <ModalTem v-if="newItem" @close-modal="newItem = false">
            <template #title>
                <div class="text-center">
                    Add New Item
                </div>
            </template>
            <template #body>
                <div class="px-5">
                  <form @submit.prevent="submit">
                    <label>Name</label>
                    <div class="py-2">
                        <input type="text" class="w-full border rounded p-2 " v-model="state.form.name" placeholder="Enter Name">
                    </div>
                    <label>Email</label>
                    <div class="py-2">
                        <input type="email" class="w-full border rounded p-2 " v-model="state.form.email" placeholder="Enter Email">
                    </div>
                    <label>Avatar</label>
                    <div class="py-2">
                        <input type="text" class="w-full border rounded p-2 " v-model="state.form.avatar" placeholder="Avatar Url">
                    </div>
                    <div class="py-2">
                        <input type="submit" class="hover:bg-green-600 text-white hover:cursor-pointer bg-green-500 transation duration-500 w-full border rounded p-2 " placeholder="Avatar Url">
                    </div>
                  </form>
                </div>
            </template>
        </ModalTem>
    </teleport>
</template>
<script>

import { onMounted, reactive, ref } from 'vue';
import ModalTem from '../components/ModalTem.vue';
import axios from '../plugins/axios';
export default {
    setup() {
        const page = ref(1);
        const newItem = ref(false);
        const state = reactive({
            data: [],
            form: {
                name: '',
                email: '',
                avatar: ''
            }
        });
        async function prev() {
            page.value = page.value == 1 ? 1 : page.value - 1;
            let pageNO = page.value;
            const { data } = await axios.get(`users?page=${pageNO}`);
            state.data = data;
        }
        async function next() {
            if (page.value < state.data.total_pages) {
                page.value = page.value + 1;
                let pageNO = page.value;
                const { data } = await axios.get(`users?page=${pageNO}`);
                state.data = data;
            }
        }

        async function submit(){
            const { data } = await axios.post('users', state.form)
            state.form.avatar = '';
            state.form.name = '';
            state.form.email = '';
            newItem.value = false;
            state.data.push(data);
        }

        onMounted(async () => {
            const { data } = await axios.get(`users`);
            state.data = data;
        });

        async function destroy(id){
            await axios.delete(`users/${id}`)
            state.data = state.data.filter((data)=> data._id != id)
        }

        
        return { state, next, prev, newItem, submit, destroy };
    },
    components: { ModalTem }
};
</script>