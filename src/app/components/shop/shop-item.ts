import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { first } from 'rxjs/operators';
import { attachSwipe } from '../../utils/swipe';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-item.html',
  styleUrl: './shop-item.scss',
})
export class ShopItem implements OnInit, AfterViewInit, OnDestroy {
  id!: string;
  item: any = null;
  slideIndex = 0;
  private detachSwipe: (() => void) | undefined;

  constructor(private route: ActivatedRoute, private content: ContentService, private ngZone: NgZone) {}

 

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (!this.id) return;
    this.content.get('merch').pipe(first()).subscribe((m: any) => {
      if (!m) return;
      const found = (m as any[]).find((x: any) => x.id === this.id || String(x.id) === this.id);
      if (found) {
        this.item = found;
        this.slideIndex = 0;
      }
    });
  }

  ngAfterViewInit(): void {
    // attach swipe on the slideshow for mobile
    try {
      const el = document.querySelector('.shop-item-gallery') as HTMLElement;
      if (el) {
        this.detachSwipe = attachSwipe(el, (dir) => {
          this.ngZone.run(() => {
            if (dir === 'left') this.nextSlide(); else this.prevSlide();
          });
        });
      }
    } catch (err) {
      // ignore
    }
  }

  ngOnDestroy(): void {
    if (this.detachSwipe) this.detachSwipe();
  }

  buildSrcset(base?: string) {
    if (!base) return '';
    const idx = base.lastIndexOf('.');
    const baseNoExt = idx > -1 ? base.slice(0, idx) : base;
    const ext = idx > -1 ? base.slice(idx + 1) : 'jpg';
    return ['480','800','1600'].map(w => `${baseNoExt.replace(/-480$/,'')}-${w}.${ext} ${w}w`).join(', ');
  }

  nextSlide() {
    if (!this.item || !this.item.images || !this.item.images.length) return;
    this.slideIndex = (this.slideIndex + 1) % this.item.images.length;
  }

  prevSlide() {
    if (!this.item || !this.item.images || !this.item.images.length) return;
    this.slideIndex = (this.slideIndex - 1 + this.item.images.length) % this.item.images.length;
  }

  selectSlide(i: number) {
    if (!this.item || !this.item.images) return;
    this.slideIndex = i;
  }

  // Expose encodeURIComponent to the template (template type-checker
  // treats global functions as component properties).
  encodeURIComponent(value: string): string {
    try {
      return globalThis.encodeURIComponent(value);
    } catch (e) {
      return (encodeURIComponent as any)(value);
    }
  }
}
