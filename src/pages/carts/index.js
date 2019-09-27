import React,{Component, Fragment} from 'react';
import {Card,Table,Button,Icon,Popconfirm,Pagination} from 'antd'
import './index.less'
class Carts extends Component{
    constructor(){
        super()
        this.state={
            lists:[],
            type:'',
            total:'',
            page:1,
            datas:'',
            names:'',
            value:''
        }
    }
    columns=[
        {
          title: '商品名',
          dataIndex: 'name',
          key: 'name',
          width:200,
          fixed:'left'
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
          width:200,
        },
        {
          title: '图片',
          dataIndex: 'img',
          key: 'img',
          width:200,
          render(data) {
          //  console.log('img',data)
            return( <img width = '80' height='60'src={data}/>)
          },
        },
        {
          title: '描述',
          dataIndex: 'slogan',
          key: 'slogan',
          width:300
        },
        {
          title: '数量',
          dataIndex: 'number',
          key: 'number',
          width:300
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
          width:100
        },
        {
          title:'操作',
          width:200,
          dataIndex:'action',
          key:'action',
          fixed:'right',
          render:(txt,record,index)=>{
           //console.log('删除数据',txt,record,index)
            return(
              <div>
                <Button type='primary' size='small'>修改</Button>
                <Popconfirm
                  title='你确定要删除嘛？'
               onConfirm={this.delshopping.bind(this,this.state.type._id,index)}
                >
                  <Button type='danger' size='small'>删除</Button>
                </Popconfirm>
              </div>
            )
          },
        }
      ];
    delshopping=(_id,index)=>{
     console.log('删除',_id,index)
      let list= this.state.list
      list.splice(index,1)
      let carts =list
     console.log(carts)
      this.$axios.post('/haha/admin/carts/update',{_id,carts})
      .then((data)=>{
        console.log(data)
        if(data.data.err === 0){
          this.initList()
        }
      })
    }
    componentDidMount(){
      let {page} =this.state
       this.initList(page)
    }
    initList=(page)=>{
     console.log(this.state.value)
      this.$axios.post('/haha/admin/carts/findByTypePage',{name:this.state.value,page:page,pagesize:1})
      .then((data)=>{
          console.log(data.data)
         // this.setState({})
         if(data.data.total===0){
           this.setState({total:data.data.total,lists:data.data.list,datas:'',names:''})
         }else{
            this.setState({total:data.data.total,lists:data.data.list,datas:data.data.list[0].carts,names:data.data.list[0].name})
         }
         
         
         
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    pageChange=(page,pageSize)=>{
      console.log(page,pageSize)
      this.initList(page)
    }
    render(){ 
      let {page,lists,datas,names}=this.state;
        return (
            <Card>
              用户名:<span>{names}</span><input type='text' value={this.state.value}
              onChange={(e)=>{
                console.log(e.target.value)
                this.setState({value:e.target.value})
              }}
              ></input><Button onClick={this.initList.bind(this,page)}>搜索用户名</Button>
               <Table
               dataSource={datas}
               className='test'
               columns={this.columns} 
               scroll={{x:1400 ,y:500}}
               pagination={false}
               >
               </Table>
               <Pagination simple defaultCurrent={1} total={this.state.total} pageSize={1} onChange={this.pageChange} />
            </Card>
        )
    }
}
export default Carts 