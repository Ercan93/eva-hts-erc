export default {
  setEmail: ({ commit }, email) => {
    commit("SET_EMAIL", email);
  },
  setIsLoggedIn: ({ commit }, isLoggedIn) => {
    commit("SET_IS_LOGGED_IN", isLoggedIn);
  },
};
