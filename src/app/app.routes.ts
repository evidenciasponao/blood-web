import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Biografia } from './pages/biografia/biografia';
import { Discografia } from './pages/discografia/discografia';
import { Merch } from './core/merch/merch';
import { Contacto } from './pages/contacto/contacto';
import { Galeria } from './pages/galeria/galeria';
import { Logos } from './pages/galeria/subpages/logos/logos';
import { Eventos } from './pages/galeria/subpages/eventos/eventos';
import { Fotos } from './pages/galeria/subpages/fotos/fotos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'biografia', component: Biografia },
  { path: 'discografia', component: Discografia },
  { path: 'merch', component: Merch },
  { path: 'contacto', component: Contacto },
  {
    path: 'galeria',
    component: Galeria,
    children: [
      { path: '', redirectTo: 'logos', pathMatch: 'full' },
      { path: 'logos', component: Logos },
          { path: 'fotos', component: Fotos },
      { path: 'eventos', component: Eventos }
    ]
  },
  { path: '**', redirectTo: '' }
];