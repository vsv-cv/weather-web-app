import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Settings from './pages/Settings'
import { Container } from "react-bootstrap";

function App () {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Container fluid>
                    <Route path="/" exact component={Home}/>
                    <Route path="/settings/" component={Settings}/>
                </Container>
            </Router>
        </div>
    );
}

export default App;
