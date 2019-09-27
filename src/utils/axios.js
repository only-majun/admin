import axios from 'axios'
import Store from '../store/store'
import ActionCreator from '../store/actionCreator'
// Add a request interceptor
axios.interceptors.request.use(function (config) {//请求拦截器
  // Do something before request is sent
   console.log(config)
  let {method} = config;
  if(method  === 'get'){
    config.url+='$token=heheda'
  }else{
   // console.log(config.data.token)
    config.data.token=localStorage.getItem('token')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {//响应拦截器
  // Do something with response data
  if(response.status === 200){//ajax请求成功处理
    if(response.data.err === -998 || response.data.err === -997){  //返回token处理  进行全局状态的改变
        Store.dispatch(ActionCreator.changeModelState())
    }
    return response
}else{
  return Promise.reject('请求出错'); //也是链式调用中的catch处理
}
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default axios