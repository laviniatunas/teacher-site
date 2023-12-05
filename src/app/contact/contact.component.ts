import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="section">
      <div class="container">
      <h1 class="title">Get in touch with me!</h1>
        <form (ngSubmit)="submitForm()" #contactForm="ngForm" ngNativeValidate >
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">Your name is required.</div>
          </div>        
          <div class="field">
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">Your email is required.</div>
          </div>
          <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"  #messageInput="ngModel" required></textarea>
            <div class="help is-error" *ngIf="messageInput.invalid && messageInput.touched">Your message is required.</div>
          </div>
          <button type="submit" class="button is-large is-warning" [disabled]="contactForm.invalid">Send!</button>
        </form>
      </div>
    </section>
  `,
  styleUrls: ['contact.component.scss'],
})
export class ContactComponent {
  name="";
  email="";
  message="";

  submitForm(){
    // alert('submiting the form....')
    const submit_message= `My name is ${this.name}, my email is ${this.email} and my message is ${this.message}`;
    alert(submit_message)
  }
}
