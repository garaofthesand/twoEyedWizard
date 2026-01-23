import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrl: './music.scss',
})
export class Music {
  albums = [
    {
      id: 1,
      title: 'Album Title 1',
      artist: 'Artist Name',
      year: 2024,
      image: '/assets/images/square.jpg',
      tracks: 12,
      streams: '5.2M'
    },
    {
      id: 2,
      title: 'Album Title 2',
      artist: 'Artist Name',
      year: 2023,
      image: '/assets/images/square.jpg',
      tracks: 14,
      streams: '8.1M'
    },
    {
      id: 3,
      title: 'Album Title 3',
      artist: 'Artist Name',
      year: 2022,
      image: '/assets/images/square.jpg',
      tracks: 11,
      streams: '12.5M'
    },
    {
      id: 4,
      title: 'Album Title 4',
      artist: 'Artist Name',
      year: 2021,
      image: '/assets/images/square.jpg',
      tracks: 13,
      streams: '15.3M'
    },
    {
      id: 5,
      title: 'Album Title 5',
      artist: 'Artist Name',
      year: 2020,
      image: '/assets/images/square.jpg',
      tracks: 12,
      streams: '20.1M'
    },
    {
      id: 6,
      title: 'Album Title 6',
      artist: 'Artist Name',
      year: 2019,
      image: '/assets/images/square.jpg',
      tracks: 15,
      streams: '25.8M'
    }
  ];
}
