import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { first } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrls: ['./music.scss'],
})
export class Music implements OnInit {
  constructor(private content: ContentService) {}

  // Single album
  album: any = {
    id: 1,
    title: 'TuWakiTuwa',
    image: '/squareImg/albumArt1.jpg',
    "tracks": [
        { "title": "Temple of the Eye", "spotify": "https://open.spotify.com/track/3rXClG16kCc4UNb14VxciL?si=mSoJPWHTT5Ov9AaAILHUFg", "description": "", "credits": "" },
        { "title": "Giants of Shambala", "spotify": "https://open.spotify.com/track/4RnTDu87hZVLjSd2X6af1F?si=fcLEglDnToSZFvfGCeuMxg", "description": "", "credits": "" },
        { "title": "Celestial Dancers", "spotify": "https://open.spotify.com/track/73q0NTZSP4o6lnRvsJhGoV?si=rNC6P1R0Rge7DCYuvOKEdQ", "description": "", "credits": "" },
        { "title": "Sadhana", "spotify": "https://open.spotify.com/track/3hhrPavP2weEDNuJTtZHU3?si=VoBYINYOQGSr0mswHMX0wQ", "description": "", "credits": "" },
        { "title": "Elysium", "spotify": "https://open.spotify.com/track/4adY0P4fchL9hKdbnOdT3J?si=JLrngo95TZ6auUr2fzAbaA", "description": "", "credits": "" }
      ]
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