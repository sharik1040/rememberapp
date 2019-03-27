import React from 'react'
import Score from './components/Score'
import CardList from './components/CardList'
import Modal from './components/Modal'
import "./styles.css";

function App(){
    return(
        <div className="app">
            <CardList />
            <Score value={0}/>

            {/* <Modal /> */}
        </div>
    )
}

export default App