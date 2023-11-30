// import React, { useEffect, useState } from 'react';

import Axios from './axios';
import Calc from './calculcatorSimple';
import LocalCustom from './local/local';
import DarkMode from './darkmode';
import Filter from './darkmode';
// import Navbar from './tasilwind';
import Wishlist from './wishlist';



function App() {


  return (
    <>

      {/* <DarkMode /> */}
      {/* <Navbar /> */}
      <Filter />
      <Axios />
      {/* <LocalCustom /> */}
      {/* <Calc /> */}
      {/* <Wishlist /> */}

    </>


  );
}

export default App;
