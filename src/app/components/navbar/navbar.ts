import { Component, ElementRef, HostListener } from '@angular/core';
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
  constructor(private hostEl: ElementRef) {}
  leftNavLinks = [
    { label: 'HOME', path: '' },
    { label: 'MUSIC', path: '/music' }
  ];

  rightNavLinks = [
    { label: 'MERCH', path: 'https://twoeyedwizard.bandcamp.com/album/tuwakituwa' },
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.menuOpen) return;
    const target = event.target as Node;
    if (!this.hostEl.nativeElement.contains(target)) {
      this.closeMenu();
    }
  }
}
