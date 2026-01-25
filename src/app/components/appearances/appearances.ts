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
      date: 'May 15–17, 2024',
      location: 'Los Angeles, CA',
      status: 'Upcoming',
      link: 'https://example.com/festival',
      image: '/assets/images/landscape1.jpg'
    },
    {
      id: 2,
      event: 'European Tour',
      date: 'June 1–30, 2024',
      location: 'Multiple Cities',
      status: 'Upcoming',
      link: 'https://example.com/tour',
      image: '/assets/images/landscape2.jpg'
    },
    {
      id: 3,
      event: 'Summer Concert Series',
      date: 'July 10–25, 2023',
      location: 'Various Venues',
      status: 'Finished',
      image: '/assets/images/landscape1.jpg'
    },
    {
      id: 4,
      event: 'International Music Awards',
      date: 'August 5, 2023',
      location: 'London, UK',
      status: 'Finished',
      image: '/assets/images/landscape2.jpg'
    }
  ];

  upcoming = this.appearances.filter(a => a.status === 'Upcoming');
  finished = this.appearances.filter(a => a.status === 'Finished');
}