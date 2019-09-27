import React, { Component } from 'react'
import { Collapse,Spin,Table } from 'antd';


const { Panel } = Collapse;

class Userinfo extends Component{
  constructor(){
    super()
    this.state={
      text:'789798',
      loading:false,
      addressdata:[],
      indentdata:[],
      youhuimadata:[],
      youhuidata:[],
      yuyuedata:[]
    }
  }
  columns=[
    {
      title: '收件人姓名',
      dataIndex: 'addressname',
      key: 'addressname',
    },{
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
    },{
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },{
      title: '详细地址',
      dataIndex: 'desc',
      key: 'desc',
    }
  ]
  columns1=[
    {
      title: '商品图片',
      dataIndex: 'img',
      key: 'img',
      render(data){
        return(
            <img width="50px" height="50px" src={data}/>
        )
      }
    },{
      title: '商品名字',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '价格 ',
      dataIndex: 'price',
      key: 'price',
    },{
      title: '数量',
      dataIndex: 'number',
      key: 'number',
    }
  ]
  columns2=[
    {
      title: '优惠码',
      dataIndex: 'num',
      key: 'num',
    },{
      title: '立减',
      dataIndex: 'reduce',
      key: 'reduce',
    },{
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    }
  ]
  columns3=[
    {
      title: '优惠劵',
      dataIndex: 'num',
      key: 'num',
    },{
      title: '消费',
      dataIndex: 'enough',
      key: 'enough',
    },{
      title: '立减',
      dataIndex: 'reduce',
      key: 'reduce',
    },{
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    }
  ]
  columns4=[
    {
      title: '商品名字',
      dataIndex: 'num',
      key: 'num',
    },{
      title: '预约数量',
      dataIndex: 'enough',
      key: 'enough',
    },{
      title: '发售日期',
      dataIndex: 'reduce',
      key: 'reduce',
    }
  ]
  initdata=()=>{
    this.$axios.post('/haha/admin/infouser/infofindbyid',{user_id:"5d804889f77f1941a0431269"})
    .then((data)=>{
      data=data.data
      console.log(data)
      this.setState({addressdata:data.list[0].address,indentdata:data.list[0].indent,youhuimadata:data.list[0].yougouma,youhuidata:data.list[0].youhui,yuyuedata:data.list[0].yuyue})
      console.log(this.state.addressdata)
    })
  }
  componentDidMount(){
    this.initdata()
  }
 render(){
   let {text,loading,addressdata,indentdata,youhuimadata,youhuidata,yuyuedata}=this.state
   console.log('798',addressdata)
  return(
    <Collapse
    >
    <Panel header="收货地址" key="1">
        <Spin tip="数据加载中"
          spinning={loading}
        > 
          <Table dataSource={addressdata}
           columns={this.columns}
           pagination={false}
           />
        </Spin>
    </Panel>
    <Panel header="订单管理" key="2">
        <Spin tip="数据加载中"
          spinning={loading}
        > 
          <Table dataSource={indentdata}
           columns={this.columns1}
           pagination={false}
           />
        </Spin>
    </Panel>
    <Panel header="优购码" key="3">
        <Spin tip="数据加载中"
          spinning={loading}
        > 
          <Table dataSource={youhuimadata}
           columns={this.columns2}
           pagination={false}
           />
        </Spin>
    </Panel>
    <Panel header="优惠劵" key="4">
        <Spin tip="数据加载中"
          spinning={loading}
        > 
          <Table dataSource={youhuidata}
           columns={this.columns3}
           pagination={false}
           />
        </Spin>
    </Panel>
    <Panel header="预约" key="5">
        <Spin tip="数据加载中"
          spinning={loading}
        > 
          <Table dataSource={yuyuedata}
           columns={this.columns4}
           pagination={false}
           />
        </Spin>
    </Panel>
    
  </Collapse>
  )
 }
}
export default Userinfo