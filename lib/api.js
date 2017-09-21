import "whatwg-fetch";

var HTTP_CODE_OK = 200;
var HTTP_CODE_MULTIPLE_CHOICES = 300;

export var get = function get(apiUrl, successCallback, errorCallback) {
  var putDateStamp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var hasError = false;
  return fetch(!putDateStamp ? apiUrl : apiUrl + "?" + new Date().getTime(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    }
  }).then(function (response) {
    if (response.status < HTTP_CODE_OK || response.status >= HTTP_CODE_MULTIPLE_CHOICES) {
      hasError = true;
    }
    return response.json();
  }).then(function (json) {
    return hasError ? errorCallback(json[0]) : successCallback(json);
  });
};

export var post = function post(apiUrl, body, successCallback, errorCallback) {
  var hasError = false;
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(function (response) {
    if (response.status < HTTP_CODE_OK || response.status >= HTTP_CODE_MULTIPLE_CHOICES) {
      hasError = true;
    }
    return response.json();
  }).then(function (json) {
    return hasError ? errorCallback(json[0]) : successCallback(json);
  });
};

export var loadJS = function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
};