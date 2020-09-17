import { createStore } from "vuex";
import { Parent } from "@/models/Parent";

export default createStore({
  state: {
    parents: Array<Parent>(),
    teams: [],
    events: []
  },
  mutations: {
    addParent(state, parent: Parent) {
      const id = state.parents.length + 1;
      parent.id = id;
      state.parents.push(parent);
    },
    updateParent(state, parent: Parent) {
      const index = state.parents.findIndex(d => d.id === parent.id);
    },
    removeParent(state, id) {
      const index = state.parents.findIndex(d => d.id === id);
      state.parents.splice(index, 1);
    }
  },
  actions: {
    addParent({ commit }, parent) {
      commit("addParent", parent);
    },
    updateParent({ commit }, parent) {
      commit("updateParent", parent);
    },
    removeParent({ commit }, id) {
      commit("removeParent", id);
    }
  },
  modules: {
    // parents: parents
  }
});
