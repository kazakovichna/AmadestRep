import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import 'fullpage.js/vendors/scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import router from './router'
import store from './store'

Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')