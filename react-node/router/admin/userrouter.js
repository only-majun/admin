const express = require('express')
const jwt= require('jsonwebtoken')
let screat='sfjslfjslfkjsdkfjksdhfkshjfksh'
const router = express.Router()
const userModle=require('../../db/modle/uesModle')
/**
 * @api {post} /admin/user/login 登录
 * @apiName login
 * @apiGroup /user
 *
 * @apiParam {String} us 
 * @apiParam {String} ps  
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {String}  token   令牌
 */

router.post('/login',(req,res)=>{
    let {us,ps}=req.body
    let token=jwt.sign({us:us},screat,{expiresIn:60*60})
    userModle.find({us})
    .then((data)=>{
      //console.log(data,data.ps)
      if(ps==data[0].ps){
        console.log(data[0].username,data[0].ps)
        res.send({err:0,msg:'登录成功！',token:token,img:data[0].userimg,name:data[0].username})
      }else{
        res.send({err:-550,msg:'登录失败！'})
      }
    })
    .catch((err)=>{
      res.send({err:-880,msg:'内部错误请重试'})
    })
  })
/**
 * @api {post} /admin/user/reg 注册
 * @apiName reg
 * @apiGroup /user
 *
 * @apiParam {String} us 
 * @apiParam {String} ps  
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 */
router.post('/reg',(req,res)=>{
    let {us,ps}=req.body
    userModle.insertMany({us,ps})
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
  module.exports =  router