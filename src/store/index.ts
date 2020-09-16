import { createStore } from "vuex";
// import parents from "./modules/parents";

export default createStore({
  state: {
    parents: [
      {
        id: 1,
        name: "Chris Richards",
        phone: "07801 866878",
        email: "chris@chrisrichards.co.uk"
      },
      {
        id: 2,
        name: "Mark Campbell",
        phone: "01234 567890",
        email: "mark@oneanvil.com"
      }
    ],
    teams: [],
    events: []
  },
  mutations: {
    addParent(state, payload) {
      const id = state.parents.length + 1;
      payload.id = id;
      state.parents.push(payload);
    },
    removeParent(state, id) {
      const index = state.parents.findIndex(d => d.id === id);
      state.parents.splice(index, 1);
    }
  },
  actions: {
    addParent({ commit }, payload) {
      commit("addParent", payload);
    },
    removeParent({ commit }, id) {
      commit("removeParent", id);
    }
  },
  modules: {
    // parents: parents
  }
});
