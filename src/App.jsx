import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUserCircle,
  faShoppingCart,
  faLock,
  faCloudArrowUp
} from '@fortawesome/free-solid-svg-icons';
import Login from './components/authentication/login';
import OtpVerification from './components/authentication/otpVerifications';
import SignUp from './components/authentication/signup';
import Dashboard from './components/dashboard';
import AudioFiles from './components/audioFiles';
import VideoFiles from './components/videoFiles';
import DocumentFiles from './components/documentFiles';
import ImageFiles from './components/imageFiles';
import FamilyLegacy from './components/familyLegacy';
import FamilyAcces from './components/familyAcces';
import Subscription from './components/subscription';
import ContactPage from './components/Contact';
import Sidebar from './components/sidebar';
import './App.css';
import AboutPage from './components/About';
import PrivateRoute from './PrivateRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {

  const { pathname } = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const authRoutes = ['/login', '/signup', '/otp-verification'];

  const hideHeaderFooter = authRoutes.some(route => pathname.startsWith(route));

  return (
    <main>
      <div className="top-blocks--sticky" style={{ padding: '1rem 1rem 0rem' }}>
        {!hideHeaderFooter &&
          <>
            <header className="dashboard-header" >
              <FontAwesomeIcon icon={faBars} className="icon" onClick={toggleSidebar} />
              <FontAwesomeIcon icon={faUserCircle} className="icon" />
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </header>
          </>
        }
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private Route */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/audio-files" element={<AudioFiles />} />
          <Route path="/video-files" element={<VideoFiles />} />
          <Route path="/document-files" element={<DocumentFiles />} />
          <Route path="/image-files" element={<ImageFiles />} />
          <Route path="/family-legacy" element={<FamilyLegacy />} />
          <Route path="/family-acces/:title" element={<FamilyAcces />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!hideHeaderFooter &&
        <>
          <footer className="dashboard-footer__container">
            <FontAwesomeIcon icon={faCloudArrowUp} className="footer-icon" />
            <FontAwesomeIcon icon={faShoppingCart} className="footer-icon" />
            <FontAwesomeIcon icon={faLock} className="footer-icon" />
          </footer>
        </>
      }
    </main>
  );
}

export default App;
