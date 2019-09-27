const express=require('express')
const router=express.Router()
const userInfoModle=require('../../db/modle/userinfoModle')


router.post('/infofind',(req,res)=>{
  userInfoModle.find()
    .then((data)=>{
        res.send({err:89,msg:'查询ok',list:data})
    })
})
router.post('/infofindbyid',(req,res)=>{
  let {user_id}=req.body
  userInfoModle.find({user_id})
    .then((data)=>{
        res.send({err:89,msg:'查询ok',list:data})
    })
})

module.exports=router