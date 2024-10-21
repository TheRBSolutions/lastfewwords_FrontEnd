import React from 'react';
import Icon from '../../assets/icon.svg';
import { Link, useParams } from 'react-router-dom';

const FamilyAcces = () => {
    const { title } = useParams();

    return (
        <>
            <div className="p-1">
                <div className="main__container">
                    <div className="lock-icon">
                        <img src={Icon} alt="Icon" />
                    </div>
                    <h2>CONFIRM YOUR IDENTITY</h2>
                    <p style={{ textTransform: 'uppercase' }}>TOO ACCES <strong>{title}</strong> ENTER PASSWORD</p>
                    <div className="otp-input__group">
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                    </div>
                    <p className='mt-1'>
                        Have you forgoten your password?
                        <Link className='link' to='/family-legacy'> Resend</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default FamilyAcces;
