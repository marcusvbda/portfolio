import Vue from 'vue'
import EN from "./EN"
import PT_BR from "./PT_BR"
const languages = { EN, PT_BR }
import store from '@store'

Vue.prototype.$translate = index => {
    const { language } = store.state
    const pack = languages[language]
    return pack[index] ? pack[index] : index
}
