import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerSliderPics = [
    { image: '../../assets/header-1.jpg' },
    { image: '../../assets/header-2.jpg' },
    { image: '../../assets/header-3.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
