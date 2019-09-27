import React ,{ Component} from 'react';
import { Input,  message , Button} from 'antd';
import './index.less'
const InputGroup = Input.Group


class Update extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            type:'',
            slogan:'',
            price:'',
            img:'',
            _id:''
        }
    }
    componentDidMount(){
        let {name, type,slogan,price,img,_id} = this.props.info
        // console.log(name, type,slogan,price,img,_id)
        this.setState({name, type,slogan,price,img,_id})
    }
    render = ()=>{
        return (
            <div className = 'goodsUpdate-div'>
                <InputGroup className='goodsUpdate-iputGroup' >
                    <Input className = 'goodsUpdate-input'  addonBefore='名称' value={this.state.name} 
                        onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}
                    />
                    <br />
                     <select className = 'goodsUpdate-input'  value={this.state.type}   onChange={(e)=>{
                        this.setState({type:e.target.value})
                    }}>
                    <option value = '黑鲨游戏手柄'>黑鲨游戏手柄</option>
                    <option value = '黑鲨游戏耳机/适配器/数据线'>黑鲨游戏耳机/适配器/数据线</option>
                    <option value = '黑鲨游戏手机2'>黑鲨游戏手机2</option>
                    <option value = '黑鲨游戏壳/膜'>黑鲨游戏壳/膜</option>
                    <option value = '新品抢购'>新品抢购</option>
                </select>
                <br />
                    <Input className = 'goodsUpdate-input' addonBefore='描述' value={this.state.slogan} 
                    onChange={(e)=>{
                        this.setState({slogan:e.target.value})
                    }}/>
                    <br />
                    <Input className = 'goodsUpdate-input' addonBefore='价格' value={this.state.price} 
                    onChange={(e)=>{
                        this.setState({price:e.target.value})
                    }}/>
                    <br />
                    <input className = 'goodsUpdate-input' type='file' ref='file' />
                    <div className='goodsUpdate-img'>
                    <img width={100}  src={this.state.img} />
                    </div>
                    <br />
                    <Button  onClick = {this.upload} type="primary" icon="arrow-up">上传图片</Button>
                <div className = 'goodsUpdate-button'>
                <Button type='primary' onClick = {this.props.back}>返回</Button><Button type='danger' onClick = {this.sbumit}>提交</Button>
                </div>
                </InputGroup>
                
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
        let { name , price , img , slogan , type,_id} = this.state
        // console.log( name , price , img , desc , foodType)
        
        if(img === ''){
            message.error('请上传图片')
        }else{
            this.$axios.post('/haha/admin/food/update',{name , price , img , slogan, type,_id})
        .then((data)=>{
            // console.log(data)
            if(data.data.err === 1){
                message.success('添加成功',1,()=>{
                    this.props.back()
                })
            }else{
                message.error('添加失败',1)
            }
        })
        }
        
    }
}
export default Update