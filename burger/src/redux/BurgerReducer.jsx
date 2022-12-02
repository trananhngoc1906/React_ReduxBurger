const burgerState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREAD": {
      let newState = { ...state };
      for (let key in action.payload) {
        if (action.payload[key] === -1 && newState.burger[key] < 1) {
          return newState;
        }
        newState.burger = {
          ...newState.burger,

          [key]: newState.burger[key] + action.payload[key],
        };
      }
      return newState;
    }
    default:
      return state;
  }
};
