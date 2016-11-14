//import { Component, Input } from '@angular/core';
import {Hero} from './hero';   //导入Hero类
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';

@Component({  //用 @Component 装饰器创建元数据
    moduleId:module.id,
    selector:'my-hero-detail',  //模板名或组件名
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
   // @Input() hero:Hero;  //@input() 会把紧跟其后的属性hero声明成输入属性,声明成输入属性才能被绑定，注意大小写
    hero:Hero;
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,  //注入 ActivatedRoute 和 HeroService 服务到构造函数中，将它们的值保存到私有变量中
      private location: Location
     ) {}

     //在 ngOnInit 生命周期钩子中，从 RouteParams 服务中提取 id 参数，并且使用 HeroService 来获得具有这个 id 的英雄数据
     ngOnInit():void{
         this.route.params.forEach((params:Params) => { //用forEach提取ID
                  let id = +params['id']; //把数字转为字符串
                  this.heroService.getHero(id).then(hero =>this.hero=hero);
         });
     }
     goBack():void{
         this.location.back();
     }
}