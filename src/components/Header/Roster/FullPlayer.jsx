import React from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from './PlayerApi';

const FullPlayer = () => {
    return (
        <ul>
            {PlayerAPI.all().map((item, index) => {
                return (
                    <li key={item.number}>
                       <Link to={`roster/${item.number}`}>{item.name}</Link> 
                    </li>
                )
            })}
        </ul>
        
    )
}

export default FullPlayer;