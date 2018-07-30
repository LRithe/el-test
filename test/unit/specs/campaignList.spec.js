import {mount, createLocalVue} from '@vue/test-utils'
import CampaignList from '../../../src/views/campaign_list.vue'

const localVue = createLocalVue()

describe('CampaignList', () => {

  function createWrapper () {
    const $router = {
      push: () => {
      }
    }
    const sessionStorage = window.sessionStorage
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
