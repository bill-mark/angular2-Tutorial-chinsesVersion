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
const common_1 = require('@angular/common');
const hero_service_1 = require('./hero.service');
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route, //注入 ActivatedRoute 和 HeroService 服务到构造函数中，将它们的值保存到私有变量中
        location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    //在 ngOnInit 生命周期钩子中，从 RouteParams 服务中提取 id 参数，并且使用 HeroService 来获得具有这个 id 的英雄数据
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id']; //把数字转为字符串
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }
    goBack() {
        this.location.back();
    }
};
HeroDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-hero-detail',
        templateUrl: 'hero-detail.component.html',
        styleUrls: ['hero-detail.component.css']
    }), 
    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map