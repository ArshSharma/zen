import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mainpage-content',
  templateUrl: './mainpage-content.component.html',
  styleUrls: ['./mainpage-content.component.css']
})
export class MainpageContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
