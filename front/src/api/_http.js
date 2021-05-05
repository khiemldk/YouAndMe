import axios from 'axios';
import { cui } from 'components';
import Cookies from 'universal-cookie';
import nextCookies from 'next-cookies';

const cookies = new Cookies();
const https = require('https');
axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

function handleHttpError(error) {
  if (error.response && error.response.data) {
    return error.response.data.errorMessage || error;
  }
  return error;
}

function transformConfig(config) {
  const token = cookies.get('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...config.headers,
  };

  config.headers = headers;
  config.timeout = 30000;
  return config;
}

function transformNextConfig(config, token) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...config.headers,
  };

  config.headers = headers;
  // config.timeout = 30000;
  return config;
}

function makeHttpRequest(apiCall, successCallBack, failCallBack, transformFunc) {
  return new Promise(async () => {
    try {
      const response = await apiCall();
      const responseData = response.data;
      const successResponse = cui.isFunction(transformFunc) ? transformFunc(responseData) : responseData;
      successCallBack(successResponse);
    } catch (e) {
      if (cui.isFunction(failCallBack)) {
        failCallBack(handleHttpError(e));
      }
    }
  });
}

export function getRequest(url, config = {}, successCallBack, failCallBack, transformFunc) {
  // transformConfig(config);


  return makeHttpRequest(() => axios.get(url, config), successCallBack, failCallBack, transformFunc);
}

export function postRequest(url, data, config = {}, successCallBack, failCallBack, transformFunc) {
  transformConfig(config);
  return makeHttpRequest(() => axios.post(url, data, config), successCallBack, failCallBack, transformFunc);
}


export async function postRequestNext(url, data, config = {}) {
  const { ctx } = data;
  const { token = "", msisdn = "" } = ctx ? nextCookies(ctx) : {};
  delete data.ctx;
  data.msisdn = msisdn;

  transformNextConfig(config, token);
  try {
    const responseData = await axios.post(url, data, config);
    return responseData.data;
  } catch (error) {
    console.log('error', error)
  }
}

export function putRequest(url, data, config = {}, successCallBack, failCallBack, transformFunc) {
  transformConfig(config);
  return makeHttpRequest(() => axios.put(url, data, config), successCallBack, failCallBack, transformFunc);
}

export function deleteRequest(url, data, config = {}, successCallBack, failCallBack, transformFunc) {
  transformConfig(config);
  return makeHttpRequest(() => axios.delete(url, data, config), successCallBack, failCallBack, transformFunc);
}
