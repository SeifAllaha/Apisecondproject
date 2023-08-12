import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlistComponent } from './student/slist/slist.component';
import { SaddComponent } from './student/sadd/sadd.component';
import { SeditComponent } from './student/sedit/sedit.component';
import { DlistComponent } from './doctor/dlist/dlist.component';
import { DaddComponent } from './doctor/dadd/dadd.component';
import { DeditComponent } from './doctor/dedit/dedit.component';
import { ClistComponent } from './cource/clist/clist.component';
import { CaddComponent } from './cource/cadd/cadd.component';
import { CeditComponent } from './cource/cedit/cedit.component';
import { TlistComponent } from './department/tlist/tlist.component';
import { TeditComponent } from './department/tedit/tedit.component';
import { TaddComponent } from './department/tadd/tadd.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'home', component : HomeComponent},
  {path:'studnet/list' , component : SlistComponent},
  {path: 'studnet/add' , component: SaddComponent},
  {path : 'studnet/edit/:id' , component : SeditComponent},

  {path :'doctor/list' , component: DlistComponent},
  {path:'doctor/add' , component : DaddComponent},
  {path : 'doctor/edit/:id ' , component : DeditComponent},

  {path :'cource/list' , component: ClistComponent},
  {path:'cource/add' , component : CaddComponent},
  {path : 'cource/edit/:id ' , component : CeditComponent},

  {path :'department/list' , component: TlistComponent},
  {path:'department/add' , component : TaddComponent},
  {path : 'department/edit/:id ' , component : TeditComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
