import { postRequestNext, postRequest, getRequest } from "./_http";
import { CommonService } from 'api/CommonService';
import { useRef } from "react";
export const CommonApi = {
  getCountTries: function (successCallback, failCallback) {
    const URL = "https://restcountries.eu/rest/v2/all";
    return getRequest(URL, successCallback, failCallback);
  },
  days: [...new Array(31).keys()],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  years: [...new Array(50).keys()]
}