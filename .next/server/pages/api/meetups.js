"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/meetups";
exports.ids = ["pages/api/meetups"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/meetups.js":
/*!******************************!*\
  !*** ./pages/api/meetups.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://KerenStoller:212keRen&$@cluster0.wfh2cmy.mongodb.net/MeetupDB?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const meetups = await meetupsCollection.find().toArray();\n    client.close();\n    res.status(200).json(meetups.map((meetup)=>({\n            title: meetup.title,\n            address: meetup.address,\n            image: meetup.image,\n            description: meetup.description,\n            id: meetup._id.toString()\n        })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVldHVwcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1DLFNBQVMsTUFBTUosZ0RBQVdBLENBQUNLLFFBQy9CO0lBRUYsTUFBTUMsS0FBS0YsT0FBT0U7SUFDbEIsTUFBTUMsb0JBQW9CRCxHQUFHRSxXQUFXO0lBQ3hDLE1BQU1DLFVBQVUsTUFBTUYsa0JBQWtCRyxPQUFPQztJQUUvQ1AsT0FBT1E7SUFDUFQsSUFBSVUsT0FBTyxLQUFLQyxLQUNkTCxRQUFRTSxJQUFJLENBQUNDLFNBQVk7WUFDdkJDLE9BQU9ELE9BQU9DO1lBQ2RDLFNBQVNGLE9BQU9FO1lBQ2hCQyxPQUFPSCxPQUFPRztZQUNkQyxhQUFhSixPQUFPSTtZQUNwQkMsSUFBSUwsT0FBT00sSUFBSUM7UUFDakI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbWVldHVwcy5qcz9iNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAnbW9uZ29kYitzcnY6Ly9LZXJlblN0b2xsZXI6MjEya2VSZW4mJEBjbHVzdGVyMC53ZmgyY215Lm1vbmdvZGIubmV0L01lZXR1cERCP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihcbiAgICBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBtZWV0dXAuZGVzY3JpcHRpb24sXG4gICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgIH0pKVxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1hcCIsIm1lZXR1cCIsInRpdGxlIiwiYWRkcmVzcyIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJpZCIsIl9pZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/meetups.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meetups.js"));
module.exports = __webpack_exports__;

})();