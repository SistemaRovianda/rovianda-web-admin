import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"]
})
export class HistoryPageComponent implements OnInit {
  entity$ = [
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" }
  ];

  documents$ = [
    { name: "Recepcion de la materia" },
    { name: "Recepcion de la materia" },
    { name: "Recepcion de la materia" },
    { name: "Recepcion de la materia" },
    { name: "Recepcion de la materia" }
  ];

  query$: Observable<string>;

  constructor() {}

  ngOnInit() {}
}
