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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/AppNavBar.tsx":
/*!**************************************!*\
  !*** ./src/components/AppNavBar.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst AppNavBar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const [showBackground, setShowBackground] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    // Handle scroll event\n    const handleScroll = ()=>{\n        setShowBackground(window.scrollY > 50);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const getActiveButton = ()=>{\n        switch(router.pathname){\n            case \"/projects\":\n                return \"projects\";\n            case \"/blogs\":\n                return \"blogs\";\n            case \"/about\":\n                return \"about\";\n            case \"/article\":\n                return \"article\";\n            case \"/contact\":\n                return \"contact\";\n            default:\n                return \"about\";\n        }\n    };\n    const textColor = \"#000\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n            position: \"fixed\",\n            sx: {\n                boxShadow: 0,\n                backgroundColor: \"transparent\",\n                top: 0\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {\n                maxWidth: \"lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    sx: {\n                        flexGrow: 1,\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        px: 0,\n                        py: 2\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        sx: {\n                            display: {\n                                xs: \"none\",\n                                md: \"flex\"\n                            },\n                            gap: 2,\n                            bgcolor: showBackground ? \"rgba(62, 107, 98, 0.7)\" : \"transparent\",\n                            transition: \"background-color 0.3s ease\",\n                            padding: \"2px\",\n                            borderRadius: \"12px\",\n                            backdropFilter: showBackground ? \"blur(2px)\" : \"none\",\n                            WebkitBackdropFilter: showBackground ? \"blur(2px)\" : \"none\"\n                        },\n                        children: [\n                            \"projects\",\n                            \"blogs\",\n                            \"about\",\n                            \"contact\"\n                        ].map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                href: `/${page}`,\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    variant: getActiveButton() === page ? \"contained\" : \"text\",\n                                    color: \"inherit\",\n                                    size: \"small\",\n                                    sx: {\n                                        minWidth: 0,\n                                        borderRadius: \"12px\",\n                                        bgcolor: getActiveButton() === page ? \"#cfe9df\" : \"transparent\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        variant: \"subtitle1\",\n                                        color: getActiveButton() === page ? textColor : \"#cfe9df\",\n                                        sx: {\n                                            textTransform: \"capitalize\",\n                                            fontSize: \"1rem\",\n                                            fontFamily: \"sans-serif\"\n                                        },\n                                        children: page.charAt(0).toUpperCase() + page.slice(1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, page, false, {\n                                fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abrahamic/Desktop/learning-journal/src/components/AppNavBar.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHBOYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1c7QUFDTjtBQUNNO0FBQ007QUFDRTtBQUNyQjtBQUNXO0FBRXZDLE1BQU1RLFlBQXNCO0lBQzFCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUdYLDJDQUFjLENBQUM7SUFFM0Qsc0JBQXNCO0lBQ3RCLE1BQU1hLGVBQWU7UUFDbkJGLGtCQUFrQkcsT0FBT0MsT0FBTyxHQUFHO0lBQ3JDO0lBRUFmLDRDQUFlLENBQUM7UUFDZGMsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTztZQUNMQyxPQUFPSSxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGtCQUFrQjtRQUN0QixPQUFRVixPQUFPVyxRQUFRO1lBQ3JCLEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNUO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBR0EsTUFBTUMsWUFBWTtJQUVsQixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNyQiw2REFBTUE7WUFDTHNCLFVBQVM7WUFDVEMsSUFBSTtnQkFDRkMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsS0FBSztZQUNQO3NCQUVBLDRFQUFDdkIsZ0VBQVNBO2dCQUFDd0IsVUFBUzswQkFDbEIsNEVBQUMxQiwwREFBR0E7b0JBQ0ZzQixJQUFJO3dCQUNGSyxVQUFVO3dCQUNWQyxTQUFTO3dCQUNUQyxnQkFBZ0I7d0JBQ2hCQyxZQUFZO3dCQUNaQyxJQUFJO3dCQUNKQyxJQUFJO29CQUNOOzhCQUVBLDRFQUFDaEMsMERBQUdBO3dCQUNGc0IsSUFBSTs0QkFDRk0sU0FBUztnQ0FBRUssSUFBSTtnQ0FBUUMsSUFBSTs0QkFBTzs0QkFDbENDLEtBQUs7NEJBQ0xDLFNBQVM1QixpQkFDTCwyQkFDQTs0QkFDSjZCLFlBQVk7NEJBQ1pDLFNBQVM7NEJBQ1RDLGNBQWM7NEJBQ2RDLGdCQUFnQmhDLGlCQUFpQixjQUFjOzRCQUMvQ2lDLHNCQUFzQmpDLGlCQUFpQixjQUFjO3dCQUN2RDtrQ0FFQzs0QkFBQzs0QkFBWTs0QkFBUzs0QkFBUzt5QkFBVSxDQUFDa0MsR0FBRyxDQUFDLENBQUNDLHFCQUM5Qyw4REFBQ3ZDLGtEQUFJQTtnQ0FBWXdDLE1BQU0sQ0FBQyxDQUFDLEVBQUVELEtBQUssQ0FBQztnQ0FBRUUsUUFBUTswQ0FDekMsNEVBQUM1Qyw2REFBTUE7b0NBQ0w2QyxTQUFTN0Isc0JBQXNCMEIsT0FBTyxjQUFjO29DQUNwREksT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTDFCLElBQUk7d0NBQ0YyQixVQUFVO3dDQUNWVixjQUFjO3dDQUNkSCxTQUNFbkIsc0JBQXNCMEIsT0FBTyxZQUFZO29DQUM3Qzs4Q0FFQSw0RUFBQ3hDLGlFQUFVQTt3Q0FDVDJDLFNBQVE7d0NBQ1JDLE9BQU85QixzQkFBc0IwQixPQUFPeEIsWUFBWTt3Q0FDaERHLElBQUk7NENBQ0Y0QixlQUFlOzRDQUNmQyxVQUFVOzRDQUNWQyxZQUFZO3dDQUNkO2tEQUVDVCxLQUFLVSxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLWCxLQUFLWSxLQUFLLENBQUM7Ozs7Ozs7Ozs7OytCQXJCdENaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQzNCO0FBRUEsaUVBQWVyQyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5pbmctam91cm5hbC8uL3NyYy9jb21wb25lbnRzL0FwcE5hdkJhci50c3g/Y2FhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgQXBwTmF2QmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3Nob3dCYWNrZ3JvdW5kLCBzZXRTaG93QmFja2dyb3VuZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICAvLyBIYW5kbGUgc2Nyb2xsIGV2ZW50XG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBzZXRTaG93QmFja2dyb3VuZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBnZXRBY3RpdmVCdXR0b24gPSAoKSA9PiB7XG4gICAgc3dpdGNoIChyb3V0ZXIucGF0aG5hbWUpIHtcbiAgICAgIGNhc2UgJy9wcm9qZWN0cyc6XG4gICAgICAgIHJldHVybiAncHJvamVjdHMnXG4gICAgICBjYXNlICcvYmxvZ3MnOlxuICAgICAgICByZXR1cm4gJ2Jsb2dzJ1xuICAgICAgY2FzZSAnL2Fib3V0JzpcbiAgICAgICAgcmV0dXJuICdhYm91dCdcbiAgICAgIGNhc2UgJy9hcnRpY2xlJzpcbiAgICAgICAgcmV0dXJuICdhcnRpY2xlJ1xuICAgICAgY2FzZSAnL2NvbnRhY3QnOlxuICAgICAgICByZXR1cm4gJ2NvbnRhY3QnXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2Fib3V0J1xuICAgIH1cbiAgfVxuXG4gIFxuICBjb25zdCB0ZXh0Q29sb3IgPSAnIzAwMCc7IFxuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDxBcHBCYXJcbiAgICAgICAgcG9zaXRpb249J2ZpeGVkJ1xuICAgICAgICBzeD17e1xuICAgICAgICAgIGJveFNoYWRvdzogMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdsZyc+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgcHg6IDAsXG4gICAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ25vbmUnLCBtZDogJ2ZsZXgnIH0sXG4gICAgICAgICAgICAgICAgZ2FwOiAyLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHNob3dCYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICA/ICdyZ2JhKDYyLCAxMDcsIDk4LCAwLjcpJ1xuICAgICAgICAgICAgICAgICAgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IHNob3dCYWNrZ3JvdW5kID8gJ2JsdXIoMnB4KScgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgV2Via2l0QmFja2Ryb3BGaWx0ZXI6IHNob3dCYWNrZ3JvdW5kID8gJ2JsdXIoMnB4KScgOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbJ3Byb2plY3RzJywgJ2Jsb2dzJywgJ2Fib3V0JywgJ2NvbnRhY3QnXS5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e3BhZ2V9IGhyZWY9e2AvJHtwYWdlfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtnZXRBY3RpdmVCdXR0b24oKSA9PT0gcGFnZSA/ICdjb250YWluZWQnIDogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0naW5oZXJpdCdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFjdGl2ZUJ1dHRvbigpID09PSBwYWdlID8gJyNjZmU5ZGYnIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTEnXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2dldEFjdGl2ZUJ1dHRvbigpID09PSBwYWdlID8gdGV4dENvbG9yIDogJyNjZmU5ZGYnfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhZ2Uuc2xpY2UoMSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBOYXZCYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJMaW5rIiwidXNlUm91dGVyIiwiQXBwTmF2QmFyIiwicm91dGVyIiwic2hvd0JhY2tncm91bmQiLCJzZXRTaG93QmFja2dyb3VuZCIsInVzZVN0YXRlIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0QWN0aXZlQnV0dG9uIiwicGF0aG5hbWUiLCJ0ZXh0Q29sb3IiLCJuYXYiLCJwb3NpdGlvbiIsInN4IiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwibWF4V2lkdGgiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJweCIsInB5IiwieHMiLCJtZCIsImdhcCIsImJnY29sb3IiLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJhY2tkcm9wRmlsdGVyIiwiV2Via2l0QmFja2Ryb3BGaWx0ZXIiLCJtYXAiLCJwYWdlIiwiaHJlZiIsInBhc3NIcmVmIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIm1pbldpZHRoIiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AppNavBar.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/Theme */ \"./src/theme/Theme.ts\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AppNavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppNavBar */ \"./src/components/AppNavBar.tsx\");\n// src/pages/_app.tsx\n\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _theme_Theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Desktop/learning-journal/src/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Desktop/learning-journal/src/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abrahamic/Desktop/learning-journal/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppNavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abrahamic/Desktop/learning-journal/src/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/abrahamic/Desktop/learning-journal/src/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abrahamic/Desktop/learning-journal/src/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7O0FBQytCO0FBRXhCO0FBQ007QUFDTDtBQUNrQjtBQUUvQyxNQUFNSSxRQUE0QixDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3pELHFCQUNFLDhEQUFDTiwrREFBYUE7UUFBQ0UsT0FBT0Esb0RBQUtBOzswQkFDekIsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNNO2tDQUFNOzs7Ozs7a0NBRVAsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDUCw2REFBU0E7Ozs7OzBCQUNWLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLWpvdXJuYWwvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvX2FwcC50c3hcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9UaGVtZSdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgQXBwTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTmF2QmFyJ1xuXG5jb25zdCBNeUFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICBcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvbG9nby5wbmcnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwTmF2QmFyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIkhlYWQiLCJ0aGVtZSIsIkFwcE5hdkJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme/Theme.ts":
/*!****************************!*\
  !*** ./src/theme/Theme.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#546E51\"\n        },\n        secondary: {\n            main: \"#8fdbc2\"\n        },\n        background: {\n            default: \"#f4f6f8\"\n        }\n    },\n    typography: {\n        fontFamily: \"Roboto, Arial, sans-serif\",\n        h1: {\n            fontFamily: \"Acorn, Mali, Roboto, Arial, sans-serif\"\n        },\n        h2: {\n            fontFamily: \"Acorn, Mali, Roboto, Arial, sans-serif\"\n        },\n        h3: {\n            fontFamily: \"Acorn, Mali, Roboto, Arial, sans-serif\"\n        },\n        h4: {\n            fontFamily: \"Acorn, Mali, Roboto, Arial, sans-serif\"\n        },\n        h5: {\n            fontFamily: \"Acorn, Mali, Roboto, Arial, sans-serif\"\n        },\n        h6: {\n            fontFamily: \"Acorn, Mali, Roboto, Arial, sans-serif\"\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvVGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1DLFFBQVFELGlFQUFXQSxDQUFDO0lBQ3hCRSxTQUFTO1FBQ1BDLFNBQVM7WUFDUEMsTUFBTTtRQUNSO1FBQ0FDLFdBQVc7WUFDVEQsTUFBTTtRQUNSO1FBQ0FFLFlBQVk7WUFDVkMsU0FBUztRQUNYO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxZQUFZO1FBQ1pDLElBQUk7WUFDRkQsWUFBWTtRQUNkO1FBQ0FFLElBQUk7WUFDRkYsWUFBWTtRQUNkO1FBQ0FHLElBQUk7WUFDRkgsWUFBWTtRQUNkO1FBQ0FJLElBQUk7WUFDRkosWUFBWTtRQUNkO1FBQ0FLLElBQUk7WUFDRkwsWUFBWTtRQUNkO1FBQ0FNLElBQUk7WUFDRk4sWUFBWTtRQUNkO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlUixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5pbmctam91cm5hbC8uL3NyYy90aGVtZS9UaGVtZS50cz82ZWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyM1NDZFNTEnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzhmZGJjMicsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI2Y0ZjZmOCcsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgLy8gRGVmYXVsdCBmb250IGZvciBib2R5IHRleHRcbiAgICBoMToge1xuICAgICAgZm9udEZhbWlseTogJ0Fjb3JuLCBNYWxpLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udEZhbWlseTogJ0Fjb3JuLCBNYWxpLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udEZhbWlseTogJ0Fjb3JuLCBNYWxpLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgZm9udEZhbWlseTogJ0Fjb3JuLCBNYWxpLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udEZhbWlseTogJ0Fjb3JuLCBNYWxpLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgZm9udEZhbWlseTogJ0Fjb3JuLCBNYWxpLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJywgXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/Theme.ts\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();