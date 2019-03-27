export const getAppState = store => store.gameProcess;

export const getCardList = store =>
  getAppState(store) ? getAppState(store).allIds : [];

export const getCardById = (store, id) =>
  getAppState(store) ? { ...getAppState(store).cards[id], id } : {};

export const getCards = store =>
  getCardList(store).map(id => getCardById(store, id));

export const getScore = store => store.gameProcess.score;

export const getWinResult = store => store.gameProcess.isWin;