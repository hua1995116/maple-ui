import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'

new Vue({
  el: '#app',
  components: {
    "m-button": Button,
    "m-icon": Icon,
    "m-button-group": ButtonGroup,
    'm-input': Input,
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
      console.log('click', this)
      this.loading1 = true
      setTimeout(() => this.loading1 = false, 1500)
    }
  }
})
