import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ApplicationComponent } from './pages/application/application.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'application/:applicationId', component: ApplicationComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
