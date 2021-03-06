import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MatDialogModule } from "@angular/material";
import { NewRecordDialogComponent } from './new-record-dialog/new-record-dialog.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RecordService } from "./record/record.service";
import { BindingTestComponent } from './binding-test/binding-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NewRecordDialogComponent,
    BindingTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [RecordService],
  bootstrap: [AppComponent],
  entryComponents: [NewRecordDialogComponent]
})
export class AppModule {
}
