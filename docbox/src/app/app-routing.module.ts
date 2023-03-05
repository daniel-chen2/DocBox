import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeLoanApplicationComponent } from './pages/home-loan-application/home-loan-application.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'application/:applicationId', component: HomeLoanApplicationComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
