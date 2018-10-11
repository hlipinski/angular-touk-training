import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Record } from "../record/record";

@Component({
  selector: 'app-new-record-dialog',
  templateUrl: './new-record-dialog.component.html',
  styleUrls: ['./new-record-dialog.component.css']
})
export class NewRecordDialogComponent {

  newRecord: Record = { name: '', phone: '' };

  constructor(public dialogRef: MatDialogRef<NewRecordDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onConfirm(): void {
    this.dialogRef.close(this.newRecord);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
