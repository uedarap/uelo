import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [NgbCarouselConfig, NgbCarouselModule]
})
export class PrincipalComponent implements OnInit {

  images = [1, 2, 3].map((n) => `assets/img/foto${n}.jpg`)

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

}
