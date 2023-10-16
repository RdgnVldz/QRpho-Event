// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/header/Header';
// import HeroSection from './components/heroSection/HeroSection';
// import HowItWorks from './components/howItWork/HowItWorks';
// import Events from './components/events/Events';
// import TrustedBy from './components/trustedBy/TrustedBy';
// import Footer from './components/footer/Footer';


// const App = () => {
//   return (
//     <Router>
//         <Header />
//         <Switch>
//           {/* <Route path="/" exact component={Home} /> */}
//         </Switch>
//         <HeroSection />
//         <HowItWorks />
//         <Events />
//         <TrustedBy />
//         <Footer />
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Use HashRouter
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router basename="/QRpho-Event">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/howItWorks" component={HowItWorks} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
