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
    this.router.navigate(['/merch', id]);
  }
}
