import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  imageUrl1: string = '/images/about.png';

  isHovered = false;

  onImageHover(status: boolean): void {
    this.isHovered = status;
    console.log('Image hover status:', status);
  }
}
