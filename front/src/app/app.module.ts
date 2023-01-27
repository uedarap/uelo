import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BandComponent } from './components/band/band.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
