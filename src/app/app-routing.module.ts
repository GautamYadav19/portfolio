import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contactme', component: ContactmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
