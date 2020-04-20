import React from 'react';
import Applications from './Home/Applications';
import Blog from './Home/Blog';
import Idea from './Home/Idea';
import Team from './Home/Team';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Applications />
                <Blog />
                <Idea />
                <Team />
            </div>
        );
    }
}

export default Home