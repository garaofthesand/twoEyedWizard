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
  leftNavLinks = [
    { label: 'HOME', path: '' },
    { label: 'MUSIC', path: '/music' }
  ];

  rightNavLinks = [
    { label: 'APPEARANCES', path: '/appearances' },
    { label: 'MERCH', path: '/merch' },
    { label: 'CONTACT', path: '/contact' }
  ];

  get navLinks() {
    return [...this.leftNavLinks, ...this.rightNavLinks];
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
