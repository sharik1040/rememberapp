import React from 'react'
import Score from './components/Score'
import CardList from './components/CardList'
import Modal from './components/Modal'
import { connect } from "react-redux";
import { getWinResult } from "./redux/selectors";
import "./styles.css";

function App({isWin}){
    if(isWin){
        return(
            <div className="app">
                <Modal />
            </div>
        )
    }else{
        return(
            <div className="app">
                <CardList />
                <Score value={0}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const isWin = getWinResult(state);
    return { isWin: isWin };
};

export default connect(mapStateToProps)(App);