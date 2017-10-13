import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { HttpModule } from "@angular/http";
import { BsModalService } from "ngx-bootstrap/modal";
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataserviceService } from "./service/dataservice.service";
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,ModalModule.forRoot()
  ],
  providers: [DataserviceService,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
