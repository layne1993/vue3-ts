import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// 专门创建实例的一个方法
export default createStore({
  plugins: [createPersistedState()],
  state: {
    count: 0
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    }
  },
  actions: {},
  modules: {}
});
