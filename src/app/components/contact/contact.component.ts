import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean;
  success: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.submitted = false;
    this.success = false;
  }

  async onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Save to backend
    await swal({
      title: `Good job ${this.contactForm.controls.name.value}`,
      text: `You're message : ${this.contactForm.controls.message.value}!`,
      icon: `success`,
    });

    this.success = true;
  }

  removeNotice() {
    this.submitted = false;
    this.success = false;
  }
}
