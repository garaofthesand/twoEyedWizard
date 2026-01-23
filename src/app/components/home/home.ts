import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  constructor(private sanitizer: DomSanitizer) {}
  slideImages = [
    { id: 1, pc: 'landscapImg/landscape1.jpg', mobile: 'squareImg/square1.jpg' },
    { id: 2, pc: 'landscapImg/landscape2.jpg', mobile: 'squareImg/square2.jpg' }
  ];

  currentSlide = 0;
  slideInterval: any;
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
    this.startSlideshow();
    this.startSpotifySlideshow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    if (this.spotifySlideInterval) {
      clearInterval(this.spotifySlideInterval);
    }
    window.removeEventListener('resize', () => this.checkMobile());
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  getCurrentImage() {
    return this.isMobile
      ? this.slideImages[this.currentSlide].mobile
      : this.slideImages[this.currentSlide].pc;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slideImages.length;
    this.resetSlideTimer();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slideImages.length) % this.slideImages.length;
    this.resetSlideTimer();
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  resetSlideTimer() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.startSlideshow();
  }

  spotifyPromo = [
    {
      songName: 'Shape of You',
      spotifyLink: 'https://open.spotify.com/track/7qiZfU4dY1lsylvNEprXGy',
      spotifyEmbedId: '7qiZfU4dY1lsylvNEprXGy',
      image: 'squareImg/square1.jpg'
    },
    {
      songName: 'Blinding Lights',
      spotifyLink: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMwbk',
      spotifyEmbedId: '0VjIjW4GlUZAMYd2vXMwbk',
      image: 'squareImg/square2.jpg'
    },
    {
      songName: 'As It Was',
      spotifyLink: 'https://open.spotify.com/track/5FVd6KqnYLDQQOz37C89zw',
      spotifyEmbedId: '5FVd6KqnYLDQQOz37C89zw',
      image: 'squareImg/square1.jpg'
    },
    {
      songName: 'Anti-Hero',
      spotifyLink: 'https://open.spotify.com/track/0geTzdk8syyVQ7unUZnBVP',
      spotifyEmbedId: '0geTzdk8syyVQ7unUZnBVP',
      image: 'squareImg/square2.jpg'
    }
  ];

  spotifyPromoSlide = 0;
  spotifySlideInterval: any;

  nextSpotifySlide() {
    this.spotifyPromoSlide = (this.spotifyPromoSlide + 1) % this.spotifyPromo.length;
  }

  prevSpotifySlide() {
    this.spotifyPromoSlide = (this.spotifyPromoSlide - 1 + this.spotifyPromo.length) % this.spotifyPromo.length;
    this.resetSpotifySlideTimer();
  }

  startSpotifySlideshow() {
    this.spotifySlideInterval = setInterval(() => {
      this.nextSpotifySlide();
    }, 4000); // Change song every 4 seconds
  }

  resetSpotifySlideTimer() {
    if (this.spotifySlideInterval) {
      clearInterval(this.spotifySlideInterval);
    }
    this.startSpotifySlideshow();
  }

  getSpotifyUrl(): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/track/${this.spotifyPromo[this.spotifyPromoSlide].spotifyEmbedId}?utm_source=generator`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
