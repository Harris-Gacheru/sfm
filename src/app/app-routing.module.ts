import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DisplaystudentComponent } from './components/allstudents/displaystudent/displaystudent.component';
import { EditstudentComponent } from './components/allstudents/editstudent/editstudent.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AllstudentsComponent } from './pages/allstudents/allstudents.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { StudentswithbalanceComponent } from './pages/studentswithbalance/studentswithbalance.component';
import { StudentswithoutbalanceComponent } from './pages/studentswithoutbalance/studentswithoutbalance.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'addstudent', component: AddstudentComponent, canActivate: [AuthGuard]},
  {path:'allstudents', component: AllstudentsComponent, canActivate: [AuthGuard], 
    children: [
      {path:':regno', component: DisplaystudentComponent},
      {path: ':regno/edit', component: EditstudentComponent}
    ]
  },
  {path:'withbalance', component: StudentswithbalanceComponent, canActivate: [AuthGuard]},
  {path:'withoutbalance', component: StudentswithoutbalanceComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
