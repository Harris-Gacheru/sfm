import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AllstudentsComponent } from './pages/allstudents/allstudents.component';
import { StudentswithbalanceComponent } from './pages/studentswithbalance/studentswithbalance.component';
import { StudentswithoutbalanceComponent } from './pages/studentswithoutbalance/studentswithoutbalance.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { IonicModule } from '@ionic/angular';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaystudentComponent } from './components/allstudents/displaystudent/displaystudent.component';
import { EditstudentComponent } from './components/allstudents/editstudent/editstudent.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    AllstudentsComponent,
    StudentswithbalanceComponent,
    StudentswithoutbalanceComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    PagenotfoundComponent,
    DisplaystudentComponent,
    EditstudentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
