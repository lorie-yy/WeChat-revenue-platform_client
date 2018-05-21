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

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
