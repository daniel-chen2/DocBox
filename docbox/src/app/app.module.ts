import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { UploadFormComponent } from './forms/upload-form/upload-form.component';

// forms
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
