import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
// import LoginPage from './Login';
// import RegisterPage from './Register';

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      {/*<Home />*/}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};

export default App;
