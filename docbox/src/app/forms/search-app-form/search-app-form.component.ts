import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-app-form',
  templateUrl: './search-app-form.component.html',
  styleUrls: ['./search-app-form.component.scss']
})

export class SearchAppFormComponent {
  constructor(
    private router: Router,
  ) { }

  applicationId: number = 1;

  onSubmit(f: NgForm) {
    this.router.navigate(['application', f.value["applicationId"]])
  }
}