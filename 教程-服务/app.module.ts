import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';  //导入进来，以便声明后appcomponent组件能调用其接口

@NgModule({  //用ngmodule修饰类AppModule,@NgModule为顶部导入的ngmodule模块暴露的接口
  imports:      [ //添加内部模块（全局模块）//把这两个模块加入到imports数组中，作为所以模块内部成员使用
    BrowserModule,
    FormsModule
              ], 
  declarations: [ //声明外部模块（局部模块），声明的模块可以直接使用imports声明的内部模块
    AppComponent,
    HeroDetailComponent
    ], 
  bootstrap:    [ AppComponent ]  //定义AppComponent为根组件即起始组件，bootstrap为引导函数，通知框架将组件渲染到DOM树上，
})
export class AppModule { }  //暴露接口,NgModule提供的export方法


