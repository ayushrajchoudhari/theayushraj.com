import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DeviceChecker = ({ children }) => {
  const [isCompatible, setIsCompatible] = useState(null);

  useEffect(() => {
    const checkDeviceCompatibility = () => {
      setIsCompatible(window.innerWidth >= 300);
    };

    // Initial check
    checkDeviceCompatibility();

    // Add resize listener
    window.addEventListener('resize', checkDeviceCompatibility);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDeviceCompatibility);
    };
  }, []);

  // Don't render anything until we know the device status
  if (isCompatible === null) return null;

  if (!isCompatible) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '20px',
        overflow: 'hidden'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h2 style={{ color: '#ff0000', marginBottom: '20px' }}>Device Incompatibility</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
            This website requires a minimum screen width of 300px.
            Please use a larger device to access the content.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

DeviceChecker.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeviceChecker;