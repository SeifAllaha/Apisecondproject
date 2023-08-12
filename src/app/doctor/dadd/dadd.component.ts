import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/moodel/Doctor';
import { DoctoService } from './../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dadd',
  templateUrl: './dadd.component.html',
  styleUrls: ['./dadd.component.css']
})
export class DaddComponent {
  doctor: Doctor = new Doctor();


  constructor(public serv: DoctoService , public active: ActivatedRoute ,  public router: Router) { }

  post() {
    this.serv.post(this.doctor).subscribe((data: Doctor) => {
      this.router.navigateByUrl('doctor/list');
    });
  }
}
