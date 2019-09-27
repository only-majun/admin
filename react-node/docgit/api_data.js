define({ "api": [
  {
    "type": "post",
    "url": "/admin/file/upload",
    "title": "文件上传",
    "name": "upload",
    "group": "_file",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>formdata 格式图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgpath",
            "description": "<p>返回图片所在的相对路径</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/uploadRouter.js",
    "groupTitle": "_file"
  },
  {
    "type": "post",
    "url": "/admin/food/add",
    "title": "商品的添加",
    "name": "add",
    "group": "_food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询的数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/foodRouter.js",
    "groupTitle": "_food"
  },
  {
    "type": "post",
    "url": "/admin/food/del",
    "title": "商品的删除",
    "name": "del",
    "group": "_food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询的数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/foodRouter.js",
    "groupTitle": "_food"
  },
  {
    "type": "post",
    "url": "/admin/food/findByKw",
    "title": "通过关键字查询商品信息",
    "name": "findByKw",
    "group": "_food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询的数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/foodRouter.js",
    "groupTitle": "_food"
  },
  {
    "type": "post",
    "url": "/admin/food/findByTypePage",
    "title": "分类分页查询",
    "name": "findByTypePage",
    "group": "_food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_foodType",
            "description": "<p>有参数：分类翻页  无：分页查询</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_page",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_pageSize",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询的数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/foodRouter.js",
    "groupTitle": "_food"
  },
  {
    "type": "post",
    "url": "/admin/food/update",
    "title": "商品的修改",
    "name": "update",
    "group": "_food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_token",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询的数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/foodRouter.js",
    "groupTitle": "_food"
  },
  {
    "type": "post",
    "url": "/admin/user/login",
    "title": "登录",
    "name": "login",
    "group": "_user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/userrouter.js",
    "groupTitle": "_user"
  },
  {
    "type": "post",
    "url": "/admin/user/reg",
    "title": "注册",
    "name": "reg",
    "group": "_user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/userrouter.js",
    "groupTitle": "_user"
  },
  {
    "type": "post",
    "url": "/admin/users/usersadd",
    "title": "用户添加",
    "name": "usersadd",
    "group": "_users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headimg",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/usersRouter.js",
    "groupTitle": "_users"
  },
  {
    "type": "post",
    "url": "/admin/users/usersdel",
    "title": "用户删除",
    "name": "usersdel",
    "group": "_users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/usersRouter.js",
    "groupTitle": "_users"
  },
  {
    "type": "post",
    "url": "/admin/users/usersfind",
    "title": "用户查询",
    "name": "usersfind",
    "group": "_users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页规格</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>数据数量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/usersRouter.js",
    "groupTitle": "_users"
  },
  {
    "type": "post",
    "url": "/admin/users/usersupdate",
    "title": "用户修改",
    "name": "usersupdate",
    "group": "_users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headimg",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/usersRouter.js",
    "groupTitle": "_users"
  },
  {
    "type": "post",
    "url": "/admin/users/usfind",
    "title": "通过id账户或用户名查询用户信息",
    "name": "usfind",
    "group": "_users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/admin/usersRouter.js",
    "groupTitle": "_users"
  }
] });
