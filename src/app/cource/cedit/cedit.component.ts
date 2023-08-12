import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cource } from './../../moodel/Cource';
import { CourceService } from './../../services/cource.service';

@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CeditComponent {

  id;
  cource :Cource = new Cource();

  constructor( public service: CourceService , public active: ActivatedRoute, public router: Router) {
    this.id = this.active.snapshot.paramMap.get('id');

    this.service.getById(this.id).subscribe((data: Cource) => {
      this.cource = data;
    });
  }

  update() {
    this.service.update(this.id, this.cource).subscribe((data: Cource) => {
      this.router.navigateByUrl('cource/list');
    });
  }
}

