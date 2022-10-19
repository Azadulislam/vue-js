<template>
    <div class="w-full relative overflow-hidden h-screen">
        <!-- <h1 class="w-full text-center text-3xl my-4">Slider</h1> -->
        <div class="relative w-full flex" style="height:350px">
            <div v-for="(color, index) in sliders" class="w-full absolute" style="height:350px">
                <Transition name="slide-fade">
                    <div v-if="currentSlide === index" class="w-full absolute" :class="color" style="height:350px">
                    </div>
                </Transition>
            </div>
            <div class="w-full flex justify-center absolute bottom-5">
                <div v-for="(slide, index) in sliders" :key="slide" class="h-4 w-4 rounded-full mx-1 cursor-pointer shadow-md" @click="makeActive(index)" :class="currentSlide === index? 'bg-gray-600': 'bg-gray-400'"></div>
            </div>
        </div>
        <div class="my-1 w-full text-center">
            <transition >
                <h1 v-if="isTitleShowing" class="m-auto w-full text-center">Slider Carousel</h1>
            </transition>
            <button @click="isTitleShowing = !isTitleShowing"  class="btn border rounded">Toggle Text</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                currentSlide: 1,
                interval:'',
                sliders: ['bg-blue-600', 'bg-yellow-600', 'bg-teal-600'],
                isTitleShowing: true,
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.currentSlide = this.currentSlide === 2? 0 : this.currentSlide+1;
            
            }, 2000);
        },
        beforeUnmount(){
            clearInterval(this.interval);
        },
        methods:{
            makeActive(index){
                this.currentSlide = index;
            }
        }
    }
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from{
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>