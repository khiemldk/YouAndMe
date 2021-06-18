import { cui } from "components";
import { CommonService } from "./CommonService";
import { BACKEND_API } from "./_config";
import { postRequest } from "./_http";

const baseURL = BACKEND_API;

const LIST_PACKAGE = [
  { text: "ngày", code: "NGAY" },
  { text: "tuần", code: "TUAN" },
  { text: "tháng", code: "THANG" },
  { text: "năm", code: "NAM" },
]

const tranformCommentList = function (response) {
  if (response?.errorCode === 0) {
    cui.each(response.result, parent => {
      parent.convertedTime = CommonService.convertedTime(parent.lastEdit);
      cui.each(parent.replies, child => {
        child.convertedTime = CommonService.convertedTime(child.lastEdit);
      })
    });
  }
  return response;
};

const tranformPackages = function (response) {
  if (response?.errorCode === 0) {
    cui.each(response.result, item => {
      item.text = LIST_PACKAGE.filter(i => i.code === item.code)[0].text;
    });
  }
  return response;
}

export const UserService = {
  checkAccount: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/login`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

}