import React from 'react';

const nums = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];

const OFFSET = 90;


class RouletteBoxes extends React.Component {
    createBoxes = () => {
        let boxes = [];

        for (let i = 0; i < this.props.num; i++) {
            let color;
            if (i % nums.length === 0) {
                color = '#32CD32';
            } else {
                color = i % nums.length % 2 === 0 ? '#F74B45' : '#282828';
            }
            const id = `roulette-box${i}`;
            let completedTemplate = <div className="roulette-box" id={id}
                                         style={{backgroundColor: color}}>{nums[i % nums.length]}</div>;

            // @TODO add key
            boxes.push(<li>{completedTemplate}</li>)
        }
        return boxes
    };

    render() {

        return (
            <div>
                {this.createBoxes()}
            </div>
        );
    }


}

export default RouletteBoxes;