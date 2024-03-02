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
      const data = await response.json();

      commit("SET_TOKEN", data.Data.token);
      commit("SET_IS_LOGGED_IN", true);
      commit("SET_EMAIL", payload.email);
    } catch (error) {
      console.error(error);
      commit("SET_IS_LOGGED_IN", false);
    }
  },
};
