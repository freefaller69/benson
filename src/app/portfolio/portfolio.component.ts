import { Component, OnInit, HostBinding } from '@angular/core';

import {
  routeFadeStateTrigger,
  routeSlideStateTrigger
} from './../shared/route-animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [routeFadeStateTrigger, routeSlideStateTrigger]
})
export class PortfolioComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() {}

  ngOnInit() {}
}
