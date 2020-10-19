import {Injectable} from '@angular/core';
import {observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() {
  }

  getPromiseData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("promise data")
      }, 1000);
    });
  }

  getRxjsData() {
    return new Observable((observable) => {
      let count:any = 0;
      setTimeout(() => {
        // count++;
        observable.next(count);
      },1000);
    });
  }
}
