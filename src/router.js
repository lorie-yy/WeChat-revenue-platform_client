import React from 'react';
import { routerRedux,Route, Switch,Redirect } from 'dva/router';
// import dynamic from 'dva/dynamic';
// import IndexPage from './routes/IndexPage';
import Products from './components/Products';
import Earnings from './components/Earnings';
import Mainlayout from './components/Layout/MainLayout';
const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  // const routes = [
  //   {
  //     path: '/IndexPage',+
  //     models: () => [import('./routes/IndexPage')],
  //     component: () => import('./routes/IndexPage'),
  //   },
  //   {
  //     path: '/Products',
  //     models: () => [import('./models/Products')],
  //     component: () => import('./components/Products'),
  //   },
  // ]
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Mainlayout>
          {/* 路由重定向 */}
          <Route path="/" render={() => (<Redirect to='/Earnings' />)} exact />
          <Route path="/Earnings" exact component={Earnings} />
          <Route path="/Products" exact component={Products} />

            {/* <Route exact path="/" render={() => (<Redirect to='/IndexPage' />)} />
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route key={key} exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics
                  })}
                />
              ))
            } */}
        </Mainlayout>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
