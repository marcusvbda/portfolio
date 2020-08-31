import Vue from 'vue'
import Vuex from 'vuex'
import StoreLanguage from "./language"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ...StoreLanguage.state
    },
    getters: {
        ...StoreLanguage.getters
    },
    mutations: {
        ...StoreLanguage.mutations
    }
})