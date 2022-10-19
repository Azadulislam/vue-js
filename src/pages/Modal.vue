<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5">Re Usable Modal</h1>
            <ModalTem v-if="isModalOpen" @close-modal="isModalOpen = false">
                <template #title>
                    <h1 class="text-red-500">Red Modal</h1>
                </template>
                <template v-slot:body>
                    Body Text here
                </template>
            </ModalTem>
            <button @click="isModalOpen = true">Open Red Modal</button>
            
            <ModalTem v-if="isBlueModalOpen" @close-modal="isBlueModalOpen = false">
                <template #title>
                    <h1 class="text-blue
                    -500">Blue Modal</h1>
                </template>
            </ModalTem>
            <button @click="isBlueModalOpen = true">Open Blue Modal</button>
        </div>
    </section>
</template>

<script>
    import ModalTem from '@/components/ModalTem.vue';
import { ref } from 'vue';
    
    export default {
        components: {
            ModalTem
        },
        setup() {
            const isModalOpen = ref(false);
            const isBlueModalOpen = ref(false);

            return { isModalOpen, isBlueModalOpen }
        }
    };
</script>