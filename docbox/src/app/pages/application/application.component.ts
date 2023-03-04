import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Application } from 'src/app/models/Application.model';
import { ApplicationService } from 'src/app/service/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})


export class ApplicationComponent {
  application : Application | undefined;

  constructor(private route: ActivatedRoute, private service: ApplicationService) {
    this.route.params.subscribe(params => this.application = service.getApplication(params["applicationId"]));

    if(!this.application) {
      alert("NOT FOUND")
    }
  }

  ngOnInit(): void {
  }

}
