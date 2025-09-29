import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import gmailIcon from '../../assets/gmail.png';
import whatsappIcon from '../../assets/whatsapp.png';
import githubIcon from '../../assets/github.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_htoui3f', // Your EmailJS service ID
            'template_dz9fray', // Your EmailJS template ID
            form.current,
            'zi5kCwEOUG6TeHCVl' // Your EmailJS public key
        )
        .then((result) => {
            alert('Email Sent!');
            e.target.reset();
        }, (error) => {
            alert('Failed to send email. Please try again.');
            console.log(error.text);
        });
    };

    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                    <button type="submit" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={gmailIcon} alt="Gmail" className="link" />
                        </a>
                        <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappIcon} alt="WhatsApp" className="link" />
                        </a>
                        <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;