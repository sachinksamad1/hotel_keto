import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
  ],
})
export class HeroSectionComponent implements OnInit {
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 5000, // Adjust as needed
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false // Set to true if you want navigation arrows
  };

  carouselImages: string[] = [
    '/images/banner1.jpg', 
    '/images/banner2.jpg',
    '/images/banner3.jpg'
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    // Reset the form after submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}