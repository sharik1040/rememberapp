import { CHOOSE_CARD, CHECK_PAIR, CHECK_WIN, START_GAME } from "./actionTypes";

export const chooseCard = id =>({
    type: CHOOSE_CARD,
    payload: {"id":id}
});

export const checkPair = () => ({
    type: CHECK_PAIR,
    payload: ""
  });
  
export const checkWin = () => ({
    type: CHECK_WIN,
    payload: ""
});

export const startGame = () => ({
    type: START_GAME,
    payload: ""
});