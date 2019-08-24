import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatButtonModule } from "@angular/material";
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { SeparateComponent } from './components/separate/separate.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SeparateComponent,
    HomeComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SatDatepickerModule, 
    SatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatNativeDateModule, 
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
