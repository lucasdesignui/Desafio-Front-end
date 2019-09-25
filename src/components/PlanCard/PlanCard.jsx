import React, { Component } from 'react';
import './planCard.scss';

class PlanCard extends Component {
    render() {

        return (
            <div className="planCardWrapper">
                <h4 className="cardPlanTitle">{this.props.title}</h4>
                <span>{this.props.subtitle}</span>

                <strong className="planPrice">{this.props.price}</strong>

                <ul className="listPlanItems">
                    {
                        this.props.items.map(item => 
                            <li>{item}</li>
                        )
                    }
                </ul>

                <button className="buyPlan">{this.props.button.text}</button>

            </div>
        );
    }
}

export default PlanCard;