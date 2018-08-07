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

// 单元测试
import chai from 'chai'
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'spinner'
    }
  })
  button.$mount('#test')
  const classes = button.$el.querySelector('i').className
  expect(classes).to.eq('icon icon__position m-icon fa fas fa-spinner')
  
}