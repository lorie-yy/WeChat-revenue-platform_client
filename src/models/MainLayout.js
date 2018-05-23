import * as MainLayout from '../services/MainLayout';

// 以下新建了一个namespace为 ‘islogin’的model，并在reducers里面添加了一个save方法和在effects里面添加了一个fetchApply方法
export default {
  namespace: 'Home', // 外部使用model里面的方法值时需要通过namespace，用法：namespace/方法名
  state: {
    HomeData: []
  },
  // reducers里面的方法负责改变store中的值，其实也只有通过这种方式才能改变store中的值
  reducers: {
    save(state, { payload: { data: HomeData } }) {
      return { ...state, HomeData };
    },
  },
  effects: {
    *fetchHome({ payload },{ call, put }) {
      // yeild是ES6中的关键字，表示以同步的写法来实现异步操作。
      // 这里引入了一个../services/MainLayout.js文件，并调用了该文件中的islogin方法
      const { data } = yield call(MainLayout.islogin);
      // console.log('effects:'+data.notify_title)
      // effects里面的put方法，会调用reducers里面的方法，根据方法中参数type的值找到reducers中的那个方法并执行。
      // 这个过程其原理就是redux中dispatch一个action的过程
      yield put({type: 'save',payload: {data}});
    },
  },
  // Subscriptions里面的内容表示在项目启动加载model的时候就会执行
  subscriptions: {
    setup({ dispatch,history  }) {
      return history.listen(({ pathname, query }) => {
          // dispatch({})就相当于在项目启动的时候，就会先调用一次effects里面的fetchData方法
          dispatch({ type: 'fetchHome', payload: {query} });
      })
    }
  }
};
