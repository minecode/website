import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Post from './Post';
import Blog from './Blog';
import Ideas from './Ideas';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
          <Router basename="/">
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/blog" exact component={Blog}></Route>
                        <Route path="/blog/:id" component={Post}></Route>
                        <Route path="/ideas" component={Ideas}></Route>
                    </Switch>
                </main>
                <Footer />
            </div>
          </Router>
        );
    }
}

export default App