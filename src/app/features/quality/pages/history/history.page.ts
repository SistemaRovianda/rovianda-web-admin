import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HistoriesService } from "src/app/features/services/histories.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MessagesComponent } from "../../components/messages/messages.component";
import { ReportsService } from "src/app/features/services/reports.service";
import { meatIds } from "src/app/features/models/model-meat";

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
})
export class HistoryPageComponent implements OnInit {
  documentsMeat$: any;
  documentsDrief$: any;
  documentsPacking$: any;

  hasDrief$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  hasPackaging$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  hasMeat$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // query$: Observable<string>;

  drief: any;
  packaging: any;
  meat: any;
  objdate: any = {};
  allDrief: any;
  coundDrief: any;
  banButtons: boolean = false;
  allPackaging: any;
  constructor(
    private serviceHistories: HistoriesService,
    private serviceRoports: ReportsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}
  objSearch(event: any) {
    if (event.typeSearch == "DRIEF") {
      this.hasDrief$.next(true);
      this.hasPackaging$.next(false);
      this.hasMeat$.next(false);
      this.getHistoryDrief(event.query);
    } else if (event.typeSearch == "PACKING") {
      this.hasDrief$.next(false);
      this.hasPackaging$.next(true);
      this.hasMeat$.next(false);
      this.getHistoryPackaging(event.query);
    } else if (event.typeSearch == "MEAT") {
      this.hasDrief$.next(false);
      this.hasPackaging$.next(false);
      this.hasMeat$.next(true);
      this.getHistoryMeat(event.query);
    }
  }
  getDocumentsDrief(DocumentsId: string) {
    this.documentsMeat$ = undefined;
    this.documentsPacking$ = undefined;
    this.documentsDrief$ = [
      { name: "Recepción de materia prima secos", id: DocumentsId },
      { name: "Bitácora de control de pep's almacén", id: DocumentsId },
    ];
  }
  getDocumentsMeat(DocumentsId: meatIds) {
    this.documentsDrief$ = undefined;
    this.documentsPacking$ = undefined;
    this.documentsMeat$ = [
      {
        name: "Recepcion materia prima cárnicos",
        id: DocumentsId.entranceMeat,
      },
      {
        name: "Bitácora de control de calidad formulación",
        id: DocumentsId.formulation,
      },
      {
        name: "Bitácora de control de calidad sala de trabajo",
        id: DocumentsId.process,
      },
      {
        name: "Bitácora de control de calidad cocimiento del producto",
        id: DocumentsId.oven,
      },
      {
        name: "Bitácora de control de rebanado y empacado",
        id: DocumentsId.packingDate,
      },
      {
        name: "Inspección de producto terminado y salida",
        id: DocumentsId.inspection,
      },
    ];
  }
  getDocumentsPacking(DocumentsId: string) {
    this.documentsMeat$ = undefined;
    this.documentsDrief$ = undefined;
    this.documentsPacking$ = [
      {
        name: "Bitácora de control de calidad almacén empaques",
        id: DocumentsId,
      },
    ];
  }

  async getHistoryPackaging(loteId: string) {
    this.isLoading$.next(true);
    await this.serviceHistories.getHistoryPackaging(loteId).subscribe(
      (data) => {
        this.isLoading$.next(false);
        this.allPackaging = data;
        this.selectPacking(0);
      },
      (err) => {
        this.openDialog({
          title: "Resultados",
          msg: `No se encontro ninguna búsqueda con el lote: ${loteId}`,
        });
        this.drief = undefined;
        this.packaging = undefined;
        this.meat = undefined;
        this.isLoading$.next(false);
      }
    );
  }

  selectPacking(count) {
    this.packaging = this.allPackaging[count];
    this.getDocumentsPacking(this.packaging.entrancePackingId);
  }

  getHistoryDrief(loteId: string) {
    this.isLoading$.next(true);
    this.serviceHistories.getHistoryDrief(loteId).subscribe(
      (data: any) => {
        this.isLoading$.next(false);
        this.allDrief = data;
        this.allDrief.length > 1
          ? (this.banButtons = true)
          : (this.banButtons = false);
        this.selectDrief(0);
      },
      (err) => {
        this.isLoading$.next(false);
        this.openDialog({
          title: "Resultados",
          msg: `No se encontro ninguna búsqueda con el lote: ${loteId}`,
        });
        this.drief = undefined;
        this.packaging = undefined;
        this.meat = undefined;
      }
    );
  }

  selectDrief(count) {
    this.drief = this.allDrief[count];
    this.getDocumentsDrief(this.drief.entranceDriefId);
  }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    this.dialog.open(MessagesComponent, dialogConfig);
  }

  objdates(event) {
    this.objdate = event;
  }

  downloadFileDrief(event) {
    if (event.name == "Recepción de materia prima secos") {
      if (event.type == "Excel") {
        this.serviceRoports
          .getReportExcelEntranceDrief(event.id)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "xlsx");
          });
      } else if (event.type == "pdf") {
        this.serviceRoports
          .getReportpdfentranceDrief(event.id)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "pdf");
          });
      }
    } else if (event.name == "Bitácora de control de pep's almacén") {
      if (event.type == "Excel" && Object.keys(this.objdate).length) {
        this.serviceRoports
          .getReportExcelPepsDrief(this.objdate)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "xlsx");
          });
      } else if (event.type == "pdf" && Object.keys(this.objdate).length) {
        this.serviceRoports
          .getReportPdfPepsDrief(this.objdate)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "pdf");
          });
      } else {
        this.openDialog({
          title: "Error",
          msg: `Faltan datos para generar este reporte.`,
        });
      }
    }
  }

  downloadFilePacking(event) {
    if (event.type == "pdf") {
      if (Object.keys(this.objdate).length) {
        this.serviceRoports
          .getReportPDFpackingDates(this.objdate)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "pdf");
          });
      } else {
        this.serviceRoports
          .getReportPDFPackingForId(event.id)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "pdf");
          });
      }
    } else if (event.type == "Excel") {
      if (Object.keys(this.objdate).length) {
        this.serviceRoports
          .getReportExcelPackingDates(this.objdate)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "xlsx");
          });
      } else {
        this.serviceRoports
          .getReportExcelPackingForId(event.id)
          .subscribe((data) => {
            this.downloadFile(data, event.name, "xlsx");
          });
      }
    }
  }

  getHistoryMeat(loteId: string) {
    this.serviceHistories.getHistoryMeat(loteId).subscribe(
      (data) => {
        this.meat = data;
        let obj: meatIds = {
          entranceMeat: this.meat.entranceMeat[0]
            ? this.meat.entranceMeat[0].entranceMeatId
            : null,
          fridge: this.meat.fridge[0] ? this.meat.fridge[0].coolingId : null,
          formulation: this.meat.formulation[0]
            ? this.meat.formulation[0].formulationId
            : null,
          process: this.meat.formulation[0]
            ? this.meat.process[0].processId
            : null,
          oven: this.meat.oven[0] ? this.meat.oven[0].ovenId : null,
          packingDate: this.meat.packingDate[0]
            ? this.meat.packingDate[0].packaginId
            : null,
          inspection: this.meat.InspectionDate,
        };
        this.meat.entranceMeat;
        this.getDocumentsMeat(obj);
      },
      (err) => {
        this.openDialog({
          title: "Resultados",
          msg: `No se encontro ninguna búsqueda con el lote: ${loteId}`,
        });
        this.drief = undefined;
        this.packaging = undefined;
        this.meat = undefined;
      }
    );
  }

  async downloadFileMeat(event) {
    if (event.name == "Recepcion materia prima cárnicos") {
      await this.downloadReception(event);
    } else if (event.name == "Bitácora de control de calidad formulación") {
      await this.downloadformulation(event);
    } else if (event.name == "Bitácora de control de calidad sala de trabajo") {
      await this.downloadRoomWork(event);
    } else if (
      event.name == "Bitácora de control de calidad cocimiento del producto"
    ) {
      await this.downloadProductOven(event);
    } else if (event.name == "Bitácora de control de rebanado y empacado") {
      await this.downloadPackaging(event);
    } else if (event.name == "Inspección de producto terminado y salida") {
      await this.downloadInspection(event);
    }
  }

  downloadReception(event) {
    if (event.type == "Excel") {
      this.serviceRoports.getReportExcelReception(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "xlsx");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    } else if (event.type == "pdf") {
      this.serviceRoports.getReportPdfReception(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "pdf");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    }
  }

  downloadformulation(event) {
    if (event.type == "Excel") {
      this.serviceRoports.getReportExcelFormulation(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "xlsx");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    } else if (event.type == "pdf") {
      this.serviceRoports.getReportpdfFormulation(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "pdf");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    }
  }
  downloadRoomWork(event) {
    if (event.type == "Excel") {
      this.serviceRoports.getReportExcelRoomWork(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "xlsx");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    } else if (event.type == "pdf") {
      this.serviceRoports.getReportPdfRoomWork(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "pdf");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    }
  }
  downloadProductOven(event) {
    if (Object.keys(this.objdate).length) {
      if (event.type == "Excel") {
        this.serviceRoports.getReportExcelOven(this.objdate).subscribe(
          (data) => {
            this.downloadFile(data, event.name, "xlsx");
          },
          (err) => {
            this.openDialog({
              title: "Error",
              msg: `No se ha encontrado la información.`,
            });
          }
        );
      } else if (event.type == "pdf") {
        this.serviceRoports.getReportPdfOven(this.objdate).subscribe(
          (data) => {
            this.downloadFile(data, event.name, "pdf");
          },
          (err) => {
            this.openDialog({
              title: "Error",
              msg: `No se ha encontrado la información.`,
            });
          }
        );
      }
    } else {
      this.openDialog({
        title: "Error",
        msg: `Faltan datos para generar este reporte. Ingrese las fechas por favor.`,
      });
    }
  }

  downloadPackaging(event) {
    if (event.type == "Excel") {
      this.serviceRoports.getReportExcelPackaging(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "xlsx");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    } else if (event.type == "pdf") {
      this.serviceRoports.getReportPdfPackaging(event.id).subscribe(
        (data) => {
          this.downloadFile(data, event.name, "pdf");
        },
        (err) => {
          this.openDialog({
            title: "Error",
            msg: `No se ha encontrado la información.`,
          });
        }
      );
    }
  }

  downloadInspection(event) {
    if (event.type == "Excel") {
    } else if (event.type == "pdf") {
    }
  }

  downloadFile(data: any, title: string, exten: string) {
    var url = window.URL.createObjectURL(new Blob([data]));

    // Debe haber una manera mejor de hacer esto...
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none");
    a.href = url;
    a.download = `${title}.${exten}`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }
}
