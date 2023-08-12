import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/moodel/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent {
  id;
  department: Department = new Department();

  constructor( public serv: DepartmentService , public active: ActivatedRoute, public router: Router) {
    this.id = this.active.snapshot.paramMap.get('id');

    this.serv.getById(this.id).subscribe((data: Department) => {
      this.department = data;
    });
  }

  update() {
    this.serv.update(this.id, this.department).subscribe((data: Department) => {
      this.router.navigateByUrl('department/list');
    });
  }
}
