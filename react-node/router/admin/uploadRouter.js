const express=require('express')
const multer=require('multer')
const fs=require('fs')
const path=require('path')
const router=express.Router()
/**
 * @api {post} /admin/file/upload 文件上传
 * @apiName upload
 * @apiGroup /file
 *
 * @apiParam {String} img   formdata 格式图片
 * @apiParam {String} token   令牌
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {String}  imgpath   返回图片所在的相对路径
 */

 router.post('/upload',multer().single('img'),(req,res)=>{
     let {buffer,mimetype}=req.file
     let filename=(new Date()).getTime()+parseInt(Math.random()*9999)+parseInt(Math.random()*2354564545)
     let extname=mimetype.split('/')[1]
     let dir=path.join(__dirname,'../../www/images')
     let resPath=`http://10.9.22.247:8000/public/images/${filename}.${extname}`
     fs.writeFile(`${dir}/${filename}.${extname}`,buffer,(err)=>{
         console.log(err)
         if(err){
            res.send({err:-1,msg:'上传失败哦！'})
         }else{
             res.send({err:0,msg:'ok',imgpath:resPath})
         }
     })
 })
 module.exports=router