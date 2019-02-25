//N个简介更新数据的方法对象

import {reqAddress, reqCategorys, reqShops, reqUser, reqLogout} from '../api/index'

export default {
  async getAddress ({commit, state}) {
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
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      commit('receive_shops', result.data)
    }
  },
  //保存user信息
  saveUser ({commit},user) {
    commit('receive_user',user)
  },
  //异步获取user信息
  async getUser({commit}){
    const result=await reqUser()
    if (result.code===0){
      const user=result.data
      commit('receive_user',user)
    }
  },
  //退出登录
  async loginOut({commit}){
    const result= await reqLogout()
    if (result.code===0){
      commit('reset_user')
    }
  }
}
