import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListTaxinomieComponent } from './components/list-taxinomie/list-taxinomie.component';
import { ListUsersComponent } from './components/rh-manager/list-users/list-users.component';
import { NewUserComponent } from './components/rh-manager/new-user/new-user.component';
import { DetailRoomComponent } from './components/site-manager/detail-room/detail-room.component';
import { DetailSiteComponent } from './components/site-manager/detail-site/detail-site.component';
import { DetailStorageComponent } from './components/site-manager/detail-storage/detail-storage.component';
import { ListSiteComponent } from './components/site-manager/list-site/list-site.component';
import { MoveLotComponent } from './components/site-manager/move-lot/move-lot.component';
import { NewLotComponent } from './components/site-manager/new-lot/new-lot.component';
import { NewRoomComponent } from './components/site-manager/new-room/new-room.component';
import { NewSiteComponent } from './components/site-manager/new-site/new-site.component';
import { NewStorageComponent } from './components/site-manager/new-storage/new-storage.component';
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
  { path: '', pathMatch: "full", component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'user-list', component: ListUsersComponent },
  { path: 'user-new', component: NewUserComponent },
  { path: 'sites-new', component: NewSiteComponent },
  { path: 'sites-list', component: ListSiteComponent },
  { path: 'site-detail/:id', component: DetailSiteComponent },
  { path: 'new-storage/:id', component: NewStorageComponent },
  { path: 'detail-storage/:id', component: DetailStorageComponent },
  { path: 'new-room/:id', component: NewRoomComponent },
  { path: 'new-lot/:id', component: NewLotComponent },
  { path: 'detail-room/:id', component: DetailRoomComponent },
  { path: 'move-lot/:id', component: MoveLotComponent },

  { path: 'taxinomie-list', component: ListTaxinomieComponent },
  { path: 'kingdoms-new', component: NewKingdomComponent },
  { path: 'kingdoms-list', component: ListKingdomComponent },
  { path: 'phylums-new', component: NewPhylumComponent },
  { path: 'phylums-list', component: ListPhylumComponent },
  { path: 'classes-new', component: NewClassComponent },
  { path: 'classes-list', component: ListClassComponent },
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
