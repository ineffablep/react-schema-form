import "whatwg-fetch";

const HTTP_CODE_OK = 200;
const HTTP_CODE_MULTIPLE_CHOICES = 300;

export const get = (
  apiUrl,
  successCallback,
  errorCallback,
  putDateStamp = true
) => {
  let hasError = false;
  return fetch(!putDateStamp ? apiUrl : apiUrl + "?" + new Date().getTime(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    }
  })
    .then(response => {
      if (
        response.status < HTTP_CODE_OK ||
        response.status >= HTTP_CODE_MULTIPLE_CHOICES
      ) {
        hasError = true;
      }
      return response.json();
    })
    .then(json => {
      return hasError ? errorCallback(json[0]) : successCallback(json);
    });
};

export const post = (apiUrl, body, successCallback, errorCallback) => {
  let hasError = false;
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (
        response.status < HTTP_CODE_OK ||
        response.status >= HTTP_CODE_MULTIPLE_CHOICES
      ) {
        hasError = true;
      }
      return response.json();
    })
    .then(json => {
      return hasError ? errorCallback(json[0]) : successCallback(json);
    });
};

export const loadJS = src => {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
};
