import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        screenX: window.screen.availWidth,
        screenY: window.screen.availHeight,
        num: 12
    },
    mutations: {
        SET_SCREEN(state) {
            state.screenX = window.screen.availWidth
            state.screenY = window.screen.availHeight
        },
    },
    actions: {
        SET_SCREEN_SCALE({ commit }) {
            commit('SET_SCREEN')
        },
        SET_CONSOLE() {
            console.log("Hello blay")
        },
    },
    getters: {
        GET_SCALE_X: state => {
            return state.screenX
        },
        GET_SCALE_Y: state => {
            return state.screenY
        },
        GET_JUST_NUM: state => {
            return state.num
        }
    }
})