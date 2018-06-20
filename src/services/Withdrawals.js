import request from '../utils/request';

export function takemoney() {
  return request(`/wechatfans/takemoney`, {
    method: 'GET',
  });
}

export function apply_for_withdrawal(values) {
  return request(
    `/wechatfans/apply_for_withdrawal?
    paymentmode=${values.paymentmode}&takemoney=${values.takemoney}&
    alipay_name=${values.alipay_name}&alipaynum=${values.alipaynum}&
    company=${values.company}&bank_name=${values.bank_name}&banknum=${values.banknum}`, {
    method: 'POST',
  });
}