# angular2-Tutorial-chinsesVersion
angular2入门教程，基于官网案例整合而成。

## 第一步 配置开发环境

 1.angular2要求 node v5.x.x 或更高版本以及 npm 3.x.x 或更高版本。
     
        作者的电脑环境是 Windows7，npm版本3.10.9，node版本6.7.0。
   
 2.创建一个文件夹test-ng，把资源列表中package.json ，tsconfig.json，systemjs.config.js三个文件下载下来。  

   package.json 用来标记出本项目所需的 npm 依赖包。
   
   tsconfig.json 定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码
   
   systemjs.config.js 为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。 它还包括文档中后面的例子需要用到的包。
   
   想用webpack作为模块加载器，看这里https://angular.cn/docs/ts/latest/guide/webpack.html

 3.先翻墙或开VPN，然后从命令行进入到test-ng，输入 npm install安装依赖包。
  
    翻不了墙的同学直接下载node-modules文件到test-ng中即可。
    
 ## 第二步 创建基础组件
 
 1.  在test-ng文件夹中创建文件index.html
 
     `
  <!DOCTYPE html>
<html>
  <head>
    <base href="/"> <!--路由-->
    <title>Angular QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">

    <script src="https://unpkg.com/core-js/client/shim.min.js"></script> <!--为老式浏览器提供的填充库-->
    <script src="https://unpkg.com/zone.js@0.6.25?main=browser"></script>
    <script src="https://unpkg.com/reflect-metadata@0.1.3"></script>
    <script src="https://unpkg.com/systemjs@0.19.27/dist/system.src.js"></script> <!--加载并运行模块-->
    <script src="systemjs.config.js"></script> <!--运行main.js,为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包-->
      
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>

  <body>
    <my-app>Loading...</my-app>  <!--导入my-app1模板-->
  </body>
</html>




     `
