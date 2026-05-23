import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, FormsModule],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  isContactOpen = false;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  openContactForm(): void {
    this.isContactOpen = true;
  }

  closeContactForm(): void {
    this.isContactOpen = false;
  }

  sendContactEmail(): void {
    const to = 'Studio@twistedwillowworkz.com';
    const subject = this.contactForm.subject || 'Website Contact Form';

    const body = `
Name: ${this.contactForm.name}
Email: ${this.contactForm.email}

Message:
${this.contactForm.message}
    `.trim();

    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.closeContactForm();
  }
}
