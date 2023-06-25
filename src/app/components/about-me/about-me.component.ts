import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  downloadPDF() {
    const fileUrl = '../../../assets/myC.v.pdf';
    const fileName = 'myC.V.pdf';

    // Trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
    console.log(link);
  }
}
