import { Component, OnInit, Input } from '@angular/core';

import { PinsService } from 'src/app/shared/services/pins.service';

import { PinType } from 'src/app/core/models/pintype.model';


@Component({
  selector: 'app-pintypes',
  templateUrl: './pintypes.component.html',
  styleUrls: ['./pintypes.component.scss']
})
export class PintypesComponent implements OnInit {

  public pintypes: PinType[];

  constructor(protected pintypesSvc: PinsService) { }

  ngOnInit() {
    this.getPinTypes();
  }

  private getPinTypes(): void {
    this.pintypesSvc.getPinTypes().subscribe(
      response => this.pintypes = response.data
    )
  }
}
