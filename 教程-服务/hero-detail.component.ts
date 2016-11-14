import { Component, Input } from '@angular/core';
import {Hero} from './hero';   //导入Hero类

@Component({  //用 @Component 装饰器创建元数据
    selector:'my-hero-detail',  //模板名或组件名
    template : `
   <div *ngIf="hero">
      <h2>{{hero.name}} 详情</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
         <label>name: </label>
         <input [(ngModel)]="hero.name" />
          </div>
    </div>
    `
})
export class HeroDetailComponent{
    @Input()  //@input() 会把紧跟其后的属性hero声明成输入属性,声明成输入属性才能被绑定，注意大小写
    hero:Hero;  
}