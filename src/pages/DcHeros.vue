<template>
    <div class="m-auto">
        <h1 class="text-center text-2xl">{{title}} {{herosCount}}</h1>
        <ul>
            <li v-for="(hero, index) in dcHeros" :key="hero.name"><div class="flex justify-between">{{index}}::{{hero.name}} <button @click="removeHero(index)">X</button></div></li>
        </ul>
        <form @submit.prevent="addHero" class="mt-10">
            <input class="border rounded p-1" type="text" v-model="newHero" placeholder="Type hero name here" ref="newHeroRef">
            <button class="broder rounded text-white bg-gradient-to-r from-red-500 to-pink-500" type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
    
    import { ref } from 'vue';
    export default {
        setup(props) {
            const dcHeros = ref([
                {name:'superGril'}, 
                {name:'super Man'}, 
                {name:'Spider man'}
            ])
            function removeHero(index){
                dcHeros.value = dcHeros.value.filter((heror, i)=> i != index);
            }
            return {dcHeros, removeHero}
        },
        mounted(){
            this.$refs.newHeroRef.focus()
        },
        computed: {
            herosCount(){
                return this.dcHeros.length;
            },
        },
        methods: {
            addHero(){
                if(this.newHero != '')this.dcHeros.unshift({'name':this.newHero}); 
                this.newHero='';
            },
           
        },
        data () {
            return {
                firstName: "Azadul",
                lastName: "Islam",
                title: 'Dc Heros ',
                newHero: 'Azad New'
            }
        },
    };
</script>