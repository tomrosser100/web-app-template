"use strict";
(self["webpackChunkapp_bootstrap"] = self["webpackChunkapp_bootstrap"] || []).push([["front_src_routing_Test_tsx"],{

/***/ "./front/src/routing/Test.tsx":
/*!************************************!*\
  !*** ./front/src/routing/Test.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   loader: () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/@remix-run/router/dist/router.js");


function Component() {
  const data = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLoaderData)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Await, {
    resolve: data.slowData
  }, slowData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, slowData.message))));
}
async function loader() {
  console.log("loader start");
  const slowDataPromise = new Promise(resolve => {
    setTimeout(() => {
      console.log("loader finish");
      resolve({
        message: `Hi I'm data`
      });
    }, 2000);
  });
  return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.defer)({
    slowData: slowDataPromise
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRfc3JjX3JvdXRpbmdfVGVzdF90c3guYnVuZGxlLWZyb250LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN1QjtBQUV4RCxTQUFTSyxTQUFTQSxDQUFBLEVBQUc7RUFDMUIsTUFBTUMsSUFBSSxHQUFHRiwrREFBYSxDQUFDLENBQXNDO0VBRWpFLG9CQUNFSiwwREFBQSxDQUFDQywyQ0FBUTtJQUFDTyxRQUFRLGVBQUVSLDBEQUFBLFlBQUcsWUFBYTtFQUFFLGdCQUNwQ0EsMERBQUEsQ0FBQ0UsbURBQUs7SUFBQ08sT0FBTyxFQUFFSCxJQUFJLENBQUNJO0VBQVMsR0FDMUJBLFFBQVEsaUJBQ1JWLDBEQUFBLDJCQUNFQSwwREFBQSxZQUFJVSxRQUFRLENBQUNDLE9BQVcsQ0FDckIsQ0FFRixDQUNDLENBQUM7QUFFZjtBQUVPLGVBQWVDLE1BQU1BLENBQUEsRUFBRztFQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRTNCLE1BQU1DLGVBQWUsR0FBRyxJQUFJQyxPQUFPLENBQUVQLE9BQU8sSUFBSztJQUMvQ1EsVUFBVSxDQUFDLE1BQU07TUFDZkosT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQzVCTCxPQUFPLENBQUM7UUFBRUUsT0FBTyxFQUFFO01BQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDVixDQUFDLENBQUM7RUFFRixPQUFPUix1REFBSyxDQUFDO0lBQUVPLFFBQVEsRUFBRUs7RUFBZ0IsQ0FBQyxDQUFDO0FBQzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLWJvb3RzdHJhcC8uL2Zyb250L3NyYy9yb3V0aW5nL1Rlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBd2FpdCwgZGVmZXIsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIGFzIHsgc2xvd0RhdGE6IHsgbWVzc2FnZTogc3RyaW5nIH0gfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+TG9hZGluZy4uLjwvcD59PlxyXG4gICAgICA8QXdhaXQgcmVzb2x2ZT17ZGF0YS5zbG93RGF0YX0+XHJcbiAgICAgICAgeyhzbG93RGF0YSkgPT4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+e3Nsb3dEYXRhLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Bd2FpdD5cclxuICAgIDwvU3VzcGVuc2U+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVyIHN0YXJ0XCIpO1xyXG5cclxuICAgIGNvbnN0IHNsb3dEYXRhUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVyIGZpbmlzaFwiKTtcclxuICAgICAgICByZXNvbHZlKHsgbWVzc2FnZTogYEhpIEknbSBkYXRhYCB9KVxyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkZWZlcih7IHNsb3dEYXRhOiBzbG93RGF0YVByb21pc2UgfSk7XHJcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwiQXdhaXQiLCJkZWZlciIsInVzZUxvYWRlckRhdGEiLCJDb21wb25lbnQiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsImZhbGxiYWNrIiwicmVzb2x2ZSIsInNsb3dEYXRhIiwibWVzc2FnZSIsImxvYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzbG93RGF0YVByb21pc2UiLCJQcm9taXNlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=