export default {
  SET_EMAIL: (state, email) => {
    state.email = email;
  },
  SET_IS_LOGGED_IN: (state, isLoggedIn) => {
    state.isLoggedIn = isLoggedIn;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};
