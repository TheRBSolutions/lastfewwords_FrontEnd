import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="about-section">
                <div className="container">
                    <div className="about-content">
                        {/* <div className="image-container">
                            <img src="https://via.placeholder.com/300x500" alt="App Image" className="about-img" />
                        </div> */}
                        <div className="about-text">
                            <h1 style={{ textAlign: 'center' }}>About Us</h1>
                            <p>
                                At LastFewWords, we're dedicated to redefining the way we connect with loved ones and how we preserve our life's moments.
                                We understand the profound impact that personal memories, stories, and last words can have on families and friends.
                                Our platform was born from a simple idea: to create a space where individuals can document their life journeys,
                                share their innermost thoughts, and ensure that their voices continue to resonate, even after they're no longer with us.
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <button className="primary-btn" onClick={() => { navigate('/contact') }}>
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="info-cards">
                        <div className="info-card">
                            <h3>CALL US</h3>
                            <p>(123) 456-7890</p>
                        </div>
                        <div className="info-card">
                            <h3>LOCATION</h3>
                            <p>123 Main St, Anytown, USA</p>
                        </div>
                        <div className="info-card" style={{ marginBottom: '4rem' }}>
                            <h3>HOURS</h3>
                            <p>Mon - Fri: 9 am - 5 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;
