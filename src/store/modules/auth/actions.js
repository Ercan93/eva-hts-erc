export default {
  fetchUserToken: async ({ commit }, payload) => {
    try {
      /*const body = JSON.stringify({
          "Email": "string",
          "Password": "string",
          "GrantType": "string",
          "Scope": "string",
          "ClientId": "string",
          "ClientSecret": "string",
          "RedirectUri": "string"
        }); */

      const url = import.meta.env.VITE_APP_OAUTH_API_URL;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      data = data[0].Data;

      commit("SET_TOKEN", data.AccessToken);
      commit("SET_IS_LOGGED_IN", true);
      commit("SET_EMAIL", payload.email);

      localStorage.setItem("eva-hts-token", data.AccessToken);
      localStorage.setItem("eva-hts-email", payload.email);
    } catch (error) {
      console.error(error);
      commit("SET_IS_LOGGED_IN", false);
    }
  },

  checkUserToken: async ({ commit, state }) => {
    const token = localStorage.getItem("eva-hts-token");
    const email = localStorage.getItem("eva-hts-email");

    const currentToken = state.token;
    const currentEmail = state.email;

    if (token && email && token === currentToken && email === currentEmail)
      return;

    if (token && email) {
      commit("SET_TOKEN", token);
      commit("SET_IS_LOGGED_IN", true);
      commit("SET_EMAIL", email);
    } else {
      commit("SET_IS_LOGGED_IN", false);
    }
  },

  logout: ({ commit }) => {
    commit("SET_IS_LOGGED_IN", false);
    commit("SET_TOKEN", "");
    commit("SET_EMAIL", "");

    localStorage.removeItem("eva-hts-token");
    localStorage.removeItem("eva-hts-email");
    localStorage.removeItem("eva-hts-user");
  },
};
