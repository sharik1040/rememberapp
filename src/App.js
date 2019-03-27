import React from 'react'
import Card from './components/Card'
import "./styles.css";

function App(){
    return(
        <div>
            <h1>Remember app</h1>
            <Card value={0} />
            <Card value={0} />
        </div>
    )
}

export default App