import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/moodel/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-tadd',
  templateUrl: './tadd.component.html',
  styleUrls: ['./tadd.component.css']
})
export class TaddComponent {
  department: Department = new Department();

  constructor(public serv: DepartmentService ,public active: ActivatedRoute, public router: Router ) { }

  post() {
    this.serv.post(this.department).subscribe((data: Department) => {
      this.router.navigateByUrl('department/list');
    });
  }
}
