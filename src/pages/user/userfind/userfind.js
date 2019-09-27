import React, { Component } from 'react'
import {Card,Table ,Button,Pagination,Spin,Popconfirm,message} from 'antd'
class Userfind extends Component{
  constructor(){
    super()
    this.state={
      textvalue:'',
      dataSource:[],
      loading:false,
    }
  }
  columns=[
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      width:'100'
    },{
      title: '账户',
      dataIndex: 'us',
      key: 'us',
      width:'200'
    },{
      title: '密码',
      dataIndex: 'ps',
      key: 'ps',
      width:'100'
    },{
      title: '头像',
      dataIndex: 'headimg',
      key: 'headimg',
      render(data){
        return(
            <img width="50px" height="50px" src={data}/>
        )
      }
    },{
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
    },{
      title: '操作',
      key: 'action',
      render:(txt,record)=>{
        return(
          <div>
            <Button type='primary' size='small'>修改</Button>
            <Popconfirm
              title='你确定要删除吗?'
              onConfirm={this.confirmDel.bind(this,record._id,record.us,record.ps)}
            >
            <Button type='danger' size='small'>删除</Button>
            
            </Popconfirm>
            <Button type='primary' size='small' onClick={this.caozuo.bind(this,record._id)}>操作</Button>
          </div>
        )
      }
    },
  ]
  caozuo=(id)=>{
    console.log(id)
    window.localStorage.setItem('user_id',id)
    this.props.history.push('/admin/user/info')
  }
  confirmDel=(id,us,ps)=>{
    console.log(id,us,ps)
    this.$axios.post('/haha/admin/users/usersdel',{_id:id,us,ps})
    .then((data)=>{
      data=data.data
      if(data.err===0){
        message.success('删除ok')
        this.find()
      }else{
        message.error('删除失败请重试')
      }
    })
  }
  find=()=>{
    this.setState({loading:true})
    console.log(74108520)
    let{textvalue}=this.state
    this.$axios.post('/haha/admin/users/find',{text:textvalue})
    .then((data)=>{
      console.log(data)
      data=data.data
      if(data.err === 0){
        this.setState({dataSource:data.list})
        this.setState({loading:false})
      }
    })

  }
  render(){
    let{textvalue,loading}=this.state
    return(
      <div>
        <input type="text" value={textvalue} onChange={(e)=>{
              this.setState({textvalue:e.target.value})
            }} placeholder='请输入用户名或账户'/>
        <button onClick={this.find}>搜索</button>
        <Card>
          <Spin tip="数据加载中"spinning={loading}>
            <Table dataSource={this.state.dataSource}
            columns={this.columns}
            scroll={{y:300}} 
            pagination={false}
            />;
          </Spin> 

        </Card>
      </div>
    )
  }
}
export default Userfind