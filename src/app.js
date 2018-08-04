import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
new Vue({
  el: '#app',
  components: {
    "m-button": Button,
    "m-icon": Icon
  }
})