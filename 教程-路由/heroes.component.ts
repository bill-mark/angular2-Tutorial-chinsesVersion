import { Component,OnInit } from '@angular/core';
//import { OnInit } from '@angular/core';  //导入OnInit生命周期钩子
import { Router } from '@angular/router';
import {Hero} from './hero';  //导入Hero类
import { HeroService } from './hero.service'; 
//import { HeroService } from './hero.service'; //导入带有注入器函数的数据服务组件，其接口函数能够访问数据，使用其实例前要构造一下才能用，或用依赖注入

@Component({   /*用component对类AppComponent进行装饰，给类添加元数据,Component为框架提供的方法*/ 
 moduleId:module.id,
 selector: 'my-heroes',   /*模板名或组件名 指定了一个叫 my-app 的元素*/
 templateUrl:'heroes.component.html',
 styleUrls:['heroes.component.css']
 // providers:[HeroService] //依赖注入的注入部分，创建注入器HeroService，创建一个 HeroService 数组服务的新实例，
 //appmodule组件已经提供了heroservice服务，不再需要额外导入
})
export class HeroesComponent implements OnInit{ /*组件（有指令和模板的类）,在类HeroesComponent中实现类OnInit定义的方法() */
  //类里的值可以被装饰器绑定在模板中
  //title = 'list of heroes';
   // heroes = HEROES;  /*把顶部创建的数组HEROES赋值给heroes */
   heroes:Hero[];
     // hero : Hero ={    /*实例化类Hero */
     //   id:1,
     //   name: 'DeMa'
     // };
  selectedHero:Hero; //声明一个名为selectedHero的属性，类型为类Hero,要显示点击后的hero属性，所以不再需要固定的hero属性，替换注释部分
 
  constructor(
    private router:Router,
    private heroService:HeroService
    ){} //依赖注入的依赖部分，把通过heroservice获得的数据存入构造函数的私有属性中， 
  getHeroes(): void {     //使用服务提供的方法
    //this.heroes = this.heroService.getHeroes();  //使用组件heroService提供的方法,没法异步
     this.heroService.getHeroes().then(heroes => this.heroes = heroes); //基于promise的方式，处理完UI再响应
  }
  ngOnInit():void{  //生命周期钩子调用getHeroes方法
     this.getHeroes();
  }
  onSelect(hero:Hero):void {
      this.selectedHero = hero; /*把hero包含的值赋给 selectedHero */
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


