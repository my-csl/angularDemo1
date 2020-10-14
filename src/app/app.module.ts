/*这个文件是Angular根模块，告诉Angular如何组装应用*/

//BrowserModule，浏览器解析模块
import {BrowserModule} from '@angular/platform-browser';
//Angular核心模块
import {NgModule} from '@angular/core';

//根组件
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {SearchComponent} from './components/search/search.component';
import {StorageService} from "./service/storage.service";
import {HeaderComponent} from './components/header/header.component';
import {NewsComponent} from './components/news/news.component';
import {RxjsDemoComponent} from './components/rxjs-demo/rxjs-demo.component';
import {HttpClientModule,HttpClientJsonpModule} from "@angular/common/http";

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [  /*配置当前项目运行的组件*/
    AppComponent, HomeComponent, SearchComponent, HeaderComponent, NewsComponent, RxjsDemoComponent
  ],
  imports: [  /*配置当前模块运行依赖的其他模块*/
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService],  /*配置项目所需要的服务*/
  bootstrap: [AppComponent]  /*指定项目的主视图（称为根组件） 通过引导AppModule来启动应用 一般写的是根组件*/
})
// 根模块不需要导出任何东西，因为其他模块不需要导入根模块
export class AppModule {
}

