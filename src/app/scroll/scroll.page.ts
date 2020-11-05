import { Component, OnInit, ViewChild } from '@angular/core';
import { IonVirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  dataList = [];

  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  constructor() {
    this.getEmployees()
  }

  ngOnInit() {
  }

  getEmployees() {
    for (let i = 0; i < 1000; i++) {
      this.dataList.push({
        name: 'Person',
        id: ++i
      })
    }
  }
}
