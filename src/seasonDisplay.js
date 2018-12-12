import './seasonDisplay.css';
import React from  'react';

const seasonConfig = {
    summer: {
        text: 'Let`s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = ({lat, month}) => {
    if (month > 2 && month < 9)
        return lat > 0 ? 'summer' : 'winter';
    else 
        return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = props => {
    const season = getSeason({lat: props.lat, month: new Date().getMonth()})
    const {text, iconName} = seasonConfig[season];
    return (
    <div className={`season-display ${season}`}>
        <i className={`${iconName} icon-left massive icon`} />
        <div className='season'>
            <h1>{text}</h1>
        </div>
        <i className={`${iconName} icon-right massive icon`} />
    </div>)
}

export default SeasonDisplay;