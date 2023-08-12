import { Component, OnInit } from '@angular/core';
import { Department } from './../../moodel/department';
import { DepartmentService } from './../../services/department.service';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})
export class TlistComponent implements OnInit {

  departments : Department[] ;

  constructor(public serv: DepartmentService) {
    this.departments = [];
  }

  ngOnInit() {
    this.serv.get().subscribe((data: Department[] | Department) => {
      console.log(data); // Check the received data in the console
      if (Array.isArray(data)) {
        this.departments = data; // Assign the data to students array if it is an array
      } else {
        this.departments = [data]; // Wrap the single student in an array if it is not already an array
      }
    });
  }

  delete(id: number) {
    this.serv.delete(id).subscribe((data: Department) => {
      window.location.reload();
    });
  }
}
