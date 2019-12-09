import React from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from './PlayerApi';

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    );
    if(!player) {
        return <h1>Player not found!</h1>
    }
    return (
        <div>
            <h1>Player : {player.name}</h1>
            <p>Position : {player.position}</p>
            <Link to="/roster">Back</Link>
        </div>
    )
}

export default Player;