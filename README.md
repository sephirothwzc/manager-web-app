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

如果使用谷歌图标
// 图标 icon 引入 需要使用 sass-load
// npm install sass-loader -D
// npm install node-sass -D

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

2. 完整的导航解析流程

- 导航被触发。
- 在失活的组件里调用离开守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
- 在路由配置里调用 beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫 (2.5+)。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

3. 只有 2 级路由以上组件（view）允许 created 根据 route 参数进行加载，其他子组件采用 props+watch 加载
4. 后端请求分类

- find 查询
- save 保存
- add 新增
- upd 修改
- del 删除

5. 错误码
511 message
500 前台自定义错误提示
