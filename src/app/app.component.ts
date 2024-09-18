import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revv';
  isHeaderShrunk = false;

  stories = [
    {
      title: 'My Time at The Revv',
      excerpt: 'A personal account of working at The Revv 107.3 FM.',
      imageUrl: './assets/story1-image.jpg'
    },
    {
      title: 'Memorable Moments',
      excerpt: 'Unforgettable experiences from our time on air.',
      imageUrl: './assets/story2-image.jpg'
    },
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isHeaderShrunk = window.pageYOffset > 50;
  }
}
