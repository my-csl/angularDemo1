import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "home模块";

  public tips: string = "小提示";

  public arr: any[] = [
    {
      pinpai: "宝马",
      item: [{
        title: "x1",
        price: "30W"
      }, {
        title: "x2",
        price: "40W"
      }, {
        title: "x3",
        price: "50W"
      }

      ]
    }, {
      pinpai: "奥迪",
      item: [{
        title: "q1",
        price: "30W"
      }, {
        title: "q2",
        price: "40W"
      }, {
        title: "q3",
        price: "50W"
      }

      ]
    }
  ]

  public flag: boolean = true;

  public num: number = 0;

  public today: Date = new Date();
  public msg: any;

  public pageInfo:any = {
    username: "",
    city: "深圳",
    cityList: ["北京", "上海", "深圳"],
    sex: "1",
    hobby:[{
      title:"爬山",
      checked: false
    },{
      title:"睡觉",
      checked: false
    },{
      title:"敲代码",
      checked: true
    }],
    mark: ""
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  keyUp(e) {
    console.log(e);
    console.log(e.target);
    if (e.keyCode == 13) {
      console.log(e.target.value);
    }
  }

  getDate() {
    console.log(this.msg);
  }

  setDate() {
    this.msg = "这是改变后的值";
  }

  getInfo() {
    console.log(this.pageInfo)
  }

  // 获取子组件search
  @ViewChild("search") search: any;

  ngAfterViewInit(): void {
    console.log(this.search.vc);
  }
}
