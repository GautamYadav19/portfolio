import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/service/apiservices.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css'],
})
export class ContactmeComponent {
  currentRouter = this.router.url;
  submitted = false;
  messageSend = false;
  error = false;
  contactform = this.fb.group({
    name: ['', Validators.required],
    senderEmail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  constructor(
    public fb: FormBuilder,
    private ApiService: ApiservicesService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.contactform.valid) {
      this.submitted = true;
      return this.ApiService.createMail(this.contactform.value).subscribe({
        complete: () => {
          this.submitted = false;
          this.messageSend = true;
          this.contactform.reset();
          this.error = false;
          this.router.navigate([this.currentRouter]);
          alert('Message send successfully!');
        },
        error(e) {
          return e;
        },
      });
    }
    this.error = true;
    this.messageSend = false;
    return false;
  }
  callme() {
    const num = document.createElement('a');
    num.href = 'tel:+919410011857';
    num.click();
    console.log(num);
  }
  mailme() {
    const mail = document.createElement('a');
    mail.href =
      'mailto:gautamyadav1992002@gmail.com?subject=personal mail(Portfolio) %20Subject&body=Your%20Message';
    mail.click();
  }
}
