import React from 'react';
// import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Table, Popconfirm } from 'antd';
import { Button } from 'antd/lib/radio';


  // 定义Productstable
  const Productstable = ({onDelete,products}) => {
    const columns=[{
        title:'Name',
        dataIndex:'name',
        key:'name',
      },{
        title:'Actions',
        render:(text,record) => {
          return(
            <Popconfirm title='Delete?' onConfirm={() => onDelete(record.id)} >
              <Button>Delete</Button>
            </Popconfirm>
          )
        },
        key:'action',
      }
    ]
    return(
      <Table
        dataSource={products}
        columns={columns}
        rowKey={record => record.id}
        >
      </Table>
    )
  }
  Productstable.propTypes={
    onDelete:PropTypes.func.isRequired,
    products:PropTypes.array.isRequired,
  };
  
export default Productstable;