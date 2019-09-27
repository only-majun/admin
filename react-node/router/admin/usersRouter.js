const express=require('express')
const router=express.Router()
const usersModel=require('../../db/modle/usersModel')

/**
 * @api {post} /admin/users/usersadd  用户添加
 * @apiName usersadd
 * @apiGroup /users
 *
 * @apiParam {String} name 用户名名
 * @apiParam {String} us 账户
 * @apiParam {String} ps 密码
 * @apiParam {String} headimg 用户头像
 * @apiParam {String} phone 用户手机
 *
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  错误信息
 */



router.post('/usersadd',(req,res)=>{
    let {name,us,ps,headimg,phone}=req.body
    usersModel.insertMany({name,us,ps,headimg,phone})
    .then((data)=>{
        if(data.length>0){
            res.send({err:0,msg:'添加ok'})
        }else{
            res.send({err:-1,msg:'添加nook'})
        }
    })
    .catch((err)=>{
        res.send({err:-880,msg:'内部错误请重试'})
    })
})

/**
 * @api {post} /admin/users/usersdel  用户删除
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
        if(data.deletedCount!==0){
            res.send({err:0,msg:'删除ok'})
        }else{
            res.send({err:-998,msg:'删除失败'})
        }
        console.log(data,deletedCount)
    })
})
/**
 * @api {post} /admin/users/usersupdate  用户修改
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
 * @api {post} /admin/users/usfind  通过id账户或用户名查询用户信息
 * @apiName usfind
 * @apiGroup /users
 *
 * @apiParam {String} text   账户/id/用户名
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询数据
 */


router.post('/find',(req,res)=>{
  let {text}=req.body
    usersModel.find({$or:[{name:text},{us:text}]})
    .then((data)=>{
        res.send({err:0,msg:'查询ok',list:data})
    })
})


module.exports=router