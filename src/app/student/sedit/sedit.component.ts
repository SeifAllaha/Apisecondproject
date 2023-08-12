import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studnet } from './../../moodel/Studnet';
import { SharedserviceService } from './../../services/sharedservice.service';
import { StudnetService } from './../../services/studnet.service';
@Component({
  selector: 'app-sedit',
  templateUrl: './sedit.component.html',
  styleUrls: ['./sedit.component.css']
})
export class SeditComponent {
  student = new Studnet();
  id: any;

  constructor(public active: ActivatedRoute, public service: StudnetService , public router: Router) {
    this.id = this.active.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data: Studnet) => {
      this.student = data;
    });
  }

  update() {
    this.service.update(this.id, this.student).subscribe((data: Studnet) => {
      this.router.navigateByUrl('/studnet/list');
    });
  }
}



