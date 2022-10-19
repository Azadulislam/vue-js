<template>
    <div class="m-auto">
        <h1 class="text-center text-2xl py-2">Vue Calendar</h1>
        <section class="flex justify-between">
            <h2 class="font-bold">{{currentMonthName}}</h2>
            <h2 class="font-bold">{{currentYear}}</h2>
        </section>
        <section class="flex my-2">
            <p class="p-2 text-center" style="width:14.28%;" v-for="day in days">{{day}}</p>
        </section>
        <section class="flex flex-wrap">
            <p class="p-2 text-center" style="width:14.28%;" v-for="blk in startDay ()"></p>
            <p 
            class="p-2 text-center" 
            style="width:14.28%;" 
            v-for="num in daysInMonth ()"
            :key="num"
            :class="currentDateClass(num)"
            >{{ num }}</p>
        </section>
        <section class="flex justify-between my-4">
            <button class="p-2 border rounded" @click="prev">Perv</button>
            <button class="p-2 border rounded" @click="next">Next</button>
        </section>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                currentDate: new Date().getUTCDate(),
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            }
        },
        methods:{
            daysInMonth(){
                return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
            },
            startDay(){
                return new Date(this.currentYear, this.currentMonth, 1).getDay();
            },
            next(){
                if(this.currentMonth === 11){
                    this.currentYear++;
                    this.currentMonth = 0;
                }else{
                    this.currentMonth++;
                }
            },
            prev(){
                if(this.currentMonth === 0){
                    this.currentYear--;
                    this.currentMonth = 11;
                }else{
                    this.currentMonth--;
                }
            },
            currentDateClass(num){
                const calendarFullDAte = new Date(this.currentYear, this.currentMonth, num).toDateString();
                const currentFullDate = new Date().toDateString();
                return  calendarFullDAte === currentFullDate ? 'text-yellow-600 border rounded border-yellow-600':'';
            }
        },
        computed:{
            currentMonthName(){
                
                return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month:"long"});
            } 
        }
    }
</script>