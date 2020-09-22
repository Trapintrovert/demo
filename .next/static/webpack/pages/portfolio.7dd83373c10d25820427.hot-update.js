webpackHotUpdate_N_E("pages/portfolio",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _this = undefined,
    _jsxFileName = "C:\\React\\personal-portfolio\\pages\\portfolio.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var portfolio = function portfolio() {
  _s();

  //Images
  var aelustre = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441149/aelustre.png';
  var hillory = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441158/hillorylogistics.png';
  var sugar = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441153/sugarstreet.png';
  var heritage = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441153/heritageapparels.png';
  var meyoapp = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441130/meyoapp.png';
  var atlandfoods = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441152/atlandfoods.png';
  var oguntech = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441128/oguntech.png';
  var chatfood = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441138/chatfood.png';
  var crwnClothing = 'https://res.cloudinary.com/trapintrovert/image/upload/v1600441138/crwn-clothing.png';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1'),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "portfolio__heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "Work"), __jsx("h5", {
    className: "portfolio__sub-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Filter Project"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "info",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '4'
    }),
    onClick: function onClick() {
      toggle('4');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, "All")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "info",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '1'
    }),
    onClick: function onClick() {
      toggle('1');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "Html, CSS & Bootstrap")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "info",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '2'
    }),
    onClick: function onClick() {
      toggle('2');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "Wordpress")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "info",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '3'
    }),
    onClick: function onClick() {
      toggle('3');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "React & Node"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    className: "mag-top",
    activeTab: activeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: heritage,
    alt: "Heritage Apparel",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 45
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 45
    }
  }, "Heritage Apparel", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.heritageapparels.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 96
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: meyoapp,
    alt: "Meyo app",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, "Meyo App", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.meyoapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 83
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: atlandfoods,
    alt: "Atland Foods",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, "AtlandFoods", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.meyoapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 83
    }
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: aelustre,
    alt: "aelustre",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 41
    }
  }, "AelustreNg", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://aelustre.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 80
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: hillory,
    alt: "hillorylogistics",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, "Hillory Logistics", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://hillorylogistics.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 88
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: sugar,
    alt: "Sugarstreet",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }, "Sugar Street", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://sugarstreetng.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 85
    }
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: crwnClothing,
    alt: "Crwn Clothing",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }, "Crwn Clothing", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://crwn-commerce-live.herokuapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 100
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: chatfood,
    alt: "Chatfood ",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, "Chatfood AMS", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://immense-cove-06725.herokuapp.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 95
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: oguntech,
    alt: "Oguntech",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 37
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, "Ogun Tech", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://oguntechwebsite.herokuapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 93
    }
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: heritage,
    alt: "Heritage Apparel",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 37
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 37
    }
  }, "Heritage Apparel", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.heritageapparels.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 88
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: meyoapp,
    alt: "Meyo app",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 33
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, "Meyo App", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.meyoapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 75
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: atlandfoods,
    alt: "Atland Foods",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 33
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 33
    }
  }, "AtlandFoods", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.meyoapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 75
    }
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: aelustre,
    alt: "aelustre",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 41
    }
  }, "AelustreNg", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://aelustre.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 80
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: hillory,
    alt: "hillorylogistics",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 41
    }
  }, "Hillory Logistics", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://hillorylogistics.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 88
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: sugar,
    alt: "Sugarstreet",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 41
    }
  }, "Sugar Street", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://sugarstreetng.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 85
    }
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: crwnClothing,
    alt: "Crwn Clothing",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 41
    }
  }, "Crwn Clothing", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://crwn-commerce-live.herokuapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 100
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: chatfood,
    alt: "Chatfood ",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 37
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 37
    }
  }, "Chatfood AMS", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://immense-cove-06725.herokuapp.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 95
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: oguntech,
    alt: "Oguntech",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 37
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 37
    }
  }, "Ogun Tech", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://oguntechwebsite.herokuapp.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 93
    }
  })))))))))))));
};

_s(portfolio, "BE9kdjGAtFUkGbzn/t+3EN/WAWQ=");

/* harmony default export */ __webpack_exports__["default"] = (portfolio);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbInBvcnRmb2xpbyIsImFlbHVzdHJlIiwiaGlsbG9yeSIsInN1Z2FyIiwiaGVyaXRhZ2UiLCJtZXlvYXBwIiwiYXRsYW5kZm9vZHMiLCJvZ3VudGVjaCIsImNoYXRmb29kIiwiY3J3bkNsb3RoaW5nIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGUiLCJ0YWIiLCJjbGFzc25hbWVzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxnRkFBakI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsd0ZBQWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLG1GQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHdGQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBRywrRUFBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsbUZBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLGdGQUFqQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxnRkFBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUcscUZBQXJCOztBQVZvQixrQkFZY0Msc0RBQVEsQ0FBQyxHQUFELENBWnRCO0FBQUEsTUFZYkMsU0FaYTtBQUFBLE1BWUZDLFlBWkU7O0FBY3BCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEdBQUcsRUFBSTtBQUNwQixRQUFHSCxTQUFTLEtBQUtHLEdBQWpCLEVBQXNCRixZQUFZLENBQUNFLEdBQUQsQ0FBWjtBQUN2QixHQUZEOztBQUlBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFB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LG9CQUFiO0FBQWtDLG1CQUFZLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBcEQsQ0FGSixDQUZKLENBREEsQ0FwQkosQ0E3REEsQ0FqR0osQ0F2Q0osQ0FEQSxDQVBKLENBREosQ0FESixDQURKO0FBdVBILENBelFEOztHQUFNUCxTOztBQTJRU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjdkZDgzMzczYzEwZDI1ODIwNDI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgeyBUYWJDb250ZW50LCBUYWJQYW5lLCBOYXYsIE5hdkl0ZW0sIENhcmQsIEJ1dHRvbiwgQ2FyZFRpdGxlLCBDYXJkVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuXHJcblxyXG5jb25zdCBwb3J0Zm9saW8gPSAoKSA9PiB7XHJcbiAgICAvL0ltYWdlc1xyXG4gICAgY29uc3QgYWVsdXN0cmUgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdHJhcGludHJvdmVydC9pbWFnZS91cGxvYWQvdjE2MDA0NDExNDkvYWVsdXN0cmUucG5nJztcclxuICAgIGNvbnN0IGhpbGxvcnkgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdHJhcGludHJvdmVydC9pbWFnZS91cGxvYWQvdjE2MDA0NDExNTgvaGlsbG9yeWxvZ2lzdGljcy5wbmcnO1xyXG4gICAgY29uc3Qgc3VnYXIgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdHJhcGludHJvdmVydC9pbWFnZS91cGxvYWQvdjE2MDA0NDExNTMvc3VnYXJzdHJlZXQucG5nJztcclxuICAgIGNvbnN0IGhlcml0YWdlID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3RyYXBpbnRyb3ZlcnQvaW1hZ2UvdXBsb2FkL3YxNjAwNDQxMTUzL2hlcml0YWdlYXBwYXJlbHMucG5nJztcclxuICAgIGNvbnN0IG1leW9hcHAgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdHJhcGludHJvdmVydC9pbWFnZS91cGxvYWQvdjE2MDA0NDExMzAvbWV5b2FwcC5wbmcnO1xyXG4gICAgY29uc3QgYXRsYW5kZm9vZHMgPSAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdHJhcGludHJvdmVydC9pbWFnZS91cGxvYWQvdjE2MDA0NDExNTIvYXRsYW5kZm9vZHMucG5nJztcclxuICAgIGNvbnN0IG9ndW50ZWNoID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3RyYXBpbnRyb3ZlcnQvaW1hZ2UvdXBsb2FkL3YxNjAwNDQxMTI4L29ndW50ZWNoLnBuZyc7XHJcbiAgICBjb25zdCBjaGF0Zm9vZCA9ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS90cmFwaW50cm92ZXJ0L2ltYWdlL3VwbG9hZC92MTYwMDQ0MTEzOC9jaGF0Zm9vZC5wbmcnO1xyXG4gICAgY29uc3QgY3J3bkNsb3RoaW5nID0gJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3RyYXBpbnRyb3ZlcnQvaW1hZ2UvdXBsb2FkL3YxNjAwNDQxMTM4L2Nyd24tY2xvdGhpbmcucG5nJztcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSB0YWIgPT4ge1xyXG4gICAgICBpZihhY3RpdmVUYWIgIT09IHRhYikgc2V0QWN0aXZlVGFiKHRhYik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBvcnRmb2xpb19faGVhZGluZ1wiPldvcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBvcnRmb2xpb19fc3ViLWhlYWRpbmdcIj5GaWx0ZXIgUHJvamVjdDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiB0YWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0naW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICc0JyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJzQnKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2luZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcxJyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMScpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh0bWwsIENTUyAmIEJvb3RzdHJhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdpbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzInIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMicpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV29yZHByZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdpbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzMnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMycpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QgJiBOb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBjbGFzc05hbWU9XCJtYWctdG9wXCIgYWN0aXZlVGFiPXthY3RpdmVUYWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiSWQ9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hlcml0YWdlfSBhbHQ9XCJIZXJpdGFnZSBBcHBhcmVsXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlcml0YWdlIEFwcGFyZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5oZXJpdGFnZWFwcGFyZWxzLmNvbS9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttZXlvYXBwfSBhbHQ9XCJNZXlvIGFwcFwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV5byBBcHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubWV5b2FwcC5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdGxhbmRmb29kc30gYWx0PVwiQXRsYW5kIEZvb2RzXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0bGFuZEZvb2RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lm1leW9hcHAuY29tL1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2FlbHVzdHJlfSBhbHQ9XCJhZWx1c3RyZVwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWVsdXN0cmVOZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2FlbHVzdHJlLmNvbS9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hpbGxvcnl9IGFsdD1cImhpbGxvcnlsb2dpc3RpY3NcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpbGxvcnkgTG9naXN0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vaGlsbG9yeWxvZ2lzdGljcy5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdWdhcn0gYWx0PVwiU3VnYXJzdHJlZXRcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Z2FyIFN0cmVldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3N1Z2Fyc3RyZWV0bmcuY29tL1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcnduQ2xvdGhpbmd9IGFsdD1cIkNyd24gQ2xvdGhpbmdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyd24gQ2xvdGhpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9jcnduLWNvbW1lcmNlLWxpdmUuaGVyb2t1YXBwLmNvbS9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGF0Zm9vZH0gYWx0PVwiQ2hhdGZvb2QgXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhdGZvb2QgQU1TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbW1lbnNlLWNvdmUtMDY3MjUuaGVyb2t1YXBwLmNvbVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvZ3VudGVjaH0gYWx0PVwiT2d1bnRlY2hcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ndW4gVGVjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vb2d1bnRlY2h3ZWJzaXRlLmhlcm9rdWFwcC5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtoZXJpdGFnZX0gYWx0PVwiSGVyaXRhZ2UgQXBwYXJlbFwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlcml0YWdlIEFwcGFyZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaGVyaXRhZ2VhcHBhcmVscy5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21leW9hcHB9IGFsdD1cIk1leW8gYXBwXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1leW8gQXBwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5tZXlvYXBwLmNvbS9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdGxhbmRmb29kc30gYWx0PVwiQXRsYW5kIEZvb2RzXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRsYW5kRm9vZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lm1leW9hcHAuY29tL1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWVsdXN0cmV9IGFsdD1cImFlbHVzdHJlXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZWx1c3RyZU5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vYWVsdXN0cmUuY29tL1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aGlsbG9yeX0gYWx0PVwiaGlsbG9yeWxvZ2lzdGljc1wiIGNsYXNzTmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlsbG9yeSBMb2dpc3RpY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9oaWxsb3J5bG9naXN0aWNzLmNvbS9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N1Z2FyfSBhbHQ9XCJTdWdhcnN0cmVldFwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VnYXIgU3RyZWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vc3VnYXJzdHJlZXRuZy5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjcnduQ2xvdGhpbmd9IGFsdD1cIkNyd24gQ2xvdGhpbmdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyd24gQ2xvdGhpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9jcnduLWNvbW1lcmNlLWxpdmUuaGVyb2t1YXBwLmNvbS9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGF0Zm9vZH0gYWx0PVwiQ2hhdGZvb2QgXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhdGZvb2QgQU1TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbW1lbnNlLWNvdmUtMDY3MjUuaGVyb2t1YXBwLmNvbVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvZ3VudGVjaH0gYWx0PVwiT2d1bnRlY2hcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ndW4gVGVjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vb2d1bnRlY2h3ZWJzaXRlLmhlcm9rdWFwcC5jb20vXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcnRmb2xpb1xyXG4iXSwic291cmNlUm9vdCI6IiJ9