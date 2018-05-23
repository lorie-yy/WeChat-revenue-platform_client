import React from 'react';
import { connect } from 'dva';

function Earnings({ dispatch,HomeData }){
  return(
    <div>
      <h2>收益统计 {HomeData.notify_title}</h2>
    </div>
  )
}

function mapStateToProps(state) {
  const { HomeData } = state.Home;
  return {
    HomeData,
  };
}
export default connect(mapStateToProps)(Earnings);
