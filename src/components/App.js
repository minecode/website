import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Post from './Post';
import Blog from './Blog';
import Ideas from './Ideas';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';
import NoMatch from './NoMatch.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
          <Router>
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/blog" component={Blog}></Route>
                        <Route exact path="/blog/post/:id" component={Post}></Route>
                        <Route exact path="/ideas" component={Ideas}></Route>
                        <Route path="/covid19">
                            <Redirect to="/covid_19"/>
                        </Route>
                        <Route exact path="/privacyPolicy/shopping_cart" component={PrivacyPolicy}></Route>
                        <Route exact path="/privacyPolicy/pet_find" component={PrivacyPolicy}></Route>
                        <Route exact path="/privacyPolicy/covid19" component={PrivacyPolicy}></Route>
                        <Route exact path="/privacyPolicy/ocean_king" component={PrivacyPolicy}></Route>
                        <Route exact path="/privacyPolicy/codecontest" component={PrivacyPolicy}></Route>
                        <Route path="*" component={NoMatch}></Route>
                    </Switch>
                </main>
                <Footer />
            </div>
          </Router>
        );
    }
}

export default App
