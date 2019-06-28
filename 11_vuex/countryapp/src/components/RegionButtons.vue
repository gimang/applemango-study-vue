<template>
  <div>
    <button class="region" v-for="(region, index) in regions" :key="index" :class="isSelected(region)" @click="changeRegion({region:region})">
      {{region}}
    </button>
  </div>
</template>

<script>
  import _ from 'lodash';
  import { mapGetters, mapMutations } from 'vuex';
  import Constants from '../Constants';

  export default {
    name: 'RegionButtons',
    computed: {
      regions() {
        return this.$store.getters.regions;
      },
      currentRegion() {
        return this.$store.getters.currentRegion;
      }
    },
    methods: _.extend(
      {
        isSelected(region) {
          if(region === this.currentRegion){
            return {
              selected: true
            }
          } else {
            return {
              selected: false
            }
          }
        },
      },
      mapMutations([
        Constants.CHANGE_REGION
      ])
    )
  }
</script>

<style>
  button.region { text-align: center; width:80px; margin:2px; border:solid 1px gray;  }
  button.selected { background-color:purple; color:aqua; }
</style>
