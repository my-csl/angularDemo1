import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 用@Input可以获取从父组件传过来的值
  @Input() title: string;
  @Input() run: any;

  @Output() private outer = new EventEmitter();

  name: string = "cc";

  constructor() {
  }

  ngOnInit(): void {
  }

  getOuter() {
    // 通过output的方法给父组件传数据
    this.outer.emit(this.name);
  }
}
