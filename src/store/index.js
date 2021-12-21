import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogCards: [
      {
        title: "Blog Card #1",
        photo: "stock-1",
        date: "December 25, 2021",
      },
      {
        title: "Blog Card #2",
        photo: "stock-2",
        date: "December 25, 2021",
      },
      {
        title: "Blog Card #3",
        photo: "stock-3",
        date: "December 25, 2021",
      },
      {
        title: "Blog Card #3",
        photo: "stock-3",
        date: "December 25, 2021",
      },
    ],
    editPost:null,
  },
  mutations: {
    toggleEditPost(state,value) {
      state.editPost = value; 
    }
  },
  actions: {},
  modules: {},
});
