import { Injectable } from '@angular/core';
import { SharedserviceService } from './../services/sharedservice.service';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './../moodel/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctoService extends SharedserviceService<Doctor> {

  constructor( http : HttpClient ) {
    super(http, "http://localhost:3000/doctor");
  }

}
