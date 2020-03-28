import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maintenance",
  templateUrl: "./maintenance.page.html",
  styleUrls: ["./maintenance.page.scss"]
})
export class MaintenancePageComponent implements OnInit {
  entity$ = [
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" },
    { date: "12/02/2019", status: "prueba" }
  ];

  detail$ = {
    image: "",
    title: "Titulo de la falla",
    name: "Sergio Rosas Quintero",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt rem. Quos dolorem rerum ullam vero cumque eos fuga aliquam nam enim sequi voluptas amet recusandae, omnis facere sapiente a."
  };

  constructor() {}

  ngOnInit() {}
}
