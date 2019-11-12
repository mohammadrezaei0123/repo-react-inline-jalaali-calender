"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InlineCalender.css");

var _MonthCalender$defaul;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MonthCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MonthCalender, _React$Component);

  function MonthCalender(props) {
    var _this;

    _classCallCheck(this, MonthCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthCalender).call(this, props));
    _this.state = {
      selectedMonthName: "",
      totalMainRow: _this.props.isThreeRow ? 3 : 4,
      totalMainCol: _this.props.isThreeRow ? 4 : 3,
      moveAction: {
        action: "",
        step: 1,
        useJump: false,
        jump: {}
      },
      monthHeader: {
        1: "فروردین",
        2: "اردیبهشت",
        3: "خرداد",
        4: "تیر",
        5: "مرداد",
        6: "شهریور",
        7: "مهر",
        8: "آبان",
        9: "آذر",
        10: "دی",
        11: "بهمن",
        12: "اسفند"
      },
      defFormat: "jYYYY-jM-",
      startDayMoment: null,
      changeAnim: true,
      currYear: "",
      today: "",
      todayDay: 1,
      todayMonth: "",
      todayYear: "",
      selectedYear: "",
      selectedMonth: "",
      selectedDay: "",
      currMonth: "",
      momentObject: null,
      sDay: 0,
      inputValue: "",
      lastSelectedNode: null,
      lastSelectedNodeClass: ""
    };
    _this.styleCellCal1 = _this.styleCellCal1.bind(_assertThisInitialized(_this));
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized(_this));
    _this.perMonth = _this.perMonth.bind(_assertThisInitialized(_this));
    _this.selecValues = _this.selecValues.bind(_assertThisInitialized(_this));
    _this.goToday = _this.goToday.bind(_assertThisInitialized(_this));
    _this.setDater = _this.setDater.bind(_assertThisInitialized(_this));
    _this.conv = _this.conv.bind(_assertThisInitialized(_this));
    _this.convertEnToFaDig = _this.convertEnToFaDig.bind(_assertThisInitialized(_this));
    _this.setStators = _this.setStators.bind(_assertThisInitialized(_this));
    _this.watchMoveAction = _this.watchMoveAction.bind(_assertThisInitialized(_this));
    _this.styleStter = _this.styleStter.bind(_assertThisInitialized(_this));
    _this.clearStter = _this.clearStter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MonthCalender, [{
    key: "setStators",
    value: function setStators(newVal) {
      var actionMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var paramAc = arguments.length > 2 ? arguments[2] : undefined;
      this.setState(function () {
        return _objectSpread({}, newVal);
      }, function () {
        if (actionMethod !== null) {
          actionMethod(paramAc);
        }
      });
    }
  }, {
    key: "mCreator",
    value: function mCreator(styleH, statttt) {
      var _this2 = this;

      var parentNode = [];

      var _loop = function _loop(j) {
        var innerNode = [];

        var _loop2 = function _loop2(i) {
          innerNode.push(_react.default.createElement("div", {
            className: "col position-relative",
            key: 'h' + i
          }, _react.default.createElement("div", {
            onClick: function onClick($event) {
              return _this2.selecValues((j - 1) * _this2.state.totalMainCol + i, $event);
            },
            className: "ratio-child",
            key: i + 'ggg',
            style: _objectSpread({}, _this2.styleCellCal1((j - 1) * _this2.state.totalMainCol + i), {}, _this2.props.calenderCellWithTextStyle)
          }, _react.default.createElement("div", {
            className: "d-flex justify-content-center align-items-center h-100 w-100"
          }, _this2.convertEnToFaDig(_this2.state.monthHeader[(j - 1) * _this2.state.totalMainCol + i])))));
        };

        for (var i = 1; i <= _this2.state.totalMainCol; i++) {
          _loop2(i);
        }

        parentNode.push(_react.default.createElement("div", {
          className: "row no-gutters flex-nowrap",
          key: 'jj' + j,
          style: _objectSpread({}, _this2.props.rowCalenderStyle, {}, styleH)
        }, innerNode));
      };

      for (var j = 1; j <= this.state.totalMainRow; j++) {
        _loop(j);
      }

      return parentNode;
    }
  }, {
    key: "watchMoveAction",
    value: function watchMoveAction(val) {
      if (_typeof(val) === "object" && val !== null && typeof val.action !== "undefined" && val.action !== null && (typeof val.useJump === "undefined" || val.useJump === null || !val.useJump)) {
        var v = val.action.toLowerCase();

        if (v == "n" || v == "ne" || v == "nex" || v == "next" || v.indexOf("n") == 0 || v.indexOf("ne") == 0 || v.indexOf("nex") == 0 || v.indexOf("next") == 0) {
          this.nextMonth();
          this.setStators({
            moveAction: val
          });
        } else if (v == "previous" || v == "previou" || v == "previo" || v == "previ" || v == "prev" || v == "pre" || v == "pr" || v == "p" || v.indexOf("previous") == 0 || v.indexOf("previou") == 0 || v.indexOf("previo") == 0 || v.indexOf("previ") == 0 || v.indexOf("prev") == 0 || v.indexOf("pre") == 0 || v.indexOf("pr") == 0 || v.indexOf("p") == 0) {
          this.perMonth();
          this.setStators({
            moveAction: val
          });
        } else if (v == "today" || v == "toda" || v == "tod" || v == "to" || v == "t" || v.indexOf("today") == 0 || v.indexOf("toda") == 0 || v.indexOf("tod") == 0 || v.indexOf("to") == 0 || v.indexOf("t") == 0) {
          this.goToday();
          this.setStators({
            moveAction: val
          });
        }
      } else {
        if (typeof val.useJump !== "undefined" && val.useJump !== null && val.useJump && _typeof(val.jump) === "object" && val.jump !== null) {
          var momentObject = this.state.momentObject;

          if (typeof val.jump.year !== "undefined" && val.jump.year !== null) {
            momentObject.add(val.jump.year, "jYear");
          }

          if (typeof val.jump.month !== "undefined" && val.jump.month !== null) {
            momentObject.add(val.jump.month, "jMonth");
          }

          if (typeof val.jump.day !== "undefined" && val.jump.day !== null) {
            momentObject.add(val.jump.day, "day");
          }

          this.setStators({
            moveAction: val,
            momentObject: momentObject
          }, this.changeMonth, false);
        }
      }
    }
  }, {
    key: "convertEnToFaDig",
    value: function convertEnToFaDig(val) {
      var text = val + "";

      if (text.length == 0) {
        return "";
      }

      var ns = "۰۱۲۳۴۵۶۷۸۹";
      var out = "";
      var length = text.length;

      for (var i = 0; i < length; i++) {
        var c = text.charAt(i);
        var nump = parseInt(c);

        if (nump >= 0) {
          out += ns.charAt(nump);
        } else {
          out += c;
        }
      }

      return out;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var momentObject = (0, _momentJalaali.default)();
      var today = this.conv(momentObject.format("YYYY-M-D"));
      var defFormat = momentObject.format("jYYYY/jM/");
      var todayDay = parseInt(this.conv(momentObject.format("jD")));
      var todayMonth = this.conv(momentObject.format("jM"));
      var todayYear = momentObject.format("jYYYY");

      if (typeof this.props.value !== "undefined" && this.props.value.length > 0) {
        var text = this.props.value;
        var ns = "۰۱۲۳۴۵۶۷۸۹";
        var out = "";
        var length = text.length;

        for (var i = 0; i < length; i++) {
          var c = ns.indexOf(text.charAt(i));
          var nump = parseInt(c);

          if (nump >= 0) {
            out += c;
          } else {
            out += text.charAt(i);
          }
        }

        var ddd = (0, _momentJalaali.default)();
        ddd.jYear(parseInt(out));
        momentObject = ddd;
        var selectedMonth = this.conv(ddd.format("jM"));
        var selectedMonthName = this.state.monthHeader[selectedMonth];
        var selectedYear = ddd.format("jYYYY");
        var selectedDay = ddd.format("jD");
        this.setStators({
          selectedMonthName: selectedMonthName,
          selectedMonth: selectedMonth,
          selectedYear: selectedYear,
          selectedDay: selectedDay
        });
        momentObject = ddd;
      }

      if (typeof this.props.defYear !== "undefined" && this.props.defYear + "".length > 0 && !!parseInt(this.props.defYear) && parseInt(this.props.defYear) >= 0) {
        momentObject.jYear(parseInt(this.props.defYear));
        this.setStators({
          currYear: momentObject.format("jYYYY")
        });
        this.props.getCurrentYear(momentObject.format("jYYYY"));
      }

      if (typeof this.props.defMonth !== "undefined" && this.props.defMonth + "".length > 0 && !!parseInt(this.props.defMonth) && parseInt(this.props.defMonth) >= 0) {
        momentObject.jMonth(parseInt(this.props.defMonth - 1));
        this.setStators({
          currMonth: this.conv(momentObject.format("jM"))
        });
      }

      this.setStators({
        momentObject: momentObject,
        today: today,
        defFormat: defFormat,
        todayDay: todayDay,
        todayMonth: todayMonth,
        todayYear: todayYear
      }, this.changeMonth, true);
    }
  }, {
    key: "styleCellCal1",
    value: function styleCellCal1(index) {
      if (this.state.selectedYear == this.conv(this.state.currYear) && index == this.state.selectedMonth && index != this.state.todayMonth) {
        return this.props.selectStyle;
      } else {
        if (this.state.currYear == this.state.todayYear) {
          if (index == this.state.todayMonth) {
            return this.props.todayStyle;
          } else if (index > parseInt(this.state.todayMonth)) {
            return this.props.afterTodayStyle;
          } else {
            return this.props.beforeTodayStyle;
          }
        } else if (this.state.currYear < this.state.todayYear) {
          return this.props.beforeTodayStyle;
        } else {
          return this.props.afterTodayStyle;
        }
      }
    }
  }, {
    key: "changeMonth",
    value: function changeMonth() {
      var isMounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!isMounted) {
        this.setStators({
          changeAnim: false
        });
        var self = this;
        setTimeout(function () {
          self.setStators({
            changeAnim: true
          });
        }, 500);

        if (this.state.lastSelectedNode != null) {
          this.clearStter(this.state.lastSelectedNode);

          if (this.state.selectedYear == this.state.momentObject.format("jYYYY") && this.state.selectedMonthName == this.state.monthHeader[this.conv(this.state.momentObject.format("jM"))]) {
            this.styleStter(this.state.lastSelectedNode, _objectSpread({}, this.props.selectStyle));
          } else {
            this.clearStter(this.state.lastSelectedNode);
          }
        }
      }

      var momentObject = this.state.momentObject;
      momentObject.startOf("jMonth");
      var startDayMoment = momentObject;
      momentObject.endOf("jMonth");
      var currMonth = this.conv(momentObject.format("jM"));
      var currYear = momentObject.format("jYYYY");
      this.setState({
        momentObject: momentObject,
        startDayMoment: startDayMoment,
        currMonth: currMonth,
        currYear: currYear
      });
      this.props.getCurrentYear(currYear);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(1, "jYear");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(-1, "jYear");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "styleStter",
    value: function styleStter(e) {
      var ob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objectSpread({}, this.props.selectStyle);
      Object.keys(ob).forEach(function (v) {
        e.style[v] = ob[v];
      });
    }
  }, {
    key: "clearStter",
    value: function clearStter(e) {
      Object.keys(this.props.selectStyle).forEach(function (v) {
        e.style[v] = '';
      });
    }
  }, {
    key: "selecValues",
    value: function selecValues(index, e) {
      var lastSelectedNode = e.target;

      if (this.state.lastSelectedNode == null) {
        var inputValue = this.state.startDayMoment.startOf("jMonth").add(index - 1, "day").format(this.props.customFormat);
        var selectedMonth = this.conv(this.state.startDayMoment.format("jM"));
        var selectedMonthName = this.state.monthHeader[selectedMonth];
        var selectedYear = this.state.startDayMoment.format("jYYYY");
        var selectedDay = this.state.startDayMoment.format("jD");
        inputValue = this.conv(selectedYear) + "-" + index;
        this.props.sYear(this.conv(selectedYear));
        this.props.sMonth(index);
        this.setStators({
          selectedMonthName: selectedMonthName,
          lastSelectedNode: lastSelectedNode,
          inputValue: inputValue,
          selectedMonth: selectedMonth,
          selectedYear: selectedYear,
          selectedDay: selectedDay
        }, this.props.input, inputValue);
      } else {
        this.clearStter(this.state.lastSelectedNode);

        var _inputValue = this.state.startDayMoment.startOf("jMonth").add(index - 1, "day").format(this.props.customFormat);

        var _selectedMonth = this.conv(this.state.startDayMoment.format("jM"));

        var _selectedMonthName = this.state.monthHeader[_selectedMonth];

        var _selectedYear = this.state.startDayMoment.format("jYYYY");

        var _selectedDay = this.state.startDayMoment.format("jD");

        _inputValue = this.conv(_selectedYear) + "-" + index;
        this.props.sYear(this.conv(_selectedYear));
        this.props.sMonth(index);
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          selectedMonthName: _selectedMonthName,
          inputValue: _inputValue,
          selectedMonth: _selectedMonth,
          selectedYear: _selectedYear,
          selectedDay: _selectedDay
        }, this.props.input, _inputValue);
      }

      this.styleStter(lastSelectedNode, _objectSpread({}, this.props.selectStyle));
    }
  }, {
    key: "goToday",
    value: function goToday() {
      var momentObject = (0, _momentJalaali.default)();
      this.setStators({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "setDater",
    value: function setDater() {
      this.sDay = this.sDay + 1;
      return this.sDay;
    }
  }, {
    key: "conv",
    value: function conv(val) {
      var text = val + "";

      if (text.length == 0) {
        return "";
      }

      var ns = "۰۱۲۳۴۵۶۷۸۹";
      var out = "";
      var length = text.length;

      for (var i = 0; i < length; i++) {
        var c = text.charAt(i);
        var nump = ns.indexOf(c + "");

        if (nump >= 0) {
          out += nump;
        } else {
          out += c;
        }
      }

      return out;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // You don't have to do this check first, but it can help prevent an unneeded render
      if (this.state.moveAction !== nextProps.moveAction) {
        this.watchMoveAction(nextProps.moveAction);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.useRaitoSizing) {
        return _react.default.createElement("div", {
          className: "ratio-parent my-font-calender"
        }, _react.default.createElement("div", {
          className: "ratio-child"
        }, _react.default.createElement("div", {
          className: "container-fluid w-100 h-100",
          style: this.props.mainBodyStyle
        }, this.props.showTitle && _react.default.createElement("div", {
          className: "row no-gutters",
          style: _objectSpread({}, this.props.titleStyle, {}, {
            "height": this.props.raitoTitle * 10 + '%'
          })
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center align-items-center w-100 h-100"
        }, _react.default.createElement("div", {
          className: "btn btn-small",
          style: {
            cursor: "pointer"
          },
          onClick: this.perMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowLeftStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M20 30 L8 16 20 2"
        }))), _react.default.createElement("div", {
          className: "d-flex justify-content-around",
          onClick: function onClick() {
            return _this3.props.clickTitle();
          },
          style: _objectSpread({}, {
            minWidth: '20%'
          }, {}, this.props.clickableStyle)
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.currYear))), _react.default.createElement("div", {
          className: "btn btn-small danger",
          style: {
            cursor: "pointer"
          },
          onClick: this.nextMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-right",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowRightStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M12 30 L24 16 12 2"
        }))))), this.mCreator({
          height: this.props.raitoBody / this.state.totalMainRow * 10 + '%'
        }), this.props.showFooter && _react.default.createElement("div", {
          className: "row no-gutters",
          style: _objectSpread({}, this.props.footerStyle, {}, {
            height: this.props.raitoFooter * 10 + '%'
          })
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center w-100"
        }, this.props.showButtonToday && _react.default.createElement("div", {
          className: "btn btn-small justify-content-center align-items-center",
          style: _objectSpread({}, this.props.todayButtonStyle, {}, {
            cursor: 'pointer'
          }),
          onClick: this.goToday
        }, this.convertEnToFaDig(this.props.todayButtonTitle)), this.props.showSelectedValue && _react.default.createElement("div", {
          style: this.props.showSelectedValueStyle
        }, this.convertEnToFaDig(this.state.inputValue)))))));
      } else {
        return _react.default.createElement("div", {
          className: "container-fluid my-font-calender",
          style: this.props.mainBodyStyle
        }, this.props.showTitle && _react.default.createElement("div", {
          className: "row no-gutters",
          style: this.props.titleStyle
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center align-items-center w-100 h-100"
        }, _react.default.createElement("div", {
          className: "btn btn-small",
          style: {
            cursor: "pointer"
          },
          onClick: this.perMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowLeftStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M20 30 L8 16 20 2"
        }))), _react.default.createElement("div", {
          className: "d-flex justify-content-around",
          onClick: function onClick() {
            return _this3.props.clickTitle();
          },
          style: _objectSpread({}, {
            minWidth: '20%'
          }, {}, this.props.clickableStyle)
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.currYear))), _react.default.createElement("div", {
          className: "btn btn-small danger",
          style: {
            cursor: "pointer"
          },
          onClick: this.nextMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-right",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowRightStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M12 30 L24 16 12 2"
        }))))), this.mCreator({}), this.props.showFooter && _react.default.createElement("div", {
          className: "row no-gutters",
          style: this.props.footerStyle
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center w-100"
        }, this.props.showButtonToday && _react.default.createElement("div", {
          className: "btn btn-small justify-content-center align-items-center",
          style: _objectSpread({}, this.props.todayButtonStyle, {}, {
            cursor: 'pointer'
          }),
          onClick: this.goToday
        }, this.convertEnToFaDig(this.props.todayButtonTitle)), this.props.showSelectedValue && _react.default.createElement("div", {
          style: this.props.showSelectedValueStyle
        }, this.convertEnToFaDig(this.state.inputValue)))));
      }
    }
  }]);

  return MonthCalender;
}(_react.default.Component);

MonthCalender.propTypes = {
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defMonth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  input: _propTypes.default.func,
  getCurrentYear: _propTypes.default.func,
  sYear: _propTypes.default.func,
  sMonth: _propTypes.default.func,
  clickTitle: _propTypes.default.func,
  actionStep: _propTypes.default.number,
  moveAction: _propTypes.default.object,
  isThreeRow: _propTypes.default.bool,
  value: _propTypes.default.string,
  selectedClassName: _propTypes.default.string,
  todayStyle: _propTypes.default.object,
  afterTodayStyle: _propTypes.default.object,
  beforeTodayStyle: _propTypes.default.object,
  selectStyle: _propTypes.default.object,
  calenderCellBodyStyle: _propTypes.default.object,
  calenderCellWithTextStyle: _propTypes.default.object,
  calenderCellNoTextStyle: _propTypes.default.object,
  rowCalenderItemStyle: _propTypes.default.object,
  rowCalenderStyle: _propTypes.default.object,
  headerCalenderItemStyle: _propTypes.default.object,
  mainBodyStyle: _propTypes.default.object,
  arrowRightStyle: _propTypes.default.object,
  arrowLeftStyle: _propTypes.default.object,
  clickableStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  headerCalenderStyle: _propTypes.default.object,
  footerStyle: _propTypes.default.object,
  todayButtonStyle: _propTypes.default.object,
  showSelectedValueStyle: _propTypes.default.object,
  customFormat: _propTypes.default.string,
  useRaitoSizing: _propTypes.default.bool,
  raitoTitle: _propTypes.default.number,
  raitoTableHedear: _propTypes.default.number,
  raitoBody: _propTypes.default.number,
  raitoFooter: _propTypes.default.number,
  showTitle: _propTypes.default.bool,
  showFooter: _propTypes.default.bool,
  showButtonToday: _propTypes.default.bool,
  showSelectedValue: _propTypes.default.bool,
  calenderItemAnim: _propTypes.default.string,
  monthAnim: _propTypes.default.string,
  todayButtonTitle: _propTypes.default.string
};
MonthCalender.defaultProps = (_MonthCalender$defaul = {
  input: function input(val) {},
  getCurrentYear: function getCurrentYear(val) {},
  sYear: function sYear(val) {},
  sMonth: function sMonth(val) {}
}, _defineProperty(_MonthCalender$defaul, "getCurrentYear", function getCurrentYear(val) {}), _defineProperty(_MonthCalender$defaul, "clickTitle", function clickTitle() {}), _defineProperty(_MonthCalender$defaul, "defYear", ""), _defineProperty(_MonthCalender$defaul, "defMonth", ""), _defineProperty(_MonthCalender$defaul, "actionStep", 1), _defineProperty(_MonthCalender$defaul, "moveAction", {
  action: "",
  step: 1,
  useJump: false,
  jump: {}
}), _defineProperty(_MonthCalender$defaul, "isThreeRow", false), _defineProperty(_MonthCalender$defaul, "value", ""), _defineProperty(_MonthCalender$defaul, "selectedClassName", "selected"), _defineProperty(_MonthCalender$defaul, "todayStyle", {
  color: "#e84545",
  background: "#00adb5",
  boxShadow: "0 0 5px #e84545",
  transition: " all 1s"
}), _defineProperty(_MonthCalender$defaul, "afterTodayStyle", {
  color: "#eeeeee",
  boxShadow: "inset 0 0 10px #eeeeee",
  background: "#222831",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "beforeTodayStyle", {
  background: "#eeeeee",
  boxShadow: "inset 0 0 10px #222831",
  color: "#222831",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "selectStyle", {
  background: "orangered",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "calenderCellBodyStyle", {}), _defineProperty(_MonthCalender$defaul, "calenderCellWithTextStyle", {
  // borderRadius: "50%",
  userSelect: "none",
  margin: "2px",
  "WebkitUserSelect": "none",
  "MozUserSelect": "none",
  "msUserSelect": "none",
  cursor: "pointer",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "calenderCellNoTextStyle", {
  background: "#000",
  color: "#fff",
  margin: "auto"
}), _defineProperty(_MonthCalender$defaul, "rowCalenderItemStyle", {}), _defineProperty(_MonthCalender$defaul, "rowCalenderStyle", {
  margin: "0 -14px"
}), _defineProperty(_MonthCalender$defaul, "headerCalenderItemStyle", {
  color: "#eeeeee",
  margin: "auto"
}), _defineProperty(_MonthCalender$defaul, "mainBodyStyle", {
  background: "#393e46",
  border: "2px solid #eee",
  borderRadius: "15px",
  padding: "15px"
}), _defineProperty(_MonthCalender$defaul, "arrowRightStyle", {
  color: "#eeeeee"
}), _defineProperty(_MonthCalender$defaul, "arrowLeftStyle", {
  color: "#eeeeee"
}), _defineProperty(_MonthCalender$defaul, "clickableStyle", {
  cursor: "pointer",
  userSelect: "none",
  "WebkitUserSelect": "none",
  "MozUserSelect": "none",
  "msUserSelect": "none"
}), _defineProperty(_MonthCalender$defaul, "titleStyle", {
  marginTop: "-10px",
  background: "#393e46",
  color: "#eeeeee"
}), _defineProperty(_MonthCalender$defaul, "headerCalenderStyle", {
  background: "#222831",
  margin: "0 -14px"
}), _defineProperty(_MonthCalender$defaul, "footerStyle", {
  marginTop: "14px"
}), _defineProperty(_MonthCalender$defaul, "todayButtonStyle", {
  color: "#eeeeee",
  outline: "none !important"
}), _defineProperty(_MonthCalender$defaul, "showSelectedValueStyle", {
  color: "#eeeeee",
  display: "flex",
  alignItems: "center"
}), _defineProperty(_MonthCalender$defaul, "customFormat", "jYYYY/jM/jD"), _defineProperty(_MonthCalender$defaul, "useRaitoSizing", true), _defineProperty(_MonthCalender$defaul, "raitoTitle", 1), _defineProperty(_MonthCalender$defaul, "raitoTableHedear", 1), _defineProperty(_MonthCalender$defaul, "raitoBody", 8), _defineProperty(_MonthCalender$defaul, "raitoFooter", 1), _defineProperty(_MonthCalender$defaul, "showTitle", true), _defineProperty(_MonthCalender$defaul, "showFooter", true), _defineProperty(_MonthCalender$defaul, "showButtonToday", true), _defineProperty(_MonthCalender$defaul, "showSelectedValue", true), _defineProperty(_MonthCalender$defaul, "calenderItemAnim", "slide-fade"), _defineProperty(_MonthCalender$defaul, "monthAnim", "fade"), _defineProperty(_MonthCalender$defaul, "todayButtonTitle", "ماه جاری"), _MonthCalender$defaul);
var _default = MonthCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvTW9udGhDYWxlbmRlci5qc3giXSwibmFtZXMiOlsiTW9udGhDYWxlbmRlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZE1vbnRoTmFtZSIsInRvdGFsTWFpblJvdyIsImlzVGhyZWVSb3ciLCJ0b3RhbE1haW5Db2wiLCJtb3ZlQWN0aW9uIiwiYWN0aW9uIiwic3RlcCIsInVzZUp1bXAiLCJqdW1wIiwibW9udGhIZWFkZXIiLCJkZWZGb3JtYXQiLCJzdGFydERheU1vbWVudCIsImNoYW5nZUFuaW0iLCJjdXJyWWVhciIsInRvZGF5IiwidG9kYXlEYXkiLCJ0b2RheU1vbnRoIiwidG9kYXlZZWFyIiwic2VsZWN0ZWRZZWFyIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkRGF5IiwiY3Vyck1vbnRoIiwibW9tZW50T2JqZWN0Iiwic0RheSIsImlucHV0VmFsdWUiLCJsYXN0U2VsZWN0ZWROb2RlIiwibGFzdFNlbGVjdGVkTm9kZUNsYXNzIiwic3R5bGVDZWxsQ2FsMSIsImJpbmQiLCJjaGFuZ2VNb250aCIsIm5leHRNb250aCIsInBlck1vbnRoIiwic2VsZWNWYWx1ZXMiLCJnb1RvZGF5Iiwic2V0RGF0ZXIiLCJjb252IiwiY29udmVydEVuVG9GYURpZyIsInNldFN0YXRvcnMiLCJ3YXRjaE1vdmVBY3Rpb24iLCJzdHlsZVN0dGVyIiwiY2xlYXJTdHRlciIsIm5ld1ZhbCIsImFjdGlvbk1ldGhvZCIsInBhcmFtQWMiLCJzZXRTdGF0ZSIsInN0eWxlSCIsInN0YXR0dHQiLCJwYXJlbnROb2RlIiwiaiIsImlubmVyTm9kZSIsImkiLCJwdXNoIiwiJGV2ZW50IiwiY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZSIsInJvd0NhbGVuZGVyU3R5bGUiLCJ2YWwiLCJ2IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwieWVhciIsImFkZCIsIm1vbnRoIiwiZGF5IiwidGV4dCIsImxlbmd0aCIsIm5zIiwib3V0IiwiYyIsImNoYXJBdCIsIm51bXAiLCJwYXJzZUludCIsImZvcm1hdCIsInZhbHVlIiwiZGRkIiwialllYXIiLCJkZWZZZWFyIiwiZ2V0Q3VycmVudFllYXIiLCJkZWZNb250aCIsImpNb250aCIsImluZGV4Iiwic2VsZWN0U3R5bGUiLCJ0b2RheVN0eWxlIiwiYWZ0ZXJUb2RheVN0eWxlIiwiYmVmb3JlVG9kYXlTdHlsZSIsImlzTW91bnRlZCIsInNlbGYiLCJzZXRUaW1lb3V0Iiwic3RhcnRPZiIsImVuZE9mIiwiZSIsIm9iIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInRhcmdldCIsImN1c3RvbUZvcm1hdCIsInNZZWFyIiwic01vbnRoIiwiaW5wdXQiLCJuZXh0UHJvcHMiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJzaG93VGl0bGUiLCJ0aXRsZVN0eWxlIiwicmFpdG9UaXRsZSIsImN1cnNvciIsImFycm93TGVmdFN0eWxlIiwiY2xpY2tUaXRsZSIsIm1pbldpZHRoIiwiY2xpY2thYmxlU3R5bGUiLCJhcnJvd1JpZ2h0U3R5bGUiLCJtQ3JlYXRvciIsImhlaWdodCIsInJhaXRvQm9keSIsInNob3dGb290ZXIiLCJmb290ZXJTdHlsZSIsInJhaXRvRm9vdGVyIiwic2hvd0J1dHRvblRvZGF5IiwidG9kYXlCdXR0b25TdHlsZSIsInRvZGF5QnV0dG9uVGl0bGUiLCJzaG93U2VsZWN0ZWRWYWx1ZSIsInNob3dTZWxlY3RlZFZhbHVlU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJhY3Rpb25TdGVwIiwib2JqZWN0IiwiYm9vbCIsInNlbGVjdGVkQ2xhc3NOYW1lIiwiY2FsZW5kZXJDZWxsQm9keVN0eWxlIiwiY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsImhlYWRlckNhbGVuZGVySXRlbVN0eWxlIiwiaGVhZGVyQ2FsZW5kZXJTdHlsZSIsInJhaXRvVGFibGVIZWRlYXIiLCJjYWxlbmRlckl0ZW1BbmltIiwibW9udGhBbmltIiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJtYXJnaW4iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwib3V0bGluZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHVGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFDLEVBRFA7QUFFWEMsTUFBQUEsWUFBWSxFQUFHLE1BQUtILEtBQUwsQ0FBV0ksVUFBWixHQUEwQixDQUExQixHQUE4QixDQUZqQztBQUdYQyxNQUFBQSxZQUFZLEVBQUcsTUFBS0wsS0FBTCxDQUFXSSxVQUFaLEdBQTBCLENBQTFCLEdBQThCLENBSGpDO0FBSVhFLE1BQUFBLFVBQVUsRUFBRTtBQUNWQyxRQUFBQSxNQUFNLEVBQUUsRUFERTtBQUVWQyxRQUFBQSxJQUFJLEVBQUUsQ0FGSTtBQUdWQyxRQUFBQSxPQUFPLEVBQUUsS0FIQztBQUlWQyxRQUFBQSxJQUFJLEVBQUU7QUFKSSxPQUpEO0FBVVhDLE1BQUFBLFdBQVcsRUFBRTtBQUNYLFdBQUcsU0FEUTtBQUVYLFdBQUcsVUFGUTtBQUdYLFdBQUcsT0FIUTtBQUlYLFdBQUcsS0FKUTtBQUtYLFdBQUcsT0FMUTtBQU1YLFdBQUcsUUFOUTtBQU9YLFdBQUcsS0FQUTtBQVFYLFdBQUcsTUFSUTtBQVNYLFdBQUcsS0FUUTtBQVVYLFlBQUksSUFWTztBQVdYLFlBQUksTUFYTztBQVlYLFlBQUk7QUFaTyxPQVZGO0FBd0JYQyxNQUFBQSxTQUFTLEVBQUUs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Qix5REF1R2U7QUFDWEksRUFBQUEsU0FBUyxFQUFFO0FBREEsQ0F2R2YsOERBMEdvQjtBQUNoQlQsRUFBQUEsS0FBSyxFQUFFLFNBRFM7QUFFaEJVLEVBQUFBLE9BQU8sRUFBRTtBQUZPLENBMUdwQixvRUE4RzBCO0FBQ3RCVixFQUFBQSxLQUFLLEVBQUUsU0FEZTtBQUV0QlcsRUFBQUEsT0FBTyxFQUFFLE1BRmE7QUFHdEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhVLENBOUcxQiwwREFtSGdCLGFBbkhoQiw0REFvSGtCLElBcEhsQix3REFxSGMsQ0FySGQsOERBc0hvQixDQXRIcEIsdURBdUhhLENBdkhiLHlEQXdIZSxDQXhIZix1REF5SGEsSUF6SGIsd0RBMEhjLElBMUhkLDZEQTJIbUIsSUEzSG5CLCtEQTRIcUIsSUE1SHJCLDhEQTZIb0IsWUE3SHBCLHVEQThIYSxNQTlIYiw4REErSG9CLFVBL0hwQjtlQW1JZS9KLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtamFsYWFsaVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAnLi9JbmxpbmVDYWxlbmRlci5jc3MnO1xyXG5cclxuY2xhc3MgTW9udGhDYWxlbmRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkTW9udGhOYW1lOlwiXCIsXHJcbiAgICAgIHRvdGFsTWFpblJvdzogKHRoaXMucHJvcHMuaXNUaHJlZVJvdykgPyAzIDogNCxcclxuICAgICAgdG90YWxNYWluQ29sOiAodGhpcy5wcm9wcy5pc1RocmVlUm93KSA/IDQgOiAzLFxyXG4gICAgICBtb3ZlQWN0aW9uOiB7XHJcbiAgICAgICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgdXNlSnVtcDogZmFsc2UsXHJcbiAgICAgICAganVtcDoge31cclxuICAgICAgfSxcclxuICAgICAgbW9udGhIZWFkZXI6IHtcclxuICAgICAgICAxOiBcItmB2LHZiNix2K/bjNmGXCIsXHJcbiAgICAgICAgMjogXCLYp9ix2K/bjNio2YfYtNiqXCIsXHJcbiAgICAgICAgMzogXCLYrtix2K/Yp9ivXCIsXHJcbiAgICAgICAgNDogXCLYqtuM2LFcIixcclxuICAgICAgICA1OiBcItmF2LHYr9in2K9cIixcclxuICAgICAgICA2OiBcIti02YfYsduM2YjYsVwiLFxyXG4gICAgICAgIDc6IFwi2YXZh9ixXCIsXHJcbiAgICAgICAgODogXCLYotio2KfZhlwiLFxyXG4gICAgICAgIDk6IFwi2KLYsNixXCIsXHJcbiAgICAgICAgMTA6IFwi2K/bjFwiLFxyXG4gICAgICAgIDExOiBcItio2YfZhdmGXCIsXHJcbiAgICAgICAgMTI6IFwi2KfYs9mB2YbYr1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZkZvcm1hdDogXCJqWVlZWS1qTS1cIixcclxuICAgICAgc3RhcnREYXlNb21lbnQ6IG51bGwsXHJcbiAgICAgIGNoYW5nZUFuaW06IHRydWUsXHJcbiAgICAgIGN1cnJZZWFyOiBcIlwiLFxyXG4gICAgICB0b2RheTogXCJcIixcclxuICAgICAgdG9kYXlEYXk6IDEsXHJcbiAgICAgIHRvZGF5TW9udGg6IFwiXCIsXHJcbiAgICAgIHRvZGF5WWVhcjogXCJcIixcclxuICAgICAgc2VsZWN0ZWRZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZE1vbnRoOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZERheTogXCJcIixcclxuICAgICAgY3Vyck1vbnRoOiBcIlwiLFxyXG4gICAgICBtb21lbnRPYmplY3Q6IG51bGwsXHJcbiAgICAgIHNEYXk6IDAsXHJcbiAgICAgIGlucHV0VmFsdWU6IFwiXCIsXHJcbiAgICAgIGxhc3RTZWxlY3RlZE5vZGU6IG51bGwsXHJcbiAgICAgIGxhc3RTZWxlY3RlZE5vZGVDbGFzczogXCJcIlxyXG4gICAgfTtcclxuICAgIHRoaXMuc3R5bGVDZWxsQ2FsMSA9IHRoaXMuc3R5bGVDZWxsQ2FsMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaGFuZ2VNb250aCA9IHRoaXMuY2hhbmdlTW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMubmV4dE1vbnRoID0gdGhpcy5uZXh0TW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGVyTW9udGggPSB0aGlzLnBlck1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlbGVjVmFsdWVzID0gdGhpcy5zZWxlY1ZhbHVlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nb1RvZGF5ID0gdGhpcy5nb1RvZGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldERhdGVyID0gdGhpcy5zZXREYXRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb252ID0gdGhpcy5jb252LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbnZlcnRFblRvRmFEaWcgPSB0aGlzLmNvbnZlcnRFblRvRmFEaWcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0U3RhdG9ycyA9IHRoaXMuc2V0U3RhdG9ycy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLndhdGNoTW92ZUFjdGlvbiA9IHRoaXMud2F0Y2hNb3ZlQWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3R5bGVTdHRlciA9IHRoaXMuc3R5bGVTdHRlci5iaW5kKHRoaXMpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNsZWFyU3R0ZXIgPSB0aGlzLmNsZWFyU3R0ZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgc2V0U3RhdG9ycyhuZXdWYWwsIGFjdGlvbk1ldGhvZCA9IG51bGwsIHBhcmFtQWMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5uZXdWYWxcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb25NZXRob2QgIT09IG51bGwpIHtcclxuICAgICAgICBhY3Rpb25NZXRob2QocGFyYW1BYylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgbUNyZWF0b3Ioc3R5bGVILCBzdGF0dHR0KSB7XHJcbiAgICBsZXQgcGFyZW50Tm9kZSA9IFtdXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdzsgaisrKSB7XHJcbiAgICAgIGxldCBpbm5lck5vZGUgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbDsgaSsrKSB7XHJcbiAgICAgICAgaW5uZXJOb2RlLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPVwiY2FsZW5kZXJJdGVtQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXMoKCgoaiAtIDEpICogdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpICsgaSksICRldmVudCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIlxyXG4gICAgICAgICAgICAgIGtleT17aSArICdnZ2cnfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0eWxlQ2VsbENhbDEoKChqIC0gMSkgKiB0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkgKyBpKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgID57XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICAgICAgICAgICAgICAgICgoaiAtIDEpICogdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpICsgaVxyXG4gICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmVudE5vZGUucHVzaCg8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZmxleC1ub3dyYXBcIlxyXG4gICAgICAgIGtleT17J2pqJyArIGp9XHJcbiAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgeyAuLi50aGlzLnByb3BzLnJvd0NhbGVuZGVyU3R5bGUsIC4uLnN0eWxlSCB9XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lubmVyTm9kZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50Tm9kZVxyXG4gIH1cclxuICB3YXRjaE1vdmVBY3Rpb24odmFsKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgdmFsICE9PSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiB2YWwuYWN0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHZhbC5hY3Rpb24gIT09IG51bGwgJiZcclxuICAgICAgKHR5cGVvZiB2YWwudXNlSnVtcCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgIHZhbC51c2VKdW1wID09PSBudWxsIHx8XHJcbiAgICAgICAgIXZhbC51c2VKdW1wKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB2ID0gdmFsLmFjdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdiA9PSBcIm5cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZVwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5leFwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5leHRcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5lXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZXhcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leHRcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLm5leHRNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwicHJldmlvdXNcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91XCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlvXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2XCIgfHxcclxuICAgICAgICB2ID09IFwicHJlXCIgfHxcclxuICAgICAgICB2ID09IFwicHJcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwXCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91c1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvdVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldlwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJlXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwclwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucGVyTW9udGgoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdiA9PSBcInRvZGF5XCIgfHxcclxuICAgICAgICB2ID09IFwidG9kYVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvZFwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvXCIgfHxcclxuICAgICAgICB2ID09IFwidFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYXlcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZGFcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmdvVG9kYXkoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlb2YgdmFsLnVzZUp1bXAgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICB2YWwudXNlSnVtcCAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICYmXHJcbiAgICAgICAgdHlwZW9mIHZhbC5qdW1wID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgdmFsLmp1bXAgIT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwuanVtcC55ZWFyICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLnllYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAueWVhciwgXCJqWWVhclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdHlwZW9mIHZhbC5qdW1wLm1vbnRoICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICB2YWwuanVtcC5tb250aCAhPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5tb250aCwgXCJqTW9udGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmp1bXAuZGF5ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLmRheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5kYXksIFwiZGF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICAgICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29udmVydEVuVG9GYURpZyh2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gcGFyc2VJbnQoYyk7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnMuY2hhckF0KG51bXApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dCArPSBjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSBtb21lbnQoKTtcclxuICAgIGxldCB0b2RheSA9IHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWS1NLURcIikpO1xyXG4gICAgbGV0IGRlZkZvcm1hdCA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWS9qTS9cIik7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBwYXJzZUludCh0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcImpEXCIpKSk7XHJcbiAgICBsZXQgdG9kYXlNb250aCA9IHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiak1cIikpXHJcbiAgICBsZXQgdG9kYXlZZWFyID0gbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgIHZhciBucyA9IFwi27Dbsduy27PbtNu127bbt9u427lcIjtcclxuICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gbnMuaW5kZXhPZih0ZXh0LmNoYXJBdChpKSk7XHJcbiAgICAgICAgbGV0IG51bXAgPSBwYXJzZUludChjKTtcclxuICAgICAgICBpZiAobnVtcCA+PSAwKSB7XHJcbiAgICAgICAgICBvdXQgKz0gYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3V0ICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICBsZXQgZGRkPW1vbWVudCgpXHJcbiAgIGRkZC5qWWVhcihwYXJzZUludChvdXQpKVxyXG4gICBtb21lbnRPYmplY3Q9ZGRkXHJcbiAgIFxyXG4gICAgICAgICBsZXQgc2VsZWN0ZWRNb250aD10aGlzLmNvbnYoZGRkLmZvcm1hdChcImpNXCIpKVxyXG4gICAgICAgICBsZXQgc2VsZWN0ZWRNb250aE5hbWUgPSAgdGhpcy5zdGF0ZS5tb250aEhlYWRlcltcclxuICAgICAgICAgIHNlbGVjdGVkTW9udGhcclxuICAgICAgIF07XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gZGRkLmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWREYXkgPSBkZGQuZm9ybWF0KFwiakRcIilcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZE1vbnRoTmFtZSxcclxuICAgICAgICBzZWxlY3RlZE1vbnRoLFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgICBzZWxlY3RlZERheSxcclxuICAgICAgfSlcclxuICAgICAgbW9tZW50T2JqZWN0ID0gZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuZGVmWWVhciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmRlZlllYXIgKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSAmJiBwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpID49IDApXHJcbiAgICApIHtcclxuICAgICAgbW9tZW50T2JqZWN0LmpZZWFyKHBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoeyBjdXJyWWVhcjogbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpIH0pXHJcbiAgICAgIFxyXG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50WWVhcihtb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVlcIikpXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmRlZk1vbnRoICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmTW9udGggKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCkgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCkgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3Quak1vbnRoKHBhcnNlSW50KHRoaXMucHJvcHMuZGVmTW9udGggLSAxKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgY3Vyck1vbnRoOiB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcImpNXCIpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgbW9tZW50T2JqZWN0LFxyXG4gICAgICB0b2RheSxcclxuICAgICAgZGVmRm9ybWF0LFxyXG4gICAgICB0b2RheURheSxcclxuICAgICAgdG9kYXlNb250aCxcclxuICAgICAgdG9kYXlZZWFyXHJcblxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgdHJ1ZSlcclxuICB9XHJcbiAgc3R5bGVDZWxsQ2FsMShpbmRleCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkWWVhciA9PSB0aGlzLmNvbnYodGhpcy5zdGF0ZS5jdXJyWWVhcikgJiZcclxuICAgICAgaW5kZXggPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoICYmXHJcbiAgICAgIGluZGV4IT10aGlzLnN0YXRlLnRvZGF5TW9udGhcclxuICAgICl7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFN0eWxlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc3RhdGUuY3VyclllYXIgPT0gdGhpcy5zdGF0ZS50b2RheVllYXIgXHJcbiAgICApIHtcclxuICAgICAgICBpZihpbmRleD09dGhpcy5zdGF0ZS50b2RheU1vbnRoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudG9kYXlTdHlsZTtcclxuICAgICAgICB9ZWxzZSBpZihpbmRleD5wYXJzZUludCh0aGlzLnN0YXRlLnRvZGF5TW9udGgpKXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmVmb3JlVG9kYXlTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VyclllYXIgPCB0aGlzLnN0YXRlLnRvZGF5WWVhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVUb2RheVN0eWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBcclxuICBjaGFuZ2VNb250aChpc01vdW50ZWQgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY2hhbmdlQW5pbTogZmFsc2UgfSlcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiB0cnVlIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIgPT0gXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKSAmJlxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoTmFtZSA9PVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5tb250aEhlYWRlcltcclxuICAgICAgICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUubW9tZW50T2JqZWN0LmZvcm1hdChcImpNXCIpKVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zdHlsZVN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSx7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0U3R5bGV9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJqTW9udGhcIik7XHJcbiAgICBsZXQgc3RhcnREYXlNb21lbnQgPSBtb21lbnRPYmplY3Q7XHJcbiAgICBtb21lbnRPYmplY3QuZW5kT2YoXCJqTW9udGhcIik7XHJcbiAgICBsZXQgY3Vyck1vbnRoID0gdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJqTVwiKSlcclxuXHJcblxyXG4gICAgbGV0IGN1cnJZZWFyID0gbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgc3RhcnREYXlNb21lbnQsXHJcbiAgICAgIGN1cnJNb250aCxcclxuICAgICAgY3VyclllYXJcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRZZWFyKGN1cnJZZWFyKVxyXG4gIH1cclxuICBuZXh0TW9udGgoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5hZGQoMSwgXCJqWWVhclwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgcGVyTW9udGgoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5hZGQoLTEsIFwialllYXJcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHN0eWxlU3R0ZXIoZSxvYj17XHJcbiAgICAuLi50aGlzLnByb3BzLnNlbGVjdFN0eWxlfSl7XHJcbiAgICBPYmplY3Qua2V5cyhvYikuZm9yRWFjaCh2PT57XHJcblxyXG4gICAgICBlLnN0eWxlW3ZdPW9iW3ZdXHJcbiAgICB9KVxyXG4gIH1cclxuICBjbGVhclN0dGVyKGUpe1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RTdHlsZSkuZm9yRWFjaCh2PT57XHJcbiAgICAgIGUuc3R5bGVbdl09JydcclxuICAgIH0pXHJcbiAgfVxyXG4gIHNlbGVjVmFsdWVzKGluZGV4LCBlKSB7XHJcbiAgICBsZXQgbGFzdFNlbGVjdGVkTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSA9PSBudWxsKSB7XHJcbiAgICAgIGxldCBpbnB1dFZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudFxyXG4gICAgICAgIC5zdGFydE9mKFwiak1vbnRoXCIpXHJcbiAgICAgICAgLmFkZChpbmRleCAtIDEsIFwiZGF5XCIpXHJcbiAgICAgICAgLmZvcm1hdCh0aGlzLnByb3BzLmN1c3RvbUZvcm1hdCk7XHJcbiAgICAgIGxldCBzZWxlY3RlZE1vbnRoID0gdGhpcy5jb252KHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiak1cIikpXHJcbiAgICAgIGxldCBzZWxlY3RlZE1vbnRoTmFtZSA9ICB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICAgIHNlbGVjdGVkTW9udGhcclxuICAgIF07XHJcbiAgICAgIGxldCBzZWxlY3RlZFllYXIgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgICBsZXQgc2VsZWN0ZWREYXkgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpEXCIpO1xyXG4gICAgICBpbnB1dFZhbHVlPXRoaXMuY29udihzZWxlY3RlZFllYXIpK1wiLVwiKyBpbmRleFxyXG4gICAgICBcclxuICAgIHRoaXMucHJvcHMuc1llYXIodGhpcy5jb252KHNlbGVjdGVkWWVhcikpXHJcbiAgICB0aGlzLnByb3BzLnNNb250aChpbmRleClcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZE1vbnRoTmFtZSxcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aCxcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgICAgc2VsZWN0ZWREYXlcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCwgaW5wdXRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnRcclxuICAgICAgICAuc3RhcnRPZihcImpNb250aFwiKVxyXG4gICAgICAgIC5hZGQoaW5kZXggLSAxLCBcImRheVwiKVxyXG4gICAgICAgIC5mb3JtYXQodGhpcy5wcm9wcy5jdXN0b21Gb3JtYXQpO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRNb250aCA9IHRoaXMuY29udih0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpNXCIpKVxyXG4gICAgICBsZXQgc2VsZWN0ZWRNb250aE5hbWUgPSAgdGhpcy5zdGF0ZS5tb250aEhlYWRlcltzZWxlY3RlZE1vbnRoXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiallZWVlcIik7XHJcblxyXG4gICAgICBsZXQgc2VsZWN0ZWREYXkgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpEXCIpO1xyXG4gICAgICBpbnB1dFZhbHVlPXRoaXMuY29udihzZWxlY3RlZFllYXIpK1wiLVwiKyBpbmRleFxyXG4gICAgICBcclxuICAgIHRoaXMucHJvcHMuc1llYXIodGhpcy5jb252KHNlbGVjdGVkWWVhcikpXHJcbiAgICB0aGlzLnByb3BzLnNNb250aChpbmRleClcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIHNlbGVjdGVkTW9udGhOYW1lLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aCxcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgICAgc2VsZWN0ZWREYXlcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCxcclxuICAgICAgICBpbnB1dFZhbHVlKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZVN0dGVyKGxhc3RTZWxlY3RlZE5vZGUse1xyXG4gICAgICAuLi50aGlzLnByb3BzLnNlbGVjdFN0eWxlfSk7XHJcbiAgfVxyXG4gIGdvVG9kYXkoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZXIoKSB7XHJcbiAgICB0aGlzLnNEYXkgPSB0aGlzLnNEYXkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuc0RheTtcclxuICB9XHJcbiAgY29udih2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gbnMuaW5kZXhPZihjICsgXCJcIik7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnVtcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXQgKz0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAvLyBZb3UgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGNoZWNrIGZpcnN0LCBidXQgaXQgY2FuIGhlbHAgcHJldmVudCBhbiB1bm5lZWRlZCByZW5kZXJcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdmVBY3Rpb24gIT09IG5leHRQcm9wcy5tb3ZlQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uKG5leHRQcm9wcy5tb3ZlQWN0aW9uKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VSYWl0b1NpemluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHctMTAwIGgtMTAwXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRpdGxlU3R5bGUsIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAodGhpcy5wcm9wcy5yYWl0b1RpdGxlICogMTAgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wZXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuY3VyclllYXIpfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubUNyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICh0aGlzLnByb3BzLnJhaXRvQm9keSAvIHRoaXMuc3RhdGUudG90YWxNYWluUm93KSAqIDEwICsgJyUnXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy5mb290ZXJTdHlsZSwgLi4ueyBoZWlnaHQ6IHRoaXMucHJvcHMucmFpdG9Gb290ZXIgKiAxMCArICclJyB9IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLnRvZGF5QnV0dG9uU3R5bGUsIC4uLnsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktZm9udC1jYWxlbmRlclwiIHN0eWxlPXt0aGlzLnByb3BzLm1haW5Cb2R5U3R5bGV9ID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dUaXRsZSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3RoaXMucHJvcHMudGl0bGVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17dGhpcy5wZXJNb250aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd0xlZnRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCAzMCBMOCAxNiAyMCAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsaWNrVGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ueyBtaW5XaWR0aDogJzIwJScgfSwgLi4udGhpcy5wcm9wcy5jbGlja2FibGVTdHlsZSB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5jdXJyWWVhcil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7dGhpcy5tQ3JlYXRvcih7fSl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17dGhpcy5wcm9wcy5mb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4uIHsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbk1vbnRoQ2FsZW5kZXIucHJvcFR5cGVzID0ge2RlZlllYXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBkZWZNb250aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGlucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRDdXJyZW50WWVhcjpQcm9wVHlwZXMuZnVuYyxcclxuICBzWWVhcjpQcm9wVHlwZXMuZnVuYyxcclxuICBzTW9udGg6UHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xpY2tUaXRsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgYWN0aW9uU3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxuICBtb3ZlQWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGlzVGhyZWVSb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGJlZm9yZVRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VsZWN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJJdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBtYWluQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93UmlnaHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhcnJvd0xlZnRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjbGlja2FibGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0aXRsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgdG9kYXlCdXR0b25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGN1c3RvbUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB1c2VSYWl0b1NpemluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcmFpdG9UaXRsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b1RhYmxlSGVkZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvQm9keTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b0Zvb3RlcjogUHJvcFR5cGVzLm51bWJlcixcclxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dGb290ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dCdXR0b25Ub2RheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9udGhBbmltOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbk1vbnRoQ2FsZW5kZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlucHV0KHZhbCkgeyB9LFxyXG4gIGdldEN1cnJlbnRZZWFyKHZhbCkgeyB9LFxyXG4gIFxyXG4gIHNZZWFyKHZhbCkgeyB9LFxyXG4gIHNNb250aCh2YWwpIHsgfSxcclxuICBnZXRDdXJyZW50WWVhcih2YWwpIHsgfSxcclxuICBjbGlja1RpdGxlKCkge1xyXG5cclxuICB9LFxyXG4gIGRlZlllYXI6IFwiXCIsXHJcbiAgZGVmTW9udGg6IFwiXCIsXHJcbiAgYWN0aW9uU3RlcDogMSxcclxuICBtb3ZlQWN0aW9uOiB7XHJcbiAgICBhY3Rpb246IFwiXCIsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgdXNlSnVtcDogZmFsc2UsXHJcbiAgICBqdW1wOiB7fVxyXG4gIH0sXHJcbiAgaXNUaHJlZVJvdzogZmFsc2UsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFwic2VsZWN0ZWRcIixcclxuICB0b2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZTg0NTQ1XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGFkYjVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCAjZTg0NTQ1XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIiBhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICNlZWVlZWVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYmVmb3JlVG9kYXlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICMyMjI4MzFcIixcclxuICAgIGNvbG9yOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIHNlbGVjdFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIm9yYW5nZXJlZFwiLFxyXG5cclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZToge1xyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZToge1xyXG4gICAgLy8gYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJTdHlsZToge1xyXG4gICAgbWFyZ2luOiBcIjAgLTE0cHhcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgIG1hcmdpbjogXCJhdXRvXCJcclxuICB9LFxyXG4gIG1haW5Cb2R5U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNlZWVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjE1cHhcIlxyXG4gIH0sXHJcbiAgYXJyb3dSaWdodFN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGFycm93TGVmdFN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGNsaWNrYWJsZVN0eWxlOiB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIHRpdGxlU3R5bGU6IHtcclxuICAgIG1hcmdpblRvcDogXCItMTBweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMzkzZTQ2XCIsXHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgbWFyZ2luOiBcIjAgLTE0cHhcIlxyXG4gIH0sXHJcbiAgZm9vdGVyU3R5bGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIxNHB4XCJcclxuICB9LFxyXG4gIHRvZGF5QnV0dG9uU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgIG91dGxpbmU6IFwibm9uZSAhaW1wb3J0YW50XCJcclxuICB9LFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gIH0sXHJcbiAgY3VzdG9tRm9ybWF0OiBcImpZWVlZL2pNL2pEXCIsXHJcbiAgdXNlUmFpdG9TaXppbmc6IHRydWUsXHJcbiAgcmFpdG9UaXRsZTogMSxcclxuICByYWl0b1RhYmxlSGVkZWFyOiAxLFxyXG4gIHJhaXRvQm9keTogOCxcclxuICByYWl0b0Zvb3RlcjogMSxcclxuICBzaG93VGl0bGU6IHRydWUsXHJcbiAgc2hvd0Zvb3RlcjogdHJ1ZSxcclxuICBzaG93QnV0dG9uVG9kYXk6IHRydWUsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWU6IHRydWUsXHJcbiAgY2FsZW5kZXJJdGVtQW5pbTogXCJzbGlkZS1mYWRlXCIsXHJcbiAgbW9udGhBbmltOiBcImZhZGVcIixcclxuICB0b2RheUJ1dHRvblRpdGxlOiBcItmF2KfZhyDYrNin2LHbjFwiXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9udGhDYWxlbmRlcjtcclxuIl19