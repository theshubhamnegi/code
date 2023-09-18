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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Client  } = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\nconst notion = new Client({\n    auth: process.env.NOTION_API_TOKEN\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== 'POST') {\n        return res.status(405).json({\n            msg: 'Only POST requests are allowed'\n        });\n    }\n    try {\n        const { name , email , subject , message  } = JSON.parse(req.body);\n        await notion.pages.create({\n            parent: {\n                database_id: process.env.NOTION_DATABASE_ID\n            },\n            properties: {\n                Name: {\n                    title: [\n                        {\n                            text: {\n                                content: name\n                            }\n                        }, \n                    ]\n                },\n                Email: {\n                    email\n                },\n                Subject: {\n                    rich_text: [\n                        {\n                            text: {\n                                content: subject\n                            }\n                        }, \n                    ]\n                },\n                Message: {\n                    rich_text: [\n                        {\n                            text: {\n                                content: message\n                            }\n                        }, \n                    ]\n                }\n            }\n        });\n        res.status(201).json({\n            msg: 'Success'\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            msg: 'Failed'\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQ0EsTUFBTSxFQUFDLENBQUMsR0FBR0MsbUJBQU8sQ0FBQywwQ0FBa0I7QUFFN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztJQUN6QkcsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBQ3BDLENBQUM7QUFFRCxpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBZ0M7UUFBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDWCxHQUFHLENBQUNZLElBQUk7UUFDN0QsS0FBSyxDQUFDakIsTUFBTSxDQUFDa0IsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztZQUN6QkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLFdBQVcsRUFBRW5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbUIsa0JBQWtCO1lBQzdDLENBQUM7WUFDREMsVUFBVSxFQUFFLENBQUM7Z0JBQ1hDLElBQUksRUFBRSxDQUFDO29CQUNMQyxLQUFLLEVBQUUsQ0FBQzt3QkFDTixDQUFDOzRCQUNDQyxJQUFJLEVBQUUsQ0FBQztnQ0FDTEMsT0FBTyxFQUFFaEIsSUFBSTs0QkFDZixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNEaUIsS0FBSyxFQUFFLENBQUM7b0JBQ05oQixLQUFLO2dCQUNQLENBQUM7Z0JBQ0RpQixPQUFPLEVBQUUsQ0FBQztvQkFDUkMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsQ0FBQzs0QkFDQ0osSUFBSSxFQUFFLENBQUM7Z0NBQ0xDLE9BQU8sRUFBRWQsT0FBTzs0QkFDbEIsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFDRGtCLE9BQU8sRUFBRSxDQUFDO29CQUNSRCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixDQUFDOzRCQUNDSixJQUFJLEVBQUUsQ0FBQztnQ0FDTEMsT0FBTyxFQUFFYixPQUFPOzRCQUNsQixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRFIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBUztRQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEtBQUssRUFBRXNCLEtBQUssRUFBRSxDQUFDO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO1FBQ2pCMUIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBUTtRQUFDLENBQUM7SUFDeEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZSgnQG5vdGlvbmhxL2NsaWVudCcpO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHtcbiAgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9UT0tFTixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1zZzogJ09ubHkgUE9TVCByZXF1ZXN0cyBhcmUgYWxsb3dlZCcgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICBhd2FpdCBub3Rpb24ucGFnZXMuY3JlYXRlKHtcbiAgICAgIHBhcmVudDoge1xuICAgICAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0RBVEFCQVNFX0lELFxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgTmFtZToge1xuICAgICAgICAgIHRpdGxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBuYW1lLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBFbWFpbDoge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgICBTdWJqZWN0OiB7XG4gICAgICAgICAgcmljaF90ZXh0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBzdWJqZWN0LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBNZXNzYWdlOiB7XG4gICAgICAgICAgcmljaF90ZXh0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1zZzogJ1N1Y2Nlc3MnIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogJ0ZhaWxlZCcgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicmVxdWlyZSIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX0FQSV9UT0tFTiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJwYWdlcyIsImNyZWF0ZSIsInBhcmVudCIsImRhdGFiYXNlX2lkIiwiTk9USU9OX0RBVEFCQVNFX0lEIiwicHJvcGVydGllcyIsIk5hbWUiLCJ0aXRsZSIsInRleHQiLCJjb250ZW50IiwiRW1haWwiLCJTdWJqZWN0IiwicmljaF90ZXh0IiwiTWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();