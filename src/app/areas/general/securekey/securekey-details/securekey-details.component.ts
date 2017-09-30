import { Component, Input, OnInit } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';

@Component({
  selector: 'app-securekey-details',
  templateUrl: './securekey-details.component.html',
  styleUrls: ['./securekey-details.component.css']
})
export class SecurekeyDetailsComponent extends MzBaseModal {

  @Input() nome: string;

  constructor() {
    super();
   }

}
