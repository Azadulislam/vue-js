<template>
    <section class="m-auto">
        <h1 class="text-2xl mt-10 text-center">Calculatore</h1>
        <div class=" overflow-hidden hover:overflow-x-auto w-44">
            <p class="text-2xl h-8 mt-3 text-right" style="direction: rtl;">{{calculations}}</p>
            <small class="h-5 block">{{prevNumber}} {{selectOparation}} {{currentNumbr}}</small>
        </div>
        <div class="my-5 grid grid-cols-4 gap-2">
            <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded">1</button>
            <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded">2</button>
            <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded">3</button>
            <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded">+</button>
            <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded">4</button>
            <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded">5</button>
            <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded">6</button>
            <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded">-</button>
            <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded">7</button>
            <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded">8</button>
            <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded">9</button>
            <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded">*</button>
            <button @click="pressed('c')" class="p-2 w-10 h-10 border rounded">C</button>
            <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded">0</button>
            <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded ">=</button>
            <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded">/</button>
        </div>
    </section>
</template>

<script>
    import { ref } from "vue";
import useWindowEvent from "./utilities/composition/useWindowEvent";
    export default {
        setup(){
            const calculations = ref("");
            const oparations = ['+', '-', '*', '/'];
            const currentNumbr = ref('');
            const prevNumber = ref('');
            const selectOparation = ref('');
            const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            
            function pressed(value){
                if(value == '=' || value == 'Enter') calculate();
                else if(oparations.includes(value)) doOparation(value);
                else if(value == 'c') clear();
                else if(numbers.includes(value)) appendNumber(value);
                
            }
            function appendNumber(value){
                calculations.value = calculations.value + value ;
                currentNumbr.value = calculations.value;
            }

            function doOparation(value) { 
                prevNumber.value = calculations.value;
                calculate();
                calculations.value = '';
                selectOparation.value = value;
                currentNumbr.value = '';
            }

            function calculate(){
                // currentNumbr.value = calculations.value;
                if(selectOparation.value === '+'){
                    calculations.value = +prevNumber.value + +calculations.value;
                }else if(selectOparation.value == "-"){
                    calculations.value = prevNumber.value - calculations.value;
                }else if(selectOparation.value == "*"){
                    calculations.value = prevNumber.value * calculations.value;
                }else if(selectOparation.value == "/"){
                    calculations.value = prevNumber.value / calculations.value;
                }

            }

            function clear(){
                calculations.value = '';
                prevNumber.value = "";
                selectOparation.value = "";
                currentNumbr.value = "";
            };

            function handleKeydown(e){
                document.querySelectorAll('button').forEach((button, index)=>{
                    button.blur();
                });
                pressed(e.key)
            }
            
            useWindowEvent('keydown', handleKeydown)

            return {calculations, pressed, prevNumber, selectOparation, currentNumbr}
        }
    }
</script>