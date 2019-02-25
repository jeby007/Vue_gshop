//N个简介更新数据的方法对象

import {reqAddress, reqCategorys, reqShops} from '../api/index'

export default {
  async getAddress ({commit,state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      commit('receive_address', result.data)
    }
  },
  async getCategorys ({commit}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      commit('receive_categorys', result.data)
    }
  },
  async getShops ({commit,state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      commit('receive_shops', result.data)
    }
  }
}
