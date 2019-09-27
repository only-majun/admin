import React , { Component } from 'react';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , message , Button} from 'antd';
import './index.less'

const InputGroup = Input.Group
class GoodsAdd extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            type:'黑鲨游戏手柄',
            slogan:'',
            price:'',
            img:'',
            rex:false
        }
    }
    render = ()=>{
        
        return (
            <div className = 'goodsAdd'>
                <InputGroup className='goodsAdd-iputGroup' >
                    <Input className = 'goodsAdd-input'  addonBefore='名称' value={this.state.name} 
                        onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}
                    />
                     <select className='goodsAdd-input'  value={this.state.type}   onChange={(e)=>{
                        this.setState({type:e.target.value})
                    }}>
                    <option value = '黑鲨游戏手柄'>黑鲨游戏手柄</option>
                    <option value = '黑鲨游戏耳机/适配器/数据线'>黑鲨游戏耳机/适配器/数据线</option>
                    <option value = '黑鲨游戏手机2'>黑鲨游戏手机2</option>
                    <option value = '黑鲨游戏壳/膜'>黑鲨游戏壳/膜</option>
                    <option value = '新品抢购'>新品抢购</option>
                </select>
                    <Input className = 'goodsAdd-input' addonBefore='描述' value={this.state.slogan} 
                    onChange={(e)=>{
                        this.setState({slogan:e.target.value})
                    }}/>
                    <Input className = 'goodsAdd-input'  prefix="￥" suffix="RMB" value={this.state.price} 
                    onBlur = {(e)=>{
                        console.log()
                        if(e.target.value.match(/^[0-9]+(\.)?[0-9]+$/g)){
                            this.setState({rex:true})
                        }else{
                            e.target.value = ''
                            message.error('价格错误',1)
                        }
                    }}
                    onChange={(e)=>{
                            this.setState({price:e.target.value})
                        
                        
                    }}/>
                    <input className = 'goodsAdd-input' type='file' ref='file' />
                    <div className = 'goodsAdd-img'>

                    <img  width={100} src={this.state.img} />
                    </div>
                    
                    <Button onClick = {this.upload} type="primary" icon="arrow-up">上传图片</Button>
                    
                <div className='goodsUpdate-button'>
                <Button onClick = {this.sbumit}>提交</Button>
                </div>
                </InputGroup>
                <br />
            </div>
        )
    }
    upload = ()=>{
        // console.log(1)
        let file = this.refs.file.files[0]
        let fromData = new FormData()
        fromData.append('img',file)
        this.$axios.post('/haha/admin/file/upload',fromData)
        .then((data)=>{
            console.log(data)
            if(data.data.err === 0){
                message.success('图片上传成功',1,()=>{
                    // console.log(data.data.imgpath)
                    // let _path = 'http;//10.9.22.247:8000'+data.data.imgpath
                    this.setState({img:data.data.imgpath})
                    // console.log(this.state.img)
                })
                
            }else{
                message.error('文件上传失败',1)
            }
        })
    }
    sbumit=()=>{
        // console.log(this.state)
        let { name , price , img , slogan , type} = this.state
        // console.log( name , price , img , desc , foodType)
        
        if(img === ''){
            message.error('请上传图片')
        }else{
         if(this.state.rex ){
             this.setState({rex:false})
            this.$axios.post('/haha/admin/food/add',{name , price , img , slogan, type})
            .then((data)=>{
                console.log(data)
                if(data.data.err === 1){
                    message.success('添加成功',1)
                }else{
                    message.error('添加失败',1)
                }
            })
         }else{
             message.error('请输入价格',1)
         }
        }
        
    }
}
export default GoodsAdd