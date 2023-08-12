import { Injectable } from '@angular/core';
import { Cource } from './../moodel/Cource';
import { SharedserviceService } from './../services/sharedservice.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourceService extends SharedserviceService<Cource> {

  constructor( http : HttpClient ) {
    super(http, " http://localhost:3000/cources");
  }

}
