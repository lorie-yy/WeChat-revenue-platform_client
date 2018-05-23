// 该工具类主要用来请求后端数据。传入两个参数，一个是后台提供的restful API地址，一个是参数。然后得到后台返回的数据。
import request from '../utils/request';

// service的islogin方法里面，传入参数进行调用，并最终返回后台数据。
// 也就是说，在model里面调用service，可以获取后台的数据，然后保存到store中。
export function islogin() {
  return request(`/wechatfans/islogin`, {
    method: 'GET',
  });
}

