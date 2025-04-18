import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
            <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
            
       
  )
}

export default Contact