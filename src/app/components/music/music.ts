import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrl: './music.scss',
})
export class Music implements OnInit, OnDestroy {
  // optional top/header image
  headerImage = '/tuwakituwa.png';

  // Albums: each album has an image and its own tracks
  albums = [
    {
      id: 1,
      title: 'TuWakiTuwa',
      image: '/squareImg/square1.jpg',
      tracks: [
        { title: 'TuWakiTuwa (Original)', spotify: 'https://open.spotify.com/track/7qiZfU4dY1lsylvNEprXGy' },
        { title: 'Midnight Beat', spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' }
      ]
    },
    {
      id: 2,
      title: 'Echoes & Neon',
      image: '/squareImg/square2.jpg',
      tracks: [
        { title: 'Echoes', spotify: 'https://open.spotify.com/track/7yO4IdJjCEPz7YgZMe25iS' },
        { title: 'Neon Sky', spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' }
      ]
    },
    {
      id: 3,
      title: 'Midnight Lull',
      image: '/squareImg/square3.jpg',
      tracks: [
        { title: 'Lullaby (Interlude)', spotify: 'https://open.spotify.com/track/7qiZfU4dY1lsylvNEprXGy' }
      ]
    }
  ];

  currentAlbum = 0;
  albumTimer: any = null;

  ngOnInit(): void {
    this.startAlbums();
  }

  ngOnDestroy(): void {
    this.stopAlbums();
  }

  startAlbums() {
    this.stopAlbums();
    this.albumTimer = setInterval(() => this.nextAlbum(), 4000);
  }

  stopAlbums() {
    if (this.albumTimer) {
      clearInterval(this.albumTimer);
      this.albumTimer = null;
    }
  }

  nextAlbum() {
    this.currentAlbum = (this.currentAlbum + 1) % this.albums.length;
  }

  prevAlbum() {
    this.currentAlbum = (this.currentAlbum - 1 + this.albums.length) % this.albums.length;
  }

  selectAlbum(i: number) {
    this.currentAlbum = i;
    this.startAlbums();
  }
}
