import { Routes } from '@angular/router';
import { Path } from './path.constants';
import { authGuard } from '../auth/auth.guard';

export const routes: Routes = [
    {
        path: Path.PRADZIA,
        canActivate: [authGuard],
        loadComponent: () => import('../pradzia-hero/pradzia-hero.component').then(m => m.PradziaHeroComponent)
    },
    {
        path: Path.UZSAKYMAI,
        canActivate: [authGuard],
        loadComponent: () => import('../uzsakymai/uzsakymai.component').then(m => m.UzsakymaiComponent)
    },
    {
        path: Path.ANY,
        redirectTo: Path.PRADZIA
    }
];