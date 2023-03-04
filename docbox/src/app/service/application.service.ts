import { Injectable } from '@angular/core';
import { Application } from '../models/Application.model';
import { Applications } from '../mockDb/mockDb';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applications: Application[] = []

  constructor() { }

  getApplications() {
    this.applications = Applications
    return this.applications;
  }

  getApplication(id: number) {
    this.applications = Applications
    return this.applications.find(app => app.appId == id);
  }
}
