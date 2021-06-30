# ha-vue3-ui

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

### 一、系统介绍

#### 1.1 主要技术

- 1、前端：vite2 + vue3 + vue-router4 + vuex4 + elementUI-plus
- 2、使用`create-vite-app`搭建项目架构

#### 1.2 项目结构

|文件名称              |说明           |
|----------------  |------------------|
|public            |配置项目favicon.ico文件|
|src               |项目配置项目开发的所有内容页面|
|src/assets        |配置项目所需的公共的静态资源页面|
|src/components    |配置项目业务相关的公共组件|
|src/config        |配置项目在开发环境和生产环境项目下的一些不同的配置|
|src/icons         |配置项目的svg图标|
|src/layout        |配置项目的基础布局|
|src/plugins       |配置项目的插件|
|src/router        |配置项目的路由|
|src/store         |配置vuex做全局状态管理|
|src/styles        |配置项目的公共样式|
|src/utils         |配置项目的公共方法|
|src/view/         |配置业务的所有页面|
|src/App           | 入口页面
|src/main          | 打包入口文件
|vite.config.js    |自定义配置和开发代理配置|
