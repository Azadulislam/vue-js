<template>
    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea ref="markDown" :value="text" @input="update" class="w-full h-screen p-1"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
        </section>
    </div>
</template>

<script>
    import { parse } from "marked";
// import debounce from "./utilities/mixins/debounce.js";
import useDebounce from './utilities/composition/useDebounce';
    export default{
        mounted() {
            this.debounce = useDebounce();
            this.$refs.markDown.focus();
        },
        // mixins:[debounce],
        data(){
            return{
                text: '',
                debounce: '',
            };
        },
        computed:{
            markedText(){
                return parse(this.text);
            }
        },
        methods:{
            update(e){
                const task =()=> (this.text = e.target.value);
                this.debounce(task, 500)
            },
            
        }
    }
</script>