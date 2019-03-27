import React from 'react'
import { connect } from "react-redux";
import { startGame } from "../redux/actions";

function Modal({startGame}){
    return(
        <div className="modal">
            <div className="modal__text">
                YOU WIN!
            </div>
            <button className="modal__btn"         
                    onClick={() => {  
                        startGame();
                    }
                }>
                repeat
            </button>
        </div>
    )
}

export default connect(null,{ startGame })(Modal);