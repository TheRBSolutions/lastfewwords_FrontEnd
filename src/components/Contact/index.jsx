import React from 'react';

const ContactPage = () => {
    return (
        <>
            <div className="feature__container contact-main">
                <h1>Contact Us</h1>
                <div
                    style={{ fontSize: '20px' }}>
                    Lorem ipsum dolor sit amet consectetur
                </div>
                <h2 style={{ padding: '3rem 0rem 1rem', textAlign: 'left' }}>Get In Touch</h2>
                <form>
                    <div className="input-group">
                        <label>Name *</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-group">
                        <label>Email *</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label>Phone Number *</label>
                        <input type="text" placeholder="Enter your phonr number" />
                    </div>
                    <div className="input-group">
                        <label>Message *</label>
                        <textarea placeholder="Enter your message" rows="8" cols="50" />
                    </div>
                    <button className="primary-btn"
                        onClick={() => { navigate('/dashboard') }}>
                        Submit
                    </button>

                </form>
            </div>
        </>
    )
}

export default ContactPage