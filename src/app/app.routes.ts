import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Music } from './components/music/music';
import { Appearances } from './components/appearances/appearances';
import { Contact } from './components/contact/contact';
import { Shop } from './components/shop/shop';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'music', component: Music },
  { path: 'appearances', component: Appearances },
  { path: 'contact', component: Contact },
  { path: 'merch', component: Shop },
  { path: '**', redirectTo: '' }
];
