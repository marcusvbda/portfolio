import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import "@/scss/app.scss"
import store from '@/store'
import cookie from 'vue-cookies'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$cookies = cookie

Vue.prototype.$translate = index => {
	const { language } = store.state
	const pack = require(`./langs/${language}.js`)
	return pack[index] ? pack[index] : index
}

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
