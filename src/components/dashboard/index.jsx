import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVolumeUp,
    faVideo,
    faFileAlt,
    faImage,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleFiles = (file) => {
        navigate(file)
    }

    return (
        <div className="dashboard__container">
            <h2>Welcome User,</h2>
            <div className="storage-space__container">
                <h2 style={{ padding: '1rem' }}>Storage Space</h2>
                <div className="storage-bar">
                    <div className="storage-used" style={{ width: '77.8%' }}></div>
                </div>
                <p style={{ padding: '1rem' }}>155.6 of 200 GB Used</p>
            </div>
            <div className="features-grid">
                <div className="feature-item"
                    onClick={() => { handleFiles('/audio-files') }}>
                    <FontAwesomeIcon icon={faVolumeUp} className="features-icon" />
                    <p className='feature-name p-0' >Audio</p>
                </div>
                <div className="feature-item"
                    onClick={() => { handleFiles('/video-files') }}>
                    <FontAwesomeIcon icon={faVideo} className="features-icon" />
                    <p className='feature-name p-0' >Video</p>
                </div>
                <div className="feature-item"
                    onClick={() => { handleFiles('/document-files') }}>
                    <FontAwesomeIcon icon={faFileAlt} className="features-icon" />
                    <p className='feature-name p-0' >Document</p>
                </div>
                <div className="feature-item"
                    onClick={() => { handleFiles('/image-files') }}>
                    <FontAwesomeIcon icon={faImage} className="features-icon" />
                    <p className='feature-name p-0' >Images</p>
                </div>
                <div className="feature-item-wide"
                    onClick={() => { handleFiles('/family-legacy') }}>
                    <FontAwesomeIcon icon={faUsers} className="features-icon" />
                    <p className='feature-name p-0' >Family Legacy</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
