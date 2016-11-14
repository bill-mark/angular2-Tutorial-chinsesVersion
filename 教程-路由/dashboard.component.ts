import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from './hero';//导入hero数据类型
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.css']
   // template : `<h3>my dashboard</h3> ` 
})
export class DashboardComponent implements OnInit{
    heroes:Hero[] = [];//创建数组heroes
    constructor(
        private router:Router,
        private heroService:HeroService){} //把 HeroService 注入构造函数中，并且把它保存在一个私有的 heroService 字段中。
    ngOnInit():void{  //生命周期钩子
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5)); //基于promise的方式，处理完UI再响应
        //选取第2,3,4,5,个英雄，getHeroes()由服务heroservice提供
    }
    gotoDetail(hero:Hero):void{ 
        let link =['/detail',hero.id];//生成路由的 链接参数数组
        this.router.navigate(link);//把这个数组传给路由器的 navigate 方法。
    }
}