export default {
  setUser: async ({ commit }) => {
    try {
      const response = await fetch(
        "https://65e321ad88c4088649f55e38.mockapi.io/user/user-information",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      commit("SET_USER", data);
    } catch (error) {
      console.error(error);
    }
  },
};
