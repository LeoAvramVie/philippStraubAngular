import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-carousel',
  templateUrl: './logo-carousel.component.html',
  styleUrls: ['./logo-carousel.component.scss']
})
export class LogoCarouselComponent implements OnInit {

  customOptions: any = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slideSpeed: 200,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 50,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };


  constructor() { }

  ngOnInit(): void {
  }

}
