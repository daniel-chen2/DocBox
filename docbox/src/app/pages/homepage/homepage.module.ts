import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SearchAppFormComponent } from 'src/app/forms/search-app-form/search-app-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchAppFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomepageComponent
  ]
})

export class HomepageModule { }
