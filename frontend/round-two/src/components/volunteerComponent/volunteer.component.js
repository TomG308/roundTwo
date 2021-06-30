import React from 'react';

import ContactForm from '../contactForm/contactForm.component'

import './volunteer.css'

export default function Volunteer() {
  return (
    <div>
        <div className='volunteerContainer'>
            <h1>Contact us to volunteer today!</h1>
            <ContactForm />
        </div>
    </div>
  );
}
