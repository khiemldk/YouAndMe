import { postRequestNext, postRequest, getRequest } from "./_http";
import { CommonService } from 'api/CommonService';
export const CommonApi = {
  getCountTries: function (successCallback, failCallback) {
    const URL = "https://restcountries.eu/rest/v2/all";
    return getRequest(URL, successCallback, failCallback);
  },
}