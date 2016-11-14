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
const router_1 = require('@angular/router');
const hero_service_1 = require('./hero.service');
let DashboardComponent = class DashboardComponent {
    constructor(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = []; //创建数组heroes
    } //把 HeroService 注入构造函数中，并且把它保存在一个私有的 heroService 字段中。
    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5)); //基于promise的方式，处理完UI再响应
        //选取第2,3,4,5,个英雄，getHeroes()由服务heroservice提供
    }
    gotoDetail(hero) {
        let link = ['/detail', hero.id]; //生成路由的 链接参数数组
        this.router.navigate(link); //把这个数组传给路由器的 navigate 方法。
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map