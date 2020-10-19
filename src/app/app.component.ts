//引入核心模块里面的Component
import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from 'axios';
import {error} from "@angular/compiler/src/util";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',  //使用这个组件的名称
  templateUrl: './app.component.html',  //html
  styleUrls: ['./app.component.scss']  //css
})
export class AppComponent {
  title = 'angularDemo1';

  constructor(private httpClient: HttpClient) {
  }

  doGet() {
    let api = "http://a.itying.com/api/productlist";
    this.httpClient.get(api).subscribe((response) => {
      console.log(response);
    });
  }

  doJsonp() {
    let api = "http://a.itying.com/api/productlist";
    this.httpClient.jsonp(api, 'callback').subscribe((response) => {
      console.log(response);
    });
  }

  doAxiosPromise() {
    let api = "http://a.itying.com/api/productlist";
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then((response) => {
          resolve(response);
        }).catch(() => {
        reject(error);
      });
    });
  }

  doAxiosRxjs() {
    let api = "http://a.itying.com/api/productlist";
    return new Observable((observable) => {
      axios.get(api).then((response) => {
        observable.next(response);
      });
    });
  }

  doAxios() {
    let api = "http://a.itying.com/api/productlist";
    axios.get(api)
      .then((response) => {
        console.log(response);
      }).catch(() => {
        console.log(error);
    });
  }


  doAxios2() {
    let observable = this.doAxiosRxjs();
    observable.subscribe((data) => {
      console.log(data);
    });
  }

}
