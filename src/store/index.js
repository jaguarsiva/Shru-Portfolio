import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bannerVisiblity: true
	},
	mutations: {
		SET_BANNER_VISIBLITY( state, payload ) {
			state.bannerVisiblity = payload;
		}
	},
	actions: {
		setBannerVisiblity({commit}, payload) {
			commit('SET_BANNER_VISIBLITY', payload );
		}
	},
	modules: {}
});
