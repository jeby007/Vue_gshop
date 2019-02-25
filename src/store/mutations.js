export default {
  receive_address (state, address) {
    state.address = address
  },
  receive_categorys (state, categorys) {
    state.categorys = categorys
  },
  receive_shops (state, shops) {
    state.shops = shops
  },
  receive_user (state, user) {
    state.user = user
  },
  reset_user (state) {
    state.user = {}
  }
}
