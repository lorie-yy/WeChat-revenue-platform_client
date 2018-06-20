import React from 'react';
import { connect } from 'dva';
import { Radio,Form,Input,Button,message } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

class Withdrawals extends React.Component {
  state={
    value:1
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit = (e,values) => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
      // if (!err) {
        console.log('Received values of form: ', values);
        console.log('values.alipay_name__________', values.alipay_name);
        const { onOk } = this.props;
        onOk(values);
      // }
    // });
  }

  render(){
    const {WithdrawalsData,dispatch}=this.props
    const level=WithdrawalsData.sc_userlevel, 
          level1=WithdrawalsData.takemoney, 
          level2=WithdrawalsData.availablecash
    const { getFieldDecorator } = this.props.form;

    function addWithdrawals(values) {
      console.log('1111111'+values.takemoney,values.paymentmode,values.alipay_name,values.alipaynum,values.company)
      console.log('111'+values)
      new Promise((resolve, reject) => {
      console.log('22222222')
      dispatch({
          type: 'Withdrawals/addWithdrawals',
          payload: {
            values,
            resolve,
            reject,
          }
        })
      }).then(result => {
      console.log('3333333333')
      if(result===3){
          message.warning("余额不足100元,不能申请!")
        }else if(result===2){
          message.warning("正在审核,请不要重复提交申请!")
        }else if(result===1){
          message.success("申请成功，就等审核咯~")
        }
      }).catch(err => {
          message.error(err);
        })
    }
    const alipay=(
      <div>
        <FormItem
          label="姓名"
        >
          {getFieldDecorator('alipay_name', {
            rules: [{ required: true, message: '不能为空' }],
          })(
            <Input placeholder="姓名" />
          )}
        </FormItem>
        <FormItem
          label="支付宝账号"
        >
          {getFieldDecorator('alipaynum', {
            rules: [{ required: true, message: '不能为空' }],
          })(
            <Input placeholder="支付宝账号" />
          )}
        </FormItem>
      </div>
    )
    const bankpay=(
      <div>
        <FormItem
          label="银行卡号"
        >
          {getFieldDecorator('banknum', {
            rules: [
              { required: true, message: '不能为空' },
              { len: 19, message: '请输入正确的19位银行卡号' },
            ],
          })(
            <Input placeholder="银行卡号" />
          )}
        </FormItem>
        <FormItem
          label="公司名称"
        >
          {getFieldDecorator('company', {
            rules: [{ required: true, message: '不能为空' }],
          })(
            <Input placeholder="公司名称" />
          )}
        </FormItem>
        <FormItem
          label="开户行"
        >
          {getFieldDecorator('bank_name', {
            rules: [{ required: true, message: '不能为空' }],
          })(
            <Input placeholder="开户行" />
          )}
        </FormItem>
      </div>
    )

    return(
      <div>
      <Form layout="inline" onSubmit={this.handleSubmit} onOk={addWithdrawals} >
        <FormItem>
          {getFieldDecorator('takemoney',{initialValue: level1,})(<h2>可提现金额：{ level===1 ? level1:level2 } 元</h2>)}
        </FormItem>
        <FormItem label="提现方式">
          {getFieldDecorator('paymentmode',{initialValue: 1,})(
            <RadioGroup onChange={this.onChange} name='radiogroup' style={{padding:'10px 0',}}>
              <Radio value={1}>支付宝</Radio>
              <Radio value={2}>银行卡</Radio>
            </RadioGroup >
          )}
        </FormItem>
        { this.state.value===1 ? alipay:bankpay }
        <FormItem>
          <Button type="primary" htmlType="submit">申请提现</Button>
        </FormItem>
      </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { WithdrawalsData } = state.Withdrawals;
  return {
    WithdrawalsData,
  };
}
// 若使用了Form表单，则export前需要创建Form.create()(XXX)，否则会报错
export default connect(mapStateToProps)(Form.create()(Withdrawals));
