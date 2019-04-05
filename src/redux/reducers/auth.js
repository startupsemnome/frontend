const auth = {
  login: localStorage.getItem('userName') ? true : false,
};

export default (state = auth, action) => {
  switch (action.type) {
    case "LOGIN_OK":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};