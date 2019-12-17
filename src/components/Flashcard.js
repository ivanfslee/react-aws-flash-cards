import React from 'react';
import RandomWeighted from './RandomWeighted';
import Multicard from './Multicard';
import RegularCard from './RegularCard';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSpinner); //add spinner icon to the library

class Flashcard extends React.Component {
    constructor() {
        super();
        this.apiHostRoot = 'https://aws-services.robertbunch.dev/services'; 
        this.state = {
            flipClass: '',
            questionData: '',
            ready: false,
        };
    }

    componentDidMount() {
        
    }

    flip = e => {
        let newFlip = this.state.flipClass === '' ? 'flip' : '';
        this.setState({flipClass: newFlip})
    }

    newCard = () => {
        let path;
        console.log(this.props.cardStyle);
        const cardStyle = this.props.cardStyle;
        if (cardStyle === 'Random' || cardStyle === 'Regular') {
            path = this.apiHostRoot + '/all';
        } else if (cardStyle === 'Weighted') {
            path = this.apiHostRoot + '/weighted';
        } else {
            path = this.apiHostRoot + '/multi';
        }

        axios.get(path).then(response => {
            // console.log(response.data);
            this.setState({
                questionData: response.data,
                ready: true,
            })
        })
    }

    render() {
        if (!this.state.ready) {
            this.newCard();
            return (
                <div className="spinner-wrapper">
                    <FontAwesomeIcon icon="spinner" size="6x" spin />
                </div>
            );
        }
        return (
            <div>
                <div className="row align-items-center card-holder">
                    <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                        <RegularCard questionData={this.state.questionData} />
                    </div>    
                </div>
                <button onClick={this.newCard} className="btn btn-primary btn-lg">Next Card</button>            
            </div>
        );
    }
}

export default Flashcard;