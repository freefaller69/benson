import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  headerText = 'Michael W Benson';
  header = [];

  constructor() { }

  ngOnInit() {
    this.header = this.headerText.split('');
    console.log(this.header);
  }

}
