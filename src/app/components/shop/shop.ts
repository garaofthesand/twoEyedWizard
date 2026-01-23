import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
  products = [
    {
      id: 1,
      name: 'Album CD',
      price: 14.99,
      image: '/assets/square.jpg',
      category: 'Music'
    },
    {
      id: 2,
      name: 'Vinyl Record',
      price: 24.99,
      image: '/assets/landscape1.jpg',
      category: 'Music'
    },
    {
      id: 3,
      name: 'T-Shirt',
      price: 29.99,
      image: '/assets/landscape2.jpg',
      category: 'Apparel'
    },
    {
      id: 4,
      name: 'Hoodie',
      price: 49.99,
      image: '/assets/square.jpg',
      category: 'Apparel'
    },
    {
      id: 5,
      name: 'Baseball Cap',
      price: 19.99,
      image: '/assets/landscape1.jpg',
      category: 'Accessories'
    },
    {
      id: 6,
      name: 'Merchandise Bundle',
      price: 79.99,
      image: '/assets/landscape2.jpg',
      category: 'Bundle'
    },
    {
      id: 7,
      name: 'Limited Edition Poster',
      price: 34.99,
      image: '/assets/square.jpg',
      category: 'Collectibles'
    },
    {
      id: 8,
      name: 'Digital Album',
      price: 9.99,
      image: '/assets/landscape1.jpg',
      category: 'Digital'
    }
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    alert(product.name + ' added to cart!');
  }
}
