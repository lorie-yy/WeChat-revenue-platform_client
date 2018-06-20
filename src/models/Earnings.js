import * as Earnings from '../services/Earnings';

export default {
  namespace: 'Earnings',
  state: {
    EarningsData: []
  },
  reducers: {
    save(state, { payload: { data: EarningsData } }) {
      return { ...state, EarningsData };
    },
  },
  effects: {
    *fetchEarnings({ payload },{ call, put }) {
      const { data } = yield call(Earnings.showfans);
      console.log('fetchEarnings:'+data.totalfans)
      yield put({type: 'save',payload: {data}});
    },
  },
  subscriptions: {
    setup({ dispatch,history  }) {
      return history.listen(({ pathname, query }) => {
        // if(pathname==='/Earnings'){
          dispatch({ type: 'fetchEarnings', payload: {query} });
        // }
      })
    }
  }
};
