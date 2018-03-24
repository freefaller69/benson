import { Component, HostBinding, OnInit } from '@angular/core';

import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
