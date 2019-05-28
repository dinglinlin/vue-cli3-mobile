import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/views/Home'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('测试 home 组件的传值是否正确', () => {
    const msg = 'Welcome to Your Vue.js App'
    const HomeWrapper = shallowMount(Home)

    expect(HomeWrapper.vm.msg).toMatch(msg)
  })
  it('测试 HelloWorld 组件的值', () => {
    const HomeWrapper = shallowMount(HelloWorld)
    expect(HomeWrapper.vm.test).toBe(0)
  })
})
