import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-app-form',
  templateUrl: './search-app-form.component.html',
  styleUrls: ['./search-app-form.component.scss']
})
export class SearchAppFormComponent {
  applicationNumber: number = 1;

  onSubmit(f: NgForm) {
  }
}