import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContextProvider from './contexts/LoginContext';
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import PieChart from "./pages/Chart";
import About from "./pages/About";

function App() {
    return (
        <LoginContextProvider>

            <BrowserRouter>
            <Navbar />
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/schedulemaker" component={Private} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/chart" component={PieChart} />
                    <Route exact path="/logout" component={Home} />
                </div>
            <Footer />
            </BrowserRouter>
        </LoginContextProvider>
    );
}

export default App;
