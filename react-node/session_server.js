const express= require('express')
const app = express()
const  session = require('express-session')//在express框架中使用session
app.use(express.static('./www'))
app.use(session({
	secret: 'hubwizApp', //为了安全性的考虑设置secret属性
	cookie: {maxAge: 1000*30 }, //设置过期时间
	resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
	saveUninitialized: false, //无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}))
app.get('/login',(req,res)=>{
    console.log(req.session)
    req.session.uid='wangyi'//往服务器里存值
    res.send('登录ok')
})




app.get('/test',(req,res,next)=>{
    let {uid}=req.session
    if(uid){
        next()
    }else{
        res.send('登录失效请重试')
    }
},(req,res)=>{
    console.log(req.session)
    res.send('测试ok')
})
app.listen(3000,()=>{
    console.log('server start')
})