import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navLinks = [
    { label: 'HOME', path: '' },
    { label: 'MUSIC', path: '/music' },
    { label: 'APPEARANCES', path: '/appearances' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'MERCH', path: '/merch' }
  ];

  socialLinks = [
    { icon: 'youtube', url: 'https://youtube.com' },
    { icon: 'spotify', url: 'https://spotify.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'instagram', url: 'https://instagram.com' }
  ];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
