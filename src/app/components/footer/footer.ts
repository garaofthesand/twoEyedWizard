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
    { label: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCj5M0csWD2UVurd8SjHVEOQ' },
    { label: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com/twoeyedwizard/' },
    { label: 'Spotify', icon: 'fab fa-spotify', url: 'https://open.spotify.com/artist/3QGNCybOCnUBbnJwbZlcWL?si=FMi-s0T0SL21eOH19LNHSg' },
    { label: 'Apple Music', icon: 'fab fa-apple', url: 'https://music.apple.com/in/artist/two-eyed-wizard/1679219991' },
    { label: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/twoeyedwizard/' }
  ];
}
