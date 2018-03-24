import { Component, HostBinding, OnInit } from '@angular/core';

import { routeFadeStateTrigger } from './../shared/route-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
