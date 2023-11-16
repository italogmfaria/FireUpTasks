import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = [];
  currentSlideId: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {
        id: 0,
        src: 'assets/angular.jpg',
        title: 'Primeiro slide',
        subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        id: 1,
        src: 'assets/react.jpg',
        title: 'Segundo slide',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        src: 'assets/vue.jpg',
        title: 'Terceiro slide',
        subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    ];
  }

  prevSlide(): void {
    this.currentSlideId = (this.currentSlideId - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentSlideId = (this.currentSlideId + 1) % this.slides.length;
  }
}
