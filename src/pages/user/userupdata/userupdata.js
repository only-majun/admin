import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message}from 'antd'
import  './userupdata.less'

class updateModel extends Component{
  constructor(props){
    super(props)
    console.log('465798',props)
    this.state =this.props.record
  }
  submit=()=>{
    let {_id,name,ps,us,headimg,phone}=this.state
    console.log(_id,name,ps,us,headimg,phone)
    this.$axios.post('/haha/admin/users/update',{_id,name,ps,us,headimg,phone})
    .then((data)=>{
      console.log(data)
      data=data.data
      console.log(this)
      if(data.err === 0){
        console.log(456456)
        this.props.refrashfun()
      }
      
    })
  } 
  render(){
    let rootPath='http://localhost:8080'
    // console.log('4654',this)
    // console.log('start',this.state)
    let {name,us,ps,headimg,phone}=this.state
 
    return(
      <div className='updateModel'>
          <Card className='card'>
            <input type="text" value={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/>
             <input type="text" value={us} onChange={(e)=>{
              this.setState({us:e.target.value})
            }}/>
            <input type="text" value={ps} onChange={(e)=>{
              this.setState({ps:e.target.value})
            }}/>
             
            <hr/>

            <img   src={rootPath+headimg} alt=""/>
            <input type="file" ref='img'/>
            <button onClick={this.upload }>上传</button>
            <hr/>
            <input type="text" value={phone} onChange={(e)=>{
              this.setState({phone:e.target.value})
            }}/><br/>
            <button onClick={this.submit}>修改</button>
          </Card>
      </div>
    )
  }
}
/*
1.是一个模态框
2.显示默认内容
3.修改内容
4.点击提交 关闭模态框 刷新原始页面
*/ 
export default  updateModel