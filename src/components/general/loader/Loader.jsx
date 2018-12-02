// react libraries
import React from 'react';

// third-pary libraries
import LoadingIndicator from 'react-loader-spinner';

const Loader = () => (
  <div className="loader-spiner">
    <LoadingIndicator type='Oval' color='#00BFFF' height='100' width='100' />;
  </div>
);

export default Loader;
