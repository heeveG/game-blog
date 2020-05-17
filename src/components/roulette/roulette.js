import React from 'react';
import "../../styles/roulette.css"
import RouletteBoxes from "./roulette_boxes";
import {TimelineMax, Power4, gsap} from "gsap";
import {CSSPlugin} from 'gsap/CSSPlugin'
import RouletteRolls from "./roulette_previous_rolls";

gsap.registerPlugin(CSSPlugin);

class Roulette extends React.Component {


    constructor(props) {
        super(props);
        this.boxesList = null;
        this.offset = 90;
        this.state = {
            previous: [],
        };

    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    getPositionOfWinner = (pos) => {
        const minPos = pos * 74;
        const maxPos = minPos + 70;

        return this.getRandomNumber(minPos, maxPos);

    };

    animate = (dur, pos, complete) => {
        const tl = new TimelineMax({
            onComplete: complete ? complete.bind(this) : null,
            onCompleteParams: [pos]

        });
        tl.to(this.boxesList, dur, {x: this.getPositionOfWinner(pos) * -1, ease: Power4.easeOut});
    };

    resetAnimation = () => {
        this.animate(0, 8)
    };

    updatePrevious(roll) {
        this.setState({
            previous: [roll, ...this.state.previous.slice(0, 9)]
        })

    }

    componentDidMount() {
        this.resetAnimation();
    }

    render() {
        return (
            <div className="container" ref={el => (this.instance = el)}>

                <div className="row">
                    <div id="roulette-previous">
                        <RouletteRolls rolls={this.state.previous}/>

                    </div>
                    <div id="roulette-container" className="col-md-10 col-md-offset-1">

                        <div id="roulette-container-background"/>
                        <div id="roulette-indicator-id" className="roulette-indicator"/>
                        <div id="roulette-boxes">
                            <ul id="roulette-boxes-list" ref={div => this.boxesList = div}>
                                <RouletteBoxes num={120}/>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="spin">

                        <button className="btn btn-info" onClick={() => {

                            this.resetAnimation();
                            this.animate(7,
                                this.getRandomNumber(this.offset, this.offset + 14),
                                this.updatePrevious);

                        }} id="spin">Spin
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Roulette;
