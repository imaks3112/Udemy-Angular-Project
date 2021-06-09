import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucessMessageComponent } from './sucess-message/sucess-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { AssignmentSecondComponent } from './assignment-second/assignment-second.component';
import { AssignmentThirdComponent } from './assignment-third/assignment-third.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessMessageComponent,
    WarningMessageComponent,
    AssignmentSecondComponent,
    AssignmentThirdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
