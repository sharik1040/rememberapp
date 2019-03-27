import { CHOOSE_CARD, CHECK_PAIR } from "../actionTypes";

const initialState = {
    allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    cards: {0:{"id":0, "value":"0", "clicked":false, "completed":false},
            1:{"id":1, "value":"0", "clicked":false, "completed":false},
            2:{"id":2, "value":"1", "clicked":false, "completed":false},
            3:{"id":3, "value":"1", "clicked":false, "completed":false},
            4:{"id":4, "value":"2", "clicked":false, "completed":false},
            5:{"id":5, "value":"2", "clicked":false, "completed":false},
            6:{"id":6, "value":"3", "clicked":false, "completed":false},
            7:{"id":7, "value":"3", "clicked":false, "completed":false},
            8:{"id":8, "value":"4", "clicked":false, "completed":false},
            9:{"id":9, "value":"4", "clicked":false, "completed":false},
            10:{"id":10, "value":"5", "clicked":false, "completed":false},
            11:{"id":11, "value":"5", "clicked":false, "completed":false}
        },
    selectedCards: null,
    score: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
    case CHOOSE_CARD: {
        const { id } = action.payload;
        var newState = {
            ...state,
            cards: {
            ...state.cards,
            [id]:{
                ...state.cards[id],
                clicked: true
                }
            },
            selectedCards: (state.selectedCards) ? [...state.selectedCards, id] : [id]
        }
        return newState;
    }
    case CHECK_PAIR: {
        if(state.selectedCards.length===2){
            var firstId = state.selectedCards[0], secondId = state.selectedCards[1];
            var isCardsEqual =  state.cards[firstId].value === state.cards[secondId].value
            newState = {
                ...state,
                cards:{
                    ...state.cards,
                    [firstId]:{
                        ...state.cards[firstId],
                        completed: isCardsEqual,
                        clicked: isCardsEqual
                    },
                    [secondId]:{
                        ...state.cards[secondId],
                        completed: isCardsEqual,
                        clicked: isCardsEqual
                    }
                },
                selectedCards: [],
                score: isCardsEqual ? state.score + 2 : state.score
            }
        }else{
            return state;
        }
        return newState;
    }
    default:
      return state;
  }
}
