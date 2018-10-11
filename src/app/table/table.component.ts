import { Component, OnInit } from '@angular/core';
import { Record } from "../record/record";
import { records } from "../record/records";
import { MatDialog, MatDialogRef } from "@angular/material";
import { NewRecordDialogComponent } from "../new-record-dialog/new-record-dialog.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  records: Record[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.records = records();
  }

  onAdd() {
    let dialogRef = this.dialog.open(NewRecordDialogComponent, {
      width: '50em'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.records = [result, ...this.records];
      }
    });
  }
}
