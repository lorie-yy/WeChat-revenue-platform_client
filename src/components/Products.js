import React from 'react';
import { connect } from 'dva';
// import PropTypes from 'prop-types';
// import { Table, Popconfirm } from 'antd';
// import { Button } from 'antd/lib/radio';
import Productstable from '../components/ProductsTable';


// 静态数据
// const products=[{name:'lyy',id:1},{name:'lorie',id:2}]

// function Products ({dispatch}) {
const Products = ({ dispatch,products }) => {

  function handleDelete(id){
    console.log(id)
    dispatch({
      type:'products/delete',
      payload:id
    })
  }
  return(
    <div>
      <h2>List of Productsssssssssssss</h2>
      <Productstable 
        onDelete={handleDelete} 
        products={products} 
      />
    </div>
  )
}

// connect是redux提供的一个函数，作用是将数据和组件连接起来，也就是所谓的向components组件传递数据。在这里我们传递了一个products参数，其实这是一个namespace名为products的model，当然数据最终是存储在store下面。也就是说，我们通过connect这个函数，可以直接拿到store里面的数据（model也是在store里面）；然后再Products这个组件上，接收一个参数，也就是connect高阶函数中取出的那个参数
export default connect(({ products }) => ({
  products,
}))(Products);
