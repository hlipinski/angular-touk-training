import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.css']
})
export class BindingTestComponent implements OnInit {

  info = "Binding works!";
  style = { 'background-color': 'red' };
  @Input() input: string;

  constructor() {
  }

  ngOnInit() {
  }

  setInfo(info) {
    this.info = info;
  }

}
