import React from 'react';
import RandomWeighted from './RandomWeighted';
import Multicard from './Multicard';
import RegularCard from './RegularCard';

class Flashcard extends React.Component {
    constructor() {
        super();
        this.state = {
            flipClass: ''
        };
    }

    flip = e => {
        let newFlip = this.state.flipClass === '' ? 'flip' : '';
        this.setState({flipClass: newFlip})
    }

    render() {
        return (
            <div className="row align-items-center card-holder">
                <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                    <Multicard />
                </div>
            </div>
        );
    }
}

export default Flashcard;