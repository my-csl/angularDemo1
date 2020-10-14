import {Component, OnInit} from '@angular/core';
import {RxjsService} from "../../service/rxjs.service";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  constructor(private rxjsService: RxjsService) {
    let promiseData = rxjsService.getPromiseData();
    promiseData.then((data) => {
      console.log(data);
    });

    let rxjsData = this.rxjsService.getRxjsData();
    /*rxjsData.subscribe((data) => {
      console.log(data);
    });*/

    rxjsData.pipe(
      filter((value => {
          // @ts-ignore
          if (value % 2 == 0) {
            return true;
          }
        }),
        map((value) => {
          // @ts-ignore
          return value * value;
        })
      )
    ).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
