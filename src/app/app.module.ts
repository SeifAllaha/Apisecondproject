import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { NavebarComponent } from './shared/navebar/navebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlistComponent } from './student/slist/slist.component';
import { SaddComponent } from './student/sadd/sadd.component';
import { SeditComponent } from './student/sedit/sedit.component';
import { DaddComponent } from './doctor/dadd/dadd.component';
import { DlistComponent } from './doctor/dlist/dlist.component';
import { DeditComponent } from './doctor/dedit/dedit.component';
import { ClistComponent } from './cource/clist/clist.component';
import { CaddComponent } from './cource/cadd/cadd.component';
import { CeditComponent } from './cource/cedit/cedit.component';
import { TlistComponent } from './department/tlist/tlist.component';
import { TaddComponent } from './department/tadd/tadd.component';
import { TeditComponent } from './department/tedit/tedit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    HomeComponent,
    SlistComponent,
    SaddComponent,
    SeditComponent,
    DaddComponent,
    DlistComponent,
    DeditComponent,
    ClistComponent,
    CaddComponent,
    CeditComponent,
    TlistComponent,
    TaddComponent,
    TeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
