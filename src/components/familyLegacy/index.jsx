import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FamilyLegacy = () => {
    const navigate = useNavigate();

    const familyMembers = [
        { name: 'son', storage: '03 OF 20GB' },
        { name: 'son2', storage: '03 OF 20GB' },
        { name: 'mom', storage: '03 OF 20GB' },
        { name: 'sister', storage: '03 OF 20GB' },
        { name: 'dad', storage: '03 OF 20GB' },
    ];

    return (
        <div className="feature__container">
            <header className="feature-header">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                    onClick={() => { navigate('/dashboard') }} />
                <h2 className='feature-title'>Family Legacy</h2>
            </header>
            <div className="features-grid mt-1" style={{ padding: '2rem 1rem' }}>
                {familyMembers.map((member, index) => (
                    <div className={`item-detail feature-item ${member.name === 'dad' ? 'feature-item-wide' : ''}`}
                        key={index}
                        onClick={() => { navigate(`/family-acces/${member?.name}`) }}>
                        <p className='feature-name text-upper p-0'
                            style={{ marginBottom: '12px' }}>{member.name}</p>
                        <p className="storage-info p-0">{member.storage}</p>
                    </div>
                ))}
            </div>
            <button className="add-member__btn"
                onClick={() => { navigate('/subscription') }}>
                <FontAwesomeIcon icon={faPlus} />
                <span>Add New Family Member</span>
            </button>
        </div>
    );
}

export default FamilyLegacy;
