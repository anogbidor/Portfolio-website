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

/***/ "(pages-dir-node)/./src/components/AppNavBar.tsx":
/*!**************************************!*\
  !*** ./src/components/AppNavBar.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Menu */ \"(pages-dir-node)/./node_modules/@mui/material/node/Menu/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(pages-dir-node)/./node_modules/@mui/material/node/MenuItem/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"(pages-dir-node)/./node_modules/@mui/material/node/Breadcrumbs/index.js\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst AppNavBar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [scrolled, setScrolled] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [mobileMenuAnchor, setMobileMenuAnchor] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleScroll = ()=>{\n        setScrolled(window.scrollY > 10);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"AppNavBar.useEffect\": ()=>{\n            window.addEventListener('scroll', handleScroll);\n            return ({\n                \"AppNavBar.useEffect\": ()=>window.removeEventListener('scroll', handleScroll)\n            })[\"AppNavBar.useEffect\"];\n        }\n    }[\"AppNavBar.useEffect\"], []);\n    const handleMobileMenuOpen = (event)=>{\n        setMobileMenuAnchor(event.currentTarget);\n    };\n    const handleMobileMenuClose = ()=>{\n        setMobileMenuAnchor(null);\n    };\n    const navItems = [\n        {\n            name: 'Home',\n            path: '/projects'\n        },\n        {\n            name: 'Blogs',\n            path: '/blogs'\n        },\n        {\n            name: 'About',\n            path: '/about'\n        },\n        {\n            name: 'Contact',\n            path: '/contact'\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default()), {\n        position: \"fixed\",\n        elevation: 0,\n        sx: {\n            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.16)' : 'transparent',\n            backdropFilter: scrolled ? 'blur(8px)' : 'none',\n            transition: 'all 0.3s ease'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {\n                maxWidth: \"lg\",\n                sx: {\n                    px: {\n                        xs: 2,\n                        md: 4\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        sx: {\n                            display: 'flex',\n                            justifyContent: 'space-between',\n                            alignItems: 'center',\n                            py: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                variant: \"h6\",\n                                component: \"div\",\n                                sx: {\n                                    fontWeight: 700,\n                                    fontSize: '1.5rem',\n                                    letterSpacing: '-0.5px',\n                                    color: '#ffffff'\n                                },\n                                children: \"Logox\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    display: {\n                                        xs: 'none',\n                                        md: 'flex'\n                                    },\n                                    gap: 4\n                                },\n                                children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: item.path,\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                            disableRipple: true,\n                                            sx: {\n                                                color: '#ffffff',\n                                                fontWeight: router.pathname === item.path ? 600 : 400,\n                                                fontSize: '1rem',\n                                                textTransform: 'none',\n                                                position: 'relative',\n                                                px: 0,\n                                                minWidth: 0,\n                                                '&:after': {\n                                                    content: '\"\"',\n                                                    position: 'absolute',\n                                                    bottom: -4,\n                                                    left: 0,\n                                                    width: router.pathname === item.path ? '100%' : '0%',\n                                                    height: '2px',\n                                                    backgroundColor: '#ffffff',\n                                                    transition: 'width 0.3s ease'\n                                                },\n                                                '&:hover:after': {\n                                                    width: '100%'\n                                                },\n                                                '&:hover': {\n                                                    backgroundColor: 'transparent'\n                                                }\n                                            },\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, item.name, false, {\n                                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    display: {\n                                        xs: 'flex',\n                                        md: 'none'\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                    size: \"large\",\n                                    \"aria-label\": \"menu\",\n                                    \"aria-controls\": \"mobile-menu\",\n                                    \"aria-haspopup\": \"true\",\n                                    onClick: handleMobileMenuOpen,\n                                    color: \"inherit\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    scrolled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        sx: {\n                            display: {\n                                xs: 'block',\n                                md: 'none'\n                            },\n                            pb: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            \"aria-label\": \"breadcrumb\",\n                            sx: {\n                                color: 'rgba(255, 255, 255, 0.7)'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                fontSize: \"0.8rem\",\n                                children: navItems.find((item)=>router.pathname.startsWith(item.path))?.name || 'Home'\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_12___default()), {\n                id: \"mobile-menu\",\n                anchorEl: mobileMenuAnchor,\n                anchorOrigin: {\n                    vertical: 'bottom',\n                    horizontal: 'right'\n                },\n                keepMounted: true,\n                transformOrigin: {\n                    vertical: 'top',\n                    horizontal: 'right'\n                },\n                open: Boolean(mobileMenuAnchor),\n                onClose: handleMobileMenuClose,\n                sx: {\n                    '& .MuiPaper-root': {\n                        backgroundColor: 'rgba(0, 0, 0, 0.8)',\n                        backdropFilter: 'blur(8px)',\n                        color: '#ffffff'\n                    }\n                },\n                children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13___default()), {\n                        onClick: handleMobileMenuClose,\n                        selected: router.pathname === item.path,\n                        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                        href: item.path,\n                        sx: {\n                            '&.Mui-selected': {\n                                backgroundColor: 'rgba(255, 255, 255, 0.1)'\n                            },\n                            '&:hover': {\n                                backgroundColor: 'rgba(255, 255, 255, 0.05)'\n                            }\n                        },\n                        children: item.name\n                    }, item.name, false, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/AppNavBar.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL0FwcE5hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDVztBQUNOO0FBQ007QUFDTTtBQUNFO0FBQ3JCO0FBQ1c7QUFDRjtBQUNRO0FBQ0k7QUFDRjtBQUNJO0FBRW5ELE1BQU1hLFlBQXNCO0lBQzFCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR2hCLDJDQUFjLENBQUM7SUFDL0MsTUFBTSxDQUFDa0Isa0JBQWtCQyxvQkFBb0IsR0FDM0NuQiwyQ0FBYyxDQUFxQjtJQUVyQyxNQUFNb0IsZUFBZTtRQUNuQkosWUFBWUssT0FBT0MsT0FBTyxHQUFHO0lBQy9CO0lBRUF0Qiw0Q0FBZTsrQkFBQztZQUNkcUIsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUo7WUFDbEM7dUNBQU8sSUFBTUMsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUw7O1FBQ3BEOzhCQUFHLEVBQUU7SUFFTCxNQUFNTSx1QkFBdUIsQ0FBQ0M7UUFDNUJSLG9CQUFvQlEsTUFBTUMsYUFBYTtJQUN6QztJQUVBLE1BQU1DLHdCQUF3QjtRQUM1QlYsb0JBQW9CO0lBQ3RCO0lBRUEsTUFBTVcsV0FBVztRQUNmO1lBQUVDLE1BQU07WUFBUUMsTUFBTTtRQUFZO1FBQ2xDO1lBQUVELE1BQU07WUFBU0MsTUFBTTtRQUFTO1FBQ2hDO1lBQUVELE1BQU07WUFBU0MsTUFBTTtRQUFTO1FBQ2hDO1lBQUVELE1BQU07WUFBV0MsTUFBTTtRQUFXO0tBQ3JDO0lBRUQscUJBQ0UsOERBQUMvQiw2REFBTUE7UUFDTGdDLFVBQVM7UUFDVEMsV0FBVztRQUNYQyxJQUFJO1lBQ0ZDLGlCQUFpQnJCLFdBQVcsd0JBQXdCO1lBQ3BEc0IsZ0JBQWdCdEIsV0FBVyxjQUFjO1lBQ3pDdUIsWUFBWTtRQUNkOzswQkFFQSw4REFBQ2xDLGdFQUFTQTtnQkFBQ21DLFVBQVM7Z0JBQUtKLElBQUk7b0JBQUVLLElBQUk7d0JBQUVDLElBQUk7d0JBQUdDLElBQUk7b0JBQUU7Z0JBQUU7O2tDQUNsRCw4REFBQ3hDLDBEQUFHQTt3QkFDRmlDLElBQUk7NEJBQ0ZRLFNBQVM7NEJBQ1RDLGdCQUFnQjs0QkFDaEJDLFlBQVk7NEJBQ1pDLElBQUk7d0JBQ047OzBDQUdBLDhEQUFDekMsaUVBQVVBO2dDQUNUMEMsU0FBUTtnQ0FDUkMsV0FBVTtnQ0FDVmIsSUFBSTtvQ0FDRmMsWUFBWTtvQ0FDWkMsVUFBVTtvQ0FDVkMsZUFBZTtvQ0FDZkMsT0FBTztnQ0FDVDswQ0FDRDs7Ozs7OzBDQUtELDhEQUFDbEQsMERBQUdBO2dDQUFDaUMsSUFBSTtvQ0FBRVEsU0FBUzt3Q0FBRUYsSUFBSTt3Q0FBUUMsSUFBSTtvQ0FBTztvQ0FBR1csS0FBSztnQ0FBRTswQ0FDcER2QixTQUFTd0IsR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDakQsa0RBQUlBO3dDQUFpQmtELE1BQU1ELEtBQUt2QixJQUFJO3dDQUFFeUIsUUFBUTtrREFDN0MsNEVBQUN0RCw2REFBTUE7NENBQ0x1RCxhQUFhOzRDQUNidkIsSUFBSTtnREFDRmlCLE9BQU87Z0RBQ1BILFlBQVluQyxPQUFPNkMsUUFBUSxLQUFLSixLQUFLdkIsSUFBSSxHQUFHLE1BQU07Z0RBQ2xEa0IsVUFBVTtnREFDVlUsZUFBZTtnREFDZjNCLFVBQVU7Z0RBQ1ZPLElBQUk7Z0RBQ0pxQixVQUFVO2dEQUNWLFdBQVc7b0RBQ1RDLFNBQVM7b0RBQ1Q3QixVQUFVO29EQUNWOEIsUUFBUSxDQUFDO29EQUNUQyxNQUFNO29EQUNOQyxPQUFPbkQsT0FBTzZDLFFBQVEsS0FBS0osS0FBS3ZCLElBQUksR0FBRyxTQUFTO29EQUNoRGtDLFFBQVE7b0RBQ1I5QixpQkFBaUI7b0RBQ2pCRSxZQUFZO2dEQUNkO2dEQUNBLGlCQUFpQjtvREFDZjJCLE9BQU87Z0RBQ1Q7Z0RBQ0EsV0FBVztvREFDVDdCLGlCQUFpQjtnREFDbkI7NENBQ0Y7c0RBRUNtQixLQUFLeEIsSUFBSTs7Ozs7O3VDQTdCSHdCLEtBQUt4QixJQUFJOzs7Ozs7Ozs7OzBDQW9DeEIsOERBQUM3QiwwREFBR0E7Z0NBQUNpQyxJQUFJO29DQUFFUSxTQUFTO3dDQUFFRixJQUFJO3dDQUFRQyxJQUFJO29DQUFPO2dDQUFFOzBDQUM3Qyw0RUFBQ2hDLGlFQUFVQTtvQ0FDVHlELE1BQUs7b0NBQ0xDLGNBQVc7b0NBQ1hDLGlCQUFjO29DQUNkQyxpQkFBYztvQ0FDZEMsU0FBUzdDO29DQUNUMEIsT0FBTTs4Q0FFTiw0RUFBQ3pDLGlFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1kSSwwQkFDQyw4REFBQ2IsMERBQUdBO3dCQUFDaUMsSUFBSTs0QkFBRVEsU0FBUztnQ0FBRUYsSUFBSTtnQ0FBU0MsSUFBSTs0QkFBTzs0QkFBRzhCLElBQUk7d0JBQUU7a0NBQ3JELDRFQUFDNUQsbUVBQVdBOzRCQUNWd0QsY0FBVzs0QkFDWGpDLElBQUk7Z0NBQUVpQixPQUFPOzRCQUEyQjtzQ0FFeEMsNEVBQUMvQyxpRUFBVUE7Z0NBQUM2QyxVQUFTOzBDQUNsQnBCLFNBQVMyQyxJQUFJLENBQUMsQ0FBQ2xCLE9BQVN6QyxPQUFPNkMsUUFBUSxDQUFDZSxVQUFVLENBQUNuQixLQUFLdkIsSUFBSSxJQUN6REQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRdEIsOERBQUN2Qiw0REFBSUE7Z0JBQ0htRSxJQUFHO2dCQUNIQyxVQUFVMUQ7Z0JBQ1YyRCxjQUFjO29CQUNaQyxVQUFVO29CQUNWQyxZQUFZO2dCQUNkO2dCQUNBQyxXQUFXO2dCQUNYQyxpQkFBaUI7b0JBQ2ZILFVBQVU7b0JBQ1ZDLFlBQVk7Z0JBQ2Q7Z0JBQ0FHLE1BQU1DLFFBQVFqRTtnQkFDZGtFLFNBQVN2RDtnQkFDVE0sSUFBSTtvQkFDRixvQkFBb0I7d0JBQ2xCQyxpQkFBaUI7d0JBQ2pCQyxnQkFBZ0I7d0JBQ2hCZSxPQUFPO29CQUNUO2dCQUNGOzBCQUVDdEIsU0FBU3dCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQzlDLGdFQUFRQTt3QkFFUDhELFNBQVMxQzt3QkFDVHdELFVBQVV2RSxPQUFPNkMsUUFBUSxLQUFLSixLQUFLdkIsSUFBSTt3QkFDdkNnQixXQUFXMUMsa0RBQUlBO3dCQUNma0QsTUFBTUQsS0FBS3ZCLElBQUk7d0JBQ2ZHLElBQUk7NEJBQ0Ysa0JBQWtCO2dDQUNoQkMsaUJBQWlCOzRCQUNuQjs0QkFDQSxXQUFXO2dDQUNUQSxpQkFBaUI7NEJBQ25CO3dCQUNGO2tDQUVDbUIsS0FBS3hCLElBQUk7dUJBZEx3QixLQUFLeEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQW9CMUI7QUFFQSxpRUFBZWxCLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnJhaGFtaWMvRG9jdW1lbnRzL1BvcnRmb2xpby13ZWJzaXRlL3NyYy9jb21wb25lbnRzL0FwcE5hdkJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJ1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbidcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9CcmVhZGNydW1icydcblxuY29uc3QgQXBwTmF2QmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21vYmlsZU1lbnVBbmNob3IsIHNldE1vYmlsZU1lbnVBbmNob3JdID1cbiAgICBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIHNldFNjcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMTApXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldE1vYmlsZU1lbnVBbmNob3IoZXZlbnQuY3VycmVudFRhcmdldClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVNZW51QW5jaG9yKG51bGwpXG4gIH1cblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7IG5hbWU6ICdIb21lJywgcGF0aDogJy9wcm9qZWN0cycgfSxcbiAgICB7IG5hbWU6ICdCbG9ncycsIHBhdGg6ICcvYmxvZ3MnIH0sXG4gICAgeyBuYW1lOiAnQWJvdXQnLCBwYXRoOiAnL2Fib3V0JyB9LFxuICAgIHsgbmFtZTogJ0NvbnRhY3QnLCBwYXRoOiAnL2NvbnRhY3QnIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxBcHBCYXJcbiAgICAgIHBvc2l0aW9uPSdmaXhlZCdcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIHN4PXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc2Nyb2xsZWQgPyAncmdiYSgwLCAwLCAwLCAwLjE2KScgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogc2Nyb2xsZWQgPyAnYmx1cig4cHgpJyA6ICdub25lJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdsZycgc3g9e3sgcHg6IHsgeHM6IDIsIG1kOiA0IH0gfX0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgcHk6IDIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PSdoNidcbiAgICAgICAgICAgIGNvbXBvbmVudD0nZGl2J1xuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzEuNXJlbScsXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dveFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gTGlua3MgKi99XG4gICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcgfSwgZ2FwOiA0IH19PlxuICAgICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gaHJlZj17aXRlbS5wYXRofSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0ucGF0aCA/IDYwMCA6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtNCxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiByb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0ucGF0aCA/ICcxMDAlJyA6ICcwJScsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnd2lkdGggMC4zcyBlYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXI6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBCdXR0b24gKi99XG4gICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiB7IHhzOiAnZmxleCcsIG1kOiAnbm9uZScgfSB9fT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdtZW51J1xuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD0ndHJ1ZSdcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9iaWxlTWVudU9wZW59XG4gICAgICAgICAgICAgIGNvbG9yPSdpbmhlcml0J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgey8qIE1vYmlsZSBCcmVhZGNydW1iICh2aXNpYmxlIHdoZW4gc2Nyb2xsZWQpICovfVxuICAgICAgICB7c2Nyb2xsZWQgJiYgKFxuICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogeyB4czogJ2Jsb2NrJywgbWQ6ICdub25lJyB9LCBwYjogMSB9fT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1ic1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdicmVhZGNydW1iJ1xuICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZm9udFNpemU9JzAuOHJlbSc+XG4gICAgICAgICAgICAgICAge25hdkl0ZW1zLmZpbmQoKGl0ZW0pID0+IHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKGl0ZW0ucGF0aCkpXG4gICAgICAgICAgICAgICAgICA/Lm5hbWUgfHwgJ0hvbWUnfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJzPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIHsvKiBNb2JpbGUgTWVudSAqL31cbiAgICAgIDxNZW51XG4gICAgICAgIGlkPSdtb2JpbGUtbWVudSdcbiAgICAgICAgYW5jaG9yRWw9e21vYmlsZU1lbnVBbmNob3J9XG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICB9fVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgfX1cbiAgICAgICAgb3Blbj17Qm9vbGVhbihtb2JpbGVNZW51QW5jaG9yKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlTW9iaWxlTWVudUNsb3NlfVxuICAgICAgICBzeD17e1xuICAgICAgICAgICcmIC5NdWlQYXBlci1yb290Jzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjgpJyxcbiAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig4cHgpJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XG4gICAgICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBpdGVtLnBhdGh9XG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICBocmVmPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L01lbnU+XG4gICAgPC9BcHBCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2QmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiTGluayIsInVzZVJvdXRlciIsIk1lbnUiLCJNZW51SXRlbSIsIkljb25CdXR0b24iLCJNZW51SWNvbiIsIkJyZWFkY3J1bWJzIiwiQXBwTmF2QmFyIiwicm91dGVyIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZVN0YXRlIiwibW9iaWxlTWVudUFuY2hvciIsInNldE1vYmlsZU1lbnVBbmNob3IiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZU1vYmlsZU1lbnVDbG9zZSIsIm5hdkl0ZW1zIiwibmFtZSIsInBhdGgiLCJwb3NpdGlvbiIsImVsZXZhdGlvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2Ryb3BGaWx0ZXIiLCJ0cmFuc2l0aW9uIiwibWF4V2lkdGgiLCJweCIsInhzIiwibWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicHkiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiZ2FwIiwibWFwIiwiaXRlbSIsImhyZWYiLCJwYXNzSHJlZiIsImRpc2FibGVSaXBwbGUiLCJwYXRobmFtZSIsInRleHRUcmFuc2Zvcm0iLCJtaW5XaWR0aCIsImNvbnRlbnQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwiYXJpYS1sYWJlbCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWhhc3BvcHVwIiwib25DbGljayIsInBiIiwiZmluZCIsInN0YXJ0c1dpdGgiLCJpZCIsImFuY2hvckVsIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwia2VlcE1vdW50ZWQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJvcGVuIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJzZWxlY3RlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/AppNavBar.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/FloatingChat.tsx":
/*!*****************************************!*\
  !*** ./src/components/FloatingChat.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChatBubbleLeftRightIcon_XMarkIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChatBubbleLeftRightIcon,XMarkIcon!=!@heroicons/react/20/solid */ \"(pages-dir-node)/__barrel_optimize__?names=ChatBubbleLeftRightIcon,XMarkIcon!=!./node_modules/@heroicons/react/20/solid/esm/index.js\");\n/* harmony import */ var _FloatingChatQnA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatingChatQnA */ \"(pages-dir-node)/./src/components/FloatingChatQnA.tsx\");\n\n\n\n\nconst FloatingChat = ()=>{\n    const [chatOpen, setChatOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            text: \"Hello! I'm Airis, I take care of your queries. What would you like to ask?\",\n            sender: 'bot'\n        },\n        {\n            text: \"Try asking me about:\",\n            sender: 'bot',\n            isPrompt: true\n        }\n    ]);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isTyping, setIsTyping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const suggestedPrompts = _FloatingChatQnA__WEBPACK_IMPORTED_MODULE_2__.qna.map((item)=>item.question);\n    // Auto-scroll to bottom when messages change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FloatingChat.useEffect\": ()=>{\n            scrollToBottom();\n        }\n    }[\"FloatingChat.useEffect\"], [\n        messages\n    ]);\n    const scrollToBottom = ()=>{\n        messagesEndRef.current?.scrollIntoView({\n            behavior: 'smooth'\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FloatingChat.useEffect\": ()=>{\n            if (chatOpen) {\n                document.body.classList.add('chat-open');\n                document.body.style.overflow = 'hidden';\n            } else {\n                document.body.classList.remove('chat-open');\n                document.body.style.overflow = '';\n            }\n            return ({\n                \"FloatingChat.useEffect\": ()=>{\n                    document.body.classList.remove('chat-open');\n                    document.body.style.overflow = '';\n                }\n            })[\"FloatingChat.useEffect\"];\n        }\n    }[\"FloatingChat.useEffect\"], [\n        chatOpen\n    ]);\n    const handleSendMessage = ()=>{\n        if (!inputValue.trim()) return;\n        // Add user message\n        const newMessages = [\n            ...messages,\n            {\n                text: inputValue,\n                sender: 'user'\n            }\n        ];\n        setMessages(newMessages);\n        setInputValue('');\n        setIsTyping(true);\n        // Find matching response after delay\n        setTimeout(()=>{\n            const foundResponse = _FloatingChatQnA__WEBPACK_IMPORTED_MODULE_2__.qna.find((item)=>inputValue.toLowerCase().includes(item.question.toLowerCase().split(' ')[0]) || item.question.toLowerCase().includes(inputValue.toLowerCase().split(' ')[0]));\n            const response = foundResponse ? foundResponse.answer : \"I'm not sure about that. Try asking about my projects, skills, availability, or contact information.\";\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        text: response,\n                        sender: 'bot'\n                    }\n                ]);\n            setIsTyping(false);\n            // Show prompts after 4 seconds\n            setTimeout(()=>{\n                setMessages((prev)=>[\n                        ...prev,\n                        {\n                            text: \"What else would you like to know?\",\n                            sender: 'bot',\n                            isPrompt: true\n                        }\n                    ]);\n            }, 4000);\n        }, 1500);\n    };\n    const handlePromptClick = (prompt)=>{\n        setInputValue(prompt);\n        setTimeout(()=>{\n            handleSendMessage();\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `fixed bottom-8 right-8 transition-all duration-300 z-[1000] ${chatOpen ? 'w-80 h-96' : 'w-16 h-16'}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>setChatOpen(!chatOpen),\n                className: \"absolute bottom-0 right-0 w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center shadow-lg hover:bg-green-800 transition-colors z-10\",\n                children: chatOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChatBubbleLeftRightIcon_XMarkIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChatBubbleLeftRightIcon_XMarkIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChatBubbleLeftRightIcon, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            chatOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-20 right-0 w-full h-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200 z-[1000]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-green-700 text-white p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-semibold\",\n                                children: \"Chat with Airis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs opacity-80\",\n                                children: \"Typically replies in 5 minutes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 p-4 overflow-y-auto\",\n                        children: [\n                            messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: `mb-3 max-w-[80%] ${message.sender === 'bot' ? 'bg-gray-100 rounded-lg p-3' : 'ml-auto bg-green-100 rounded-lg p-3'}`,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs text-gray-500 mt-1\",\n                                            children: [\n                                                message.sender === 'bot' ? 'Airis' : 'You',\n                                                \" • Just now\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        message.isPrompt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2 space-y-1\",\n                                            children: suggestedPrompts.map((prompt, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: ()=>handlePromptClick(prompt),\n                                                    className: \"block w-full text-left text-xs text-green-700 hover:text-green-900 hover:underline\",\n                                                    children: prompt\n                                                }, i, false, {\n                                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                                    lineNumber: 139,\n                                                    columnNumber: 23\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, undefined)),\n                            isTyping && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3 max-w-[80%] bg-gray-100 rounded-lg p-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2 h-2 rounded-full bg-gray-400 animate-bounce\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                            lineNumber: 155,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2 h-2 rounded-full bg-gray-400 animate-bounce\",\n                                            style: {\n                                                animationDelay: '0.2s'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                            lineNumber: 156,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2 h-2 rounded-full bg-gray-400 animate-bounce\",\n                                            style: {\n                                                animationDelay: '0.4s'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                            lineNumber: 157,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: messagesEndRef\n                            }, void 0, false, {\n                                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                lineNumber: 161,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3 border-t border-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: inputValue,\n                                    onChange: (e)=>setInputValue(e.target.value),\n                                    onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),\n                                    placeholder: \"Type your message...\",\n                                    className: \"flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: handleSendMessage,\n                                    className: \"bg-green-700 text-white px-3 py-2 rounded-r-lg hover:bg-green-800 transition-colors\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/FloatingChat.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingChat);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL0Zsb2F0aW5nQ2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDb0I7QUFDdkM7QUFRdkMsTUFBTU8sZUFBeUI7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBWTtRQUNsRDtZQUNFVyxNQUFNO1lBQ05DLFFBQVE7UUFDVjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsUUFBUTtZQUNSQyxVQUFVO1FBQ1o7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNa0IsaUJBQWlCaEIsNkNBQU1BLENBQWlCO0lBRTlDLE1BQU1pQixtQkFBbUJkLGlEQUFHQSxDQUFDZSxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLFFBQVE7SUFFdEQsNkNBQTZDO0lBQzdDckIsZ0RBQVNBO2tDQUFDO1lBQ1JzQjtRQUNGO2lDQUFHO1FBQUNkO0tBQVM7SUFFYixNQUFNYyxpQkFBaUI7UUFDckJMLGVBQWVNLE9BQU8sRUFBRUMsZUFBZTtZQUFFQyxVQUFVO1FBQVM7SUFDOUQ7SUFFQXpCLGdEQUFTQTtrQ0FBQztZQUNSLElBQUlNLFVBQVU7Z0JBQ1pvQixTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUM1QkgsU0FBU0MsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRztZQUNqQyxPQUFPO2dCQUNMTCxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO2dCQUMvQk4sU0FBU0MsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRztZQUNqQztZQUVBOzBDQUFPO29CQUNMTCxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO29CQUMvQk4sU0FBU0MsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRztnQkFDakM7O1FBQ0Y7aUNBQUc7UUFBQ3pCO0tBQVM7SUFFYixNQUFNMkIsb0JBQW9CO1FBQ3hCLElBQUksQ0FBQ3BCLFdBQVdxQixJQUFJLElBQUk7UUFFeEIsbUJBQW1CO1FBQ25CLE1BQU1DLGNBQXlCO2VBQUkzQjtZQUFVO2dCQUFFRSxNQUFNRztnQkFBWUYsUUFBUTtZQUFPO1NBQUU7UUFDbEZGLFlBQVkwQjtRQUNackIsY0FBYztRQUNkRSxZQUFZO1FBRVoscUNBQXFDO1FBQ3JDb0IsV0FBVztZQUNULE1BQU1DLGdCQUFnQmpDLGlEQUFHQSxDQUFDa0MsSUFBSSxDQUFDbEIsQ0FBQUEsT0FDN0JQLFdBQVcwQixXQUFXLEdBQUdDLFFBQVEsQ0FBQ3BCLEtBQUtDLFFBQVEsQ0FBQ2tCLFdBQVcsR0FBR0UsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQzNFckIsS0FBS0MsUUFBUSxDQUFDa0IsV0FBVyxHQUFHQyxRQUFRLENBQUMzQixXQUFXMEIsV0FBVyxHQUFHRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFN0UsTUFBTUMsV0FBV0wsZ0JBQ2JBLGNBQWNNLE1BQU0sR0FDcEI7WUFFSmxDLFlBQVltQyxDQUFBQSxPQUFRO3VCQUNmQTtvQkFDSDt3QkFBRWxDLE1BQU1nQzt3QkFBVS9CLFFBQVE7b0JBQU07aUJBQ2pDO1lBQ0RLLFlBQVk7WUFFWiwrQkFBK0I7WUFDL0JvQixXQUFXO2dCQUNUM0IsWUFBWW1DLENBQUFBLE9BQVE7MkJBQ2ZBO3dCQUNIOzRCQUFFbEMsTUFBTTs0QkFBcUNDLFFBQVE7NEJBQU9DLFVBQVU7d0JBQUs7cUJBQzVFO1lBQ0gsR0FBRztRQUNMLEdBQUc7SUFDTDtJQUVBLE1BQU1pQyxvQkFBb0IsQ0FBQ0M7UUFDekJoQyxjQUFjZ0M7UUFDZFYsV0FBVztZQUNUSDtRQUNGLEdBQUc7SUFDTDtJQUVBLHFCQUNFLDhEQUFDYztRQUNDQyxXQUFXLENBQUMsNERBQTRELEVBQ3RFMUMsV0FBVyxjQUFjLGFBQ3pCOzswQkFFRiw4REFBQzJDO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFTLElBQU01QyxZQUFZLENBQUNEO2dCQUM1QjBDLFdBQVU7MEJBRVQxQyx5QkFDQyw4REFBQ0osd0hBQVNBO29CQUFDOEMsV0FBVTs7Ozs7OENBRXJCLDhEQUFDN0Msc0lBQXVCQTtvQkFBQzZDLFdBQVU7Ozs7Ozs7Ozs7O1lBSXRDMUMsMEJBQ0MsOERBQUN5QztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQWdCOzs7Ozs7MENBQzlCLDhEQUFDSztnQ0FBRUwsV0FBVTswQ0FBcUI7Ozs7Ozs7Ozs7OztrQ0FJcEMsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWnhDLFNBQVNXLEdBQUcsQ0FBQyxDQUFDbUMsU0FBU0Msc0JBQ3RCLDhEQUFDUjtvQ0FFQ0MsV0FBVyxDQUFDLGlCQUFpQixFQUMzQk0sUUFBUTNDLE1BQU0sS0FBSyxRQUNmLCtCQUNBLHVDQUNKOztzREFFRiw4REFBQzBDOzRDQUFFTCxXQUFVO3NEQUFXTSxRQUFRNUMsSUFBSTs7Ozs7O3NEQUNwQyw4REFBQzJDOzRDQUFFTCxXQUFVOztnREFDVk0sUUFBUTNDLE1BQU0sS0FBSyxRQUFRLFVBQVU7Z0RBQU07Ozs7Ozs7d0NBRTdDMkMsUUFBUTFDLFFBQVEsa0JBQ2YsOERBQUNtQzs0Q0FBSUMsV0FBVTtzREFDWjlCLGlCQUFpQkMsR0FBRyxDQUFDLENBQUMyQixRQUFRVSxrQkFDN0IsOERBQUNQO29EQUNDQyxNQUFLO29EQUVMQyxTQUFTLElBQU1OLGtCQUFrQkM7b0RBQ2pDRSxXQUFVOzhEQUVURjttREFKSVU7Ozs7Ozs7Ozs7O21DQWhCUkQ7Ozs7OzRCQTJCUnhDLDBCQUNDLDhEQUFDZ0M7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7Ozs7OztzREFDZiw4REFBQ0Q7NENBQUlDLFdBQVU7NENBQWtEbEIsT0FBTztnREFBRTJCLGdCQUFnQjs0Q0FBTzs7Ozs7O3NEQUNqRyw4REFBQ1Y7NENBQUlDLFdBQVU7NENBQWtEbEIsT0FBTztnREFBRTJCLGdCQUFnQjs0Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXZHLDhEQUFDVjtnQ0FBSVcsS0FBS3pDOzs7Ozs7Ozs7Ozs7a0NBRVosOERBQUM4Qjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDVztvQ0FDQ1QsTUFBSztvQ0FDTFUsT0FBTy9DO29DQUNQZ0QsVUFBVSxDQUFDQyxJQUFNaEQsY0FBY2dELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDN0NJLFlBQVksQ0FBQ0YsSUFBTUEsRUFBRUcsR0FBRyxLQUFLLFdBQVdoQztvQ0FDeENpQyxhQUFZO29DQUNabEIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsU0FBU2xCO29DQUNUZSxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0FBRUEsaUVBQWUzQyxZQUFZQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYWJyYWhhbWljL0RvY3VtZW50cy9Qb3J0Zm9saW8td2Vic2l0ZS9zcmMvY29tcG9uZW50cy9GbG9hdGluZ0NoYXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFhNYXJrSWNvbiwgQ2hhdEJ1YmJsZUxlZnRSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzIwL3NvbGlkJ1xuaW1wb3J0IHsgcW5hIH0gZnJvbSAnLi9GbG9hdGluZ0NoYXRRbkEnXG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgdGV4dDogc3RyaW5nXG4gIHNlbmRlcjogJ3VzZXInIHwgJ2JvdCdcbiAgaXNQcm9tcHQ/OiBib29sZWFuXG59XG5cbmNvbnN0IEZsb2F0aW5nQ2hhdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGF0T3Blbiwgc2V0Q2hhdE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXG4gICAgeyBcbiAgICAgIHRleHQ6IFwiSGVsbG8hIEknbSBBaXJpcywgSSB0YWtlIGNhcmUgb2YgeW91ciBxdWVyaWVzLiBXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGFzaz9cIiwgXG4gICAgICBzZW5kZXI6ICdib3QnIFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJUcnkgYXNraW5nIG1lIGFib3V0OlwiLFxuICAgICAgc2VuZGVyOiAnYm90JyxcbiAgICAgIGlzUHJvbXB0OiB0cnVlXG4gICAgfVxuICBdKVxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2lzVHlwaW5nLCBzZXRJc1R5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3Qgc3VnZ2VzdGVkUHJvbXB0cyA9IHFuYS5tYXAoaXRlbSA9PiBpdGVtLnF1ZXN0aW9uKVxuXG4gIC8vIEF1dG8tc2Nyb2xsIHRvIGJvdHRvbSB3aGVuIG1lc3NhZ2VzIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNjcm9sbFRvQm90dG9tKClcbiAgfSwgW21lc3NhZ2VzXSlcblxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhdE9wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY2hhdC1vcGVuJylcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYXQtb3BlbicpXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJydcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjaGF0LW9wZW4nKVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnXG4gICAgfVxuICB9LCBbY2hhdE9wZW5dKVxuXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgIGlmICghaW5wdXRWYWx1ZS50cmltKCkpIHJldHVyblxuXG4gICAgLy8gQWRkIHVzZXIgbWVzc2FnZVxuICAgIGNvbnN0IG5ld01lc3NhZ2VzOiBNZXNzYWdlW10gPSBbLi4ubWVzc2FnZXMsIHsgdGV4dDogaW5wdXRWYWx1ZSwgc2VuZGVyOiAndXNlcicgfV1cbiAgICBzZXRNZXNzYWdlcyhuZXdNZXNzYWdlcylcbiAgICBzZXRJbnB1dFZhbHVlKCcnKVxuICAgIHNldElzVHlwaW5nKHRydWUpXG5cbiAgICAvLyBGaW5kIG1hdGNoaW5nIHJlc3BvbnNlIGFmdGVyIGRlbGF5XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZFJlc3BvbnNlID0gcW5hLmZpbmQoaXRlbSA9PlxuICAgICAgICBpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaXRlbS5xdWVzdGlvbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylbMF0pIHx8IFxuICAgICAgICBpdGVtLnF1ZXN0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylbMF0pKVxuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGZvdW5kUmVzcG9uc2UgXG4gICAgICAgID8gZm91bmRSZXNwb25zZS5hbnN3ZXIgXG4gICAgICAgIDogXCJJJ20gbm90IHN1cmUgYWJvdXQgdGhhdC4gVHJ5IGFza2luZyBhYm91dCBteSBwcm9qZWN0cywgc2tpbGxzLCBhdmFpbGFiaWxpdHksIG9yIGNvbnRhY3QgaW5mb3JtYXRpb24uXCJcblxuICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbXG4gICAgICAgIC4uLnByZXYsIFxuICAgICAgICB7IHRleHQ6IHJlc3BvbnNlLCBzZW5kZXI6ICdib3QnIH1cbiAgICAgIF0pXG4gICAgICBzZXRJc1R5cGluZyhmYWxzZSlcblxuICAgICAgLy8gU2hvdyBwcm9tcHRzIGFmdGVyIDQgc2Vjb25kc1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gW1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgeyB0ZXh0OiBcIldoYXQgZWxzZSB3b3VsZCB5b3UgbGlrZSB0byBrbm93P1wiLCBzZW5kZXI6ICdib3QnLCBpc1Byb21wdDogdHJ1ZSB9XG4gICAgICAgIF0pXG4gICAgICB9LCA0MDAwKVxuICAgIH0sIDE1MDApXG4gIH1cblxuICBjb25zdCBoYW5kbGVQcm9tcHRDbGljayA9IChwcm9tcHQ6IHN0cmluZykgPT4ge1xuICAgIHNldElucHV0VmFsdWUocHJvbXB0KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaGFuZGxlU2VuZE1lc3NhZ2UoKVxuICAgIH0sIDEwMClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTggcmlnaHQtOCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgei1bMTAwMF0gJHtcbiAgICAgICAgY2hhdE9wZW4gPyAndy04MCBoLTk2JyA6ICd3LTE2IGgtMTYnXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhdE9wZW4oIWNoYXRPcGVuKX1cbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LWxnIGhvdmVyOmJnLWdyZWVuLTgwMCB0cmFuc2l0aW9uLWNvbG9ycyB6LTEwJ1xuICAgICAgPlxuICAgICAgICB7Y2hhdE9wZW4gPyAoXG4gICAgICAgICAgPFhNYXJrSWNvbiBjbGFzc05hbWU9J3ctNiBoLTYnIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENoYXRCdWJibGVMZWZ0UmlnaHRJY29uIGNsYXNzTmFtZT0ndy02IGgtNicgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7Y2hhdE9wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTIwIHJpZ2h0LTAgdy1mdWxsIGgtZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHotWzEwMDBdJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgcC00Jz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkNoYXQgd2l0aCBBaXJpczwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgb3BhY2l0eS04MCc+XG4gICAgICAgICAgICAgIFR5cGljYWxseSByZXBsaWVzIGluIDUgbWludXRlc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgcC00IG92ZXJmbG93LXktYXV0byc+XG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1iLTMgbWF4LXctWzgwJV0gJHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID09PSAnYm90JyBcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JheS0xMDAgcm91bmRlZC1sZyBwLTMnIFxuICAgICAgICAgICAgICAgICAgICA6ICdtbC1hdXRvIGJnLWdyZWVuLTEwMCByb3VuZGVkLWxnIHAtMydcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSc+e21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXQtMSc+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09ICdib3QnID8gJ0FpcmlzJyA6ICdZb3UnfSDigKIgSnVzdCBub3dcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UuaXNQcm9tcHQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGVkUHJvbXB0cy5tYXAoKHByb21wdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvbXB0Q2xpY2socHJvbXB0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LWxlZnQgdGV4dC14cyB0ZXh0LWdyZWVuLTcwMCBob3Zlcjp0ZXh0LWdyZWVuLTkwMCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtpc1R5cGluZyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBtYXgtdy1bODAlXSBiZy1ncmF5LTEwMCByb3VuZGVkLWxnIHAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1ib3VuY2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgYW5pbWF0ZS1ib3VuY2VcIiBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBhbmltYXRlLWJvdW5jZVwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiAnMC40cycgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0zIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGhhbmRsZVNlbmRNZXNzYWdlKCl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC0xIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sLWxnIHB4LTMgcHktMiB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1ncmVlbi01MDAnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1yLWxnIGhvdmVyOmJnLWdyZWVuLTgwMCB0cmFuc2l0aW9uLWNvbG9ycydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nQ2hhdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiWE1hcmtJY29uIiwiQ2hhdEJ1YmJsZUxlZnRSaWdodEljb24iLCJxbmEiLCJGbG9hdGluZ0NoYXQiLCJjaGF0T3BlbiIsInNldENoYXRPcGVuIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInRleHQiLCJzZW5kZXIiLCJpc1Byb21wdCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsIm1lc3NhZ2VzRW5kUmVmIiwic3VnZ2VzdGVkUHJvbXB0cyIsIm1hcCIsIml0ZW0iLCJxdWVzdGlvbiIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwibmV3TWVzc2FnZXMiLCJzZXRUaW1lb3V0IiwiZm91bmRSZXNwb25zZSIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3BsaXQiLCJyZXNwb25zZSIsImFuc3dlciIsInByZXYiLCJoYW5kbGVQcm9tcHRDbGljayIsInByb21wdCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiaDMiLCJwIiwibWVzc2FnZSIsImluZGV4IiwiaSIsImFuaW1hdGlvbkRlbGF5IiwicmVmIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/FloatingChat.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/FloatingChatQnA.tsx":
/*!********************************************!*\
  !*** ./src/components/FloatingChatQnA.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   qna: () => (/* binding */ qna)\n/* harmony export */ });\n// Predefined questions and responses\nconst qna = [\n    {\n        question: \"What projects are you currently working on?\",\n        answer: \"I'm currently building a portfolio website with Next.js and Tailwind CSS. It includes interactive components like this chat system!\"\n    },\n    {\n        question: \"What technologies do you specialize in?\",\n        answer: \"My core skills are React, TypeScript, Node.js, and modern CSS frameworks. I also have experience with Python and cloud platforms.\"\n    },\n    {\n        question: \"Are you available for freelance work?\",\n        answer: \"Yes, I'm available for select freelance projects. Please share details about your project and timeline.\"\n    },\n    {\n        question: \"How can I contact you?\",\n        answer: \"You can reach me at email@example.com or connect on LinkedIn at linkedin.com/in/yourprofile\"\n    },\n    {\n        question: \"Where can I see your work?\",\n        answer: \"Check out my GitHub (github.com/yourusername) for code samples and my portfolio section for live projects.\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL0Zsb2F0aW5nQ2hhdFFuQS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUFxQztBQUMxQixNQUFNQSxNQUFNO0lBQ25CO1FBQ0VDLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRCxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBO1FBQ0VELFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7Q0FDRCIsInNvdXJjZXMiOlsiL1VzZXJzL2FicmFoYW1pYy9Eb2N1bWVudHMvUG9ydGZvbGlvLXdlYnNpdGUvc3JjL2NvbXBvbmVudHMvRmxvYXRpbmdDaGF0UW5BLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcmVkZWZpbmVkIHF1ZXN0aW9ucyBhbmQgcmVzcG9uc2VzXG4gICBleHBvcnQgIGNvbnN0IHFuYSA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IHByb2plY3RzIGFyZSB5b3UgY3VycmVudGx5IHdvcmtpbmcgb24/XCIsXG4gICAgICBhbnN3ZXI6IFwiSSdtIGN1cnJlbnRseSBidWlsZGluZyBhIHBvcnRmb2xpbyB3ZWJzaXRlIHdpdGggTmV4dC5qcyBhbmQgVGFpbHdpbmQgQ1NTLiBJdCBpbmNsdWRlcyBpbnRlcmFjdGl2ZSBjb21wb25lbnRzIGxpa2UgdGhpcyBjaGF0IHN5c3RlbSFcIlxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCB0ZWNobm9sb2dpZXMgZG8geW91IHNwZWNpYWxpemUgaW4/XCIsXG4gICAgICBhbnN3ZXI6IFwiTXkgY29yZSBza2lsbHMgYXJlIFJlYWN0LCBUeXBlU2NyaXB0LCBOb2RlLmpzLCBhbmQgbW9kZXJuIENTUyBmcmFtZXdvcmtzLiBJIGFsc28gaGF2ZSBleHBlcmllbmNlIHdpdGggUHl0aG9uIGFuZCBjbG91ZCBwbGF0Zm9ybXMuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkFyZSB5b3UgYXZhaWxhYmxlIGZvciBmcmVlbGFuY2Ugd29yaz9cIixcbiAgICAgIGFuc3dlcjogXCJZZXMsIEknbSBhdmFpbGFibGUgZm9yIHNlbGVjdCBmcmVlbGFuY2UgcHJvamVjdHMuIFBsZWFzZSBzaGFyZSBkZXRhaWxzIGFib3V0IHlvdXIgcHJvamVjdCBhbmQgdGltZWxpbmUuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBjYW4gSSBjb250YWN0IHlvdT9cIixcbiAgICAgIGFuc3dlcjogXCJZb3UgY2FuIHJlYWNoIG1lIGF0IGVtYWlsQGV4YW1wbGUuY29tIG9yIGNvbm5lY3Qgb24gTGlua2VkSW4gYXQgbGlua2VkaW4uY29tL2luL3lvdXJwcm9maWxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoZXJlIGNhbiBJIHNlZSB5b3VyIHdvcms/XCIsXG4gICAgICBhbnN3ZXI6IFwiQ2hlY2sgb3V0IG15IEdpdEh1YiAoZ2l0aHViLmNvbS95b3VydXNlcm5hbWUpIGZvciBjb2RlIHNhbXBsZXMgYW5kIG15IHBvcnRmb2xpbyBzZWN0aW9uIGZvciBsaXZlIHByb2plY3RzLlwiXG4gICAgfVxuICBdIl0sIm5hbWVzIjpbInFuYSIsInF1ZXN0aW9uIiwiYW5zd2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/FloatingChatQnA.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Grid */ \"(pages-dir-node)/./node_modules/@mui/material/node/Grid/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Divider */ \"(pages-dir-node)/./node_modules/@mui/material/node/Divider/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Email_GitHub_LinkedIn_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Email,GitHub,LinkedIn!=!@mui/icons-material */ \"(pages-dir-node)/__barrel_optimize__?names=Email,GitHub,LinkedIn!=!./node_modules/@mui/icons-material/esm/index.js\");\n\n\n\n\n\n\n\n\nconst Footer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n        sx: {\n            backgroundColor: '#1e4a1b',\n            color: '#ffffff',\n            py: 6\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_3___default()), {\n            maxWidth: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    container: true,\n                    spacing: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            item: true,\n                            xs: 12,\n                            md: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    variant: \"h6\",\n                                    sx: {\n                                        fontWeight: 700,\n                                        mb: 2\n                                    },\n                                    children: \"Abraham\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    variant: \"body2\",\n                                    children: \"A Full Stack Developer creating digital experiences that matter.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            item: true,\n                            xs: 12,\n                            md: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    variant: \"h6\",\n                                    sx: {\n                                        fontWeight: 700,\n                                        mb: 2\n                                    },\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    variant: \"body2\",\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    children: \"email@example.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    variant: \"body2\",\n                                    children: \"+1 (123) 456-7890\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            item: true,\n                            xs: 12,\n                            md: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    variant: \"h6\",\n                                    sx: {\n                                        fontWeight: 700,\n                                        mb: 2\n                                    },\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    sx: {\n                                        display: 'flex',\n                                        gap: 2\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Email_GitHub_LinkedIn_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.LinkedIn, {\n                                            sx: {\n                                                color: '#ffffff',\n                                                cursor: 'pointer'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Email_GitHub_LinkedIn_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.GitHub, {\n                                            sx: {\n                                                color: '#ffffff',\n                                                cursor: 'pointer'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Email_GitHub_LinkedIn_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Email, {\n                                            sx: {\n                                                color: '#ffffff',\n                                                cursor: 'pointer'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    sx: {\n                        my: 4,\n                        backgroundColor: 'rgba(255,255,255,0.1)'\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    variant: \"body2\",\n                    sx: {\n                        textAlign: 'center'\n                    },\n                    children: [\n                        \"\\xa9 \",\n                        new Date().getFullYear(),\n                        \" Abraham. All rights reserved.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/components/Footer.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUNjO0FBQ1o7QUFDTTtBQUNJO0FBQ2M7QUFFN0QsTUFBTVMsU0FBbUI7SUFDdkIscUJBQ0UsOERBQUNSLDBEQUFHQTtRQUFDUyxJQUFJO1lBQUVDLGlCQUFpQjtZQUFXQyxPQUFPO1lBQVdDLElBQUk7UUFBRTtrQkFDN0QsNEVBQUNSLGdFQUFTQTtZQUFDUyxVQUFTOzs4QkFDbEIsOERBQUNYLDJEQUFJQTtvQkFBQ1ksU0FBUztvQkFBQ0MsU0FBUzs7c0NBQ3ZCLDhEQUFDYiwyREFBSUE7NEJBQUNjLElBQUk7NEJBQUNDLElBQUk7NEJBQUlDLElBQUk7OzhDQUNyQiw4REFBQ2pCLGlFQUFVQTtvQ0FBQ2tCLFNBQVE7b0NBQUtWLElBQUk7d0NBQUVXLFlBQVk7d0NBQUtDLElBQUk7b0NBQUU7OENBQUc7Ozs7Ozs4Q0FHekQsOERBQUNwQixpRUFBVUE7b0NBQUNrQixTQUFROzhDQUFROzs7Ozs7Ozs7Ozs7c0NBSTlCLDhEQUFDakIsMkRBQUlBOzRCQUFDYyxJQUFJOzRCQUFDQyxJQUFJOzRCQUFJQyxJQUFJOzs4Q0FDckIsOERBQUNqQixpRUFBVUE7b0NBQUNrQixTQUFRO29DQUFLVixJQUFJO3dDQUFFVyxZQUFZO3dDQUFLQyxJQUFJO29DQUFFOzhDQUFHOzs7Ozs7OENBR3pELDhEQUFDcEIsaUVBQVVBO29DQUFDa0IsU0FBUTtvQ0FBUVYsSUFBSTt3Q0FBRVksSUFBSTtvQ0FBRTs4Q0FBRzs7Ozs7OzhDQUczQyw4REFBQ3BCLGlFQUFVQTtvQ0FBQ2tCLFNBQVE7OENBQVE7Ozs7Ozs7Ozs7OztzQ0FFOUIsOERBQUNqQiwyREFBSUE7NEJBQUNjLElBQUk7NEJBQUNDLElBQUk7NEJBQUlDLElBQUk7OzhDQUNyQiw4REFBQ2pCLGlFQUFVQTtvQ0FBQ2tCLFNBQVE7b0NBQUtWLElBQUk7d0NBQUVXLFlBQVk7d0NBQUtDLElBQUk7b0NBQUU7OENBQUc7Ozs7Ozs4Q0FHekQsOERBQUNyQiwwREFBR0E7b0NBQUNTLElBQUk7d0NBQUVhLFNBQVM7d0NBQVFDLEtBQUs7b0NBQUU7O3NEQUNqQyw4REFBQ2xCLHFHQUFRQTs0Q0FBQ0ksSUFBSTtnREFBRUUsT0FBTztnREFBV2EsUUFBUTs0Q0FBVTs7Ozs7O3NEQUNwRCw4REFBQ2xCLG1HQUFNQTs0Q0FBQ0csSUFBSTtnREFBRUUsT0FBTztnREFBV2EsUUFBUTs0Q0FBVTs7Ozs7O3NEQUNsRCw4REFBQ2pCLGtHQUFLQTs0Q0FBQ0UsSUFBSTtnREFBRUUsT0FBTztnREFBV2EsUUFBUTs0Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl2RCw4REFBQ3JCLDhEQUFPQTtvQkFDTk0sSUFBSTt3QkFDRmdCLElBQUk7d0JBQ0pmLGlCQUFpQjtvQkFDbkI7Ozs7Ozs4QkFFRiw4REFBQ1QsaUVBQVVBO29CQUFDa0IsU0FBUTtvQkFBUVYsSUFBSTt3QkFBRWlCLFdBQVc7b0JBQVM7O3dCQUFHO3dCQUNwRCxJQUFJQyxPQUFPQyxXQUFXO3dCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEM7QUFFQSxpRUFBZXBCLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnJhaGFtaWMvRG9jdW1lbnRzL1BvcnRmb2xpby13ZWJzaXRlL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94J1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5J1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJ1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcidcbmltcG9ydCB7IExpbmtlZEluLCBHaXRIdWIsIEVtYWlsIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCdcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxZTRhMWInLCBjb2xvcjogJyNmZmZmZmYnLCBweTogNiB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J2xnJz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgc3g9e3sgZm9udFdlaWdodDogNzAwLCBtYjogMiB9fT5cbiAgICAgICAgICAgICAgQWJyYWhhbVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPlxuICAgICAgICAgICAgICBBIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyIGNyZWF0aW5nIGRpZ2l0YWwgZXhwZXJpZW5jZXMgdGhhdCBtYXR0ZXIuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgc3g9e3sgZm9udFdlaWdodDogNzAwLCBtYjogMiB9fT5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN4PXt7IG1iOiAxIH19PlxuICAgICAgICAgICAgICBlbWFpbEBleGFtcGxlLmNvbVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPisxICgxMjMpIDQ1Ni03ODkwPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIHN4PXt7IGZvbnRXZWlnaHQ6IDcwMCwgbWI6IDIgfX0+XG4gICAgICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDIgfX0+XG4gICAgICAgICAgICAgIDxMaW5rZWRJbiBzeD17eyBjb2xvcjogJyNmZmZmZmYnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSAvPlxuICAgICAgICAgICAgICA8R2l0SHViIHN4PXt7IGNvbG9yOiAnI2ZmZmZmZicsIGN1cnNvcjogJ3BvaW50ZXInIH19IC8+XG4gICAgICAgICAgICAgIDxFbWFpbCBzeD17eyBjb2xvcjogJyNmZmZmZmYnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG15OiA0LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjEpJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICDCqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBBYnJhaGFtLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmtlZEluIiwiR2l0SHViIiwiRW1haWwiLCJGb290ZXIiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicHkiLCJtYXhXaWR0aCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJtZCIsInZhcmlhbnQiLCJmb250V2VpZ2h0IiwibWIiLCJkaXNwbGF5IiwiZ2FwIiwiY3Vyc29yIiwibXkiLCJ0ZXh0QWxpZ24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/Footer.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/Theme */ \"(pages-dir-node)/./src/theme/Theme.ts\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AppNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppNavBar */ \"(pages-dir-node)/./src/components/AppNavBar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./src/components/Footer.tsx\");\n/* harmony import */ var _components_FloatingChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FloatingChat */ \"(pages-dir-node)/./src/components/FloatingChat.tsx\");\n// src/pages/_app.tsx\n\n\n\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n        theme: _theme_Theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Portfolio Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppNavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FloatingChat__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abrahamic/Documents/Portfolio-website/src/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUMrQjtBQUV4QjtBQUNNO0FBQ0w7QUFDa0I7QUFDTjtBQUNZO0FBRXJELE1BQU1NLFFBQTRCLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDekQscUJBQ0UsOERBQUNSLCtEQUFhQTtRQUFDRSxPQUFPQSxvREFBS0E7OzBCQUN6Qiw4REFBQ0Qsa0RBQUlBOztrQ0FDSCw4REFBQ1E7a0NBQU07Ozs7OztrQ0FFUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNULDZEQUFTQTs7Ozs7MEJBRVYsOERBQUNJO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNKLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLGdFQUFZQTs7Ozs7Ozs7Ozs7QUFHbkI7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FicmFoYW1pYy9Eb2N1bWVudHMvUG9ydGZvbGlvLXdlYnNpdGUvc3JjL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9fYXBwLnRzeFxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lL1RoZW1lJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCBBcHBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBOYXZCYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEZsb2F0aW5nQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0Zsb2F0aW5nQ2hhdCdcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0Zm9saW8gUHJvamVjdDwvdGl0bGU+XG4gICAgICBcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvbG9nby5wbmcnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwTmF2QmFyIC8+XG4gICAgICBcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxGbG9hdGluZ0NoYXQvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJIZWFkIiwidGhlbWUiLCJBcHBOYXZCYXIiLCJGb290ZXIiLCJGbG9hdGluZ0NoYXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/theme/Theme.ts":
/*!****************************!*\
  !*** ./src/theme/Theme.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#546E51'\n        },\n        secondary: {\n            main: '#8fdbc2'\n        },\n        background: {\n            default: '#f4f6f8'\n        }\n    },\n    typography: {\n        fontFamily: 'Roboto, Arial, sans-serif',\n        h1: {\n            fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif'\n        },\n        h2: {\n            fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif'\n        },\n        h3: {\n            fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif'\n        },\n        h4: {\n            fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif'\n        },\n        h5: {\n            fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif'\n        },\n        h6: {\n            fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy90aGVtZS9UaGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUMsUUFBUUQsaUVBQVdBLENBQUM7SUFDeEJFLFNBQVM7UUFDUEMsU0FBUztZQUNQQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVztZQUNURCxNQUFNO1FBQ1I7UUFDQUUsWUFBWTtZQUNWQyxTQUFTO1FBQ1g7SUFDRjtJQUNBQyxZQUFZO1FBQ1ZDLFlBQVk7UUFDWkMsSUFBSTtZQUNGRCxZQUFZO1FBQ2Q7UUFDQUUsSUFBSTtZQUNGRixZQUFZO1FBQ2Q7UUFDQUcsSUFBSTtZQUNGSCxZQUFZO1FBQ2Q7UUFDQUksSUFBSTtZQUNGSixZQUFZO1FBQ2Q7UUFDQUssSUFBSTtZQUNGTCxZQUFZO1FBQ2Q7UUFDQU0sSUFBSTtZQUNGTixZQUFZO1FBQ2Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVSLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnJhaGFtaWMvRG9jdW1lbnRzL1BvcnRmb2xpby13ZWJzaXRlL3NyYy90aGVtZS9UaGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNTQ2RTUxJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyM4ZmRiYzInLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNmNGY2ZjgnLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIC8vIERlZmF1bHQgZm9udCBmb3IgYm9keSB0ZXh0XG4gICAgaDE6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdBY29ybiwgTWFsaSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdBY29ybiwgTWFsaSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdBY29ybiwgTWFsaSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdBY29ybiwgTWFsaSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdBY29ybiwgTWFsaSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdBY29ybiwgTWFsaSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicsIFxuICAgIH0sXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/theme/Theme.ts\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=ChatBubbleLeftRightIcon,XMarkIcon!=!./node_modules/@heroicons/react/20/solid/esm/index.js":
/*!***************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=ChatBubbleLeftRightIcon,XMarkIcon!=!./node_modules/@heroicons/react/20/solid/esm/index.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatBubbleLeftRightIcon: () => (/* reexport safe */ _ChatBubbleLeftRightIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   XMarkIcon: () => (/* reexport safe */ _XMarkIcon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _ChatBubbleLeftRightIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatBubbleLeftRightIcon.js */ \"(pages-dir-node)/./node_modules/@heroicons/react/20/solid/esm/ChatBubbleLeftRightIcon.js\");\n/* harmony import */ var _XMarkIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XMarkIcon.js */ \"(pages-dir-node)/./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUNoYXRCdWJibGVMZWZ0UmlnaHRJY29uLFhNYXJrSWNvbiE9IS4vbm9kZV9tb2R1bGVzL0BoZXJvaWNvbnMvcmVhY3QvMjAvc29saWQvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2lGIiwic291cmNlcyI6WyIvVXNlcnMvYWJyYWhhbWljL0RvY3VtZW50cy9Qb3J0Zm9saW8td2Vic2l0ZS9ub2RlX21vZHVsZXMvQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZC9lc20vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXRCdWJibGVMZWZ0UmlnaHRJY29uIH0gZnJvbSBcIi4vQ2hhdEJ1YmJsZUxlZnRSaWdodEljb24uanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBYTWFya0ljb24gfSBmcm9tIFwiLi9YTWFya0ljb24uanNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=ChatBubbleLeftRightIcon,XMarkIcon!=!./node_modules/@heroicons/react/20/solid/esm/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Email,GitHub,LinkedIn!=!./node_modules/@mui/icons-material/esm/index.js":
/*!*********************************************************************************************************!*\
  !*** __barrel_optimize__?names=Email,GitHub,LinkedIn!=!./node_modules/@mui/icons-material/esm/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Email: () => (/* reexport safe */ _Email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   GitHub: () => (/* reexport safe */ _GitHub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   LinkedIn: () => (/* reexport safe */ _LinkedIn_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.js */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Email.js\");\n/* harmony import */ var _GitHub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GitHub.js */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/GitHub.js\");\n/* harmony import */ var _LinkedIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkedIn.js */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/LinkedIn.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUVtYWlsLEdpdEh1YixMaW5rZWRJbiE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkM7QUFDRSIsInNvdXJjZXMiOlsiL1VzZXJzL2FicmFoYW1pYy9Eb2N1bWVudHMvUG9ydGZvbGlvLXdlYnNpdGUvbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbWFpbCB9IGZyb20gXCIuL0VtYWlsLmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSBcIi4vR2l0SHViLmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2VkSW4gfSBmcm9tIFwiLi9MaW5rZWRJbi5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Email,GitHub,LinkedIn!=!./node_modules/@mui/icons-material/esm/index.js\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/RtlProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createBreakpoints");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/HTMLElementType");

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/appendOwnerState");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/extractEventHandlers");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getReactElementRef");

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getScrollbarSize");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isFocusVisible");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/mergeSlotProps");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveComponentProps");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useLazyRef");

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useSlotProps");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@heroicons","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();