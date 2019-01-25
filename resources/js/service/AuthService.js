import Service from './Service'
import qs from 'qs'

export default {
  /**
   * 
   * @param {*} form 
   */
  login (form) {
    const {payload} = form
    const url = '/api/login';
    const options = {
      method: 'POST',
      body: qs.stringify(payload),
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      })
    };
    return Service.api(url, options)
  }, 
     
  /**
   * 
   * @param {*} form 
   */
  register (form) {
    const {payload} = form
    const url = '/api/register';
    const options = {
      method: 'POST',
      body: qs.stringify(payload),
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded"
      })
    };
    return Service.api(url, options)
  }  ,
  /**
   * 
   * @param {*} form 
   */
  update (form) {
    const {payload} = form
    const url = '/api/update';
    const options = {
      method: 'POST',
      body: qs.stringify(payload),
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Authorization" : `Bearer ${Service.token()}`
      })
    };
    return Service.api(url, options)
  }, 
  /**
   * 
   * @param {*} form 
   */
  password (form) {
    const {payload} = form
    const url = '/api/password';
    const options = {
      method: 'POST',
      body: qs.stringify(payload),
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Authorization" : `Bearer ${Service.token()}`
      })
    };
    return Service.api(url, options)
  },   
  /**
   * 
   * @param {*} form 
   */
  profile () {
    const url = '/api/profile';
    const options = {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded",
        "Authorization" : `Bearer ${Service.token()}`
      })
    };
    return Service.api(url, options)
  }      
}