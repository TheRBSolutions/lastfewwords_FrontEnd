import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                toggleSidebar();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, toggleSidebar]);

    const handleLogout = async () => {
        await dispatch(logout());
        navigate('/login');
        toggleSidebar();
    };

    const handleMenuItem = (url) => {
        if (url) {
            navigate(url);
            toggleSidebar();
        }
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
            <button className="menu-btn">
                <h2 style={{ padding: '0px' }}>Menu</h2>
                <FontAwesomeIcon icon={faXmark} className="cross-icon" onClick={toggleSidebar} />
            </button>

            <ul>
                <li onClick={() => { handleMenuItem('/dashboard') }}>
                    <a>Home</a>
                </li>
                <li onClick={() => { handleMenuItem('/audio-files') }}>
                    <a>Audio</a>
                </li>
                <li onClick={() => { handleMenuItem('/video-files') }}>
                    <a>Video</a>
                </li>
                <li onClick={() => { handleMenuItem('/document-files') }}>
                    <a>Document</a>
                </li>
                <li onClick={() => { handleMenuItem('/image-files') }}>
                    <a>Images</a>
                </li>
                <li onClick={() => { handleMenuItem('/family-legacy') }}>
                    <a>Family Legacy</a>
                </li>
                <li onClick={() => { handleMenuItem('/subscription') }}>
                    <a>Buy Storage</a>
                </li>
                <li onClick={() => { handleMenuItem('/family-acces/son') }}>
                    <a>Security</a>
                </li>
                <li onClick={() => { handleMenuItem('/about') }}>
                    <a>About</a>
                </li>
                <li onClick={() => { handleMenuItem('/contact') }}>
                    <a>Contact</a>
                </li>
            </ul>

            <button className="logout-btn"
                onClick={() => { handleLogout() }}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
                <span>Logout</span>
            </button>
        </div>
    );
};

export default Sidebar;
