import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
    const navigate = useNavigate();

    const subscriptionList = [
        { storage: '100GB', price: '200$' },
        { storage: '150GB', price: '300$' },
        { storage: '200GB', price: '400$' },
        { storage: '500GB', price: '500$' },
        { storage: '1000GB', price: '800$' },
    ];

    return (
        <div className="feature__container">
            <header className="feature-header">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                    onClick={() => { navigate('/family-legacy') }} />
                <h2 className='feature-title'>BUY A NEW PACKAGE</h2>
            </header>
            <div className="features-grid mt-1" style={{ padding: '2rem 1rem' }}>
                {subscriptionList.map((member, index) => (
                    <div className={`item-detail feature-item ${member.storage === '1000GB' ? 'feature-item-wide' : ''}`}
                        key={index}
                    >
                        <p className='feature-name text-upper p-0'
                            style={{ marginBottom: '12px' }}>{member.storage}</p>
                        <p className="storage-info p-0">{member.price}</p>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Subscription;
