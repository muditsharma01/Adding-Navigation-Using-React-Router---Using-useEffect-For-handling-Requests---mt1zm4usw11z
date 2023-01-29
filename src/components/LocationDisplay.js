import { useLocation } from 'react-router-dom'
import React from 'react'

const LocationDisplay = () => {
  let location = useLocation();

  return (
    <div data-testid="location-display">
      {location.pathname}
    </div>
  );
};

export default LocationDisplay;
