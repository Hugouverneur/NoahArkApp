import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/rh-manager/list-users/list-users.component';
import { NewUserComponent } from './components/rh-manager/new-user/new-user.component';
import { ListClassComponent } from './taxinomie/list-class/list-class.component';
import { ListFamilyComponent } from './taxinomie/list-family/list-family.component';
import { ListGenuComponent } from './taxinomie/list-genu/list-genu.component';
import { ListKingdomComponent } from './taxinomie/list-kingdom/list-kingdom.component';
import { ListOrderComponent } from './taxinomie/list-order/list-order.component';
import { ListPhylumComponent } from './taxinomie/list-phylum/list-phylum.component';
import { ListSpiciesComponent } from './taxinomie/list-spicies/list-spicies.component';
import { NewClassComponent } from './taxinomie/new-class/new-class.component';
import { NewFamilyComponent } from './taxinomie/new-family/new-family.component';
import { NewGenuComponent } from './taxinomie/new-genu/new-genu.component';
import { NewKingdomComponent } from './taxinomie/new-kingdom/new-kingdom.component';
import { NewOrderComponent } from './taxinomie/new-order/new-order.component';
import { NewPhylumComponent } from './taxinomie/new-phylum/new-phylum.component';
import { NewSpiciesComponent } from './taxinomie/new-spicies/new-spicies.component';


const routes: Routes = [
  { path: '', pathMatch: "full", component: ListUsersComponent },
  { path: 'user-list', component: ListUsersComponent },
  { path: 'user-new', component: NewUserComponent },
  { path: 'kingdom-new', component: NewKingdomComponent },
  { path: 'kingdom-list', component: ListKingdomComponent },
  { path: 'phylums-new', component: NewPhylumComponent },
  { path: 'phylums-list', component: ListPhylumComponent },
  { path: 'classe-new', component: NewClassComponent },
  { path: 'classe-list', component: ListClassComponent },
  { path: 'orders-new', component: NewOrderComponent },
  { path: 'orders-list', component: ListOrderComponent },
  { path: 'familys-new', component: NewFamilyComponent },
  { path: 'familys-list', component: ListFamilyComponent },
  { path: 'genus-new', component: NewGenuComponent },
  { path: 'genus-list', component: ListGenuComponent },
  { path: 'spicies-new', component: NewSpiciesComponent },
  { path: 'spicies-list', component: ListSpiciesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
