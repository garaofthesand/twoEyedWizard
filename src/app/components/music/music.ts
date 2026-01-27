import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { attachSwipe } from '../../utils/swipe';
import { ContentService } from '../../services/content.service';
import { first } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrl: './music.scss',
})
export class Music implements OnInit, OnDestroy, AfterViewInit {
  constructor(private ngZone: NgZone, private content: ContentService) {}
  // optional top/header image
  headerImage = '/tuwakituwa.png';

  // Albums: each album has an image and its own tracks
  albums = [
    {
      id: 1,
      title: 'TuWakiTuwa',
      image: '/squareImg/home1.jpg',
      tracks: [
        { title: 'TuWakiTuwa (Original)', spotify: 'https://open.spotify.com/track/7qiZfU4dY1lsylvNEprXGy' },
        { title: 'Midnight Beat', spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' }
      ]
    },
    {
      id: 2,
      title: 'Echoes & Neon',
      image: '/squareImg/home2.jpg',
      tracks: [
        { title: 'Echoes', spotify: 'https://open.spotify.com/track/7yO4IdJjCEPz7YgZMe25iS' },
        { title: 'Neon Sky', spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' }
      ]
    },
    {
      id: 3,
      title: 'Midnight Lull',
      image: '/squareImg/home1.jpg',
      tracks: [
        { title: 'Lullaby (Interlude)', spotify: 'https://open.spotify.com/track/7qiZfU4dY1lsylvNEprXGy' }
      ]
    }
  ];

  currentAlbum = 0;
  albumTimer: any = null;
  isMobile = false;
  private albumDetach: (() => void) | undefined;
  // stable resize handler
  resizeHandler = () => this.handleResize();

  ngOnInit(): void {
    this.checkMobile();
    window.addEventListener('resize', this.resizeHandler);
    this.startAlbums();
    // load albums/header from content.json if provided
    try {
      this.content.get('music').pipe(first()).subscribe((m: any) => {
        if (!m) return;
        if (Array.isArray(m.albums)) this.albums = m.albums;
        else if (Array.isArray(m)) this.albums = m;
        if (m.headerImage) this.headerImage = m.headerImage;
      });
    } catch (err) {
      // ignore
    }
  }

  ngOnDestroy(): void {
    this.stopAlbums();
    window.removeEventListener('resize', this.resizeHandler);
    if (this.albumDetach) this.albumDetach();
  }

  ngAfterViewInit(): void {
    this.updateAlbumSwipe();
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  handleResize() {
    const was = this.isMobile;
    this.checkMobile();
    if (was !== this.isMobile) this.updateAlbumSwipe();
  }

  updateAlbumSwipe() {
    try {
      const el = document.querySelector('.album-art') as HTMLElement;
      if (this.isMobile) {
        if (el && !this.albumDetach) {
          this.albumDetach = attachSwipe(el, (dir: 'left' | 'right') => {
            this.ngZone.run(() => {
              if (dir === 'left') this.nextAlbum();
              else this.prevAlbum();
            });
          });
        }
      } else {
        if (this.albumDetach) {
          this.albumDetach();
          this.albumDetach = undefined;
        }
      }
    } catch (err) {
      // ignore
    }
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

  buildSrcset(base?: string, widths: number[] = [480, 800, 1600]): string {
    if (!base) return '';
    const idx = base.lastIndexOf('.');
    const baseNoExt = idx > -1 ? base.slice(0, idx) : base;
    return widths.map((w) => `${baseNoExt}-${w}.svg ${w}w`).join(', ');
  }
}
