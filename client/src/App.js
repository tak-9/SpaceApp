import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContextProvider from './contexts/LoginContext';
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";

function App() {
    return (
        <LoginContextProvider>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/login" component={Login} /> */}
                    <Route exact path="/scheduler" component={Private} />
                    <Route exact path="/signup" component={Signup} />
                    {/* <Route exact path="/chart" component={PieChart} /> */}
                </div>
            </BrowserRouter>
        </LoginContextProvider>
    );
}

export default App;
