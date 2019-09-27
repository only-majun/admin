import React,{Component} from 'react';
import LeftNav from '../../components/Leftnav/index'
import {Button} from  'antd'
import './index.less'
import   {withRouter}   from 'react-router-dom'
class Admin extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      img:''
    }
  }
  goLogin=()=>{
    // localStorage.setItem('name','')
    // localStorage.setItem('img','')
    // localStorage.setItem('token','')
    this.props.history.push('/login')
  }
  componentDidMount(){
    this.setState({name:localStorage.getItem('name'),img:localStorage.getItem('img')})
  }
  render(){
    return(
      <div className="admin">
        <div className="admin_left">
          <LeftNav></LeftNav>
        </div>
        <div className="admin_right">
          <div className='admin_right_top'>
            {this.state.name}
            <img src={this.state.img} width='80' height='80' ></img>
            <Button onClick={this.goLogin}>退出登陆</Button>
          </div>
          <div className='admin_right_center'>
            {this.props.children}
          </div>
          <div className='admin_right_footer'>  
            bottom
          </div>
        </div>
      </div>
    )
  }
}
export default    withRouter(Admin)