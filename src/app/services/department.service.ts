import { Injectable } from '@angular/core';
import { SharedserviceService } from './sharedservice.service';
import { Department } from '../moodel/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends SharedserviceService<Department> {

  constructor( http : HttpClient ) {
    super(http, "  http://localhost:3000/department");
  }

}
