import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PinsService } from 'src/app/shared/services/pins.service';
import { PinType } from 'src/app/core/models/pintype.model';

@Component({
  selector: 'app-pintypeuid',
  templateUrl: './pintypeuid.component.html',
  styleUrls: ['./pintypeuid.component.scss']
})
export class PintypeuidComponent implements OnInit {

  form = new FormGroup({
    uid: new FormControl('')
  });

  public pin: PinType = null;

  constructor(private readonly pinsSvc: PinsService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.pinsSvc.getPinTypeByUid(this.form.value.uid)
    .subscribe( response => this.pin = response.data);
  }

}
