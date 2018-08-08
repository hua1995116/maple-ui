import spies from 'chai-spies'
import Vue from 'vue'
import Button from '../src/button'

const expect = chai.expect
chai.use(spies)

Vue.config.productionTip = false
Vue.config.devtools = false

// BDD行为驱动测试
describe('Button', () => {
  it('组件存在', () => {
    expect(Button).to.be.ok
  })

  it('按钮点击方法调用', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor().$mount()
    const cb = sinon.fake()
    vm.$on('click', cb)
    vm.$el.click()
    expect(cb).to.have.been.called
    vm.$destroy()
  })

  it('设置icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'spinner'
      }
    }).$mount()
    const classes = vm.$el.querySelector('i').className
    expect(classes).to.eq('icon icon__position m-icon fa fas fa-spinner')
    vm.$destroy()
  })

  it('设置disabled后样式和不可点击', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const cb = sinon.fake(() => console.log('button is clicked')) // 点击调用函数
    vm.$on('click', cb)
    vm.$el.click()
    expect(cb).to.not.have.been.called
    vm.$destroy()
  })

  it('设置loading后样式和不可点击', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        loading: true
      }
    }).$mount()
    const cb = sinon.fake(() => console.log('button is clicked')) // 点击调用函数
    const classes = vm.$el.className
    vm.$on('click', cb)
    vm.$el.click()
    expect(cb).to.not.have.been.called
    expect(classes).to.eq('m-button icon--left disabled--false loading--true')
    vm.$destroy()
  })

  it('Icon的定位设置', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'spinner',
        iconPosition: 'right'
      }
    }).$mount()
    expect(vm.$el.className).to.eq('m-button icon--right disabled--false loading--false')
    vm.$destroy()
  })
})
