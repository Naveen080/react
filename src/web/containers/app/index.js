import React from 'react';
import Header from '../../components/Header';
import Main from './main';
import Footer from '../../components/Footer';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Header />
      <hr />
       <Main/>
      <Footer /> 
    </div>
    </React.Fragment>
  );
}

export default App;
