import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-appearances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appearances.html',
  styleUrl: './appearances.scss',
})
export class Appearances implements OnInit {
  constructor(private content: ContentService) {}
  buildSrcset(base?: string, widths: number[] = [480, 1024, 1600]): string {
    if (!base) return '';
    const idx = base.lastIndexOf('.');
    const baseNoExt = idx > -1 ? base.slice(0, idx) : base;
    const ext = idx > -1 ? base.slice(idx + 1) : 'jpg';
    return widths.map((w) => `${baseNoExt}-${w}.${ext} ${w}w`).join(', ');
  }

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

  ngOnInit() {
    try {
      this.content.get('appearances').pipe(first()).subscribe((v: any) => {
        if (!v) return;
        // support either an array or object with `events` key
        const arr = Array.isArray(v) ? v : v.events || v.list || null;
        if (Array.isArray(arr)) {
          this.appearances = arr;
          this.upcoming = this.appearances.filter(a => a.status === 'Upcoming');
          this.finished = this.appearances.filter(a => a.status === 'Finished');
        }
      });
    } catch (err) {
      // ignore
    }
  }
}