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
const core_1 = require('@angular/core'); //引入依赖注入函数
const mock_heroes_1 = require('./mock-heroes'); //导入符合Hero数据类型的数组
let HeroService = class HeroService {
    //getHeroes():Hero[]{
    //return HEROES;  //将会返回名为HEROES的数据，即导入的HEROES数据
    //}  
    //getHeroes(id:number): Promise<Hero[]> {  //改写为返回promise（承诺）的形式
    //  return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
    // }
    getHeroes() {
        return Promise.resolve(mock_heroes_1.HEROES);
    }
    getHeroesSlowly() {
        return new Promise(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
    getHero(id) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
};
HeroService = __decorate([
    //导入符合Hero数据类型的数组
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map