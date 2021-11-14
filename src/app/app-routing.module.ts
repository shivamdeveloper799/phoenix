import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './capsules/capsules.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ImmunityproductComponent } from './immunityproduct/immunityproduct.component';
import { InjectionComponent } from './injection/injection.component';
import { ProfileComponent } from './profile/profile.component';
import { SyrupComponent } from './syrup/syrup.component';
import { TabletsComponent } from './tablets/tablets.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'profile', component: ProfileComponent},
  {path:'capsules', component: CapsulesComponent},
  {path:'tablets', component: TabletsComponent},
  {path:'injections', component: InjectionComponent},
  {path:'immunity-products', component: ImmunityproductComponent},
  {path:'syrups', component: SyrupComponent},
  {path:'contact', component: ContactusComponent},
  {path:'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
