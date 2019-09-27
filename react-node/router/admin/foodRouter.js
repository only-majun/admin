const _express=require('express')
const _router=_express.Router();
const _foodModel=require('../../db/modle/foodMoudel')

//_router.post('/add',(_req,_res)=>{
//    _res.send("OOOOOK");
//})
//商品添加
 /**
 * @api {post} /admin/food/add   商品的添加
 * @apiName add
 * @apiGroup /food
 *
 * @apiParam {String}  name
 * @apiParam {String}  desc
 * @apiParam {String}  img
 * @apiParam {String}  price
 * @apiParam {String}  foodType
 * @apiParam {String}  _token 关键字
 *
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询的数据
 * @apiSuccess {String} token   令牌
 */
_router.post('/add',(_req,_res)=>{
    //接受前端数据   处理数据    返回结果
    //{name:"123",desc:"123",img:"123",price:"123",foodType:"123"}
    let {name,slogan,img,price,type}=_req.body;
    console.log(1)
    console.log(name,slogan,img,price,type)
    _foodModel.insertMany({name,slogan,img,price,type})
    .then((_data)=>{
        if(_data.length>0){
            _res.send({err:1,msg:"添加成功"});
        }else{
            _res.send({err:1,msg:"添加失败"});
        }
    }).catch((err)=>{
        _res.send({err:-1000,msg:"内部错误请重试"});
    })
})
//删除
//单项删除
 /**
 * @api {post} /admin/food/del   商品的删除
 * @apiName del
 * @apiGroup /food
 *
 * @apiParam {String}  _id
 * @apiParam {String}  _token 关键字
 *
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询的数据
 * @apiSuccess {String} token   令牌
 */
_router.post('/del',(_req,_res)=>{
    let _id=_req.body;
    _foodModel.deleteOne({_id:_id})
    .then((_data)=>{
        _res.send({err:1,msg:"删除成功"})
    }).catch((err)=>{
        _res.send({err:-2,msg:"删除错误"})
    })
});
//多项删除


//修改
 /**
 * @api {post} /admin/food/update   商品的修改
 * @apiName update
 * @apiGroup /food
 *
 * @apiParam {String}  _id
 * @apiParam {String}  name
 * @apiParam {String}  desc
 * @apiParam {String}  img
 * @apiParam {String}  price
 * @apiParam {String}  foodType
 * @apiParam {String}  _token 关键字
 *
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询的数据
 * @apiSuccess {String} token   令牌
 */
_router.post('/update',(_req,_res)=>{
    let {_id,name,slogan,img,price,type}=_req.body;
    _foodModel.updateOne({_id:_id},{_id,name,slogan,img,price,type})
    .then((_data)=>{
        console.log(_data);
        _res.send({err:1,msg:"修改成功"});
    })
});
//查询
//_router.post('/find',(_req,_res)=>{
//    _foodModel.find()
//    .then((_data)=>{
//        _res.send({err:3,msg:"查询通过",list:_data});
//    })
//})
////分页查询
//_router.post('/findByPage',(_req,_res)=>{
//    let {_page,_pageSize}=_req.body;
//    let _length=0;
//    _foodModel.find()
//    .then((_data)=>{
//        _length=_data.length;
//        return _foodModel.find().skip((_page-1)*_pageSize).limit(Number(_pageSize))
//    })
//    .then((_data)=>{
//        _res.send({err:4,msg:_page,list:_data,length:_length});
//    }).catch((err)=>{
//        _res.send("查询失败");
//    })
//});
//分类查询
 /**
 * @api {post} /admin/food/findByTypePage   分类分页查询
 * @apiName findByTypePage
 * @apiGroup /food
 *
 * @apiParam {String}  _foodType  有参数：分类翻页  无：分页查询
 * @apiParam {String}  _page  关键字
 * @apiParam {String}  _pageSize  关键字
 * @apiParam {String}  _token 关键字
 *
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询的数据
 * @apiSuccess {String} token   令牌
 */
_router.post('/findByTypePage',(_req,_res)=>{
    let {_foodType,_page,_pageSize}=_req.body;
    let _length=0;
    let _typeSearch={}
    if(_foodType){
        _typeSearch.type=_foodType;
    }
    // console.log(_typeSearch)
    _foodModel.find(_typeSearch)
    .then((_data)=>{
        _length=_data.length;
        // console.log(_data)
        return _foodModel.find(_typeSearch).skip((_page-1)*_pageSize).limit(Number(_pageSize)).sort({price:1});
    })
    .then((_data)=>{
        _res.send({err:5,msg:"查询成功",list:_data,length:_length});
    })
})

//模糊查询
/**
 * 1、接受关键字
 * 2、查询你
 */

 /**
 * @api {post} /admin/food/findByKw   通过关键字查询商品信息
 * @apiName findByKw
 * @apiGroup /food
 *
 * @apiParam {String}  kw  关键字
 * @apiParam {String}  _token 关键字
 *
 * @apiSuccess {Number} err  错误码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} list  查询的数据
 * @apiSuccess {String} token   令牌
 */
_router.post('/findByKw',(_req,_res)=>{
    let {kw,_page,_pageSize}=_req.body;
    let _length=0;
    let _reg=new RegExp(kw)
    _foodModel.find({$or:[{name:{$regex:_reg}},{desc:{$regex:_reg},},{type:{$regex:_reg}},{price:{$regex:_reg}}]})
    // .then((_data)=>{
    //     _res.send({err:5,msg:"查询成功",list:_data});
    // })
    .then((_data)=>{
        _length=_data.length;
        return _foodModel.find({$or:[{name:{$regex:_reg}},{desc:{$regex:_reg}}]}).skip((_page-1)*_pageSize).limit(Number(_pageSize)).sort({price:1});
      
    })
    .then((_data)=>{
        _res.send({err:5,msg:"查询成功",list:_data,length:_length});
    })
})
module.exports = _router;