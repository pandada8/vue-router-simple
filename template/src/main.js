import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
	linkActiveClass: "active"
})

router.map({
	"/": {
		component: require("./App.vue")
	}
})

router.start(Vue.extend({}), "#app")
