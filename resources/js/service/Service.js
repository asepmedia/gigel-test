import store from './../store'
export default {
  /**
   * 
   * @param {*} url 
   * @param {*} object 
   */
  api(url, object) {
    store.commit('setLoading', true)
    let options = Object.assign(object)
    return new Promise((resolve, reject) => {
      return fetch(url, options).then((res) => {
        console.log(res)
        return res.json()
      }).then(res => {
        store.commit('setLoading', false)
        resolve(res)
        return res
      }).catch((err) => {
        store.commit('setLoading', false)
        reject(err)
        return err
      });
    });
  },
  token () {
    return store.state.token
  }
  
}