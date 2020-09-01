import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@store'

require("@libs/bootstrap-vue")
require("@libs/multi-language")
require("@libs/cookies")

Vue.config.productionTip = false

import "@scss/app.scss"

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
