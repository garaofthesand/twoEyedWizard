import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from '../../services/content.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  private fb = inject(FormBuilder);
  private content = inject(ContentService);

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // populate defaults from content.json if present
    try {
      this.content.get('contact').pipe(first()).subscribe((c: any) => {
        if (!c) return;
        if (c.defaults && this.contactForm) {
          this.contactForm.patchValue(c.defaults);
        }
      });
    } catch (err) {
      // ignore
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
