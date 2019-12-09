import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Header/Home';
import Roster from './Header/Roster';
import Schedule from './Header/Schedule';

const Main = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/roster" component={Roster} />
            <Route path="/schedule" component={Schedule} />
        </>
    )
}

export default Main;