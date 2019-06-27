import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constants';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentRegion: 'all',
    countries: [
      
    ]
  }
})