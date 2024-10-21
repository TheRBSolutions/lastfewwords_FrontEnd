import React from 'react';
import Icon from '../../../assets/icon.svg';
import { Link } from 'react-router-dom';

const OtpVerification = () => {
    return (
        <>
            <div className="p-1">
                <div className="main__container">
                    <div className="lock-icon">
                        <img src={Icon} alt="Icon" />
                    </div>
                    <h2>LAST FEW WORDS</h2>
                    <p>ENTER YOUR OTP VERIFICATION CODE</p>
                    <div className="otp-input__group">
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                    </div>
                    <p className='mt-1'>
                        Didn’t Receive an OTP?
                        <Link className='link' to='/login'> Resend</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default OtpVerification;
