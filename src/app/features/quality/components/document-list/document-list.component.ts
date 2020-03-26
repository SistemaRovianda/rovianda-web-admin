import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "document-list",
  templateUrl: "./document-list.component.html",
  styleUrls: ["./document-list.component.scss"]
})
export class DocumentListComponent implements OnInit {
  @Input() document;
  constructor() {}

  ngOnInit() {}
}
