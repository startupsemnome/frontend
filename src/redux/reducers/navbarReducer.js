const navbar = {
  isNavbarOpen: false,
};

export default (state = navbar, action) => {
  switch (action.type) {
    case "NAVBAR_OPEN":
      return { ...state, isNavbarOpen: action.payload };
    default:
      return state;
  }
};