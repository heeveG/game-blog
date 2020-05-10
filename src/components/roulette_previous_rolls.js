import React from 'react';

const nums = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
const LENGTH = 15;

class RouletteRolls extends React.Component {


    getNextItem = (roll) => {
        let color;
        if (roll % LENGTH === 0) color = '#32CD32';
        else {
            color = roll % LENGTH % 2 === 0 ? '#F74B45' : '#282828';
        }
        return <div className="roulette-previous-item" style={{backgroundColor: color}}>{nums[roll % LENGTH]}</div>
    };

    render() {
        const {rolls} = this.props;
        return (
            <ul id="roulette-previous-list">
                {
                    // @TODO add key
                    rolls.map((roll) => <li>
                        {this.getNextItem(roll)}
                    </li>)
                }
            </ul>
        );
    }


}

export default RouletteRolls;