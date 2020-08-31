import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import "@/scss/app.scss"
import store from '@/store'
import cookie from 'vue-cookies'
import { mapGetters, mapMutations } from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$cookies = cookie
new Vue({
	router,
	store,
	render: h => h(App),
	computed: {
		...mapGetters(['getLanguage']),
	},
	methods: {
		...mapMutations(['setLanguage']),
		translate(index) {
			const pack = require(`./langs/${this.getLanguage}.js`)
			return pack[index] ? pack[index] : index
		}
	},
}).$mount('#app')
