import { Component, OnInit } from '@angular/core';
import { Cource } from './../../moodel/Cource';
import { CourceService } from './../../services/cource.service';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {

  cources : Cource[] ;

  constructor(public serv: CourceService) {
    this.cources = [];
  }

  ngOnInit() {
    this.serv.get().subscribe((data: Cource[] | Cource) => {
      console.log(data); // Check the received data in the console
      if (Array.isArray(data)) {
        this.cources = data; // Assign the data to students array if it is an array
      } else {
        this.cources = [data]; // Wrap the single student in an array if it is not already an array
      }
    });
  }

  delete(id: number) {
    this.serv.delete(id).subscribe((data: Cource) => {
      window.location.reload();
    });
  }
}
