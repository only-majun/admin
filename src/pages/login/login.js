import React,{Component} from 'react'
import {Form,Input,Button,Card,Icon,message} from 'antd'
import './login.less'
class Admin extends Component{
    login=()=>{
       // let result =this.props.form.getFieldsValue()  //获取input的值
        this.props.form.validateFields((err,data)=>{  //校验并获取一组输入框的值
            console.log(err,data)
            if(err){
                //前端验证有误  
                message.error('输入信息有误')
            }else{
                //前端验证成功调用ajax接口
                this.$axios.post('/haha/admin/user/login',data)
                .then((resolve)=>{
                //   console.log(resolve)
                    if(resolve.data.err === 0){
                        localStorage.setItem('token',resolve.data.token)
                        localStorage.setItem('img',resolve.data.img)
                        localStorage.setItem('name',resolve.data.name)
                        message.success('登陆成功1秒后跳转',1,()=>{
                            this.props.history.push('/admin/food')
                        })
                    }else{
                        message.error(resolve.data.msg)
                    }
                })
            }
        })
      //  console.log(result)
    }
    // Enter=(a,b,c)=>{
    //     console.log(a,b,c)
    //   //  this.refs.cart.style.background='background: rgba(242, 247, 242,0.5)'
    // }
    // Out=(a,b,c)=>{
    //     console.log(a,b,c)
    //   //  this.refs.cart.style.background='background:rgba(65, 63, 63, 0.1)'
    //     console.log(this.refs.cart)
    // }
    render(){
        console.log(this)
        const { getFieldDecorator } = this.props.form;  //处理组件  接受俩个参数
        return(
            <div className='loginWarp'>
                            <Card className='login' onMouseEnter={this.Enter} onMouseOut={this.Out} ref='cart'>
                
                <Form.Item>
                    {getFieldDecorator('us',{
                        rules: [{ required: true, message: '不能为空' },
                        {max:16,message:'最长16位'},
                        {min:5,message:'最短5位'},
                    ],
                    })(//将表单和props 双向绑定
                         <Input
                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                     placeholder="Username"
                    />,
                    )}
                   {getFieldDecorator('ps',{
                       rules: [{ required: true, message: '不能为空' },
                       {max:16,message:'最长16位'},
                       {min:5,message:'最短5位'},
                   ],
                   })(//将表单和props 双向绑定
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                      />,
                    )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button"
                onClick={this.login}
                >
                        Log in
                    </Button>
                </Form.Item>

            </Card>
            </div>

        )
    }
}
 
export default Form.create()(Admin);  //高阶组件  处理组件props里面有form对象