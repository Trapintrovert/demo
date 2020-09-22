webpackHotUpdate_N_E("pages/portfolio",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb3dubG9hZC1saW5rL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhcnIiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFXQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRVhDLE1BRlc7QUFBQSxNQUVIQyxTQUZHOztBQUlsQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUVBLFNBQ0ksTUFBQyxpREFBRDtBQUFRLFNBQUssRUFBQyxPQUFkO0FBQXNCLFNBQUssTUFBM0I7QUFBNEIsVUFBTSxFQUFDLElBQW5DO0FBQXdDLGFBQVMsRUFBQyxNQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLENBREosRUFJSSxNQUFDLHdEQUFEO0FBQWUsV0FBTyxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFRixNQUFs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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcnRmb2xpby42YjU2ZDkzMDI2ODVkMTQ3NDNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBEb3dubG9hZExpbmsgZnJvbSBcInJlYWN0LWRvd25sb2FkLWxpbmtcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIENvbnRhaW5lcixcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXYsXHJcbiAgICBOYXZJdGVtLFxyXG4gICAgTmF2TGluayxcclxuICAgIEJ1dHRvblxyXG4gIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBOYXZiYXJyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyIGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT1cInB5LTNcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPlRyYXAgSW50cm92ZXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJteC0yXCI+QWJvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wb3J0Zm9saW8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibXgtMlwiID5Qb3J0Zm9saW88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm14LTJcIj5Db250YWN0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU9XCJteWZpbGUudHh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0RmlsZT17KCkgPT4gXCJNeSBjYWNoZWQgZGF0YVwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXgtMiByZXN1bWVcIj5SZXN1bWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJyXHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRG93bmxvYWRMaW5rID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERvd25sb2FkTGluaywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRG93bmxvYWRMaW5rKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb3dubG9hZExpbmspO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEb3dubG9hZExpbmsuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEb3dubG9hZExpbmspKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEb3dubG9hZExpbmssIFt7XG4gICAga2V5OiBcImhhbmRsZURvd25sb2FkQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRG93bmxvYWRDbGljayhldmVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIG1hZ2ljRG93bmxvYWQodGV4dCwgZmlsZU5hbWUpIHtcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdGV4dF0sIHtcbiAgICAgICAgICB0eXBlOiBcInRleHQvY3N2O2NoYXJzZXQ9dXRmODtcIlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjcmVhdGUgaGlkZGVuIGxpbmtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgICAgICAgZWxlbWVudC5jbGljaygpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsZVR5cGUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgdmFyIHRleHQgPSB0aGlzLnByb3BzLmV4cG9ydEZpbGUoZmlsZVR5cGUpO1xuXG4gICAgICBpZiAodGV4dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGV4dC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gbWFnaWNEb3dubG9hZChyZXN1bHQsIF90aGlzMi5wcm9wcy5maWxlbmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFnaWNEb3dubG9hZCh0ZXh0LCB0aGlzLnByb3BzLmZpbGVuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLnRhZ05hbWUgfHwgXCJhXCIsIHtcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZURvd25sb2FkQ2xpY2suYmluZCh0aGlzKVxuICAgICAgfSwgdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERvd25sb2FkTGluaztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRvd25sb2FkTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbGVuYW1lOiBcImZpbGUudHh0XCIsXG4gIGxhYmVsOiBcIlNhdmVcIixcbiAgc3R5bGU6IHtcbiAgICBtYXJnaW46IFwiNXB4IDVweCAwcHggMHB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgfSxcbiAgZXhwb3J0RmlsZTogZnVuY3Rpb24gZXhwb3J0RmlsZSgpIHt9XG59O1xuXG5Eb3dubG9hZExpbmsucHJvcFR5cGVzID0ge1xuICBmaWxlbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGV4cG9ydEZpbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRG93bmxvYWRMaW5rO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==