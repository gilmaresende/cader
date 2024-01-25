import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { noAuthGuard } from './core/guard/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canActivate: [noAuthGuard],
  },
  {
    path: 'cader',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivateChild: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
