const express=require('express')
const mongodb=require('./db/connect')
const app=express()
const path=require('path')
const middleware=require('./middleware/middleware')
const cors=require('cors')
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    next()
})
const bodyPareser=require('body-parser')
app.use(bodyPareser.urlencoded({extended:false}))
app.use(bodyPareser.json())
app.use('/public',express.static(path.join(__dirname,'./www')))
const AdminUser=require('./router/admin/userrouter')
const AdminUsers=require('./router/admin/usersRouter')
const AdmininfoUsers=require('./router/admin/usersinfoRouter')
const AdminFlie=require('./router/admin/uploadRouter')

const AdminCarts= require('./router/admin/cartsRouter')
const usersInfoRouter= require('./router/admin/usersInfoRouter')

const AdminFood=require('./router/admin/foodRouter')

app.use('/admin/user',AdminUser)//登陆接口
// app.use('/admin/users',middleware.tokenMiddleware,AdminUsers)
//app.use('/admin/users',AdminUsers)
// app.use('/admin/users',middleware.tokenMiddleware,AdminUsers)

app.use('/admin/users',middleware.tokenMiddleware,AdminUsers)   
app.use('/admin/users',middleware.tokenMiddleware,AdmininfoUsers)
app.use('/admin/infouser',middleware.tokenMiddleware,usersInfoRouter)
app.use('/admin/file',AdminFlie)


app.use('/admin/carts',middleware.tokenMiddleware,AdminCarts)//接入购物车管理路由

app.use('/admin/food',middleware.tokenMiddleware,AdminFood)//接入商品管理路由



app.listen(8000,()=>{
    console.log('server start')
})