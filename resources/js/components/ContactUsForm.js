import React from 'react'
import './ContactUsForm.css'

function ContactUsForm() {
    return (
        <div className="contactUsForm">

            <h3>WRITE TO US</h3>

            <div className="contactUsForm__content">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea placeholder="Message" ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUsForm
