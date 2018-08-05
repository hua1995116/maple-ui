import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'

new Vue({
  el: '#app',
  components: {
    "m-button": Button,
    "m-icon": Icon,
    "m-button-group": ButtonGroup
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    }
  },
  methods: {
    button1Click() {
      console.log('click')
      this.loading1 = true
      setTimeout(() => this.loading1 = false, 1500)
    }
  }
})