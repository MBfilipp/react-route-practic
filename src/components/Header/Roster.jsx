import React from 'react';
import { Route } from 'react-router-dom';
import FullPlayer from './Roster/FullPlayer';
import Player from './Roster/Player';

const Roster = () => {
    return (
        <>
            <Route exact path="/roster" component={FullPlayer}/>
            <Route path="/roster/:number" component={Player}/>
        </>
    )
}

export default Roster;