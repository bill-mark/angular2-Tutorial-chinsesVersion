"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
//import {RouterModule} from '@angular/router';
const app_routing_module_1 = require('./app-routing.module'); //替换import {RouterModule} from '@angular/router'
const app_component_1 = require('./app.component');
const hero_detail_component_1 = require('./hero-detail.component'); //英雄详情模块，导入进来以便声明后appcomponent组件能调用其接口
const heroes_component_1 = require('./heroes.component'); /*英雄列表模块，以便 Angular 能认识 <my-heroes> 标签*/
const hero_service_1 = require('./hero.service'); /*数据服务模块*/
const dashboard_component_1 = require('./dashboard.component'); /*视图仪表盘*/
let AppModule = class AppModule {
};
AppModule = __decorate([
    /*视图仪表盘*/ core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent //angular能识别其包含的模板my-heroes（即该模块的模板名）
        ],
        providers: [
            hero_service_1.HeroService //
        ],
        bootstrap: [app_component_1.AppComponent] //定义AppComponent为根组件即起始组件，bootstrap为引导函数，通知框架将组件渲染到DOM树上，
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule; //暴露接口,NgModule提供的export方法
//# sourceMappingURL=app.module.js.map