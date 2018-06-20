import * as Withdrawals from '../services/Withdrawals';

export default {
  namespace: 'Withdrawals',
  state: {
    WithdrawalsData: []
  },
  reducers: {
    save(state, { payload: { data: WithdrawalsData } }) {
      return { ...state, WithdrawalsData };
    },
  },
  effects: {
    *fetchWithdrawals({ payload },{ call, put }) {
      const { data } = yield call(Withdrawals.takemoney);
      console.log('fetchWithdrawals:'+data.takemoney)
      yield put({type: 'save',payload: {data}});
    },
    *addWithdrawals({ payload },{ call, put }) {
      const { values, reject, resolve } = payload
      const { data } = yield call(Withdrawals.apply_for_withdrawal,values);
      console.log('fetchWithdrawals:'+data.takemoney)
      yield put({type: 'save',payload: {data}});
    },
  },
  subscriptions: {
    setup({ dispatch,history  }) {
      return history.listen(({ pathname, query }) => {
        if(pathname==='/Withdrawals'){
          dispatch({ type: 'fetchWithdrawals', payload: {query} });
        }
      })
    }
  }
};
