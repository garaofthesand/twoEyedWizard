import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {
  products: any[] = [];

  // Default external shop URL (Bandcamp)
  private defaultBandcampUrl = 'https://twoeyedwizard.bandcamp.com/album/tuwakituwa';

  constructor(private router: Router, private content: ContentService) {}

  ngOnInit(): void {
    try {
      this.content.get('merch').pipe(first()).subscribe((m: any) => {
        if (Array.isArray(m)) this.products = m;
      });
    } catch (err) {
      // ignore
    }
  }

  openItem(id: string) {
    const product = this.products.find(p => String(p.id) === String(id));
    const url = (product && product.link) ? product.link : this.defaultBandcampUrl;
    try {
      window.open(url, '_blank', 'noopener');
    } catch (e) {
      // fallback: navigate in same tab if popup blocked
      window.location.href = url;
    }
  }
}
