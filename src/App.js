import React from 'react'
import Score from './components/Score'
import CardList from './components/CardList'
import "./styles.css";

function App(){
    return(
        <div class="app">
            <CardList />
            <Score value={0}/>
        </div>
    )
}

export default App