/* jshint esversion: 6 */
const state = {
  // 演示在模块里定义的状态的使用方法
  userName: 'moon'
}
// 演示在模块里定义的getters的用法
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}

export default {
  // 在模块中使用命名空间
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
