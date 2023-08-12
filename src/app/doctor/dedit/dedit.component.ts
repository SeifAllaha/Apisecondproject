import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from './../../moodel/Doctor';
import { DoctoService } from './../../services/doctor.service';

@Component({
  selector: 'app-dedit',
  templateUrl: './dedit.component.html',
  styleUrls: ['./dedit.component.css']
})
export class DeditComponent  {
  id;
  doctor :Doctor = new Doctor();


  constructor( public serv: DoctoService , public active: ActivatedRoute, public router: Router) {
    this.id = this.active.snapshot.paramMap.get('id');
    
    this.serv.getById(this.id).subscribe((data: Doctor) => {
      this.doctor = data;
    });
  }

  update() {
    this.serv.update(this.id, this.doctor).subscribe((data: Doctor) => {
      this.router.navigateByUrl('doctor/list');
    });
  }
}
