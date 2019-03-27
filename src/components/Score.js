import React, {Component} from 'react'

class Score extends Component{
    render(){
        const {value} = this.props
        const body = <section>{value}</section>
        return (
            <div className="score">
                <div className="score__title">
                    SCORE: 
                </div>
                <div className="score__value">
                    { body }
                </div>
            </div>
        )   
    }
}

export default Score