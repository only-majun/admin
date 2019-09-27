import React , { Component } from 'react';
import {Table, Divider, Tag ,Input , Card , Pagination  , Popconfirm , Button} from 'antd';
import './index.less' 
import Update from '../goodsUpdate/index.js'
import { Agent } from 'http';

const { Column, ColumnGroup } = Table;
const { Search } = Input;
class GoodsList extends Component {
    constructor(){
        super()
        this.state = {
            page:1,
            pageSize:7,
            total:0,
            sel:'all',
            foodType:0,
            list:[],
            updata:false,
            infos:''
        }
    }
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            width:200,
            align:'center'
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            width:200,
            align:'center',
            // filters:[
            //     {
            //         text: '黑鲨游戏手柄',
            //         value: '黑鲨游戏手柄',
            //     },
            //     {
            //         text: '黑鲨游戏耳机/适配器/数据线',
            //         value: '黑鲨游戏耳机/适配器/数据线',
            //     },
            //     {
            //         text: '黑鲨游戏手机2',
            //         value: '黑鲨游戏手机2',
            //     },
            //     {
            //         text: '黑鲨游戏壳/膜',
            //         value: '黑鲨游戏壳/膜',
            //     },
            //     {
            //         text: '新品抢购',
            //         value: '新品抢购',
            //     },
            // ],
            // onFilter: (value, record) => record.type.indexOf(value) === 0,
            // // sorter: (a, b) => a.type.length - b.type.length,
            // // sortDirections: ['descend'],
        },
        {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            width:300,
            align:'center',
            render(data) {
                // console.log(data)
                return <img src={data} width={100} alt="" />
            }
        },
        {
            title: '描述',
            dataIndex: 'slogan',
            key: 'slogan',
            width:400,
            align:'center'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            width:100,
            align:'center',
            // sorter: (a, b) => a.type.length - b.type.length,
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            // width:200,
            align:'center',
            render: (a, b) => {
                //   console.log(a,b)
                return (
                    <span>
                        <Button type='primary' size='small' onClick = {this.update.bind(this,b)} >修改</Button>
                        <Popconfirm
                            title="确定是否删除?"
                            onConfirm={this.confirmDel.bind(this,b._id)}
                            // onCancel={cancel}
                            okText="是"
                            cancelText="否"
                        >
                            <Button type='danger' size='small'>删除</Button>
                        </Popconfirm>
                        
                    </span>
                )
            }
        }
    ];
    update=(b)=>{
        this.setState({updata:true})
        // console.log(b)
        this.setState({infos:b})
    }
    confirmDel(id){
        // console.log(id);
        this.$axios.post('/haha/admin/food/del',{_id:id})
        .then((data)=>{
            // console.log(data)
            if(data.data.err === 1){
                let { page , pageSize,total } = this.state
             
                if(this.state.list.length ==1){
                     page=--page
                }
                // console.log('页面修改',page)
                this.initData(page,pageSize)
            }
        })
    }
    pageChange = (_page,pageSize)=>{
            // console.log(_page)
            this.setState({page:_page})
            this.initData(_page,this.state.pageSize)
        
    }
    render(){
        let {pageSize,total,page,sel} = this.state
        return (
            <Card className = 'addList-card'>
                
                <div className='addList-div'>
                <Pagination  className='addList-pagination' showQuickJumper pageSize = {pageSize} defaultCurrent={1} total={total} onChange={this.pageChange}current />
                {/*       */}
                <Search
                    className='addList-search'
                    placeholder="点击搜索"
                    // enterButton="搜索"
                    enterButton 
                    size="small"
                    onSearch={this.search}
                    />
                <select className='addList-select' value = {sel} onChange = {this.selChange}>
                    <option value = 'sel'>全部</option>
                    <option value = '黑鲨游戏手柄'>黑鲨游戏手柄</option>
                    <option value = '黑鲨游戏耳机/适配器/数据线'>黑鲨游戏耳机/适配器/数据线</option>
                    <option value = '黑鲨游戏手机2'>黑鲨游戏手机2</option>
                    <option value = '黑鲨游戏壳/膜'>黑鲨游戏壳/膜</option>
                    <option value = '新品抢购'>新品抢购</option>
                </select>
                
                </div>
                
            <Table
            bordered = {true}
            dataSource={this.state.list} 
            columns={this.columns} 
            scroll={{ y: 500 }} 
            pagination={false} />
            
            {!this.state.updata || <Update info = {this.state.infos} back = {this.back}></Update>}
            </Card>
            
        )
    }
    search = (value)=>{
        // console.log(value)
        this.$axios.post('/haha/admin/food/findByKw',{kw:value})
        .then((data)=>{
            // console.log(data)
            if(data.data.err === 5){

                this.setState({page:1,list:data.data.list,total:data.data.length})
            }
        })
    }
    back = ()=>{
        console.log(this.state)
        this.initData(this.state.page,this.state.pageSize)
        this.setState({updata:false})
    }
    selChange = (e)=>{
        // console.log(e.target.value)
        this.setState({page:1,sel:e.target.value})
        let {pageSize,sel} = this.state
        let _sel = e.target.value
        if(_sel === 'sel'){
            _sel = ''
        }
        this.initData(1,pageSize,_sel)
    }
    componentDidMount(){
        let {page,pageSize} = this.state
        this.initData(page,pageSize);
        // console.log(1)
    }
    initData(page,pageSize,type){
        this.$axios.post('/haha/admin/food/findByTypePage',{_page:page,_pageSize:pageSize,_foodType:type})
       .then((data)=>{
        //    console.log(data)
           if(data.status === 200){
               if(data.data.err === 5){
              
                    this.setState({page:page,list:data.data.list,total:data.data.length})
               }
           }
       })
    }

}
export default GoodsList