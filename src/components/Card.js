import React from 'react'
import { connect } from "react-redux";
import cx from "classnames";
import { chooseCard, checkPair, checkWin } from "../redux/actions";

const Card = ({ card, chooseCard, checkPair, checkWin }) => (
    <div className={cx(
            "cards__item",
            "noselect",
            card.clicked && "cards__item--clicked",
            card.completed && "cards__item--completed"
        )}
        onClick={() => {  
                        chooseCard(card.id);
                        setTimeout(checkPair, 500);   
                        setTimeout(checkWin, 1000);    
                    }
                }
        >
        <div className="cards__value">
            { card.clicked ? card.value : ""}
        </div>
    </div>
  );

export default connect(null,{ chooseCard, checkPair, checkWin })(Card);