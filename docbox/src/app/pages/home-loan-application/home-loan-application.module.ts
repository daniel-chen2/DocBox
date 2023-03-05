import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFormComponent } from 'src/app/forms/upload-form/upload-form.component';
import { FormsModule } from '@angular/forms';
import { HomeLoanApplicationComponent } from './home-loan-application.component';

@NgModule({
  declarations: [
    UploadFormComponent,
    HomeLoanApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeLoanApplicationModule { }
