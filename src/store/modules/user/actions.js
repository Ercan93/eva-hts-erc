export default {
  setUser: async ({ commit }) => {
    try {
      const url = import.meta.env.VITE_APP_USER_INFO_API_URL;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      commit("SET_USER", data[0]);
      localStorage.setItem("eva-hts-user", JSON.stringify(data[0]));
    } catch (error) {
      console.error(error);
    }
  },

  checkUser: async ({ commit, state }) => {
    const user = localStorage.getItem("eva-hts-user");
    const currentUser = state.user;

    if (user && user === currentUser) return;

    if (user) {
      commit("SET_USER", JSON.parse(user));
    }
  },
};
