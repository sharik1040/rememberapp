import React from 'react'
import { connect } from "react-redux";
import Card from './Card'
import { getCards } from "../redux/selectors";

const CardList = ({ cards }) => (
    <div className="cards">
      {cards && cards.length
        ? cards.map((card, index) => {
            return <Card key={`card-${card.id}`} card={card} />;
          })
        : "No cards!"}
    </div>
  );

const mapStateToProps = state => {
    const cards = getCards(state);
    return { cards };
  };

export default connect(mapStateToProps)(CardList);