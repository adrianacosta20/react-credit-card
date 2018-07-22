import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Info = {
    logo: "Big Bank, Inc",
    cardNumber: "1234 5678 8765 4321",
    firstFour:"1234",
    expiration:"8/19",
    name:"CARDHOLDER NAME"
};

function Card() {
    return (
        <div className="card">
            <div className="logo">
                <p className="logo-text">{this.props.logo}</p>
            </div>
            {/* <div className="info">
                <p className="card-number">{props.cardNumber}</p>
                <p className="card-first-four">{props.firstFour}</p>
                <p className="card-expiration">{props.expiration}</p>
                <p className="card-name">{props.name}</p>
            </div> */}
        </div>
    );
};

ReactDOM.render(<Card logo="Big Bank , Inc"/>, document.getElementById('root'));
