const INITIAL_STATE = {
  current_network: JSON.parse(localStorage.getItem("current_network")) || {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NETWORK_FETCH":
      return { current_network : action.payload };
    default:
      return state;
  }
};
