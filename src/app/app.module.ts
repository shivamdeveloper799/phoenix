import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { RatingComponent } from './rating/rating.component';
import { TrustComponent } from './trust/trust.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CapsulesComponent } from './capsules/capsules.component';
import { TabletsComponent } from './tablets/tablets.component';
import { InjectionComponent } from './injection/injection.component';
import { ImmunityproductComponent } from './immunityproduct/immunityproduct.component';
import { SyrupComponent } from './syrup/syrup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CarousalComponent,
    ProductsComponent,
    AboutComponent,
    RatingComponent,
    TrustComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    CapsulesComponent,
    TabletsComponent,
    InjectionComponent,
    ImmunityproductComponent,
    SyrupComponent,
    ContactusComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
