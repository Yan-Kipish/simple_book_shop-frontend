import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { path } from '../scripts/api';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    books: [],
    cart: [],
  },
  mutations: {
    SET_BOOKS_TO_STATE: (state, books) => {
      state.books = books;
    },
    SET_CART: (state, book) => {
      state.cart.push(book);
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
  },
  actions: {
    FETCH_BOOKS_FROM_API({ commit }) {
      return axios(path, {
        method: "GET"
      })
        .then((booklist) => {
          commit('SET_BOOKS_TO_STATE', booklist.data);
          return booklist;
        })
        .catch((err) => {
          console.error(err);
          return err;
        });
    },
    ADD_TO_CART({ commit }, book) {
      commit('SET_CART', book);
      return book;
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  getters: {
    BOOKS(state) {
      return state.books;
    },
    CART(state) {
      return state.cart;
    },
    CART_TOTAL(state) {
      let result = []
      if (state.cart.length) {
        for (let item of state.cart) {
          result.push(Math.floor(item.price * 100) / 100);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0;
      }
    }
  },
});

export default store;
