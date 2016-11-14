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
const hero_service_1 = require('./hero.service');
//import { HeroService } from './hero.service'; //导入带有注入器函数的数据服务组件，其接口函数能够访问数据，使用其实例前要构造一下才能用，或用依赖注入
let AppComponent = class AppComponent {
    constructor(heroService) {
        this.heroService = heroService;
        //类里的值可以被装饰器绑定在模板中
        this.title = 'list of heroes';
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
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app1',
        template: `
    <h1>{{title}}</h1>

    <ul class="heroes"> 
       <li *ngFor="let hero of heroes"
           [class.selected]="hero === selectedHero"
           (click)="onSelect(hero)">
           <span class="badge">{{hero.id}}</span> {{hero.name}}
       </li>
    </ul>

    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
        //在根模块appmodule已经导入了my-hero-detail所在的组件
        //把 AppComponent 组件的 selectedHero 属性和 HeroDetailComponent 组件的 hero 属性绑定在一起
        styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
        providers: [hero_service_1.HeroService] //依赖注入的注入部分，创建注入器HeroService，创建一个 HeroService 数组服务的新实例，
    }), 
    __metadata('design:paramtypes', [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map