import React from 'react';
import { connect } from 'dva';

function Earnings({ dispatch,EarningsData,HomeData }){
  return(
    <div>
      <h2>今日粉丝 {EarningsData.todayfans}</h2>
      <h2>今日收益 {EarningsData.todayprofit}</h2>
      <h2>总粉丝数 {EarningsData.totalfans}</h2>
      <h2>总收益 {EarningsData.totalprofit}</h2>
      <h2>可提现 {EarningsData.takemoney}</h2>
      <h2>过去七天日期 {EarningsData.xdata}</h2>
      <h2>过去七天收益 {EarningsData.seriesdata}</h2>
      <h2>过去七天粉丝 {EarningsData.seriesdatafans}</h2>
    </div>
  )
}

function mapStateToProps(state) {
  const { EarningsData } = state.Earnings;
  return {
    EarningsData,
  };
}
export default connect(mapStateToProps)(Earnings);
