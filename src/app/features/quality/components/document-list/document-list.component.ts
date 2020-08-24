import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "document-list",
  templateUrl: "./document-list.component.html",
  styleUrls: ["./document-list.component.scss"]
})
export class DocumentListComponent implements OnInit {
  @Input() document;
  @Output() sendDocument= new EventEmitter;
  constructor() {}

  ngOnInit() {
  }

  downloadpdf(objDownload:any){
    Object.assign(objDownload, {type:'pdf'})
    this.sendDocument.emit(objDownload);
  }
  downloadExcel(objDownload:any){
    Object.assign(objDownload, {type:'Excel'})
    this.sendDocument.emit(objDownload);
  }
}
