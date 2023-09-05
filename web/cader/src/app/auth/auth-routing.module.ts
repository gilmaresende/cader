import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { PersonViewComponent } from './register/person/person-view/person-view.component';
import { WalletViewComponent } from './register/wallet/wallet-view/wallet-view.component';
import { PersonListComponent } from './register/person/person-list/person-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'person',
        children: [
          { path: '', component: PersonViewComponent },
          { path: 'list', component: PersonListComponent },
          { path: ':id', component: PersonViewComponent },
        ],
      },
      {
        path: 'wallet',
        component: WalletViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
