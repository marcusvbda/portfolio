import cookie from 'vue-cookies'
export default {
    state: {
        language: cookie.get("language") || "PT_BR"
    },
    getters: {
        getLanguage: state => state.language,
    },
    mutations: {
        setLanguage: (state, val) => {
            state.language = val
            cookie.set("language", val)
        }
    }
}