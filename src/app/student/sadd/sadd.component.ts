import { Component, OnInit } from '@angular/core';
import { Studnet } from '../../moodel/Studnet';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from './../../services/sharedservice.service';
import { StudnetService } from './../../services/studnet.service';

@Component({
  selector: 'app-sadd',
  templateUrl: './sadd.component.html',
  styleUrls: ['./sadd.component.css']
})
export class SaddComponent  {
  student: Studnet = new Studnet();

  constructor(public serv: StudnetService , public active: ActivatedRoute , public router: Router) { }

  post() {
    this.serv.post(this.student).subscribe((data: Studnet) => {
      this.router.navigateByUrl('/studnet/list');
    });
  }
}


