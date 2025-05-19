import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [
    CommonModule,
    MatIconModule
  ],
})
export class HeroSectionComponent implements OnInit, OnDestroy {
    images = [
    {
      url: 'images/banner1.jpg',
      alt: 'Hero Image 1'
    },
    {
      url: '/images/banner2.jpg',
      alt: 'Hero Image 2'
    },
    {
      url: '/images/banner3.jpg',
      alt: 'Hero Image 3'
    }
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

    intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // change slide every 5 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}