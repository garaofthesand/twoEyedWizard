import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  images = [
    { id: 1, title: 'Concert Performance', url: '/assets/square.jpg', category: 'Live' },
    { id: 2, title: 'Studio Session', url: '/assets/landscape1.jpg', category: 'Studio' },
    { id: 3, title: 'Award Show', url: '/assets/landscape2.jpg', category: 'Awards' },
    { id: 4, title: 'Fan Event', url: '/assets/square.jpg', category: 'Events' },
    { id: 5, title: 'Press Conference', url: '/assets/landscape1.jpg', category: 'Press' },
    { id: 6, title: 'Album Photoshoot', url: '/assets/landscape2.jpg', category: 'Promo' },
    { id: 7, title: 'Tour Stage', url: '/assets/square.jpg', category: 'Live' },
    { id: 8, title: 'Collaboration Session', url: '/assets/landscape1.jpg', category: 'Studio' },
    { id: 9, title: 'Music Video', url: '/assets/landscape2.jpg', category: 'Video' }
  ];

  selectedCategory: string = 'All';
  categories = ['All', 'Live', 'Studio', 'Awards', 'Events', 'Press', 'Promo', 'Video'];

  get filteredImages() {
    if (this.selectedCategory === 'All') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }
}
