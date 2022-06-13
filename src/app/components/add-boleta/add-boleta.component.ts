import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta.model';

@Component({
  selector: 'app-add-boleta',
  templateUrl: './add-boleta.component.html',
  styleUrls: ['./add-boleta.component.css']
})
export class AddBoletaComponent implements OnInit {

  BOLETAS: Boleta[] =[ ];
  filtro: string= "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
