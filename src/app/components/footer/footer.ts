import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'News', path: '/news' },
    { label: 'Music', path: '/music' },
    { label: 'Shop', path: '/shop' },
    { label: 'Contact', path: '/contact' }
  ];

  socialLinks = [
    { label: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com' },
    { label: 'Spotify', icon: 'fab fa-spotify', url: 'https://spotify.com' },
    { label: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { label: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' }
  ];
}
