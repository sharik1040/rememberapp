import React from 'react'
import { connect } from "react-redux";
import { getScore } from "../redux/selectors";

const Score = ({ score }) => (
    <div className="score">
        <div className="score__title">
            SCORE: 
        </div>
        <div className="score__value">
            { score }
        </div>
    </div>
);

const mapStateToProps = state => {
    const score = getScore(state);
    return { score: score};
  };

  export default connect(mapStateToProps)(Score);