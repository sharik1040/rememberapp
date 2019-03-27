const initialState = {
  allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  cards: {0:{"value":"0", "clicked":false, "completed":false},
          1:{"value":"0", "clicked":false, "completed":false},
          2:{"value":"1", "clicked":false, "completed":false},
          3:{"value":"1", "clicked":false, "completed":false},
          4:{"value":"2", "clicked":false, "completed":false},
          5:{"value":"20", "clicked":false, "completed":false},
          6:{"value":"3", "clicked":false, "completed":false},
          7:{"value":"3", "clicked":false, "completed":false},
          8:{"value":"4", "clicked":false, "completed":false},
          9:{"value":"4", "clicked":false, "completed":false},
          10:{"value":"50", "clicked":false, "completed":false},
          11:{"value":"5", "clicked":false, "completed":false}
        },
  firstSelectedId: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
