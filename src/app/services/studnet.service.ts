import { Injectable } from '@angular/core';
import { SharedserviceService } from './../services/sharedservice.service';
import { HttpClient } from '@angular/common/http';
import { Studnet } from './../moodel/Studnet';

@Injectable({
  providedIn: 'root'
})
export class StudnetService extends SharedserviceService<Studnet> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/studnet");
  }
}
