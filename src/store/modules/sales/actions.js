export default {
  setSkuRefundRate: ({ commit }, payload) => {
    commit("SET_SKU_REFUND_RATE", payload);
  },
  setSkuSalesList: ({ commit }, payload) => {
    commit("SET_SKU_SALES_LIST", payload);
  },
  setSalesOverview: ({ commit }, payload) => {
    commit("SET_SALES_OVERVIEW", payload);
  },
  fetchSalesOverview: (context) => {
/*     const data = localStorage.getItem("eva-hts-sales-overview");
    if (data) {
      context.dispatch("setSalesOverview", JSON.parse(data));
      return;
    }
 */
    /* const body = JSON.stringify({
      marketplace: "string",
      sellerId: "string",
      requestStatus: 0,
      day: 0,
      excludeYoYData: true,
    }); */

    const url = import.meta.env.VITE_APP_DAILY_SALES_OVERVIEW_API_URL;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ data: data }) => {
        context.dispatch("setSalesOverview", data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
