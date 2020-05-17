import React from 'react';

const nums = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];

class RouletteRolls extends React.Component {


    getNextItem = (roll) => {
        let color;
        if (roll % nums.length === 0) color = '#3eb240';
        else {
            color = roll % nums.length % 2 === 0 ? '#F74B45' : '#282828';
        }
        return <div className="roulette-previous-item" style={{backgroundColor: color}}>{nums[roll % nums.length]}</div>
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