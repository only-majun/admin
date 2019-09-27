import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import  {withRouter} from 'react-router-dom'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from  'redux'
import './index.less'
class Token extends Component{
  back=()=>{
    //1.将模态框隐藏
    //2.路由转跳登录页面
    this.props.changeModelState()
    this.props.history.push('/login')
  }
  render(){
    console.log(this)
      return(
        <Fragment>
          {!this.props.modelState||
           <div className='tokenmodel'>
           
              <div className='card'>
                 <p>用户信息丢失请返回登陆</p>
                  <button onClick={this.back}>返回登录</button>
              </div>
           
         
        </div>
          }
        </Fragment>
        
      
      )
  }
}
// export default  connect(state=>state,(dispatch)=>{
//   return {
//     test(){
//       dispatch(ActionCreator.changeModelState())
//     }
//   }
// })(Token)
///进行俩次高阶组件处理     withRouter 处理出现  history函数  
 ///                         connect  props 里面出现全局state值  和dispatch方法 
 ///                   bindActionCreator 处理props直接会有ActionCreator方法  直接调用
 //
let WITH = withRouter(Token)
export default  connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(WITH)