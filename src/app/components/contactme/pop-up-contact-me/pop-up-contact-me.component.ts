import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up-contact-me',
  templateUrl: './pop-up-contact-me.component.html',
  styleUrls: ['./pop-up-contact-me.component.css'],
})
export class PopUpContactMeComponent {
  popUp() {
    document.getElementById('popup-1')?.classList.toggle('active');
  }
}
