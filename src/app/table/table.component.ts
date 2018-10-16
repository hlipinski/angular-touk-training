import { Component, OnInit } from '@angular/core';
import { Record } from "../record/record";
import { MatDialog } from "@angular/material";
import { NewRecordDialogComponent } from "../new-record-dialog/new-record-dialog.component";
import { RecordService } from "../record/record.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  records: Record[];

  constructor(private dialog: MatDialog, private recordService: RecordService) {
  }

  ngOnInit() {
    this.reloadRecords();
  }

  onAdd() {
    let dialogRef = this.dialog.open(NewRecordDialogComponent, {
      width: '50em'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recordService.addRecord(result);
        this.reloadRecords();
      }
    });
  }

  reloadRecords() {
    this.records = this.recordService.getRecords();
  }
}
