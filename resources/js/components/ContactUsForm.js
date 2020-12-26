import Axios from 'axios';
import React, { useState } from 'react'
import './ContactUsForm.css'

function ContactUsForm() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://127.0.0.1:8000/api/contact', contact)
        setContact({ ...contact, name: '', email: '', phone: '', message: '' })
    }

    return (
        <div className="contactUsForm">

            <h3>WRITE TO US</h3>

            <div className="contactUsForm__content">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"
                    value={contact.name}
                    onChange={ e => setContact({...contact, name: e.target.value})}
                />
                <input type="email" placeholder="Email"
                    value={contact.email}
                    onChange={ e => setContact({...contact, email: e.target.value})}
                />
                <input type="text" placeholder="Phone Number"
                    value={contact.phone}
                    onChange={ e => setContact({...contact, phone: e.target.value})}
                />
                <textarea placeholder="Message" value={contact.message}
                    onChange={ e => setContact({...contact, message: e.target.value})}>
                </textarea>
                <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUsForm
