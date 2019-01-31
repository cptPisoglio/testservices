import { Component, OnInit, Input } from '@angular/core';

import { PinType } from 'src/app/core/models/pintype.model';

@Component({
  selector: 'app-pintype',
  templateUrl: './pintype.component.html',
  styleUrls: ['./pintype.component.scss']
})
export class PintypeComponent implements OnInit {

  @Input() pintype: PinType;

  public pintypeKeys: string[];

  constructor() { }

  ngOnInit() {
    this.populateKeys(this.pintype);
  }

  populateKeys(pintype: PinType): void {
    this.pintypeKeys = Object.keys(pintype);
}

}
