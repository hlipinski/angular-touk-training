import { Injectable } from '@angular/core';
import { Record } from "./record";
import { records } from "./records";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  records: Record[];

  constructor() {
    this.records = JSON.parse(window.sessionStorage.getItem("records"));
  }

  getRecords(): Record[] {
    if (!this.records) {
      this.records = records();
      this.storeRecords(this.records);
    }
    return this.records;
  }

  addRecord(record: Record) {
    this.records = [...this.records, record];
    this.storeRecords(this.records);
  }

  private storeRecords(records: Record[]) {
    window.sessionStorage.setItem("records", JSON.stringify(records));
  }
}
