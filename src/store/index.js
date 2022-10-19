import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            authUser: {},
            isOpen: false,
        }
    },
    mutations: {
        setIsLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        },
        setAuthUser(state, payload) {
            state.authUser = payload
        },
        setIsOpen(state, payload) {
            state.isOpen = payload;
        }
    }
})

export default store;