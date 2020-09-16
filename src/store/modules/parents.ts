import { createStore } from "vuex";

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
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
