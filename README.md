# manager-web-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
## sephiroth 

1. vue方法放置顺序

    1 components              # 组件声明
    2 model                   # 参数模型声明
    3 props                   # 入参声明
    4 beforeCreate            # function
    5 data                    # 数据 function
    6 computed                # 计算属性
    7 created                 # 实例创建完成后执行的钩子 function  
    8 mounted                 # 编译好的html挂载到页面完成后执行的事件钩子，一般执行ajax请求获取数据进行数据初始化（整个实例中只执行一次）function     
    9 activited               # function
    10 update                 # 更新之后的钩子   
    11 beforeRouteUpdate  
    12 metods                 # 执行方法 object
    13 filter                 
    14 computed               
    15 watch                  # object