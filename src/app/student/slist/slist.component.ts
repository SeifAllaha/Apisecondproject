import { Component, OnInit } from '@angular/core';
import { Studnet } from './../../moodel/Studnet';
import { SharedserviceService } from './../../services/sharedservice.service';
import { StudnetService } from'./../../services/studnet.service';

@Component({
  selector: 'app-slist',
  templateUrl: './slist.component.html',
  styleUrls: ['./slist.component.css']
})
export class SlistComponent implements OnInit {
  students: Studnet[];

  constructor(public serv: StudnetService) {
    this.students = [];
  }

  ngOnInit(): void {
    this.serv.get().subscribe((data: Studnet[] | Studnet) => {
      console.log(data); // Check the received data in the console

      if (Array.isArray(data)) {
        this.students = data; // Assign the data to students array if it is an array
      } else {
        this.students = [data]; // Wrap the single student in an array if it is not already an array
      }
    });
  }
  delete(id: number) {
    this.serv.delete(id).subscribe((data: Studnet) => {
      window.location.reload();
    });
}
}
