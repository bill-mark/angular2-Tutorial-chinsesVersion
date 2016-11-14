import {Injectable} from '@angular/core';  //引入依赖注入函数
import {Hero} from './hero';     //导入名为Hero的数据类型的定义文件
import {HEROES} from './mock-heroes';  //导入符合Hero数据类型的数组

@Injectable()  //TypeScript 看到 @Injectable() 装饰器时，就会记下本服务的元数据，注入器
export class HeroService{  //定义组件接口为HeroService
    //getHeroes():Hero[]{
        //return HEROES;  //将会返回名为HEROES的数据，即导入的HEROES数据
    //}  
    //getHeroes(id:number): Promise<Hero[]> {  //改写为返回promise（承诺）的形式
    //  return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
    // }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}