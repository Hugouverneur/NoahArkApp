import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './components/rh-manager/new-user/new-user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListUsersComponent } from './components/rh-manager/list-users/list-users.component';
import { ListKingdomComponent } from './taxinomie/list-kingdom/list-kingdom.component';
import { NewKingdomComponent } from './taxinomie/new-kingdom/new-kingdom.component';
import { NewPhylumComponent } from './taxinomie/new-phylum/new-phylum.component';
import { ListPhylumComponent } from './taxinomie/list-phylum/list-phylum.component';
import { ListClassComponent } from './taxinomie/list-class/list-class.component';
import { NewClassComponent } from './taxinomie/new-class/new-class.component';
import { NewOrderComponent } from './taxinomie/new-order/new-order.component';
import { ListOrderComponent } from './taxinomie/list-order/list-order.component';
import { ListFamilyComponent } from './taxinomie/list-family/list-family.component';
import { NewFamilyComponent } from './taxinomie/new-family/new-family.component';
import { NewGenuComponent } from './taxinomie/new-genu/new-genu.component';
import { ListGenuComponent } from './taxinomie/list-genu/list-genu.component';
import { ListSpiciesComponent } from './taxinomie/list-spicies/list-spicies.component';
import { NewSpiciesComponent } from './taxinomie/new-spicies/new-spicies.component';
import { ListTaxinomieComponent } from './components/list-taxinomie/list-taxinomie.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HeaderComponent,
    FooterComponent,
    ListUsersComponent,
    ListKingdomComponent,
    NewKingdomComponent,
    NewPhylumComponent,
    ListPhylumComponent,
    ListClassComponent,
    NewClassComponent,
    NewOrderComponent,
    ListOrderComponent,
    ListFamilyComponent,
    NewFamilyComponent,
    NewGenuComponent,
    ListGenuComponent,
    ListSpiciesComponent,
    NewSpiciesComponent,
    ListTaxinomieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
