import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

//Angular material component
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


//Angular component
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { UserlistComponent } from './userlist/userlist.component';
import { IfelseComponent } from './ifelse/ifelse.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PipesComponent,
    UserlistComponent,
    IfelseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Angular material component
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
