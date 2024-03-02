export default {
  setSkuRefundRate: ({ commit }, payload) => {
    commit("SET_SKU_REFUND_RATE", payload);
  },
  setSkuSalesList: ({ commit }, payload) => {
    commit("SET_SKU_SALES_LIST", payload);
  },
  setSalesOverview: (context) => {
    /* const user = context.rootGetters["user/getUser"];
       const sellerId = user[0].Data.user.store[0].storeId;
       const marketplace = user[0].Data.user.store[0].marketplaceName;
       const body = JSON.stringify({
          marketplace: "string",
          sellerId: "string",
          requestStatus: 0,
          day: 0,
          excludeYoYData: true,
       }); */
    const url = import.meta.env.VITE_APP_SALES_API_URL;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        context.commit("SET_SALES_OVERVIEW", data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
