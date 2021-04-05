import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import logo from "./logo.gif";

const App = () => (
  <Router>
    <div className="md:container md:mx-auto px-4">
      <nav className="bg-brand px-8 py-2">
        <div className="flex justify-between text-center">
          <Link
            to="/"
            className="text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-1 flex items-center"
          >
            <img src={logo} alt="Hacker News" className="border-2 mr-2" />
            Hacker News
          </Link>
          <Link
            to="/login"
            className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase text-xl font-extralight py-1"
          >
            Login
          </Link>
        </div>
      </nav>

      <div className="bg-gray-100 h-full">
        <Route path="/">
          <Home />
        </Route>
      </div>
    </div>
  </Router>
);

export default App;
