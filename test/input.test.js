import spies from 'chai-spies'
import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect
chai.use(spies)

Vue.config.productionTip = false
Vue.config.devtools = false

// BDD行为驱动测试
describe('Input', () => {
  it('组件存在', () => {
    expect(Input).to.be.ok
  })
})
