import { Component } from '@angular/core';

@Component({
  selector: 'app-education-work',
  templateUrl: './education-work.component.html',
  styleUrls: ['./education-work.component.css'],
})
export class EducationWorkComponent {
  ScreenCheck: boolean;
  constructor() {
    function onload() {
      if (window.innerWidth < 768) {
        return false;
      } else if (window.innerWidth < 992) {
        return true;
      } else {
        return true;
      }
    }
    function checkMobileScreen() {
      if (window.innerWidth < 768) {
        return false;
      } else {
        return true;
      }
    }
    window.onresize = checkMobileScreen;
    if (window.onload) {
      window.onload = onload;
      this.ScreenCheck = onload();
    }
    this.ScreenCheck = checkMobileScreen();
  }
}
