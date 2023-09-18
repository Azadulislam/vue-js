import { ref } from 'vue';

export default function useDebounce() {
    const timeOut = ref('');

    function debounce(func, time = 1000) {
        clearTimeout(timeOut.value);
        timeOut.value = setTimeout(func, time)
    }
    return debounce;
} 