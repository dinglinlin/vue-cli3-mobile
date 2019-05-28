import { mount } from '@vue/test-utils'
import Test from '@/components/test'

describe('测试组件', function () {
  const asd = mount(Test)
  it('测试 test 组件的值', () => {
    expect(asd.vm.count).toBe(0)
    const button = asd.find('button')
    button.trigger('click')
    expect(asd.vm.count).toBe(28)
    expect(asd.element).toMatchSnapshot()
  })
})
