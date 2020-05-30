import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContextProvider from './contexts/LoginContext';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import PieChart from "./pages/Chart";

function App() {
    return (
        <LoginContextProvider>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/private" component={Private} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/chart" component={PieChart} />
                </div>
            </BrowserRouter>
        </LoginContextProvider>
    );
}

export default App;
