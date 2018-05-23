import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Layout,Icon,Menu,Divider,Popover, Button } from 'antd';
import styles from './Layout.less';
const { Header, Content,Sider}= Layout
const { SubMenu}= Menu

class Main extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {  
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  

  render() {
    // console.log(this.props.location.pathname);
    const {children,HomeData}=this.props
    const menuSize={
      fontSize:'17px',
      margin:'10px 0'
    }
    const menuIcon={
      marginRight:'35px',
    }
    // const text=<span>欢迎来到收益平台</span>
    // const content=(
    //   <div>
    //     <p>这里是通知内容略略略略略略略略略，这里是通知内容略略略略略略略略略，这里是通知内容略略略略略略略略略。</p>
    //   </div>
    // )
    return(
      <Layout className={styles.pageContainer}>
        <Sider className={styles.sidebarMenu} width={230}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}
            collapsible
            collapsed={this.state.collapsed}
          ></div>
          {/* 菜单配置 */}
          <Menu style={{background:'#2C3749',}} 
            selectedKeys={[this.props.location.pathname]}
            theme="dark"
            mode="vertical"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
          >
            <Menu.Item key="/Earnings" style={menuSize} >
              <Link to='/Earnings'><span><Icon type="line-chart" style={menuIcon} />收益统计</span></Link>
            </Menu.Item>
            <Menu.Item key="/Products" style={menuSize} >
              <Link to='/Products'><span><Icon type="pay-circle-o" style={menuIcon}/>申请提现</span></Link>
            </Menu.Item>
            <Menu.Item key="/ApplyRecords" style={menuSize} >
              <Link to='/ApplyRecords'><span><Icon type="profile" style={menuIcon}/>申请记录</span></Link>
            </Menu.Item>
            <Menu.Item key="/HistoryTask" style={menuSize} >
              <Link to='/HistoryTask'><span><Icon type="schedule" style={menuIcon}/>历史任务</span></Link>
            </Menu.Item>
            <SubMenu key='sub1' title={<span style={menuSize}><Icon type="user-add" style={menuIcon}/>子商户</span>}>
              <Menu.Item key="/ChildEarnings" style={menuSize} >
                <Link to='/ChildEarnings'>子商户收益</Link>
              </Menu.Item>
              <Menu.Item key="/ChildApplyRecords" style={menuSize} >
                <Link to='/ChildApplyRecords'>子商户申请记录</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/ModifyPasswd" style={menuSize} >
              <Link to='/ModifyPasswd'><span><Icon type="key" style={menuIcon}/>修改密码</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.rightContainer}>
          <Header style={{ background: 'inherit', padding: 0,marginBottom:40 }}>
            <Icon style={{color:'#747474'}}
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div style={{float:'right',paddingRight:'20px',color:'#747474'}}>
              <div>
                <span>{HomeData.username}</span><Divider type="vertical" style={{background:'#747474'}} />
                <a href='/' className={styles.logout}>退出登录</a>
              </div>
            </div>
            <div style={{ background: '#fff',lineHeight:'45px',padding:'0 20px',}}>
              <Popover placement="bottomLeft" title={HomeData.notify_title} content={HomeData.notify_desc} trigger="hover" >
                <Button><Icon type='notification'></Icon>通知：</Button>
              </Popover>
            </div>
          </Header>
          <Content>
            <div style={{ margin: '24px 20px', padding: 24, background: '#fff', minHeight: 280 }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  // Home是对应的namespace，HomeData是对应的state
  const { HomeData } = state.Home;
  // console.log(HomeData)
  return {
    // 返回的HomeData，在function(HomeData){}中以参数的形式使用，在render中以this.props.HomeData的形式使用
    HomeData,
  };
}
// connect是redux提供的一个函数，作用是将数据和组件连接起来，也就是所谓的向components组件传递数据
export default connect(mapStateToProps)(Main);