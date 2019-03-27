import React from 'react'
import Card from './Card'

function CardList(){
    return(
        <div className="cards">
            <Card value={0} />
            <Card value={0} />
            <Card value={1} />
            <Card value={1} />
            <Card value={2} />
            <Card value={2} />
            <Card value={3} />
            <Card value={3} />
            <Card value={4} />
            <Card value={4} />
            <Card value={5} />
            <Card value={5} />
        </div>
    )
}

export default CardList