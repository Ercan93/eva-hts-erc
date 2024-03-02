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
      commit("SET_USER", data);
    } catch (error) {
      console.error(error);
    }
  },
};
