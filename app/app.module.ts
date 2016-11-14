import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
//import {RouterModule} from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';//替换import {RouterModule} from '@angular/router'
import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';  //英雄详情模块，导入进来以便声明后appcomponent组件能调用其接口
import { HeroesComponent} from './heroes.component';/*英雄列表模块，以便 Angular 能认识 <my-heroes> 标签*/
import { HeroService} from './hero.service';/*数据服务模块*/
import { DashboardComponent} from './dashboard.component';/*视图仪表盘*/

@NgModule({  //用ngmodule修饰类AppModule,@NgModule为顶部导入的ngmodule模块暴露的接口
  imports:      [ //添加内部模块（全局模块）//把这两个模块加入到imports数组中，作为所以模块内部成员使用
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ], 
  declarations: [ //声明外部模块（局部模块），声明的模块可以直接使用imports声明的内部模块，放在声明中的模块包含的模板可以被使用
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent  //angular能识别其包含的模板my-heroes（即该模块的模板名）
    ], 
  providers:[     //服务模块，放在这里的服务可以被全局调用
     HeroService   //
  ] , 
  bootstrap:    [ AppComponent ]  //定义AppComponent为根组件即起始组件，bootstrap为引导函数，通知框架将组件渲染到DOM树上，
})
export class AppModule { }  //暴露接口,NgModule提供的export方法


