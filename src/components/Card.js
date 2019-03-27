import React, {Component} from 'react'
import cx from "classnames";

class Card extends Component{
    state ={
        isClicked: false,
        isCompleted: false
    }

    render(){
        const {card} = this.props
        const body = this.state.isClicked && <section>{card.value}</section>
        return (
            <div>
                <li className={cx(
                            "cards__item",
                            "noselect",
                            this.state.isClicked && "cards__item--clicked",
                            this.state.isCompleted && "cards__item--completed"
                    )} onClick={this.handleClick}>
                    <div className="cards__value">
                        { body }
                    </div>
                </li>
            </div>
        )   
    }

    handleClick = () => {
        this.setState({
            isCompleted: (this.state.isClicked) ? true: false,
            isClicked: !this.state.isClicked
        })
    }
}

export default Card