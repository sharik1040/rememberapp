import { CHOOSE_CARD, CHECK_PAIR } from "./actionTypes";

export const chooseCard = id =>({
    type: CHOOSE_CARD,
    payload: {"id":id}
});

export const checkPair = () => ({
    type: CHECK_PAIR,
    payload: ""
  });
  