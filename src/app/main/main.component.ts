import { Component, HostBinding, OnInit } from '@angular/core';

import { routeFadeStateTrigger } from './../shared/route-animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class MainComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
