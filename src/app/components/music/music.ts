import { Component, OnInit } from '@angular/core';
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
export class Music implements OnInit {
  constructor(private content: ContentService) {}

  // album will be loaded from content.json at runtime; initialize empty to avoid stale hardcoded data
  album: any = {
    id: null,
    title: '',
    image: '/squareImg/albumArt1.jpg',
    tracks: []
  };

  openTrackIndex: number | null = null;

  ngOnInit(): void {
    // load single album from content.json if provided
    try {
      this.content.get('music').pipe(first()).subscribe((m: any) => {
        if (!m) return;
        if (m.album) this.album = m.album;
        else if (m) this.album = m;
      });
    } catch (err) {
      // ignore
    }
    }

  toggleDetails(i: number) {
    this.openTrackIndex = this.openTrackIndex === i ? null : i;
  }

  isDetailsOpen(i: number) {
    return this.openTrackIndex === i;
  }

  // no carousel needed for single album

  buildSrcset(base?: string, widths: number[] = [480, 800, 1600]): string {
    if (!base) return '';
    const idx = base.lastIndexOf('.');
    const baseNoExt = idx > -1 ? base.slice(0, idx) : base;
    const ext = idx > -1 ? base.slice(idx + 1) : 'jpg';
    return widths.map((w) => `${baseNoExt}-${w}.${ext} ${w}w`).join(', ');
  }

  // Desktop slider scroll helpers for albums
  scrollAlbumsNext() {
    try {
      const track = document.querySelector('.albums-track') as HTMLElement;
      if (!track) return;
      const w = track.clientWidth || window.innerWidth;
      track.scrollBy({ left: Math.floor(w * 0.8), behavior: 'smooth' });
    } catch (e) {
      // ignore
    }
  }

  scrollAlbumsPrev() {
    try {
      const track = document.querySelector('.albums-track') as HTMLElement;
      if (!track) return;
      const w = track.clientWidth || window.innerWidth;
      track.scrollBy({ left: -Math.floor(w * 0.8), behavior: 'smooth' });
    } catch (e) {
      // ignore
    }
  }
}