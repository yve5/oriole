import React from 'react';

import Buttons from './features/Buttons';
import Header from './features/Header';
import Paging from './features/Paging';

import './styles.scss';

const App = () => (
  <>
    <Header />

    <div className="container">
      <Buttons />
      <Paging />
    </div>
  </>
);

export default App;
