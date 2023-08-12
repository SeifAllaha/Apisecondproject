import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cource } from 'src/app/moodel/Cource';
import { CourceService } from 'src/app/services/cource.service';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent implements OnInit {

  cources: Cource = new Cource();

  constructor(public serv: CourceService ,  public active: ActivatedRoute ,  public router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  post() {
    this.serv.post(this.cources).subscribe((data: Cource) => {
      this.router.navigateByUrl('cource/list');
    });
  }
}

