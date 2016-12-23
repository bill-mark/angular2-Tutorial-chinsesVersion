# angular2-Tutorial-chinsesVersion
angular2入门教程，基于官网案例整合而成。
对学习者的要求：
1.上网了解下类和装饰器的关系，看看runby或者Python关于类的阐述，不要看Java和c/c++

2.了解ES6相关概念和思想，教程中用到的有类，接口，继承，const,let,promise,import

3.在教程学习过程中要弄清楚类，模板，组件三者的关系，没有后端语言基础的同学看中文官网最容易造成这方面的迷惑，
  这也是本教程的意义，帮助大家理清思路。


教程的精华主要在源代码中，几乎每一行源代码都加了注释，为什么这么做，这么做的意义。

如果感受到教程的诚意，麻烦右上角点个星星，谢谢亲

本教程针对官网教程啰嗦，案例没有外国文化看不懂等缺点做了定制优化。

官网地址https://angular.cn/docs/ts/latest/quickstart.html  看官网教程可以和本教程提供的angular2笔记搭配着看。

![image](https://github.com/bill-mark/angular2-Tutorial-chinsesVersion/blob/master/no1.png)
![image](https://github.com/bill-mark/angular2-Tutorial-chinsesVersion/blob/master/no2.png)
![image](https://github.com/bill-mark/angular2-Tutorial-chinsesVersion/blob/master/no3.png)

## 第一步 配置开发环境

 1.angular2要求 node v5.x.x 或更高版本以及 npm 3.x.x 或更高版本。
     
        作者的电脑环境是 Windows7，npm版本3.10.9，node版本6.7.0，使用的编辑器VS-CODE。要是
        运行项目例子，node版本不能低于6.7.0 
 2.创建一个文件夹test-ng，把资源列表中package.json ，tsconfig.json，systemjs.config.js三个文件下载下来。  

   package.json 用来标记出本项目所需的 npm 依赖包。
   
   tsconfig.json 定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码
   
   systemjs.config.js 为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。 它还包括文档中后面的例子需要用到的包。
   
   想用webpack作为模块加载器，看这里https://angular.cn/docs/ts/latest/guide/webpack.html
   

 3.先翻墙或开VPN，然后从命令行进入到test-ng，输入 npm install安装依赖包。
  
      翻不了墙的同学直接下载资源列表中node-modules文件到test-ng中即可。
    
## 第二步    创建配置文件
 
 1.  对照作者提供的源文件index.html在test-ng中创建一个相同的index.html文件。
 
     这个HTML基本每一行都写了注释，大概思路就是在头文件先引入angular2需要的js库，在引入配置文件systemjs，最后在body中导入名为<my-app>的模板
     
     可以下载列表中的style.css到test-ng中，作为index.html的样式表。
     
 2.  在test-ng中创建文件夹app，在app文件夹中对照源代码的main.ts创建文件  main.ts。
      
      当启动angular2应用时，浏览器会加载index.html文件，在index.html中先加载angular2和其所需要的库来启动angular2，angular2再加载配置文件systemjs,在配置文件systemjs.confing.js中会加载main.js。
      
      在main.js中，先import框架的一个动态生成模块，再import使用者创建的app-module模块，
      
      最后调用框架动态生成模块的方法bootstrapModule来启动module：app-module。
      
 3.  组件介绍
 
     angular2的组件主要分为三个部分构成，

     头部：import所需要的模块
     
     中间：@装饰器   调用头部导入模块的某一个方法作为装饰器来装饰底部的类，模板放在装饰器中
     
     底部：export   类   这里存放一些装饰器需要用的函数和对外暴露的接口
 
 4.  在app文件夹中创建模块组件app-module.ts。
 
     app-module.ts文件的内容对照源代码中的app-module.ts。
     
     appmodule是整个应用的入口点,由main.ts来加载。用main.ts来启动app-module的用以是为了以后测试可以用不同的启动器在不同的环境中启动模块。
     
     app-module组件主要是配置所需要的模块，在他的装饰器中，
     
     imports  添加模块，被添加的模块的方法可以被本模块使用
     
     declaration声明模块内部成员，
     
     providers声明服务模块，
     
     bootstrap，引导函数，后面跟的组件即为根组件即首先被加载的组件，会被渲染到dom上，本例中跟的是app-component.ts暴露的接口
        
 5. 在app文件夹中创建根组件app-component.ts    
     对照源代码创建文件app-conponent.ts,可以把其样式表app-component.css下载下来。
     
     在根组件中，我们配置了模板template,并把模板名命名为my-app,用styleUrls加载了样式表app.component.css
     
     用export把根组件的接口定义为AppComponent。
     
## 第三步    创建其他组件和路由

 1. 根组件只显示了效果图的头部部分，我们还需要列表和详情部分和组件间的路由

    对照源文件编写app文件夹中的其他文件，其中
    
    mock-heroes.ts是用来模拟列表数据，app-component.ts 导航组件
    
    heroes.component.ts是列表元素组件，hero-detail.component.ts元素详情组件，
    
    hero.ts 自定义的元素数据类型组件，hero.service.ts 组件和模拟数据之间的通信服务组件，
    
    dashboard.conponent.ts 控制组件，描述组件和路由的关系  app-routing.module.te提供组件间的路由

    除了上述组件外，作者把模板从组件中的装饰器单独分离出来了，变成.html和.css文件，组件可以通过引用来加载他们
    
## 第四部 启动

   1.把整个项目下载下来 2把教程-服务，教程-路由这两个文件夹移出项目 3.命令行进入到项目目录，输入 npm install 4.如果
  npm install报错ERR，开VPN 5.没有报错，输入npm start
  
   如果启动出了问题：
   第一步： npm update -g &&  npm install -g concurrently lite-server typescript
   
   不行的话 第二步：
      Change the start field in package.json from
     "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" "
      to
     "start": "concurrently \"npm run tsc:w\" \"npm run lite\" "
     地址 http://stackoverflow.com/questions/34335340/angular2-quickstart-npm-start-is-not-working-correctly
     
## 其他问题
  1.如果出现 is not a module
  
   第一步,检查相关模块export暴露的接口大小写是否规范
   第二步，退出vs code 重新载入，会给你定位到更具体的错误位置
http://stackoverflow.com/questions/34629517/file-app-hero-ts-is-not-a-module-error-in-the-console-where-to-store-interfac/34674485

   2.出现 can not find name promise
    把tsconfig.json中的es5改为ES6
    
   3.编辑器提示 can not find mode 
     先看浏览器报的什么错误，解决掉，如果浏览器没报错不用管。
     或者把配置文件换成官网最新的配置文件即可
    

   
       
    
    
   
    
     
