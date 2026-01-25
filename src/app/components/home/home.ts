import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy, AfterViewInit {

  constructor(private sanitizer: DomSanitizer, private ngZone: NgZone) {}

  // detach functions for swipe listeners
  slideshowDetach: (() => void) | undefined;
  spotifyDetach: (() => void) | undefined;

  // keep a stable reference so we can remove the listener on destroy
  resizeHandler = () => this.checkMobile();

  /* ===========================
     HERO IMAGE SLIDESHOW
  ============================ */

  slideImages = [
    { id: 1, pc: 'landscapImg/landscape1.jpg', mobile: 'squareImg/square1.jpg' },
    { id: 2, pc: 'landscapImg/landscape2.jpg', mobile: 'squareImg/square2.jpg' }
  ];

  currentSlide = 0;
  slideInterval: any;
  isMobile = false;

  ngOnInit() {
    this.checkMobile();

    window.addEventListener('resize', this.resizeHandler);

    this.startSlideshow();
    this.startSpotifySlideshow();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
    clearInterval(this.spotifySlideInterval);
    window.removeEventListener('resize', this.resizeHandler);
    if (this.slideshowDetach) this.slideshowDetach();
    if (this.spotifyDetach) this.spotifyDetach();
  }

  ngAfterViewInit() {
    try {
      const { attachSwipe } = require('../../utils/swipe');

      const slideEl = document.querySelector('.slideshow-container') as HTMLElement;
      if (slideEl) {
        this.slideshowDetach = attachSwipe(slideEl, (dir) =>
          this.ngZone.run(() => {
            if (dir === 'left') this.nextSlide();
            else this.prevSlide();
          })
        );
      }

      const spotifyEl = document.querySelector('.spotify-promo-wrapper') as HTMLElement;
      if (spotifyEl) {
        this.spotifyDetach = attachSwipe(spotifyEl, (dir) =>
          this.ngZone.run(() => {
            if (dir === 'left') this.nextSpotifySlide();
            else this.prevSpotifySlide();
          })
        );
      }
    } catch (err) {
      // ignore if swipe util can't be attached
    }
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
    this.currentSlide =
      (this.currentSlide - 1 + this.slideImages.length) %
      this.slideImages.length;
    this.resetSlideTimer();
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  resetSlideTimer() {
    clearInterval(this.slideInterval);
    this.startSlideshow();
  }

  /* ===========================
     SPOTIFY SONG SLIDESHOW
  ============================ */

  spotifySongs = [
    {
      embedId: '4RnTDu87hZVLjSd2X6af1F',
      spotifyLink: 'https://open.spotify.com/track/4RnTDu87hZVLjSd2X6af1F',
      image: 'squareImg/square1.jpg'
    },
    {
      embedId: '3hhrPavP2weEDNuJTtZHU3',
      spotifyLink: 'https://open.spotify.com/track/3hhrPavP2weEDNuJTtZHU3',
      image: 'squareImg/square1.jpg'
    }
  ];

  spotifyIndex = 0;
  spotifySlideInterval: any;

  nextSpotifySlide() {
    this.spotifyIndex =
      (this.spotifyIndex + 1) % this.spotifySongs.length;
  }

  prevSpotifySlide() {
    this.spotifyIndex =
      (this.spotifyIndex - 1 + this.spotifySongs.length) %
      this.spotifySongs.length;
    this.resetSpotifyTimer();
  }

  startSpotifySlideshow() {
    this.spotifySlideInterval = setInterval(
      () => this.nextSpotifySlide(),
      6000
    );
  }

  resetSpotifyTimer() {
    clearInterval(this.spotifySlideInterval);
    this.startSpotifySlideshow();
  }

  getSpotifyUrl(): SafeResourceUrl {
    const embed =
      `https://open.spotify.com/embed/track/${this.spotifySongs[this.spotifyIndex].embedId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }
}