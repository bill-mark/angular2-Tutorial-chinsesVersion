import { Component,OnInit } from '@angular/core';
//import { OnInit } from '@angular/core';  //导入OnInit生命周期钩子
import {Hero} from './hero';  //导入Hero类
import { HeroService } from './hero.service';
//import { HeroService } from './hero.service'; //导入带有注入器函数的数据服务组件，其接口函数能够访问数据，使用其实例前要构造一下才能用，或用依赖注入

@Component({   /*用component对类AppComponent进行装饰，给类添加元数据*/ 
  selector: 'my-app1',   /*模板名或组件名 指定了一个叫 my-app 的元素*/
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
  `,//导入外部组件my-hero-detail，用my-hero-detail代替主从结构的div，输入属性绑定的前提是目标hero被其所在的组件声明成输入属性
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
 providers:[HeroService] //依赖注入的注入部分，创建注入器HeroService，创建一个 HeroService 数组服务的新实例，
})
export class AppComponent implements OnInit{ /*组件（有指令和模板的类） */
  //类里的值可以被装饰器绑定在模板中
  title = 'list of heroes';
   // heroes = HEROES;  /*把顶部创建的数组HEROES赋值给heroes */
   heroes:Hero[];
     // hero : Hero ={    /*实例化类Hero */
     //   id:1,
     //   name: 'DeMa'
     // };
  selectedHero:Hero; //声明一个名为selectedHero的属性，类型为类Hero,要显示点击后的hero属性，所以不再需要固定的hero属性，替换注释部分
 
  constructor(private heroService:HeroService){} //依赖注入的依赖部分，把通过heroservice获得的数据存入构造函数的私有属性中， 
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
}


