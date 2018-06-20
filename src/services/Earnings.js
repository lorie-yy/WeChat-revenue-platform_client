import request from '../utils/request';

export function showfans() {
  return request(`/wechatfans/showfans`, {
    method: 'GET',
  });
}