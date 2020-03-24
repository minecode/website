import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Post from './Post';
import Blog from './Blog';
import Ideas from './Ideas';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

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
                        <Route path="/covid19" exact>
                            <Redirect to="/covid19/"/>
                        </Route>
                        <Route path="/ocean_king" exact>
                            <Redirect to="/ocean_king/"/>
                        </Route>
                        <Route path="/:application/privacyPolicy" component={PrivacyPolicy}></Route>
                    </Switch>
                </main>
                <Footer />
            </div>
          </Router>
        );
    }
}

export default App