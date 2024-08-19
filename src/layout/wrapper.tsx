import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { animationCreate } from "../utils/utils";
import Preloader from "../components/common/preloader.tsx";
import BackToTopCom from "../components/common/back-to-top-com";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    // Reset loading state on every route change
    setLoading(true);

    const handleLoad = () => {
      setLoading(false);
      animationCreate();
    };
    

    // Trigger load event after a route change
    //window.addEventListener('load', handleLoad);
    const loadTimeout = setTimeout(() => setLoading(false), 2000);
    // Cleanup on unmount or when the location changes
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(loadTimeout);
    };
  }, []); // Re-run the effect whenever the location changes

  return (
    <>
      {loading && <Preloader />}
      {children}
      <BackToTopCom />
      <ToastContainer />
    </>
  );
};

export default Wrapper;
