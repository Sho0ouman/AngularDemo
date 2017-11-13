import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DepartmentDataService } from './department-data.service';
import { DepartmentApiService } from './department-api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [DepartmentDataService, DepartmentApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
