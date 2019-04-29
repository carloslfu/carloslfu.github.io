webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);






var links = [{
  title: 'Github',
  href: 'https://github.com/carloslfu'
}, {
  title: 'LinkedIn',
  href: 'https://www.linkedin.com/in/carloslfu/?locale=en_US'
}, {
  title: 'Twitter',
  href: 'https://twitter.com/carloslfu'
}, {
  title: 'Blog',
  href: 'https://medium.com/@carloslfu'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      drawerOpen = _useState2[0],
      setDrawerOpen = _useState2[1];

  var toggleDrawer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen, setDrawerOpen]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    justifyContent: "center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: [1, 800]
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "header",
    justifyContent: "space-between",
    p: 3,
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    fontSize: 4
  }, "Carlos Galarza"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_device_detect__WEBPACK_IMPORTED_MODULE_4__["MobileView"], {
    renderWithFragment: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/menu.svg",
    alt: "open menu",
    width: 28,
    height: "auto",
    onClick: toggleDrawer
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_device_detect__WEBPACK_IMPORTED_MODULE_4__["BrowserView"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "nav"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/close.svg",
    alt: "close menu",
    width: 28,
    height: "auto",
    onClick: toggleDrawer,
    style: {
      position: 'fixede',
      right: 16,
      top: 16
    }
  }), links.map(function (_ref, idx) {
    var href = _ref.href,
        title = _ref.title;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonLink, {
      key: idx,
      href: href
    }, title);
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "section",
    flexDirection: ['column', 'row'],
    alignItems: ['center'],
    marginBottom: 20
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    as: "h1",
    p: 3,
    fontSize: [2, 3],
    fontWeight: 1
  }, "Senior Software Engineer and Consultant.", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), "I love to help people by creating tools using the Web Platform and the cloud."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    p: 3
  }, "\"The best way to predict the future is to invent it.\" - Alan Kay")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/profile.jpg",
    alt: "Carlos Galarza's photo",
    width: [300, 320],
    height: "auto"
  }))), drawerOpen && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%'
    },
    backgroundColor: "white",
    width: 1
  }, links.map(function (_ref2, idx) {
    var href = _ref2.href,
        title = _ref2.title;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonLink, {
      key: idx,
      href: href,
      p: 4
    }, title);
  })));
});

var ButtonLink = function ButtonLink(_ref3) {
  var href = _ref3.href,
      children = _ref3.children,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["href", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "a",
    variant: "link",
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: 'none'
    },
    color: "black",
    fontSize: 2,
    fontWeight: 1,
    p: 2
  }, rest), children);
};

/***/ })

})
//# sourceMappingURL=index.js.b7482e0ce4e6f8655825.hot-update.js.map