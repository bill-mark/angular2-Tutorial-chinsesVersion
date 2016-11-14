import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'my-app',
    template : `
          <h1>{{title}} </h1>
          <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
          </nav>  
          <router-outlet></router-outlet>
    ` ,
    styleUrls: ['app.component.css'],

    //RouterLink 指令绑定到字符串heroes,告诉路由器，当用户点击这个链接时，地址跳转到heroes
    //RouterOutlet 是 RouterModule 的指令，路由器把激活的组件显示在 <router-outlet> 里
})
export class AppComponent {
    title = 'list of heroes'
}