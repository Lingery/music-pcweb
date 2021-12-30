import * as actionTypes from "./constants";

import { getTopBanners } from "@/service/recommend";

// dispatch(getTopBannersAction());

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
    });
  };
};
