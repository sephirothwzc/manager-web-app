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

1. vue 方法放置顺序

   - components # 组件声明
   - model #  参数模型声明
   - props # 入参声明
   - beforeCreate # function
   - data # 数据 function
   - watch # object
   - computed # 计算属性
   - created # 实例创建完成后执行的钩子 function
   - mounted # 编译好的 html 挂载到页面完成后执行的事件钩子，一般执行 ajax 请求获取数据进行数据初始化（整个实例中只执行一次）function
   - activited # function
   - update # 更新之后的钩子
   - beforeRouteUpdate
   - metods # 执行方法 object
   - filter
   - computed
