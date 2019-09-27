const express=require('express')
const router=express.Router()
const cartsModel=require('../../db/modle/cartsModel')

/**
 * @api {post}  /admin/carts/findByTypePage  分类+分页查询
 * @apiName  findByTypePage
 * @apiGroup /admin/carts
 *
 *  @apiParam {String} foodtype 关键字  
 *  @apiParam {String} page 关键字
 *  @apiParam {String} pagesize 关键字
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 * @apiSuccess {Array}  list 查询数据
 */
//分类查询
router.post('/findByTypePage',(req,res)=>{
    let {name,page,pagesize}=req.body;
    let total=0;
    let typeSearch={}
    if(name){
        typeSearch.name=name
    }
    cartsModel.find(typeSearch)
    .then((data)=>{  //mromise 链式调用
        total=data.length
       //res.send({err:0,msg:'查询成功',list:data,total:total})
        return  cartsModel.find(typeSearch).skip((page-1)*pagesize).limit(Number(pagesize)).sort({price:1})
    })
    .then((data)=>{
        //console.log(data)
        res.send({err:0,msg:'查询成功',list:data,total:total})
    })
})

/**
 * @api {post}  /admin/food/updata  修改
 * @apiName  updata
 * @apiGroup /admin/food
 *
 *  @apiParam {String} _id
 *  @apiParam {String} name 关键字
 *  @apiParam {String} desc 关键字
 * @apiParam {String} img 关键字
 * @apiParam {String} price 关键字
 * @apiParam {String} foodtype 关键字
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 * @apiSuccess {Array}  list 查询数据
 */
//商品的修改
router.post('/update',(req,res)=>{
    let {_id,carts}=req.body;
    //console.log(req.body)
    cartsModel.updateOne({_id:_id},{carts})
    .then((data)=>{
        console.log(data);
        res.send({err:0,msg:'修改成功'});
    })
})





/**
 * @api {post} /admin/users/usersdel  菜品删除
 * @apiName usersdel
 * @apiGroup /users
 *
 * @apiParam {String} us 账户
 * @apiParam {String} _id id
 * @apiParam {String} ps 密码
 *
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  错误信息
 */




router.post('/usersdel',(req,res)=>{
    let {_id,us,ps}=req.body
    usersModel.deleteOne({_id:_id,us,ps})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'删除ok'})
    })
})
/**
 * @api {post} /admin/users/usersupdate  菜品修改
 * @apiName usersupdate
 * @apiGroup /users
 *
 * @apiParam {String} _id id
 * @apiParam {String} name 名字
 * @apiParam {String} us 账户
 * @apiParam {String} ps 密码
 * @apiParam {String} headimg 头像
 * @apiParam {String} phone 手机
 *
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  错误信息
 */

//菜品修改
router.post('/update',(req,res)=>{
    let {_id,name,ps,headimg,phone}=req.body
    usersModel.updateOne({_id},{name,ps,headimg,phone})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'修改成功'})
    })
})

/**
 * @api {post} /admin/users/usersfind  用户查询
 * @apiName usersfind
 * @apiGroup /users
 *
 * @apiParam {Number} page 页数
 * @apiParam {Number} pageSize 每页规格
 *
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  成功信息
 * @apiSuccess {Array} list  查询数据
 * @apiSuccess {Number} total  数据数量
 * 
 */
router.post('/usersfind',(req,res)=>{
    let {page,pageSize}=req.body
    usersModel.find()
    .then((data)=>{
        total=data.length
        return usersModel.find().skip((page-1)*pageSize).limit(Number(pageSize)).sort({price:-1})
    })
    .then((data)=>{
        res.send({err:0,msg:'查询ok',list:data,total:total})
    })
})


/**
 * @api {post} /admin/users/usfind  通过us查询用户信息
 * @apiName usfind
 * @apiGroup /users
 * @apiParam {String} us   账户
 *
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询数据
 */


router.post('/usfind',(req,res)=>{
  let {us}=req.body
    usersModel.find({us})
    .then((data)=>{
        res.send({err:0,msg:'查询ok',list:data})
    })
})

/**
 * @api {post} /admin/users/namefind  通过id查询菜品信息
 * @apiName namefind
 * @apiGroup /users
 *
 * @apiParam {String} name 用户名
 *
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询数据
 */
router.post('/nameIDfind',(req,res)=>{
    let {name}=req.body
    usersModel.find({name})
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
module.exports=router