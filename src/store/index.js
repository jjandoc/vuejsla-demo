import { createStore } from "vuex";
import api from "@/services/api";
import getEntityId from "@/util/getEntityId";

const Mutations = Object.freeze({
  SET_FETCHED: "SET_FETCHED",
  SET_PEOPLE: "SET_PEOPLE",
  SET_PERSON: "SET_PERSON",
});

export default createStore({
  state: {
    data: {},
    hasFetchedAll: false,
  },
  mutations: {
    [Mutations.SET_FETCHED](state) {
      state.hasFetchedAll = true;
    },
    [Mutations.SET_PEOPLE](state, data) {
      state.data = { ...state.data, ...data };
    },
    [Mutations.SET_PERSON](state, { id, data }) {
      state.data = { ...state.data, [id]: data };
    },
  },
  actions: {
    async fetchPeople({ commit }) {
      const data = await api.fetchPeople();
      const newPeople = data.reduce((obj, person) => {
        const id = getEntityId(person);
        return {
          ...obj,
          [id]: person,
        };
      }, {});
      commit(Mutations.SET_PEOPLE, newPeople);
      commit(Mutations.SET_FETCHED);
    },
    async fetchPerson({ commit }, id) {
      const data = await api.fetchPerson(id);
      commit(Mutations.SET_PERSON, { id, data });
    },
  },
  getters: {
    getPerson: (state) => (id) => state.data[id] || null,
    people: (state) =>
      Object.values(state.data).sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
      }),
  },
});
