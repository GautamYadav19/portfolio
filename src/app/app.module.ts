import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationWorkComponent } from './components/education-work/education-work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollerComponent } from './service/scroller/scroller.component';
import { PopUpContactMeComponent } from './components/contactme/pop-up-contact-me/pop-up-contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationWorkComponent,
    ProjectsComponent,
    ContactmeComponent,
    FooterComponent,
    ScrollerComponent,
    PopUpContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
