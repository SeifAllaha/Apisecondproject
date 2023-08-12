import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../moodel/Doctor';
import { DoctoService } from './../../services/doctor.service';

@Component({
  selector: 'app-dlist',
  templateUrl: './dlist.component.html',
  styleUrls: ['./dlist.component.css']
})
export class DlistComponent implements OnInit {
  doctors: Doctor ;
  Doctor: any;
  constructor(public serv: DoctoService) {
    this.doctors = new Doctor();
  }

  ngOnInit() {
    this.serv.get().subscribe((data: Doctor) => {
      this.Doctor = data;
    });
  }

  delete(id: number) {
    this.serv.delete(id).subscribe((data: Doctor) => {
      window.location.reload();
    });
  }
}
