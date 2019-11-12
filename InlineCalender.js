"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InlineCalender.css");

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

var InlineCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InlineCalender, _React$Component);

  function InlineCalender(props) {
    var _this;

    _classCallCheck(this, InlineCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineCalender).call(this, props));
    _this.state = {
      totalMainRow: _this.props.isFiveRow ? 5 : 6,
      firstRowLastDays: 29,
      moveAction: {
        action: "",
        step: 1,
        useJump: false,
        jump: {}
      },
      header: {
        0: "ش",
        1: "ی",
        2: "د",
        3: "س",
        4: "چ",
        5: "پ",
        6: "ج"
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
      startDayisBeforeToday: false,
      momentObject: null,
      startDay: 1,
      endDay: 29,
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

  _createClass(InlineCalender, [{
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
          if (j == 1 && _this2.state.endDay >= _this2.state.firstRowLastDays && _this2.state.firstRowLastDays + i <= _this2.state.endDay && _this2.props.isFiveRow) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              onClick: function onClick($event) {
                return _this2.selecValues(_this2.state.firstRowLastDays + i, $event);
              },
              className: "ratio-child",
              style: _objectSpread({}, _this2.styleCellCal1(_this2.state.firstRowLastDays + i), {}, _this2.props.calenderCellWithTextStyle)
            }, _react.default.createElement("div", {
              className: "d-flex justify-content-center align-items-center h-100 w-100"
            }, _this2.convertEnToFaDig(_this2.state.firstRowLastDays + i)))));
          } else if (j == 1 && i - 1 >= _this2.state.startDay) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              onClick: function onClick($event) {
                return _this2.selecValues(i - _this2.state.startDay, $event);
              },
              className: "ratio-child",
              style: _objectSpread({}, _this2.styleCellCal1(i - _this2.state.startDay), {}, _this2.props.calenderCellWithTextStyle)
            }, _react.default.createElement("div", {
              className: "d-flex justify-content-center align-items-center h-100 w-100"
            }, _this2.convertEnToFaDig(i - _this2.state.startDay)))));
          } else if (j == 1) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              style: _this2.props.calenderCellNoTextStyle
            })));
          } else if (j > 1 && (j - 1) * 7 + i - _this2.state.startDay <= _this2.state.endDay) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              onClick: function onClick($event) {
                return _this2.selecValues((j - 1) * 7 + i - _this2.state.startDay, $event);
              },
              className: "ratio-child",
              style: _objectSpread({}, _this2.styleCellCal1((j - 1) * 7 + i - _this2.state.startDay), {}, _this2.props.calenderCellWithTextStyle)
            }, _react.default.createElement("div", {
              className: "d-flex justify-content-center align-items-center h-100 w-100"
            }, _this2.convertEnToFaDig((j - 1) * 7 + i - _this2.state.startDay)))));
          } else {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              style: _this2.props.calenderCellNoTextStyle
            })));
          }
        };

        for (var i = 1; i <= 7; i++) {
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
      var todayMonth = this.state.monthHeader[this.conv(momentObject.format("jM"))];
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

        var ddd = (0, _momentJalaali.default)(out, "jYYYY/jM/jD");
        var selectedMonth = this.state.monthHeader[this.conv(ddd.format("jM"))];
        var selectedYear = ddd.format("jYYYY");
        var selectedDay = ddd.format("jD");
        this.setStators({
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

      if (typeof this.props.defDay !== "undefined" && this.props.defDay + "".length > 0 && !!parseInt(this.props.defDay) && parseInt(this.props.defDay) >= 0) {
        momentObject.day(parseInt(this.props.defDay));
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
      if (this.state.selectedYear == this.conv(this.state.currYear) && this.state.currMonth == this.state.selectedMonth && this.state.selectedDay == index) {
        return this.props.selectStyle;
      } else {
        if (this.state.currYear == this.state.todayYear && this.state.currMonth == this.state.todayMonth) {
          if (this.state.todayDay == index) {
            return this.props.todayStyle;
          } else if (this.state.todayDay >= index) {
            return this.props.beforeTodayStyle;
          } else {
            return this.props.afterTodayStyle;
          }
        } else if (this.state.startDayisBeforeToday) {
          return this.props.beforeTodayStyle;
        } else {
          return this.props.afterTodayStyle;
        }
      }
    }
  }, {
    key: "styleCellCal",
    value: function styleCellCal(index) {
      if (this.state.currYear == this.state.todayYear && this.state.currMonth == this.state.todayMonth) {
        if (this.state.todayDay == index) {
          return "ratio-parent base today";
        } else if (this.state.todayDay >= index) {
          return "ratio-parent base before-today";
        } else {
          return "ratio-parent base after-today";
        }
      } else if (this.state.startDayisBeforeToday) {
        return "ratio-parent base before-today";
      } else {
        return "ratio-parent base after-today";
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

          if (this.state.selectedYear == this.state.momentObject.format("jYYYY") && this.state.selectedMonth == this.state.monthHeader[this.conv(this.state.momentObject.format("jM"))]) {
            this.styleStter(this.state.lastSelectedNode);
          } else {
            this.clearStter(this.state.lastSelectedNode);
          }
        }
      }

      var startDayisBeforeToday = (0, _momentJalaali.default)(this.state.today).isAfter(this.conv(this.state.momentObject.format("YYYY/M/D")));
      var momentObject = this.state.momentObject;
      momentObject.startOf("jMonth");
      var startDayMoment = momentObject;
      var startDay = parseInt(this.conv(momentObject.format("e"))) + 1;

      if (startDay >= 7) {
        startDay = 0;
      }

      var firstRowLastDays = 4 * 7 + (7 - startDay);
      momentObject.endOf("jMonth");
      var endDay = parseInt(this.conv(momentObject.format("jD")));
      var currMonth = this.state.monthHeader[this.conv(momentObject.format("jM"))];
      var currYear = momentObject.format("jYYYY");
      var totalMainRow = 5;

      if (!this.isFiveRow) {
        if (this.endDay > firstRowLastDays) {
          totalMainRow = 6;
        } else {
          totalMainRow = 5;
        }
      }

      this.setState({
        totalMainRow: totalMainRow,
        firstRowLastDays: firstRowLastDays,
        momentObject: momentObject,
        startDayisBeforeToday: startDayisBeforeToday,
        startDayMoment: startDayMoment,
        startDay: startDay,
        endDay: endDay,
        currMonth: currMonth,
        currYear: currYear
      });
      this.props.getCurrentYear(currYear);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(1, "jMonth");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(-1, "jMonth");
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
        var selectedMonth = this.state.monthHeader[this.conv(this.state.startDayMoment.format("jM"))];
        var selectedYear = this.state.startDayMoment.format("jYYYY");
        var selectedDay = this.state.startDayMoment.format("jD");
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: inputValue,
          selectedMonth: selectedMonth,
          selectedYear: selectedYear,
          selectedDay: selectedDay
        }, this.props.input, inputValue);
      } else {
        this.clearStter(this.state.lastSelectedNode);

        var _inputValue = this.state.startDayMoment.startOf("jMonth").add(index - 1, "day").format(this.props.customFormat);

        var _selectedMonth = this.state.monthHeader[this.conv(this.state.startDayMoment.format("jM"))];

        var _selectedYear = this.state.startDayMoment.format("jYYYY");

        var _selectedDay = this.state.startDayMoment.format("jD");

        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: _inputValue,
          selectedMonth: _selectedMonth,
          selectedYear: _selectedYear,
          selectedDay: _selectedDay
        }, this.props.input, _inputValue);
      }

      this.styleStter(lastSelectedNode);
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
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.currYear), " -"), this.state.changeAnim && _react.default.createElement("div", null, this.convertEnToFaDig(this.state.currMonth))), _react.default.createElement("div", {
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
        }))))), _react.default.createElement("div", {
          className: "row no-gutters flex-nowrap flex-row-reverese",
          style: _objectSpread({}, this.props.headerCalenderStyle, {}, {
            height: this.props.raitoTableHedear * 10 + '%'
          })
        }, Object.keys(this.state.header).map(function (k) {
          return _react.default.createElement("div", {
            className: "col d-flex justify-content-center align-items-center h-100",
            style: _this3.props.headerCalenderItemStyle,
            key: k + 100 + 100 + ';'
          }, _this3.convertEnToFaDig(_this3.state.header[k]));
        })), this.mCreator({
          height: this.props.raitoBody / this.state.totalMainRow * 10 + '%'
        }, this.state.startDay), this.props.showFooter && _react.default.createElement("div", {
          className: "row no-gutters",
          style: _objectSpread({}, this.props.footerStyle, {}, {
            height: this.props.raitoFooter * 10 + '%'
          })
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center w-100"
        }, this.props.showButtonToday && _react.default.createElement("div", {
          className: "btn btn-small d-flex justify-content-center align-items-center",
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
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.currYear), " -"), this.state.changeAnim && _react.default.createElement("div", null, this.convertEnToFaDig(this.state.currMonth))), _react.default.createElement("div", {
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
        }))))), _react.default.createElement("div", {
          className: "row no-gutters flex-nowrap flex-row-reverese",
          style: this.props.headerCalenderStyle
        }, Object.keys(this.state.header).map(function (k) {
          return _react.default.createElement("div", {
            className: "col d-flex justify-content-center align-items-center h-100",
            style: _this3.props.headerCalenderItemStyle,
            key: k + 100 + 100 + ';'
          }, _this3.convertEnToFaDig(_this3.state.header[k]));
        })), this.mCreator({}, this.state.startDay), this.props.showFooter && _react.default.createElement("div", {
          className: "row no-gutters",
          style: this.props.footerStyle
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center w-100"
        }, this.props.showButtonToday && _react.default.createElement("div", {
          className: "btn btn-small d-flex justify-content-center align-items-center",
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

  return InlineCalender;
}(_react.default.Component);

InlineCalender.propTypes = {
  defDay: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defMonth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  input: _propTypes.default.func,
  getCurrentYear: _propTypes.default.func,
  clickTitle: _propTypes.default.func,
  actionStep: _propTypes.default.number,
  moveAction: _propTypes.default.object,
  isFiveRow: _propTypes.default.bool,
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
InlineCalender.defaultProps = {
  input: function input(val) {},
  getCurrentYear: function getCurrentYear(val) {},
  clickTitle: function clickTitle() {},
  defDay: "",
  defYear: "",
  defMonth: "",
  actionStep: 1,
  moveAction: {
    action: "",
    step: 1,
    useJump: false,
    jump: {}
  },
  isFiveRow: false,
  value: "",
  selectedClassName: "selected",
  todayStyle: {
    color: "#e84545",
    background: "#00adb5",
    boxShadow: "0 0 5px #e84545",
    transition: " all 1s"
  },
  afterTodayStyle: {
    color: "#eeeeee",
    boxShadow: "inset 0 0 10px #eeeeee",
    background: "#222831",
    transition: "all 1s"
  },
  beforeTodayStyle: {
    background: "#eeeeee",
    boxShadow: "inset 0 0 10px #222831",
    color: "#222831",
    transition: "all 1s"
  },
  selectStyle: {
    background: "orangered",
    transition: "all 1s"
  },
  calenderCellBodyStyle: {},
  calenderCellWithTextStyle: {
    // borderRadius: "50%",
    userSelect: "none",
    margin: "2px",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "msUserSelect": "none",
    cursor: "pointer",
    transition: "all 1s"
  },
  calenderCellNoTextStyle: {
    background: "#000",
    color: "#fff",
    margin: "auto"
  },
  rowCalenderItemStyle: {},
  rowCalenderStyle: {
    margin: "0 -14px"
  },
  headerCalenderItemStyle: {
    color: "#eeeeee",
    margin: "auto"
  },
  mainBodyStyle: {
    background: "#393e46",
    border: "2px solid #eee",
    borderRadius: "15px",
    padding: "15px"
  },
  arrowRightStyle: {
    color: "#eeeeee"
  },
  arrowLeftStyle: {
    color: "#eeeeee"
  },
  clickableStyle: {
    cursor: "pointer",
    userSelect: "none",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "msUserSelect": "none"
  },
  titleStyle: {
    marginTop: "-10px",
    background: "#393e46",
    color: "#eeeeee"
  },
  headerCalenderStyle: {
    background: "#222831",
    margin: "0 -14px"
  },
  footerStyle: {
    marginTop: "14px"
  },
  todayButtonStyle: {
    color: "#eeeeee",
    outline: "none !important"
  },
  showSelectedValueStyle: {
    color: "#eeeeee",
    display: "flex",
    alignItems: "center"
  },
  customFormat: "jYYYY/jM/jD",
  useRaitoSizing: true,
  raitoTitle: 1,
  raitoTableHedear: 1,
  raitoBody: 7,
  raitoFooter: 1,
  showTitle: true,
  showFooter: true,
  showButtonToday: true,
  showSelectedValue: true,
  calenderItemAnim: "slide-fade",
  monthAnim: "fade",
  todayButtonTitle: "امروز"
};
var _default = InlineCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvSW5saW5lQ2FsZW5kZXIuanN4Il0sIm5hbWVzIjpbIklubGluZUNhbGVuZGVyIiwicHJvcHMiLCJzdGF0ZSIsInRvdGFsTWFpblJvdyIsImlzRml2ZVJvdyIsImZpcnN0Um93TGFzdERheXMiLCJtb3ZlQWN0aW9uIiwiYWN0aW9uIiwic3RlcCIsInVzZUp1bXAiLCJqdW1wIiwiaGVhZGVyIiwibW9udGhIZWFkZXIiLCJkZWZGb3JtYXQiLCJzdGFydERheU1vbWVudCIsImNoYW5nZUFuaW0iLCJjdXJyWWVhciIsInRvZGF5IiwidG9kYXlEYXkiLCJ0b2RheU1vbnRoIiwidG9kYXlZZWFyIiwic2VsZWN0ZWRZZWFyIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkRGF5IiwiY3Vyck1vbnRoIiwic3RhcnREYXlpc0JlZm9yZVRvZGF5IiwibW9tZW50T2JqZWN0Iiwic3RhcnREYXkiLCJlbmREYXkiLCJzRGF5IiwiaW5wdXRWYWx1ZSIsImxhc3RTZWxlY3RlZE5vZGUiLCJsYXN0U2VsZWN0ZWROb2RlQ2xhc3MiLCJzdHlsZUNlbGxDYWwxIiwiYmluZCIsImNoYW5nZU1vbnRoIiwibmV4dE1vbnRoIiwicGVyTW9udGgiLCJzZWxlY1ZhbHVlcyIsImdvVG9kYXkiLCJzZXREYXRlciIsImNvbnYiLCJjb252ZXJ0RW5Ub0ZhRGlnIiwic2V0U3RhdG9ycyIsIndhdGNoTW92ZUFjdGlvbiIsInN0eWxlU3R0ZXIiLCJjbGVhclN0dGVyIiwibmV3VmFsIiwiYWN0aW9uTWV0aG9kIiwicGFyYW1BYyIsInNldFN0YXRlIiwic3R5bGVIIiwic3RhdHR0dCIsInBhcmVudE5vZGUiLCJqIiwiaW5uZXJOb2RlIiwiaSIsInB1c2giLCIkZXZlbnQiLCJjYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlIiwiY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGUiLCJyb3dDYWxlbmRlclN0eWxlIiwidmFsIiwidiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInllYXIiLCJhZGQiLCJtb250aCIsImRheSIsInRleHQiLCJsZW5ndGgiLCJucyIsIm91dCIsImMiLCJjaGFyQXQiLCJudW1wIiwicGFyc2VJbnQiLCJmb3JtYXQiLCJ2YWx1ZSIsImRkZCIsImRlZlllYXIiLCJqWWVhciIsImdldEN1cnJlbnRZZWFyIiwiZGVmTW9udGgiLCJqTW9udGgiLCJkZWZEYXkiLCJpbmRleCIsInNlbGVjdFN0eWxlIiwidG9kYXlTdHlsZSIsImJlZm9yZVRvZGF5U3R5bGUiLCJhZnRlclRvZGF5U3R5bGUiLCJpc01vdW50ZWQiLCJzZWxmIiwic2V0VGltZW91dCIsImlzQWZ0ZXIiLCJzdGFydE9mIiwiZW5kT2YiLCJlIiwib2IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInN0eWxlIiwidGFyZ2V0IiwiY3VzdG9tRm9ybWF0IiwiaW5wdXQiLCJuZXh0UHJvcHMiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJzaG93VGl0bGUiLCJ0aXRsZVN0eWxlIiwicmFpdG9UaXRsZSIsImN1cnNvciIsImFycm93TGVmdFN0eWxlIiwiY2xpY2tUaXRsZSIsIm1pbldpZHRoIiwiY2xpY2thYmxlU3R5bGUiLCJhcnJvd1JpZ2h0U3R5bGUiLCJoZWFkZXJDYWxlbmRlclN0eWxlIiwiaGVpZ2h0IiwicmFpdG9UYWJsZUhlZGVhciIsIm1hcCIsImsiLCJoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZSIsIm1DcmVhdG9yIiwicmFpdG9Cb2R5Iiwic2hvd0Zvb3RlciIsImZvb3RlclN0eWxlIiwicmFpdG9Gb290ZXIiLCJzaG93QnV0dG9uVG9kYXkiLCJ0b2RheUJ1dHRvblN0eWxlIiwidG9kYXlCdXR0b25UaXRsZSIsInNob3dTZWxlY3RlZFZhbHVlIiwic2hvd1NlbGVjdGVkVmFsdWVTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImFjdGlvblN0ZXAiLCJvYmplY3QiLCJib29sIiwic2VsZWN0ZWRDbGFzc05hbWUiLCJjYWxlbmRlckNlbGxCb2R5U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsImNhbGVuZGVySXRlbUFuaW0iLCJtb250aEFuaW0iLCJkZWZhdWx0UHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwidXNlclNlbGVjdCIsIm1hcmdpbiIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJvdXRsaW5lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHdGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFlBQVksRUFBRSxNQUFLRixLQUFMLENBQVdHLFNBQVgsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FEOUI7QUFFWEMsTUFBQUEsZ0JBQWdCLEVBQUUsRUFGUDtBQUdYQyxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsTUFBTSxFQUFFLEVBREU7QUFFVkMsUUFBQUEsSUFBSSxFQUFFLENBRkk7QUFHVkMsUUFBQUEsT0FBTyxFQUFFLEtBSEM7QUFJVkMsUUFBQUEsSUFBSSxFQUFFO0FBSkksT0FIRDtBQVNYQyxNQUFBQSxNQUFNLEVBQUU7QUFDTixXQUFHLEdBREc7QUFFTixXQUFHLEdBRkc7QUFHTixXQUFHLEdBSEc7QUFJTixXQUFHLEdBSkc7QUFLTixXQUFHLEdBTEc7QUFNTixXQUFHLEdBTkc7QUFPTixXQUFHO0FBUEcsT0FURztBQWtCWEMsTUFBQUEsV0FBVyxFQUFFO0FBQ1gsV0FBRyxTQURRO0FBRVgsV0FBRyxVQUZRO0FBR1gsV0FBRyxPQUhRO0FBSVgsV0FBRyxLQUpRO0FBS1gsV0FBRyxPQUxRO0FBTVgsV0FBRyxRQU5RO0FBT1gs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Z0I7QUFnRzVCakMsRUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJrQyxJQUFBQSxVQUFVLEVBQUUsU0FETztBQUVuQkksSUFBQUEsTUFBTSxFQUFFO0FBRlcsR0FoR087QUFvRzVCN0IsRUFBQUEsV0FBVyxFQUFFO0FBQ1hpQyxJQUFBQSxTQUFTLEVBQUU7QUFEQSxHQXBHZTtBQXVHNUI5QixFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQnFCLElBQUFBLEtBQUssRUFBRSxTQURTO0FBRWhCVSxJQUFBQSxPQUFPLEVBQUU7QUFGTyxHQXZHVTtBQTJHNUI1QixFQUFBQSxzQkFBc0IsRUFBRTtBQUN0QmtCLElBQUFBLEtBQUssRUFBRSxTQURlO0FBRXRCVyxJQUFBQSxPQUFPLEVBQUUsTUFGYTtBQUd0QkMsSUFBQUEsVUFBVSxFQUFFO0FBSFUsR0EzR0k7QUFnSDVCM0QsRUFBQUEsWUFBWSxFQUFFLGFBaEhjO0FBaUg1QkcsRUFBQUEsY0FBYyxFQUFFLElBakhZO0FBa0g1QkksRUFBQUEsVUFBVSxFQUFFLENBbEhnQjtBQW1INUJTLEVBQUFBLGdCQUFnQixFQUFFLENBbkhVO0FBb0g1QkssRUFBQUEsU0FBUyxFQUFFLENBcEhpQjtBQXFINUJHLEVBQUFBLFdBQVcsRUFBRSxDQXJIZTtBQXNINUJuQixFQUFBQSxTQUFTLEVBQUUsSUF0SGlCO0FBdUg1QmlCLEVBQUFBLFVBQVUsRUFBRSxJQXZIZ0I7QUF3SDVCRyxFQUFBQSxlQUFlLEVBQUUsSUF4SFc7QUF5SDVCRyxFQUFBQSxpQkFBaUIsRUFBRSxJQXpIUztBQTBINUJnQixFQUFBQSxnQkFBZ0IsRUFBRSxZQTFIVTtBQTJINUJDLEVBQUFBLFNBQVMsRUFBRSxNQTNIaUI7QUE0SDVCbEIsRUFBQUEsZ0JBQWdCLEVBQUU7QUE1SFUsQ0FBOUI7ZUErSGVwSSxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50LWphbGFhbGlcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICcuL0lubGluZUNhbGVuZGVyLmNzcyc7XHJcblxyXG5jbGFzcyBJbmxpbmVDYWxlbmRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRvdGFsTWFpblJvdzogdGhpcy5wcm9wcy5pc0ZpdmVSb3cgPyA1IDogNixcclxuICAgICAgZmlyc3RSb3dMYXN0RGF5czogMjksXHJcbiAgICAgIG1vdmVBY3Rpb246IHtcclxuICAgICAgICBhY3Rpb246IFwiXCIsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICB1c2VKdW1wOiBmYWxzZSxcclxuICAgICAgICBqdW1wOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAwOiBcIti0XCIsXHJcbiAgICAgICAgMTogXCLbjFwiLFxyXG4gICAgICAgIDI6IFwi2K9cIixcclxuICAgICAgICAzOiBcItizXCIsXHJcbiAgICAgICAgNDogXCLahlwiLFxyXG4gICAgICAgIDU6IFwi2b5cIixcclxuICAgICAgICA2OiBcItisXCJcclxuICAgICAgfSxcclxuICAgICAgbW9udGhIZWFkZXI6IHtcclxuICAgICAgICAxOiBcItmB2LHZiNix2K/bjNmGXCIsXHJcbiAgICAgICAgMjogXCLYp9ix2K/bjNio2YfYtNiqXCIsXHJcbiAgICAgICAgMzogXCLYrtix2K/Yp9ivXCIsXHJcbiAgICAgICAgNDogXCLYqtuM2LFcIixcclxuICAgICAgICA1OiBcItmF2LHYr9in2K9cIixcclxuICAgICAgICA2OiBcIti02YfYsduM2YjYsVwiLFxyXG4gICAgICAgIDc6IFwi2YXZh9ixXCIsXHJcbiAgICAgICAgODogXCLYotio2KfZhlwiLFxyXG4gICAgICAgIDk6IFwi2KLYsNixXCIsXHJcbiAgICAgICAgMTA6IFwi2K/bjFwiLFxyXG4gICAgICAgIDExOiBcItio2YfZhdmGXCIsXHJcbiAgICAgICAgMTI6IFwi2KfYs9mB2YbYr1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZkZvcm1hdDogXCJqWVlZWS1qTS1cIixcclxuICAgICAgc3RhcnREYXlNb21lbnQ6IG51bGwsXHJcbiAgICAgIGNoYW5nZUFuaW06IHRydWUsXHJcbiAgICAgIGN1cnJZZWFyOiBcIlwiLFxyXG4gICAgICB0b2RheTogXCJcIixcclxuICAgICAgdG9kYXlEYXk6IDEsXHJcbiAgICAgIHRvZGF5TW9udGg6IFwiXCIsXHJcbiAgICAgIHRvZGF5WWVhcjogXCJcIixcclxuICAgICAgc2VsZWN0ZWRZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZE1vbnRoOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZERheTogXCJcIixcclxuICAgICAgY3Vyck1vbnRoOiBcIlwiLFxyXG4gICAgICBzdGFydERheWlzQmVmb3JlVG9kYXk6IGZhbHNlLFxyXG4gICAgICBtb21lbnRPYmplY3Q6IG51bGwsXHJcbiAgICAgIHN0YXJ0RGF5OiAxLFxyXG4gICAgICBlbmREYXk6IDI5LFxyXG4gICAgICBzRGF5OiAwLFxyXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBsYXN0U2VsZWN0ZWROb2RlOiBudWxsLFxyXG4gICAgICBsYXN0U2VsZWN0ZWROb2RlQ2xhc3M6IFwiXCJcclxuICAgIH07XHJcbiAgICB0aGlzLnN0eWxlQ2VsbENhbDEgPSB0aGlzLnN0eWxlQ2VsbENhbDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2hhbmdlTW9udGggPSB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5leHRNb250aCA9IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBlck1vbnRoID0gdGhpcy5wZXJNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWxlY1ZhbHVlcyA9IHRoaXMuc2VsZWNWYWx1ZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ29Ub2RheSA9IHRoaXMuZ29Ub2RheS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXREYXRlciA9IHRoaXMuc2V0RGF0ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udiA9IHRoaXMuY29udi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb252ZXJ0RW5Ub0ZhRGlnID0gdGhpcy5jb252ZXJ0RW5Ub0ZhRGlnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMgPSB0aGlzLnNldFN0YXRvcnMuYmluZCh0aGlzKVxyXG4gICAgdGhpcy53YXRjaE1vdmVBY3Rpb24gPSB0aGlzLndhdGNoTW92ZUFjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICBcclxuICAgIHRoaXMuc3R5bGVTdHRlciA9IHRoaXMuc3R5bGVTdHRlci5iaW5kKHRoaXMpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNsZWFyU3R0ZXIgPSB0aGlzLmNsZWFyU3R0ZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgc2V0U3RhdG9ycyhuZXdWYWwsIGFjdGlvbk1ldGhvZCA9IG51bGwsIHBhcmFtQWMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5uZXdWYWxcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb25NZXRob2QgIT09IG51bGwpIHtcclxuICAgICAgICBhY3Rpb25NZXRob2QocGFyYW1BYylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgbUNyZWF0b3Ioc3R5bGVILCBzdGF0dHR0KSB7XHJcbiAgICBsZXQgcGFyZW50Tm9kZSA9IFtdXHJcbiAgICBcclxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMuc3RhdGUudG90YWxNYWluUm93OyBqKyspIHtcclxuXHJcbiAgICAgIGxldCBpbm5lck5vZGUgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBqID09IDEgJiZcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZW5kRGF5ID49IHRoaXMuc3RhdGUuZmlyc3RSb3dMYXN0RGF5cyAmJlxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5maXJzdFJvd0xhc3REYXlzICsgaSA8PSB0aGlzLnN0YXRlLmVuZERheSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5pc0ZpdmVSb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlubmVyTm9kZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9e3RoaXMucHJvcHMuY2FsZW5kZXJJdGVtQW5pbX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCRldmVudCkgPT4gdGhpcy5zZWxlY1ZhbHVlcyh0aGlzLnN0YXRlLmZpcnN0Um93TGFzdERheXMgKyBpLCAkZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdHlsZUNlbGxDYWwxKHRoaXMuc3RhdGUuZmlyc3RSb3dMYXN0RGF5cyArIGkpLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmZpcnN0Um93TGFzdERheXMgKyBpKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaiA9PSAxICYmIGkgLSAxID49IHRoaXMuc3RhdGUuc3RhcnREYXkpIHtcclxuICAgICAgICAgIGlubmVyTm9kZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9e3RoaXMucHJvcHMuY2FsZW5kZXJJdGVtQW5pbX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCRldmVudCkgPT4gdGhpcy5zZWxlY1ZhbHVlcyhpIC0gdGhpcy5zdGF0ZS5zdGFydERheSwgJGV2ZW50KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3R5bGVDZWxsQ2FsMShpIC0gdGhpcy5zdGF0ZS5zdGFydERheSksXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGVcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwIHctMTAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBcclxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9IGVsc2UgaWYgKGogPT0gMSkge1xyXG4gICAgICAgICAgaW5uZXJOb2RlLnB1c2goPGRpdiBjbGFzc05hbWU9XCJjb2wgcG9zaXRpb24tcmVsYXRpdmVcIiBrZXk9eydoJyArIGl9PlxyXG4gICAgICAgICAgICB7LyogPHRyYW5zaXRpb24gbmFtZT17dGhpcy5wcm9wcy5jYWxlbmRlckl0ZW1BbmltfT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGV9PjwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9IGVsc2UgaWYgKGogPiAxICYmIChqIC0gMSkgKiA3ICsgaSAtIHRoaXMuc3RhdGUuc3RhcnREYXkgPD0gdGhpcy5zdGF0ZS5lbmREYXkpIHtcclxuICAgICAgICAgIGlubmVyTm9kZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9e3RoaXMucHJvcHMuY2FsZW5kZXJJdGVtQW5pbX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCRldmVudCkgPT4gdGhpcy5zZWxlY1ZhbHVlcygoaiAtIDEpICogNyArIGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5LCAkZXZlbnQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdHlsZUNlbGxDYWwxKChqIC0gMSkgKiA3ICsgaSAtIHRoaXMuc3RhdGUuc3RhcnREYXkpLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZygoaiAtIDEpICogNyArIGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlubmVyTm9kZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9e3RoaXMucHJvcHMuY2FsZW5kZXJJdGVtQW5pbX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLmNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJlbnROb2RlLnB1c2goPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGZsZXgtbm93cmFwXCJcclxuICAgICAgICBrZXk9eydqaicgKyBqfVxyXG4gICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcy5yb3dDYWxlbmRlclN0eWxlLCAuLi5zdHlsZUggfVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbm5lck5vZGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudE5vZGVcclxuICB9XHJcbiAgd2F0Y2hNb3ZlQWN0aW9uKHZhbCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgIHZhbCAhPT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgdmFsLmFjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB2YWwuYWN0aW9uICE9PSBudWxsICYmXHJcbiAgICAgICh0eXBlb2YgdmFsLnVzZUp1bXAgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICB2YWwudXNlSnVtcCA9PT0gbnVsbCB8fFxyXG4gICAgICAgICF2YWwudXNlSnVtcClcclxuICAgICkge1xyXG4gICAgICBsZXQgdiA9IHZhbC5hY3Rpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJuXCIgfHxcclxuICAgICAgICB2ID09IFwibmVcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZXhcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZXh0XCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmV4XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZXh0XCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0TW9udGgoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdiA9PSBcInByZXZpb3VzXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlvdVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpb1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldlwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByXCIgfHxcclxuICAgICAgICB2ID09IFwicFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvdXNcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb3VcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInBcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnBlck1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJ0b2RheVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvZGFcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b2RcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInRcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZGF5XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RhXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0XCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5nb1RvZGF5KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZW9mIHZhbC51c2VKdW1wICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgdmFsLnVzZUp1bXAgIT09IG51bGwgJiZcclxuICAgICAgICB2YWwudXNlSnVtcCAmJlxyXG4gICAgICAgIHR5cGVvZiB2YWwuanVtcCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgIHZhbC5qdW1wICE9PSBudWxsXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmp1bXAueWVhciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwuanVtcC55ZWFyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLnllYXIsIFwialllYXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHR5cGVvZiB2YWwuanVtcC5tb250aCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICAgdmFsLmp1bXAubW9udGggIT09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAubW9udGgsIFwiak1vbnRoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbC5qdW1wLmRheSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwuanVtcC5kYXkgIT09IG51bGwpIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAuZGF5LCBcImRheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnZlcnRFblRvRmFEaWcodmFsKSB7XHJcbiAgICBsZXQgdGV4dCA9IHZhbCArIFwiXCI7XHJcbiAgICBpZiAodGV4dC5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHZhciBucyA9IFwi27Dbsduy27PbtNu127bbt9u427lcIjtcclxuICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgbGV0IGxlbmd0aCA9IHRleHQubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYyA9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICBsZXQgbnVtcCA9IHBhcnNlSW50KGMpO1xyXG4gICAgICBpZiAobnVtcCA+PSAwKSB7XHJcbiAgICAgICAgb3V0ICs9IG5zLmNoYXJBdChudW1wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXQgKz0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICBsZXQgdG9kYXkgPSB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVktTS1EXCIpKTtcclxuICAgIGxldCBkZWZGb3JtYXQgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVkvak0vXCIpO1xyXG4gICAgbGV0IHRvZGF5RGF5ID0gcGFyc2VJbnQodGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJqRFwiKSkpO1xyXG4gICAgbGV0IHRvZGF5TW9udGggPSB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcImpNXCIpKVxyXG4gICAgXTtcclxuICAgIGxldCB0b2RheVllYXIgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVlcIik7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0ZXh0ID0gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRleHQubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGMgPSBucy5pbmRleE9mKHRleHQuY2hhckF0KGkpKTtcclxuICAgICAgICBsZXQgbnVtcCA9IHBhcnNlSW50KGMpO1xyXG4gICAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICAgIG91dCArPSBjO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvdXQgKz0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBkZGQgPSBtb21lbnQob3V0LCBcImpZWVlZL2pNL2pEXCIpO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRNb250aCA9IHRoaXMuc3RhdGUubW9udGhIZWFkZXJbdGhpcy5jb252KGRkZC5mb3JtYXQoXCJqTVwiKSldO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gZGRkLmZvcm1hdChcImpZWVlZXCIpO1xyXG5cclxuICAgICAgbGV0IHNlbGVjdGVkRGF5ID0gZGRkLmZvcm1hdChcImpEXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIHNlbGVjdGVkTW9udGgsXHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyLFxyXG4gICAgICAgIHNlbGVjdGVkRGF5LFxyXG4gICAgICB9KVxyXG4gICAgICBtb21lbnRPYmplY3QgPSBkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5kZWZZZWFyICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmWWVhciArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpICYmIHBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3QualllYXIocGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7IGN1cnJZZWFyOiBtb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVlcIikgfSlcclxuICAgICAgXHJcbiAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRZZWFyKG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKSlcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuZGVmTW9udGggIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdGhpcy5wcm9wcy5kZWZNb250aCArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZk1vbnRoKSAmJiBwYXJzZUludCh0aGlzLnByb3BzLmRlZk1vbnRoKSA+PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIG1vbWVudE9iamVjdC5qTW9udGgocGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCAtIDEpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBjdXJyTW9udGg6IHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiak1cIikpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmRlZkRheSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmRlZkRheSArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZkRheSkgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZEYXkpID49IDApXHJcbiAgICApIHtcclxuICAgICAgbW9tZW50T2JqZWN0LmRheShwYXJzZUludCh0aGlzLnByb3BzLmRlZkRheSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgbW9tZW50T2JqZWN0LFxyXG4gICAgICB0b2RheSxcclxuICAgICAgZGVmRm9ybWF0LFxyXG4gICAgICB0b2RheURheSxcclxuICAgICAgdG9kYXlNb250aCxcclxuICAgICAgdG9kYXlZZWFyXHJcblxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgdHJ1ZSlcclxuICB9XHJcbiAgc3R5bGVDZWxsQ2FsMShpbmRleCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkWWVhciA9PSB0aGlzLmNvbnYodGhpcy5zdGF0ZS5jdXJyWWVhcikgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5jdXJyTW9udGggPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT0gaW5kZXhcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RTdHlsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJZZWFyID09IHRoaXMuc3RhdGUudG9kYXlZZWFyICYmXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyTW9udGggPT0gdGhpcy5zdGF0ZS50b2RheU1vbnRoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZGF5RGF5ID09IGluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50b2RheVN0eWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50b2RheURheSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmVmb3JlVG9kYXlTdHlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnN0YXJ0RGF5aXNCZWZvcmVUb2RheSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJlZm9yZVRvZGF5U3R5bGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdHlsZUNlbGxDYWwoaW5kZXgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJZZWFyID09IHRoaXMuc3RhdGUudG9kYXlZZWFyICYmIHRoaXMuc3RhdGUuY3Vyck1vbnRoID09IHRoaXMuc3RhdGUudG9kYXlNb250aCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS50b2RheURheSA9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIHRvZGF5XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50b2RheURheSA+PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGJlZm9yZS10b2RheVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGFmdGVyLXRvZGF5XCI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zdGFydERheWlzQmVmb3JlVG9kYXkpIHtcclxuICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYmVmb3JlLXRvZGF5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSBhZnRlci10b2RheVwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VNb250aChpc01vdW50ZWQgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY2hhbmdlQW5pbTogZmFsc2UgfSlcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiB0cnVlIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIgPT0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVlcIikgJiZcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRNb250aCA9PVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5tb250aEhlYWRlclt0aGlzLmNvbnYodGhpcy5zdGF0ZS5tb21lbnRPYmplY3QuZm9ybWF0KFwiak1cIikpXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zdHlsZVN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbGVhclN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzdGFydERheWlzQmVmb3JlVG9kYXkgPSBtb21lbnQodGhpcy5zdGF0ZS50b2RheSkuaXNBZnRlcihcclxuICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUubW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVkvTS9EXCIpKVxyXG4gICAgKTtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJqTW9udGhcIik7XHJcbiAgICBsZXQgc3RhcnREYXlNb21lbnQgPSBtb21lbnRPYmplY3Q7XHJcbiAgICBsZXQgc3RhcnREYXkgPSBwYXJzZUludCh0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcImVcIikpKSsxO1xyXG4gICAgaWYoc3RhcnREYXk+PTcpe1xyXG4gICAgICBzdGFydERheT0wXHJcbiAgICB9XHJcbiAgICBsZXQgZmlyc3RSb3dMYXN0RGF5cyA9IDQgKiA3ICsgKDcgLSBzdGFydERheSlcclxuICAgIG1vbWVudE9iamVjdC5lbmRPZihcImpNb250aFwiKTtcclxuICAgIGxldCBlbmREYXkgPSBwYXJzZUludCh0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcImpEXCIpKSk7XHJcbiAgICBsZXQgY3Vyck1vbnRoID0gdGhpcy5zdGF0ZS5tb250aEhlYWRlcltcclxuICAgICAgdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJqTVwiKSlcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGN1cnJZZWFyID0gbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgbGV0IHRvdGFsTWFpblJvdyA9IDVcclxuICAgIGlmICghdGhpcy5pc0ZpdmVSb3cpIHtcclxuICAgICAgaWYgKHRoaXMuZW5kRGF5ID4gZmlyc3RSb3dMYXN0RGF5cykge1xyXG4gICAgICAgIHRvdGFsTWFpblJvdyA9IDZcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b3RhbE1haW5Sb3cgPSA1XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0b3RhbE1haW5Sb3csXHJcbiAgICAgIGZpcnN0Um93TGFzdERheXMsXHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgc3RhcnREYXlpc0JlZm9yZVRvZGF5LFxyXG4gICAgICBzdGFydERheU1vbWVudCxcclxuICAgICAgc3RhcnREYXksXHJcbiAgICAgIGVuZERheSxcclxuICAgICAgY3Vyck1vbnRoLFxyXG4gICAgICBjdXJyWWVhclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRZZWFyKGN1cnJZZWFyKVxyXG4gIH1cclxuICBuZXh0TW9udGgoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5hZGQoMSwgXCJqTW9udGhcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHBlck1vbnRoKCkge1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICBtb21lbnRPYmplY3QuYWRkKC0xLCBcImpNb250aFwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgc3R5bGVTdHRlcihlLG9iPXtcclxuICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0U3R5bGV9KXtcclxuICAgIE9iamVjdC5rZXlzKG9iKS5mb3JFYWNoKHY9PntcclxuXHJcbiAgICAgIGUuc3R5bGVbdl09b2Jbdl1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNsZWFyU3R0ZXIoZSl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdFN0eWxlKS5mb3JFYWNoKHY9PntcclxuICAgICAgZS5zdHlsZVt2XT0nJ1xyXG4gICAgfSlcclxuICB9XHJcbiAgc2VsZWNWYWx1ZXMoaW5kZXgsIGUpIHtcclxuICAgIGxldCBsYXN0U2VsZWN0ZWROb2RlID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlID09IG51bGwpIHtcclxuICAgICAgbGV0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50XHJcbiAgICAgICAgLnN0YXJ0T2YoXCJqTW9udGhcIilcclxuICAgICAgICAuYWRkKGluZGV4IC0gMSwgXCJkYXlcIilcclxuICAgICAgICAuZm9ybWF0KHRoaXMucHJvcHMuY3VzdG9tRm9ybWF0KTtcclxuICAgICAgbGV0IHNlbGVjdGVkTW9udGggPSB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICAgIHRoaXMuY29udih0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpNXCIpKVxyXG4gICAgICBdO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuICAgICAgbGV0IHNlbGVjdGVkRGF5ID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJqRFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aCxcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgICAgc2VsZWN0ZWREYXlcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCwgaW5wdXRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgIGxldCBpbnB1dFZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudFxyXG4gICAgICAgIC5zdGFydE9mKFwiak1vbnRoXCIpXHJcbiAgICAgICAgLmFkZChpbmRleCAtIDEsIFwiZGF5XCIpXHJcbiAgICAgICAgLmZvcm1hdCh0aGlzLnByb3BzLmN1c3RvbUZvcm1hdCk7XHJcbiAgICAgIGxldCBzZWxlY3RlZE1vbnRoID0gdGhpcy5zdGF0ZS5tb250aEhlYWRlcltcclxuICAgICAgICB0aGlzLmNvbnYodGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJqTVwiKSlcclxuICAgICAgXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiallZWVlcIik7XHJcblxyXG4gICAgICBsZXQgc2VsZWN0ZWREYXkgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpEXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGxhc3RTZWxlY3RlZE5vZGUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICBzZWxlY3RlZE1vbnRoLFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgICBzZWxlY3RlZERheVxyXG4gICAgICB9LCB0aGlzLnByb3BzLmlucHV0LFxyXG4gICAgICAgIGlucHV0VmFsdWUpXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlU3R0ZXIobGFzdFNlbGVjdGVkTm9kZSlcclxuICB9XHJcbiAgZ29Ub2RheSgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSBtb21lbnQoKTtcclxuICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgfVxyXG5cclxuICBzZXREYXRlcigpIHtcclxuICAgIHRoaXMuc0RheSA9IHRoaXMuc0RheSArIDE7XHJcbiAgICByZXR1cm4gdGhpcy5zRGF5O1xyXG4gIH1cclxuICBjb252KHZhbCkge1xyXG4gICAgbGV0IHRleHQgPSB2YWwgKyBcIlwiO1xyXG4gICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgbGV0IG51bXAgPSBucy5pbmRleE9mKGMgKyBcIlwiKTtcclxuICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgIG91dCArPSBudW1wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dCArPSBjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIC8vIFlvdSBkb24ndCBoYXZlIHRvIGRvIHRoaXMgY2hlY2sgZmlyc3QsIGJ1dCBpdCBjYW4gaGVscCBwcmV2ZW50IGFuIHVubmVlZGVkIHJlbmRlclxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW92ZUFjdGlvbiAhPT0gbmV4dFByb3BzLm1vdmVBY3Rpb24pIHtcclxuICAgICAgdGhpcy53YXRjaE1vdmVBY3Rpb24obmV4dFByb3BzLm1vdmVBY3Rpb24pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnVzZVJhaXRvU2l6aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1wYXJlbnQgbXktZm9udC1jYWxlbmRlclwiID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdy0xMDAgaC0xMDBcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudGl0bGVTdHlsZSwgLi4uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6ICh0aGlzLnByb3BzLnJhaXRvVGl0bGUgKiAxMCArICclJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBlck1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsaWNrVGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5jdXJyWWVhcil9IC08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPHRyYW5zaXRpb24gbmFtZT1cIm1vbnRoQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoYW5nZUFuaW0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+e3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmN1cnJNb250aCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGZsZXgtbm93cmFwIGZsZXgtcm93LXJldmVyZXNlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuaGVhZGVyQ2FsZW5kZXJTdHlsZSwgLi4uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMucmFpdG9UYWJsZUhlZGVhciAqIDEwICsgJyUnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmhlYWRlcikubWFwKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJDYWxlbmRlckl0ZW1TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ayArIDEwMCArIDEwMCArICc7J31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuaGVhZGVyW2tdKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tQ3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMucmFpdG9Cb2R5IC8gdGhpcy5zdGF0ZS50b3RhbE1haW5Sb3cpICogMTAgKyAnJSdcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuc3RhdGUuc3RhcnREYXkpfVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLmZvb3RlclN0eWxlLCAuLi57IGhlaWdodDogdGhpcy5wcm9wcy5yYWl0b0Zvb3RlciAqIDEwICsgJyUnIH0gfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLnRvZGF5QnV0dG9uU3R5bGUsIC4uLnsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktZm9udC1jYWxlbmRlclwiIHN0eWxlPXt0aGlzLnByb3BzLm1haW5Cb2R5U3R5bGV9ID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dUaXRsZSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3RoaXMucHJvcHMudGl0bGVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17dGhpcy5wZXJNb250aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd0xlZnRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCAzMCBMOCAxNiAyMCAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsaWNrVGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ueyBtaW5XaWR0aDogJzIwJScgfSwgLi4udGhpcy5wcm9wcy5jbGlja2FibGVTdHlsZSB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5jdXJyWWVhcil9IC08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPVwibW9udGhBbmltXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFuZ2VBbmltICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiA+e3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmN1cnJNb250aCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZmxleC1ub3dyYXAgZmxleC1yb3ctcmV2ZXJlc2VcIlxyXG4gICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJDYWxlbmRlclN0eWxlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5oZWFkZXIpLm1hcCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJDYWxlbmRlckl0ZW1TdHlsZX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtrICsgMTAwICsgMTAwICsgJzsnfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuaGVhZGVyW2tdKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICB7dGhpcy5tQ3JlYXRvcih7fSwgdGhpcy5zdGF0ZS5zdGFydERheSl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17dGhpcy5wcm9wcy5mb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLnRvZGF5QnV0dG9uU3R5bGUsIC4uLiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5JbmxpbmVDYWxlbmRlci5wcm9wVHlwZXMgPSB7XHJcbiAgZGVmRGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgZGVmWWVhcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGRlZk1vbnRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgaW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldEN1cnJlbnRZZWFyOlByb3BUeXBlcy5mdW5jLFxyXG4gIGNsaWNrVGl0bGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGFjdGlvblN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgbW92ZUFjdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICBpc0ZpdmVSb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGJlZm9yZVRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VsZWN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJJdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBtYWluQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93UmlnaHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhcnJvd0xlZnRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjbGlja2FibGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0aXRsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgdG9kYXlCdXR0b25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGN1c3RvbUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB1c2VSYWl0b1NpemluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcmFpdG9UaXRsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b1RhYmxlSGVkZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvQm9keTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b0Zvb3RlcjogUHJvcFR5cGVzLm51bWJlcixcclxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dGb290ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dCdXR0b25Ub2RheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9udGhBbmltOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbklubGluZUNhbGVuZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnB1dCh2YWwpIHsgfSxcclxuICBcclxuICBnZXRDdXJyZW50WWVhcih2YWwpIHsgfSxcclxuICBjbGlja1RpdGxlKCkge1xyXG5cclxuICB9LFxyXG4gIGRlZkRheTogXCJcIixcclxuICBkZWZZZWFyOiBcIlwiLFxyXG4gIGRlZk1vbnRoOiBcIlwiLFxyXG4gIGFjdGlvblN0ZXA6IDEsXHJcbiAgbW92ZUFjdGlvbjoge1xyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgc3RlcDogMSxcclxuICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAganVtcDoge31cclxuICB9LFxyXG4gIGlzRml2ZVJvdzogZmFsc2UsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFwic2VsZWN0ZWRcIixcclxuICB0b2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZTg0NTQ1XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGFkYjVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCAjZTg0NTQ1XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIiBhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICNlZWVlZWVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYmVmb3JlVG9kYXlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICMyMjI4MzFcIixcclxuICAgIGNvbG9yOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIHNlbGVjdFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIm9yYW5nZXJlZFwiLFxyXG5cclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZToge1xyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZToge1xyXG4gICAgLy8gYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJTdHlsZToge1xyXG4gICAgbWFyZ2luOiBcIjAgLTE0cHhcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgIG1hcmdpbjogXCJhdXRvXCJcclxuICB9LFxyXG4gIG1haW5Cb2R5U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZWVlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxyXG4gICAgcGFkZGluZzogXCIxNXB4XCJcclxuICB9LFxyXG4gIGFycm93UmlnaHRTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBhcnJvd0xlZnRTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBjbGlja2FibGVTdHlsZToge1xyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgXCJXZWJraXRVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJNb3pVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJtc1VzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgfSxcclxuICB0aXRsZVN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiLTEwcHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBoZWFkZXJDYWxlbmRlclN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMjI4MzFcIixcclxuICAgIG1hcmdpbjogXCIwIC0xNHB4XCJcclxuICB9LFxyXG4gIGZvb3RlclN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTRweFwiXHJcbiAgfSxcclxuICB0b2RheUJ1dHRvblN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBvdXRsaW5lOiBcIm5vbmUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICB9LFxyXG4gIGN1c3RvbUZvcm1hdDogXCJqWVlZWS9qTS9qRFwiLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gIHJhaXRvVGl0bGU6IDEsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogMSxcclxuICByYWl0b0JvZHk6IDcsXHJcbiAgcmFpdG9Gb290ZXI6IDEsXHJcbiAgc2hvd1RpdGxlOiB0cnVlLFxyXG4gIHNob3dGb290ZXI6IHRydWUsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiB0cnVlLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiB0cnVlLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFwic2xpZGUtZmFkZVwiLFxyXG4gIG1vbnRoQW5pbTogXCJmYWRlXCIsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogXCLYp9mF2LHZiNiyXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElubGluZUNhbGVuZGVyO1xyXG4iXX0=