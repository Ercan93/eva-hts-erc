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
  fetchSalesOverview: (context, payload) => {
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
        data = data.splice(0, payload);
        context.dispatch("setSalesOverview", data);
        localStorage.setItem("eva-hts-sales-overview", JSON.stringify(data));
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
