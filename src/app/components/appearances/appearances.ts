import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appearances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appearances.html',
  styleUrl: './appearances.scss',
})
export class Appearances {
  appearances = [
    {
      id: 1,
      event: 'Music Festival 2024',
      date: 'May 15-17, 2024',
      location: 'Los Angeles, CA',
      status: 'Confirmed',
      image: '/assets/images/landscape1.jpg'
    },
    {
      id: 2,
      event: 'European Tour',
      date: 'June 1-30, 2024',
      location: 'Multiple Cities',
      status: 'Confirmed',
      image: '/assets/images/landscape2.jpg'
    },
    {
      id: 3,
      event: 'Summer Concert Series',
      date: 'July 10-25, 2024',
      location: 'Various Venues',
      status: 'Coming Soon',
      image: '/assets/images/landscape1.jpg'
    },
    {
      id: 4,
      event: 'International Music Awards',
      date: 'August 5, 2024',
      location: 'London, UK',
      status: 'Confirmed',
      image: '/assets/images/landscape2.jpg'
    }
  ];
}
