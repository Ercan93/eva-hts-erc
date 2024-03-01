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
};
