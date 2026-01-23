import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {
  newsArticles = [
    {
      id: 1,
      title: 'New Album Released - Breaking Records',
      date: 'January 20, 2024',
      category: 'Music',
      image: '/assets/images/landscape1.jpg',
      excerpt: 'The latest album has already reached platinum status with millions of streams worldwide.'
    },
    {
      id: 2,
      title: 'World Tour Announcement 2024',
      date: 'January 15, 2024',
      category: 'Events',
      image: '/assets/images/landscape2.jpg',
      excerpt: 'Get your tickets now for the biggest tour of the year with stops in 50 cities.'
    },
    {
      id: 3,
      title: 'Collaboration with Global Artists',
      date: 'January 10, 2024',
      category: 'Music',
      image: '/assets/images/landscape1.jpg',
      excerpt: 'Exciting collaborations announced featuring top artists from around the world.'
    },
    {
      id: 4,
      title: 'Award Show Victory',
      date: 'January 5, 2024',
      category: 'Awards',
      image: '/assets/images/landscape2.jpg',
      excerpt: 'Multiple award wins at the prestigious international music awards ceremony.'
    },
    {
      id: 5,
      title: 'Documentary Series Premieres',
      date: 'December 28, 2023',
      category: 'Media',
      image: '/assets/images/landscape1.jpg',
      excerpt: 'Behind-the-scenes documentary series now available on major streaming platforms.'
    },
    {
      id: 6,
      title: 'Charity Initiative Launched',
      date: 'December 20, 2023',
      category: 'Community',
      image: '/assets/images/landscape2.jpg',
      excerpt: 'New charity initiative aimed at supporting music education in underserved communities.'
    }
  ];
}
