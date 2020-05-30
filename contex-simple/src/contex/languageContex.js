import React from 'react';

export default React.createContext('english');

// if we use <Provider> than perametre is not need 
// export default React.createContext();
// value will come from <Provider value={}>


// if we do not use <Provider> than perametre need and this will default 
// export default React.createContext('english');
// english will only work