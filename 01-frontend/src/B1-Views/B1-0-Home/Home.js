// [ I.A. Imports: React ] -> -=-=-=-=-=-=-=-=-=-=-=-=|
import React from 'react';

// [ I.B. Imports: Design Library ] -> -=-=-=-=-=-=-=-=-=-=-=-=


// [ I.C. Imports: CSS ] -> -=-=-=-=-=-=-=-=-=-=-=-=
import './Home.css';


// [ I.D. Imports: Components ] -> -=-=-=-=-=-=-=-=-=-=-=-=
import Appbar5 from "../../B3-Components/1-MUI/Appbar/Appbar-5/Appbar5";

// [ II.A. - functional component ] -> -=-=-=-=-=-=-=-=-=-=-=-=
export default function Home() {

  return (
    <div>
      <h1>Home Page</h1>
      <Appbar5 />
    </div>
  );
}