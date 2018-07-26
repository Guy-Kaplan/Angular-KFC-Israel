import { Component } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    public contact: Contact = new Contact();

    public send(): void{
        alert(`
        First Name: ${this.contact.firstName}
        Last Name: ${this.contact.lastName}
        Email: ${this.contact.email}
        Message: ${this.contact.message}
        `);
    }

}
