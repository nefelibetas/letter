import Vue from 'vue'
import vuex from 'vuex'
import heart from './heart.js'
Vue.use(vuex)

export default new vuex.Store({
    modules: {
        heart,
    }
})
