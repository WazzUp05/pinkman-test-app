import Vue from 'vue'
import Vuex from 'vuex'
// import faqs from './modules/faqs'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      faqs: '',
    },
    mutations: {
      updateFaqs(state, faqs) {
        state.faqs = faqs
      },
    },
    actions: {
      async fetchFaqs(ctx) {
        const res = await fetch('http://testwork.unitedplace.ru/api/faq')
        const faqs = await res.json()

        ctx.commit('updateFaqs', faqs)
      },
    },

    getters: {
      allFaqs(state) {
        return state.faqs
      },
    },
    modules: {},
  })
export default store
