import {mount, createLocalVue} from '@vue/test-utils'
import CampaignList from '../../../src/views/campaign_list.vue'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('CampaignList', () => {

  function createWrapper () {
    const $router = {
      push: () => {
      }
    }
    const wrapper = mount(CampaignList, {
      localVue,
      mocks: {
        $router,
        sessionStorage
      },
      sync: false
    })
    return wrapper
  }

  it('渲染CampaignList组件', () => {
    const wrapper = createWrapper()
    expect(wrapper.vm.status).toEqual('')
  })
})
