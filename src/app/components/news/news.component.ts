import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title: string = "父组件title";

  // 用ViewChild可以获取从子组件传过来的值
  @ViewChild("header") header1: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  run(e) {
    // console.log(this.header1.name);
    console.log("父组件run方法");
    console.log(e);
  }

  getO($event: any) {
    console.log($event);
  }
}
