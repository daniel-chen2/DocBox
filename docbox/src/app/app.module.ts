import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './templates/navbar/navbar.component';

// forms
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
