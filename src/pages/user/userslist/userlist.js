import React,{Component} from 'react'
import {Card,Table ,Button,Pagination,Spin,Popconfirm,message} from 'antd'
import UpdataModle from '../userupdata/userupdata'
class Userlist extends Component{
  constructor(){
    super()
    this.state={
      dataSource:[],
      page:1,
      total:0,
      loading:true,
      pageSize:5,
      updateShow:false, //修改模态框额显示
      record:{
        "headimg": "1223",
        "name": "王五",
        "phone": "798789798",
        "ps": "465465",
        "us": "王五",
        "__v": 0,
        "_id": "5d809d4523b7003344e10b07"}  //要修改的数据
    }
  }
  columns=[
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '账户',
      dataIndex: 'us',
      key: 'us',
    },{
      title: '密码',
      dataIndex: 'ps',
      key: 'ps',
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
            <Button type='primary' size='small' onClick={this.updata.bind(this,record)}>修改</Button>
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
  updata=(record)=>{
    console.log=('xiu',record)
    this.setState({updateShow:!this.state.updateShow,record:record})
  }
  confirmDel=(id,us,ps)=>{
    console.log(id,us,ps)
    let {page,pageSize} =this.state
    this.$axios.post('/haha/admin/users/usersdel',{_id:id,us,ps})
    .then((data)=>{
      data=data.data
      if(data.err===0){
        message.success('删除ok')
        this.initdata(page,pageSize)
      }else{
        message.error('删除失败请重试')
      }
    })
  }
  pageChange=(page)=>{
    this.initdata(page,this.state.pageSize)
  }
  initdata=(page,pageSize)=>{
    this.setState({loading:true})
    this.$axios.post('/haha/admin/users/usersfind',{page,pageSize})
    .then((data)=>{
      data=data.data
      console.log(data)
      this.setState({dataSource:data.list,total:data.total,loading:false,record:data.list})
    })
  }
  componentDidMount(){
    this.initdata(this.state.page,this.state.pageSize)
  }
  refrash=()=>{
    console.log('456789798789',this)
    this.setState({updateShow:false})
  }
  render(){
    let {total,pageSize,loading,updateShow,record}=this.state
    console.log(this.state.dataSource)
    return(
      <Card  className='food-container'>
        <Spin tip="数据加载中"
          spinning={loading}
        > 
        {!false||<UpdataModle record={record} refrashfun={this.refrash}></UpdataModle>}
          <Table dataSource={this.state.dataSource}
           columns={this.columns}
           scroll={{y:300}} 
           pagination={false}
           />;
          </Spin>
           <Pagination simple defaultCurrent={1} total={total} pageSize={pageSize} onChange={this.pageChange}/>
      </Card>
    )
  }
}
export default Userlist