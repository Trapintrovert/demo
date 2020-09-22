webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_download_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-download-link */ "./node_modules/react-download-link/index.js");
/* harmony import */ var react_download_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_download_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\React\\personal-portfolio\\components\\Navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbarr = function Navbarr() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    color: "light",
    light: true,
    expand: "md",
    className: "py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "Trap Introvert")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: "mx-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "About"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: "mx-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Portfolio"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: "mx-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, "Contact"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(react_download_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    label: "Save",
    filename: "myfile.txt",
    exportFile: function exportFile() {
      return "My cached data";
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mx-2 resume",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Resume"))))));
};

_s(Navbarr, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Navbarr;
/* harmony default export */ __webpack_exports__["default"] = (Navbarr);

var _c;

$RefreshReg$(_c, "Navbarr");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-download-link/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-download-link/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadLink = function (_Component) {
  _inherits(DownloadLink, _Component);

  function DownloadLink() {
    _classCallCheck(this, DownloadLink);

    return _possibleConstructorReturn(this, (DownloadLink.__proto__ || Object.getPrototypeOf(DownloadLink)).apply(this, arguments));
  }

  _createClass(DownloadLink, [{
    key: "handleDownloadClick",
    value: function handleDownloadClick(event) {
      var _this2 = this;

      event.persist();
      event.preventDefault();

      function magicDownload(text, fileName) {
        var blob = new Blob([text], {
          type: "text/csv;charset=utf8;"
        });

        // create hidden link
        var element = document.createElement("a");
        document.body.appendChild(element);
        element.setAttribute("href", window.URL.createObjectURL(blob));
        element.setAttribute("download", fileName);
        element.style.display = "";

        element.click();

        document.body.removeChild(element);
        event.stopPropagation();
      }

      var fileType = event.target.innerText;
      var text = this.props.exportFile(fileType);

      if (text instanceof Promise) {
        text.then(function (result) {
          return magicDownload(result, _this2.props.filename);
        });
      } else {
        magicDownload(text, this.props.filename);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(this.props.tagName || "a", {
        style: this.props.style,
        className: this.props.className,
        href: "#",
        onClick: this.handleDownloadClick.bind(this)
      }, this.props.label);
    }
  }]);

  return DownloadLink;
}(_react.Component);

DownloadLink.defaultProps = {
  filename: "file.txt",
  label: "Save",
  style: {
    margin: "5px 5px 0px 0px",
    textDecoration: "underline",
    color: "blue",
    cursor: "pointer"
  },
  exportFile: function exportFile() {}
};

DownloadLink.propTypes = {
  filename: _propTypes2.default.string,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
  style: _propTypes2.default.object,
  exportFile: _propTypes2.default.func
};

exports.default = DownloadLink;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb3dubG9hZC1saW5rL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhcnIiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFXQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRVhDLE1BRlc7QUFBQSxNQUVIQyxTQUZHOztBQUlsQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUVBLFNBQ0ksTUFBQyxpREFBRDtBQUFRLFNBQUssRUFBQyxPQUFkO0FBQXNCLFNBQUssTUFBM0I7QUFBNEIsVUFBTSxFQUFDLElBQW5DO0FBQXdDLGFBQVMsRUFBQyxNQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLENBREosRUFJSSxNQUFDLHdEQUFEO0FBQWUsV0FBTyxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFRixNQUFs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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZiNTZkOTMwMjY4NWQxNDc0M2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IERvd25sb2FkTGluayBmcm9tIFwicmVhY3QtZG93bmxvYWQtbGlua1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbGxhcHNlLFxyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgTmF2YmFyLFxyXG4gICAgTmF2YmFyVG9nZ2xlcixcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgQnV0dG9uXHJcbiAgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IE5hdmJhcnIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXIgY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPVwicHktM1wiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+VHJhcCBJbnRyb3ZlcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm14LTJcIj5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3BvcnRmb2xpbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJteC0yXCIgPlBvcnRmb2xpbzwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibXgtMlwiPkNvbnRhY3Q8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZT1cIm15ZmlsZS50eHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRGaWxlPXsoKSA9PiBcIk15IGNhY2hlZCBkYXRhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJteC0yIHJlc3VtZVwiPlJlc3VtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcnJcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEb3dubG9hZExpbmsgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRG93bmxvYWRMaW5rLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEb3dubG9hZExpbmsoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvd25sb2FkTGluayk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERvd25sb2FkTGluay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERvd25sb2FkTGluaykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERvd25sb2FkTGluaywgW3tcbiAgICBrZXk6IFwiaGFuZGxlRG93bmxvYWRDbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEb3dubG9hZENsaWNrKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZnVuY3Rpb24gbWFnaWNEb3dubG9hZCh0ZXh0LCBmaWxlTmFtZSkge1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFt0ZXh0XSwge1xuICAgICAgICAgIHR5cGU6IFwidGV4dC9jc3Y7Y2hhcnNldD11dGY4O1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBoaWRkZW4gbGlua1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuICAgICAgICBlbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWxlVHlwZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICB2YXIgdGV4dCA9IHRoaXMucHJvcHMuZXhwb3J0RmlsZShmaWxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXh0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0ZXh0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiBtYWdpY0Rvd25sb2FkKHJlc3VsdCwgX3RoaXMyLnByb3BzLmZpbGVuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWdpY0Rvd25sb2FkKHRleHQsIHRoaXMucHJvcHMuZmlsZW5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMudGFnTmFtZSB8fCBcImFcIiwge1xuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRG93bmxvYWRDbGljay5iaW5kKHRoaXMpXG4gICAgICB9LCB0aGlzLnByb3BzLmxhYmVsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRG93bmxvYWRMaW5rO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRG93bmxvYWRMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsZW5hbWU6IFwiZmlsZS50eHRcIixcbiAgbGFiZWw6IFwiU2F2ZVwiLFxuICBzdHlsZToge1xuICAgIG1hcmdpbjogXCI1cHggNXB4IDBweCAwcHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICB9LFxuICBleHBvcnRGaWxlOiBmdW5jdGlvbiBleHBvcnRGaWxlKCkge31cbn07XG5cbkRvd25sb2FkTGluay5wcm9wVHlwZXMgPSB7XG4gIGZpbGVuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgZXhwb3J0RmlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEb3dubG9hZExpbms7XG4iXSwic291cmNlUm9vdCI6IiJ9