"use strict";
(self["webpackChunkweb_app_template"] = self["webpackChunkweb_app_template"] || []).push([["front_src_routing_Test_tsx"],{

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
//# sourceMappingURL=front_src_routing_Test_tsx.bundle-front.js.map