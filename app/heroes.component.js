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
//import { OnInit } from '@angular/core';  //导入OnInit生命周期钩子
const router_1 = require('@angular/router');
const hero_service_1 = require('./hero.service');
//import { HeroService } from './hero.service'; //导入带有注入器函数的数据服务组件，其接口函数能够访问数据，使用其实例前要构造一下才能用，或用依赖注入
let HeroesComponent = class HeroesComponent {
    constructor(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    } //依赖注入的依赖部分，把通过heroservice获得的数据存入构造函数的私有属性中， 
    getHeroes() {
        //this.heroes = this.heroService.getHeroes();  //使用组件heroService提供的方法,没法异步
        this.heroService.getHeroes().then(heroes => this.heroes = heroes); //基于promise的方式，处理完UI再响应
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero) {
        this.selectedHero = hero; /*把hero包含的值赋给 selectedHero */
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
};
HeroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-heroes',
        templateUrl: 'heroes.component.html',
        styleUrls: ['heroes.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map