<template>
    <section @click="close" class="z-10 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="m-auto z-20 bg-white p-2 rounded w-1/3 border">
                <h1 class="text-3xl">
                    <slot name="title">Provide some text here</slot>
                </h1>
                <slot name="body">Body</slot>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        emits: ["close-modal"],
        setup(_, { emit }){
            function close(){
                emit("close-modal");
            }

            return { close }
        }
    };
</script>