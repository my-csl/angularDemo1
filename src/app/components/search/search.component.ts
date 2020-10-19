import {Component, OnInit, ViewChild} from '@angular/core';
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyword: any;
  list: any[] = [];
  enterWord: any;
  enterList: any[] = [];


  constructor(private storage: StorageService) {

  }

  // angular生命周期函数  在组件和指令加载完成执行 此时dom还么加载完成
  ngOnInit(): void {
    let storageList:any = this.storage.getStorage("searchList");
    console.log(storageList);
    let storageEnterList:any = this.storage.getStorage("toDoList");
    console.log(storageEnterList);

    if (storageList) {
      this.list = storageList;
    }
    if (storageEnterList) {
      this.enterList = storageEnterList;
    }
  }

  @ViewChild("vc") vc: any;

  // ag生命周期函数 在dom加载完成执行
  ngAfterViewInit(): void {
    let vcDom = this.vc.nativeElement;
    vcDom.style.color = "red";
  }

  doSearch() {
    console.log(typeof this.keyword);
    if (this.list.indexOf(this.keyword) == -1 && this.keyword !== undefined && this.keyword !== '') {
      this.list.push(this.keyword);
      this.storage.setStorage("searchList", JSON.stringify(this.list));
    }
    this.keyword = '';
  }

  doDelete(index: number) {
    this.list.splice(index, 1);
    this.storage.setStorage("searchList", JSON.stringify(this.list));
  }


  toDoList(e) {
    console.log(e);
    if (e.keyCode == 13) {
      if (!this.repeat(this.enterList, this.enterWord)) {
        this.enterList.push({
          title: e.target.value,
          status: 0
        });
        this.storage.setStorage("toDoList", JSON.stringify(this.enterList));
      }
      this.enterWord = "";
    }

  }

  wancheng(index: number) {
    for (let i = 0; i < this.enterList.length; i++) {
      this.enterList[index].status = 1;
    }
    this.storage.setStorage("toDoList", JSON.stringify(this.enterList));
  }

  repeat(enterList, enterWord) {
    if (enterWord == '' || enterWord == undefined) {
      return true;
    }
    for (let item = 0; item < enterList.length; item++) {
      if (enterList[item].title == enterWord) {
        console.log(enterWord);
        console.log(enterList[0].title);
        return true
      }
    }
    return false;
  }
}
