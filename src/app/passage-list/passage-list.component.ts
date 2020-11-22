import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passage-list',
  templateUrl: './passage-list.component.html',
  styleUrls: ['./passage-list.component.scss']
})
export class PassageListComponent implements OnInit {

  passages = {
    empresa: "El Rápido",
    c_origen: "Bolívar",
    c_destino: "Tandil",
    fecha: "7 may",
    horarios: "9:15 - 13:05",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
