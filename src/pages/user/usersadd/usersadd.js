import React,{Component} from 'react'
import { Card ,Button, message} from 'antd'
import './usersadd.less'
class Useradd extends Component{
  constructor(){
    super()
    this.state={name:'',us:'',headimg:'',ps:"",phone:""}
 }
 submit=()=>{
  let {name,ps,headimg,us,phone} = this.state
  console.log({name,ps,headimg,us,phone})
  if(headimg !== ''){
      this.$axios.post('/hehe/admin/users/usersadd',{name,ps,headimg,us,phone})
      .then((data)=>{
        data=data.data
         if(data.err==0){
            message.success('add ok')
         }
      })
  }else{
     message.error('请先上传图片')
  }

 
}
upload=()=>{
  let file=this.refs.file.files[0]  
  let formdata= new FormData()
  formdata.append('img',file)
  console.log("465",formdata,file)
  this.$axios.post('/haha/admin/file/upload',formdata)
  
  .then((data)=>{console.log(data)
   data=data.data
     if(data.err === 0){
        this.setState({headimg:data.imgpath})
        console.log(data)
     }else{
        message.error('文件上传失败请重试')
     }
  })
 }
 render(){
  let {name,us,headimg,ps,phone} = this.state
 return(
   <Card title='用户添加'>
       <span className='span'>用户名:</span><input type="text" value={name} onChange={(e)=>{
          this.setState({name:e.target.value})
       }}/><br/>
       <span className='span'>账户</span><input type="text" value={us} onChange={(e)=>{
          this.setState({us:e.target.value})
       }}/><br/>
       <span className='span'>密码</span><input type="text" value={ps} onChange={(e)=>{
          this.setState({ps:e.target.value})
       }}/><br/>
       <span className='span'>头像:</span><input type="file" ref='file'/><br/>
       <button onClick={this.upload}>上传</button>
       <img src={headimg} withd='80' height='80' alt=""/>
       <span className='span'>手机:</span><input type="text" value={phone} onChange={(e)=>{
          this.setState({phone:e.target.value})
       }}/><br/>
      
       <Button type='primay' onClick={this.submit}>提交</Button>
   </Card>
 )
}
}
export default Useradd