import { defineStore } from 'pinia';
import { state } from './state';
import { actions } from './actions';
import { getters } from './getters';

export const useProductsStore = defineStore('products', {
  state,
  actions,
  getters,
});
