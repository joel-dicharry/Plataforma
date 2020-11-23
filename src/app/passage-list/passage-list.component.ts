import { Component, OnInit } from '@angular/core';
import { Passage } from "./Passage";

@Component({
  selector: 'app-passage-list',
  templateUrl: './passage-list.component.html',
  styleUrls: ['./passage-list.component.scss']
})
export class PassageListComponent implements OnInit {

  passages: Passage[] = [
    {
      empresa: "El Rápido",
      origen: "Bolívar",
      destino: "Tandil",
      fecha: "7 may",
      horario: "9:15 - 13:05",
    },
    {
      empresa: "Chevallier",
      origen: "Bolívar",
      destino: "Buenos Aires",
      fecha: "7 may",
      horario: "9:00 - 14:00",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
