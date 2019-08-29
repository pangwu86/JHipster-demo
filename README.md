# JHipster-demo

官网：https://www.jhipster.tech/

官网中文：https://www.jhipster.tech/cn/

github: https://github.com/jhipster/generator-jhipster





## 运行环境

本地需要安装以下运行环境：

1. Java 8以上

2. Node 10以上

3. git

   

## 安装jhipster

参考官网教程即可 https://www.jhipster.tech/cn/installation/



## 运行demo

```bash
# 命令行下
cd demo_vue
npm install

# ide导入java项目
src/main/resource/conf/application-dev.yml 为开发模式配置
src/main/resource/conf/application-prod.yml 为生成模式配置

对照本地数据库进行修改，当前开发为h2（不用修改）生成为mysql

# 命令行启动项目
./mvmw 
```



## 开发项目

开发过程中需要同时启动2个服务，才能正常登陆后台

后端为java服务

前端为node服务



推荐启动方式：

eclipse或IDEA导入项目（mvn项目），后台直接启动

vscode导入项目，打开终端npm start命令启动



## 打包项目

```bash
# 命令行下执行
./mvnw -Pprod package

# 找到发布包
target/xxx-0.0.1-SNAPSHOT.war
target/xxx-0.0.1-SNAPSHOT.war.original
```



没有.orginal的是fat war，内置了Undertow，可以直接java -jar xxxx.war启动。

有.original的war，去掉.original之后，可以放在Tomcat、Weblogic、Websphere中运行。