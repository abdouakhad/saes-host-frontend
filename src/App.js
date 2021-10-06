import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/masterweb/Navbar";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
// These are the imports I made So far.
// To make it easier to differenciate, I sticked with the jsx format at least for now.
import InfographieScreen from "./screens/InfographieScreen";
import HomeMasterweb from "./screens/HomeMasterweb";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ManagementScreen from "./screens/ManagementScreen";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={HomeScreen} />
      <Route path='/masterweb' component={HomeMasterweb} />
      <Route path='/infographie' component={InfographieScreen} />
      <Route path='/contact' component={ContactScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/dashboard' component={ManagementScreen} />
    </Router>
  );
}

export default App;
