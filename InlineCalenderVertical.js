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

var InlineCalenderVertical =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InlineCalenderVertical, _React$Component);

  function InlineCalenderVertical(props) {
    var _this;

    _classCallCheck(this, InlineCalenderVertical);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineCalenderVertical).call(this, props));
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
        0: "شنبه",
        1: "یکشنبه",
        2: "دوشنبه",
        3: "سه‌شنبه",
        4: "چهارشنبه",
        5: "پنجشنبه",
        6: "جمعه"
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

  _createClass(InlineCalenderVertical, [{
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
          className: "d-flex flex-column  flex-nowrap ",
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
          className: "d-flex w-100 flex-row-reverse overflow-hidden",
          style: {
            height: this.props.raitoBody * 10 + '%'
          }
        }, _react.default.createElement("div", {
          className: "d-flex flex-column justify-content-between  flex-nowrap  overflow-hidden",
          style: this.props.headerCalenderStyle
        }, Object.keys(this.state.header).map(function (k) {
          return _react.default.createElement("div", {
            className: "d-flex justify-content-end  align-items-center",
            style: _this3.props.headerCalenderItemStyle,
            key: k + 100 + 100 + ';'
          }, _this3.convertEnToFaDig(_this3.state.header[k]));
        })), this.mCreator({}, this.state.startDay)), this.props.showFooter && _react.default.createElement("div", {
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
          className: "d-flex flex-column justify-content-between  flex-nowrap  overflow-hidden",
          style: this.props.headerCalenderStyle
        }, Object.keys(this.state.header).map(function (k) {
          return _react.default.createElement("div", {
            className: "d-flex justify-content-end  align-items-center",
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

  return InlineCalenderVertical;
}(_react.default.Component);

InlineCalenderVertical.propTypes = {
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
InlineCalenderVertical.defaultProps = {
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
    flexGrow: '1' // margin: "0 -14px"

  },
  headerCalenderItemStyle: {
    color: "#eeeeee" // margin: "auto"

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
    // marginTop: "-10px",
    background: "#393e46",
    color: "#eeeeee"
  },
  headerCalenderStyle: {
    background: "#222831",
    padding: '0 5px',
    // flexGrow: '1',
    margin: "0px 2px"
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
  raitoBody: 8,
  raitoFooter: 1,
  showTitle: true,
  showFooter: true,
  showButtonToday: true,
  showSelectedValue: true,
  calenderItemAnim: "slide-fade",
  monthAnim: "fade",
  todayButtonTitle: "امروز"
};
var _default = InlineCalenderVertical;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvSW5saW5lQ2FsZW5kZXJWZXJ0aWNhbC5qc3giXSwibmFtZXMiOlsiSW5saW5lQ2FsZW5kZXJWZXJ0aWNhbCIsInByb3BzIiwic3RhdGUiLCJ0b3RhbE1haW5Sb3ciLCJpc0ZpdmVSb3ciLCJmaXJzdFJvd0xhc3REYXlzIiwibW92ZUFjdGlvbiIsImFjdGlvbiIsInN0ZXAiLCJ1c2VKdW1wIiwianVtcCIsImhlYWRlciIsIm1vbnRoSGVhZGVyIiwiZGVmRm9ybWF0Iiwic3RhcnREYXlNb21lbnQiLCJjaGFuZ2VBbmltIiwiY3VyclllYXIiLCJ0b2RheSIsInRvZGF5RGF5IiwidG9kYXlNb250aCIsInRvZGF5WWVhciIsInNlbGVjdGVkWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZERheSIsImN1cnJNb250aCIsInN0YXJ0RGF5aXNCZWZvcmVUb2RheSIsIm1vbWVudE9iamVjdCIsInN0YXJ0RGF5IiwiZW5kRGF5Iiwic0RheSIsImlucHV0VmFsdWUiLCJsYXN0U2VsZWN0ZWROb2RlIiwibGFzdFNlbGVjdGVkTm9kZUNsYXNzIiwic3R5bGVDZWxsQ2FsMSIsImJpbmQiLCJjaGFuZ2VNb250aCIsIm5leHRNb250aCIsInBlck1vbnRoIiwic2VsZWNWYWx1ZXMiLCJnb1RvZGF5Iiwic2V0RGF0ZXIiLCJjb252IiwiY29udmVydEVuVG9GYURpZyIsInNldFN0YXRvcnMiLCJ3YXRjaE1vdmVBY3Rpb24iLCJzdHlsZVN0dGVyIiwiY2xlYXJTdHRlciIsIm5ld1ZhbCIsImFjdGlvbk1ldGhvZCIsInBhcmFtQWMiLCJzZXRTdGF0ZSIsInN0eWxlSCIsInN0YXR0dHQiLCJwYXJlbnROb2RlIiwiaiIsImlubmVyTm9kZSIsImkiLCJwdXNoIiwiJGV2ZW50IiwiY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZSIsImNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlIiwicm93Q2FsZW5kZXJTdHlsZSIsInZhbCIsInYiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ5ZWFyIiwiYWRkIiwibW9udGgiLCJkYXkiLCJ0ZXh0IiwibGVuZ3RoIiwibnMiLCJvdXQiLCJjIiwiY2hhckF0IiwibnVtcCIsInBhcnNlSW50IiwiZm9ybWF0IiwidmFsdWUiLCJkZGQiLCJkZWZZZWFyIiwialllYXIiLCJnZXRDdXJyZW50WWVhciIsImRlZk1vbnRoIiwiak1vbnRoIiwiZGVmRGF5IiwiaW5kZXgiLCJzZWxlY3RTdHlsZSIsInRvZGF5U3R5bGUiLCJiZWZvcmVUb2RheVN0eWxlIiwiYWZ0ZXJUb2RheVN0eWxlIiwiaXNNb3VudGVkIiwic2VsZiIsInNldFRpbWVvdXQiLCJpc0FmdGVyIiwic3RhcnRPZiIsImVuZE9mIiwiZSIsIm9iIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInRhcmdldCIsImN1c3RvbUZvcm1hdCIsImlucHV0IiwibmV4dFByb3BzIiwidXNlUmFpdG9TaXppbmciLCJtYWluQm9keVN0eWxlIiwic2hvd1RpdGxlIiwidGl0bGVTdHlsZSIsInJhaXRvVGl0bGUiLCJjdXJzb3IiLCJhcnJvd0xlZnRTdHlsZSIsImNsaWNrVGl0bGUiLCJtaW5XaWR0aCIsImNsaWNrYWJsZVN0eWxlIiwiYXJyb3dSaWdodFN0eWxlIiwiaGVpZ2h0IiwicmFpdG9Cb2R5IiwiaGVhZGVyQ2FsZW5kZXJTdHlsZSIsIm1hcCIsImsiLCJoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZSIsIm1DcmVhdG9yIiwic2hvd0Zvb3RlciIsImZvb3RlclN0eWxlIiwicmFpdG9Gb290ZXIiLCJzaG93QnV0dG9uVG9kYXkiLCJ0b2RheUJ1dHRvblN0eWxlIiwidG9kYXlCdXR0b25UaXRsZSIsInNob3dTZWxlY3RlZFZhbHVlIiwic2hvd1NlbGVjdGVkVmFsdWVTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImFjdGlvblN0ZXAiLCJvYmplY3QiLCJib29sIiwic2VsZWN0ZWRDbGFzc05hbWUiLCJjYWxlbmRlckNlbGxCb2R5U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsInJhaXRvVGFibGVIZWRlYXIiLCJjYWxlbmRlckl0ZW1BbmltIiwibW9udGhBbmltIiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJtYXJnaW4iLCJmbGV4R3JvdyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJvdXRsaW5lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxzQjs7Ozs7QUFDSixrQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnR0FBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxZQUFZLEVBQUUsTUFBS0YsS0FBTCxDQUFXRyxTQUFYLEdBQXVCLENBQXZCLEdBQTJCLENBRDlCO0FBRVhDLE1BQUFBLGdCQUFnQixFQUFFLEVBRlA7QUFHWEMsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxFQURFO0FBRVZDLFFBQUFBLElBQUksRUFBRSxDQUZJO0FBR1ZDLFFBQUFBLE9BQU8sRUFBRSxLQUhDO0FBSVZDLFFBQUFBLElBQUksRUFBRTtBQUpJLE9BSEQ7QUFTWEMsTUFBQUEsTUFBTSxFQUFFO0FBQ04sV0FBRyxNQURHO0FBRU4sV0FBRyxRQUZHO0FBR04sV0FBRyxRQUhHO0FBSU4sV0FBRyxTQUpHO0FBS04sV0FBRyxVQUxHO0FBTU4sV0FBRyxTQU5HO0FBT04sV0FBRztBQVBHLE9BVEc7QUFrQlhDLE1BQUFBLFdBQVcsRUFBRTtBQUNYLFdBQUcsU0FEUTtBQUVYLFdBQUcsVUFGUTtBQUdYLFdBQUcsT0FIUTtBQUlYLFdBQUcsS0FKUTtBQUtYLFdB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QUNuQmdDLElBQUFBLFVBQVUsRUFBRSxTQURPO0FBRW5CUSxJQUFBQSxPQUFPLEVBQUMsT0FGVztBQUduQjtBQUNBSixJQUFBQSxNQUFNLEVBQUU7QUFKVyxHQWpHZTtBQXVHcEM5QixFQUFBQSxXQUFXLEVBQUU7QUFDWG1DLElBQUFBLFNBQVMsRUFBRTtBQURBLEdBdkd1QjtBQTBHcENoQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQnNCLElBQUFBLEtBQUssRUFBRSxTQURTO0FBRWhCVyxJQUFBQSxPQUFPLEVBQUU7QUFGTyxHQTFHa0I7QUE4R3BDOUIsRUFBQUEsc0JBQXNCLEVBQUU7QUFDdEJtQixJQUFBQSxLQUFLLEVBQUUsU0FEZTtBQUV0QlksSUFBQUEsT0FBTyxFQUFFLE1BRmE7QUFHdEJDLElBQUFBLFVBQVUsRUFBRTtBQUhVLEdBOUdZO0FBbUhwQzVELEVBQUFBLFlBQVksRUFBRSxhQW5Ic0I7QUFvSHBDRyxFQUFBQSxjQUFjLEVBQUUsSUFwSG9CO0FBcUhwQ0ksRUFBQUEsVUFBVSxFQUFFLENBckh3QjtBQXNIcENvQyxFQUFBQSxnQkFBZ0IsRUFBRSxDQXRIa0I7QUF1SHBDNUIsRUFBQUEsU0FBUyxFQUFFLENBdkh5QjtBQXdIcENRLEVBQUFBLFdBQVcsRUFBRSxDQXhIdUI7QUF5SHBDbEIsRUFBQUEsU0FBUyxFQUFFLElBekh5QjtBQTBIcENnQixFQUFBQSxVQUFVLEVBQUUsSUExSHdCO0FBMkhwQ0csRUFBQUEsZUFBZSxFQUFFLElBM0htQjtBQTRIcENHLEVBQUFBLGlCQUFpQixFQUFFLElBNUhpQjtBQTZIcENpQixFQUFBQSxnQkFBZ0IsRUFBRSxZQTdIa0I7QUE4SHBDQyxFQUFBQSxTQUFTLEVBQUUsTUE5SHlCO0FBK0hwQ25CLEVBQUFBLGdCQUFnQixFQUFFO0FBL0hrQixDQUF0QztlQWtJZW5JLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50LWphbGFhbGlcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICcuL0lubGluZUNhbGVuZGVyLmNzcyc7XHJcblxyXG5jbGFzcyBJbmxpbmVDYWxlbmRlclZlcnRpY2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG90YWxNYWluUm93OiB0aGlzLnByb3BzLmlzRml2ZVJvdyA/IDUgOiA2LFxyXG4gICAgICBmaXJzdFJvd0xhc3REYXlzOiAyOSxcclxuICAgICAgbW92ZUFjdGlvbjoge1xyXG4gICAgICAgIGFjdGlvbjogXCJcIixcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAgICAgIGp1bXA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIDA6IFwi2LTZhtio2YdcIixcclxuICAgICAgICAxOiBcItuM2qnYtNmG2KjZh1wiLFxyXG4gICAgICAgIDI6IFwi2K/ZiNi02YbYqNmHXCIsXHJcbiAgICAgICAgMzogXCLYs9mH4oCM2LTZhtio2YdcIixcclxuICAgICAgICA0OiBcItqG2YfYp9ix2LTZhtio2YdcIixcclxuICAgICAgICA1OiBcItm+2YbYrNi02YbYqNmHXCIsXHJcbiAgICAgICAgNjogXCLYrNmF2LnZh1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRoSGVhZGVyOiB7XHJcbiAgICAgICAgMTogXCLZgdix2YjYsdiv24zZhlwiLFxyXG4gICAgICAgIDI6IFwi2KfYsdiv24zYqNmH2LTYqlwiLFxyXG4gICAgICAgIDM6IFwi2K7Ysdiv2KfYr1wiLFxyXG4gICAgICAgIDQ6IFwi2KrbjNixXCIsXHJcbiAgICAgICAgNTogXCLZhdix2K/Yp9ivXCIsXHJcbiAgICAgICAgNjogXCLYtNmH2LHbjNmI2LFcIixcclxuICAgICAgICA3OiBcItmF2YfYsVwiLFxyXG4gICAgICAgIDg6IFwi2KLYqNin2YZcIixcclxuICAgICAgICA5OiBcItii2LDYsVwiLFxyXG4gICAgICAgIDEwOiBcItiv24xcIixcclxuICAgICAgICAxMTogXCLYqNmH2YXZhlwiLFxyXG4gICAgICAgIDEyOiBcItin2LPZgdmG2K9cIlxyXG4gICAgICB9LFxyXG4gICAgICBkZWZGb3JtYXQ6IFwiallZWVktak0tXCIsXHJcbiAgICAgIHN0YXJ0RGF5TW9tZW50OiBudWxsLFxyXG4gICAgICBjaGFuZ2VBbmltOiB0cnVlLFxyXG4gICAgICBjdXJyWWVhcjogXCJcIixcclxuICAgICAgdG9kYXk6IFwiXCIsXHJcbiAgICAgIHRvZGF5RGF5OiAxLFxyXG4gICAgICB0b2RheU1vbnRoOiBcIlwiLFxyXG4gICAgICB0b2RheVllYXI6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkWWVhcjogXCJcIixcclxuICAgICAgc2VsZWN0ZWRNb250aDogXCJcIixcclxuICAgICAgc2VsZWN0ZWREYXk6IFwiXCIsXHJcbiAgICAgIGN1cnJNb250aDogXCJcIixcclxuICAgICAgc3RhcnREYXlpc0JlZm9yZVRvZGF5OiBmYWxzZSxcclxuICAgICAgbW9tZW50T2JqZWN0OiBudWxsLFxyXG4gICAgICBzdGFydERheTogMSxcclxuICAgICAgZW5kRGF5OiAyOSxcclxuICAgICAgc0RheTogMCxcclxuICAgICAgaW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZTogbnVsbCxcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZUNsYXNzOiBcIlwiXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdHlsZUNlbGxDYWwxID0gdGhpcy5zdHlsZUNlbGxDYWwxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5uZXh0TW9udGggPSB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wZXJNb250aCA9IHRoaXMucGVyTW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VsZWNWYWx1ZXMgPSB0aGlzLnNlbGVjVmFsdWVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdvVG9kYXkgPSB0aGlzLmdvVG9kYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0RGF0ZXIgPSB0aGlzLnNldERhdGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbnYgPSB0aGlzLmNvbnYuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udmVydEVuVG9GYURpZyA9IHRoaXMuY29udmVydEVuVG9GYURpZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0b3JzID0gdGhpcy5zZXRTdGF0b3JzLmJpbmQodGhpcylcclxuICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uID0gdGhpcy53YXRjaE1vdmVBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgXHJcbiAgICB0aGlzLnN0eWxlU3R0ZXIgPSB0aGlzLnN0eWxlU3R0ZXIuYmluZCh0aGlzKTtcclxuICAgIFxyXG4gICAgdGhpcy5jbGVhclN0dGVyID0gdGhpcy5jbGVhclN0dGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHNldFN0YXRvcnMobmV3VmFsLCBhY3Rpb25NZXRob2QgPSBudWxsLCBwYXJhbUFjKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgLi4ubmV3VmFsXHJcblxyXG4gICAgICB9KVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uTWV0aG9kICE9PSBudWxsKSB7XHJcbiAgICAgICAgYWN0aW9uTWV0aG9kKHBhcmFtQWMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG1DcmVhdG9yKHN0eWxlSCwgc3RhdHR0dCkge1xyXG4gICAgbGV0IHBhcmVudE5vZGUgPSBbXVxyXG4gICAgXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdzsgaisrKSB7XHJcblxyXG4gICAgICBsZXQgaW5uZXJOb2RlID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaiA9PSAxICYmXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmVuZERheSA+PSB0aGlzLnN0YXRlLmZpcnN0Um93TGFzdERheXMgJiZcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZmlyc3RSb3dMYXN0RGF5cyArIGkgPD0gdGhpcy5zdGF0ZS5lbmREYXkgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuaXNGaXZlUm93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXModGhpcy5zdGF0ZS5maXJzdFJvd0xhc3REYXlzICsgaSwgJGV2ZW50KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3R5bGVDZWxsQ2FsMSh0aGlzLnN0YXRlLmZpcnN0Um93TGFzdERheXMgKyBpKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5maXJzdFJvd0xhc3REYXlzICsgaSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9IGVsc2UgaWYgKGogPT0gMSAmJiBpIC0gMSA+PSB0aGlzLnN0YXRlLnN0YXJ0RGF5KSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXMoaSAtIHRoaXMuc3RhdGUuc3RhcnREYXksICRldmVudCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0eWxlQ2VsbENhbDEoaSAtIHRoaXMuc3RhdGUuc3RhcnREYXkpLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZyhpIC0gdGhpcy5zdGF0ZS5zdGFydERheSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfSBlbHNlIGlmIChqID09IDEpIHtcclxuICAgICAgICAgIGlubmVyTm9kZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9e3RoaXMucHJvcHMuY2FsZW5kZXJJdGVtQW5pbX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLmNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfSBlbHNlIGlmIChqID4gMSAmJiAoaiAtIDEpICogNyArIGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5IDw9IHRoaXMuc3RhdGUuZW5kRGF5KSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXMoKGogLSAxKSAqIDcgKyBpIC0gdGhpcy5zdGF0ZS5zdGFydERheSwgJGV2ZW50KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3R5bGVDZWxsQ2FsMSgoaiAtIDEpICogNyArIGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5KSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcoKGogLSAxKSAqIDcgKyBpIC0gdGhpcy5zdGF0ZS5zdGFydERheSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5jYWxlbmRlckNlbGxOb1RleHRTdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyZW50Tm9kZS5wdXNoKDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gIGZsZXgtbm93cmFwIFwiXHJcbiAgICAgICAga2V5PXsnamonICsgan1cclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMucm93Q2FsZW5kZXJTdHlsZSwgLi4uc3R5bGVIIH1cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7aW5uZXJOb2RlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnROb2RlXHJcbiAgfVxyXG4gIHdhdGNoTW92ZUFjdGlvbih2YWwpIHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICB2YWwgIT09IG51bGwgJiZcclxuICAgICAgdHlwZW9mIHZhbC5hY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdmFsLmFjdGlvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAodHlwZW9mIHZhbC51c2VKdW1wID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdmFsLnVzZUp1bXAgPT09IG51bGwgfHxcclxuICAgICAgICAhdmFsLnVzZUp1bXApXHJcbiAgICApIHtcclxuICAgICAgbGV0IHYgPSB2YWwuYWN0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB2ID09IFwiblwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5lXCIgfHxcclxuICAgICAgICB2ID09IFwibmV4XCIgfHxcclxuICAgICAgICB2ID09IFwibmV4dFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwiblwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmV4dFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91c1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpb3VcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmVcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwclwiIHx8XHJcbiAgICAgICAgdiA9PSBcInBcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb3VzXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwXCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5wZXJNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwidG9kYXlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b2RhXCIgfHxcclxuICAgICAgICB2ID09IFwidG9kXCIgfHxcclxuICAgICAgICB2ID09IFwidG9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0XCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RheVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZ29Ub2RheSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGVvZiB2YWwudXNlSnVtcCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICE9PSBudWxsICYmXHJcbiAgICAgICAgdmFsLnVzZUp1bXAgJiZcclxuICAgICAgICB0eXBlb2YgdmFsLmp1bXAgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICB2YWwuanVtcCAhPT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgICAgICBpZiAodHlwZW9mIHZhbC5qdW1wLnllYXIgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAueWVhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC55ZWFyLCBcImpZZWFyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0eXBlb2YgdmFsLmp1bXAubW9udGggIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgIHZhbC5qdW1wLm1vbnRoICE9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLm1vbnRoLCBcImpNb250aFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwuanVtcC5kYXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAuZGF5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLmRheSwgXCJkYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgICBtb21lbnRPYmplY3RcclxuICAgICAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb252ZXJ0RW5Ub0ZhRGlnKHZhbCkge1xyXG4gICAgbGV0IHRleHQgPSB2YWwgKyBcIlwiO1xyXG4gICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgbGV0IG51bXAgPSBwYXJzZUludChjKTtcclxuICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgIG91dCArPSBucy5jaGFyQXQobnVtcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3V0ICs9IGM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IG1vbWVudCgpO1xyXG4gICAgbGV0IHRvZGF5ID0gdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZLU0tRFwiKSk7XHJcbiAgICBsZXQgZGVmRm9ybWF0ID0gbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZL2pNL1wiKTtcclxuICAgIGxldCB0b2RheURheSA9IHBhcnNlSW50KHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiakRcIikpKTtcclxuICAgIGxldCB0b2RheU1vbnRoID0gdGhpcy5zdGF0ZS5tb250aEhlYWRlcltcclxuICAgICAgdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJqTVwiKSlcclxuICAgIF07XHJcbiAgICBsZXQgdG9kYXlZZWFyID0gbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgIHZhciBucyA9IFwi27Dbsduy27PbtNu127bbt9u427lcIjtcclxuICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gbnMuaW5kZXhPZih0ZXh0LmNoYXJBdChpKSk7XHJcbiAgICAgICAgbGV0IG51bXAgPSBwYXJzZUludChjKTtcclxuICAgICAgICBpZiAobnVtcCA+PSAwKSB7XHJcbiAgICAgICAgICBvdXQgKz0gYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3V0ICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgZGRkID0gbW9tZW50KG91dCwgXCJqWVlZWS9qTS9qRFwiKTtcclxuICAgICAgbGV0IHNlbGVjdGVkTW9udGggPSB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW3RoaXMuY29udihkZGQuZm9ybWF0KFwiak1cIikpXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IGRkZC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuXHJcbiAgICAgIGxldCBzZWxlY3RlZERheSA9IGRkZC5mb3JtYXQoXCJqRFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZE1vbnRoLFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgICBzZWxlY3RlZERheSxcclxuICAgICAgfSlcclxuICAgICAgbW9tZW50T2JqZWN0ID0gZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuZGVmWWVhciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmRlZlllYXIgKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSAmJiBwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpID49IDApXHJcbiAgICApIHtcclxuICAgICAgbW9tZW50T2JqZWN0LmpZZWFyKHBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoeyBjdXJyWWVhcjogbW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpIH0pXHJcbiAgICAgIFxyXG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50WWVhcihtb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVlcIikpXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmRlZk1vbnRoICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmTW9udGggKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCkgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCkgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3Quak1vbnRoKHBhcnNlSW50KHRoaXMucHJvcHMuZGVmTW9udGggLSAxKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgY3Vyck1vbnRoOiB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcImpNXCIpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5kZWZEYXkgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdGhpcy5wcm9wcy5kZWZEYXkgKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZEYXkpICYmIHBhcnNlSW50KHRoaXMucHJvcHMuZGVmRGF5KSA+PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIG1vbWVudE9iamVjdC5kYXkocGFyc2VJbnQodGhpcy5wcm9wcy5kZWZEYXkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgdG9kYXksXHJcbiAgICAgIGRlZkZvcm1hdCxcclxuICAgICAgdG9kYXlEYXksXHJcbiAgICAgIHRvZGF5TW9udGgsXHJcbiAgICAgIHRvZGF5WWVhclxyXG5cclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIHRydWUpXHJcbiAgfVxyXG4gIHN0eWxlQ2VsbENhbDEoaW5kZXgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIgPT0gdGhpcy5jb252KHRoaXMuc3RhdGUuY3VyclllYXIpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuY3Vyck1vbnRoID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRNb250aCAmJlxyXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5ID09IGluZGV4XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0U3R5bGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyWWVhciA9PSB0aGlzLnN0YXRlLnRvZGF5WWVhciAmJlxyXG4gICAgICAgIHRoaXMuc3RhdGUuY3Vyck1vbnRoID09IHRoaXMuc3RhdGUudG9kYXlNb250aFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RheURheSA9PSBpbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudG9kYXlTdHlsZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudG9kYXlEYXkgPj0gaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJlZm9yZVRvZGF5U3R5bGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFmdGVyVG9kYXlTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zdGFydERheWlzQmVmb3JlVG9kYXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVUb2RheVN0eWxlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFmdGVyVG9kYXlTdHlsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3R5bGVDZWxsQ2FsKGluZGV4KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyWWVhciA9PSB0aGlzLnN0YXRlLnRvZGF5WWVhciAmJiB0aGlzLnN0YXRlLmN1cnJNb250aCA9PSB0aGlzLnN0YXRlLnRvZGF5TW9udGgpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudG9kYXlEYXkgPT0gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSB0b2RheVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudG9kYXlEYXkgPj0gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSBiZWZvcmUtdG9kYXlcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSBhZnRlci10b2RheVwiO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc3RhcnREYXlpc0JlZm9yZVRvZGF5KSB7XHJcbiAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGJlZm9yZS10b2RheVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYWZ0ZXItdG9kYXlcIjtcclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlTW9udGgoaXNNb3VudGVkID0gZmFsc2UpIHtcclxuICAgIGlmICghaXNNb3VudGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7IGNoYW5nZUFuaW06IGZhbHNlIH0pXHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0b3JzKHsgY2hhbmdlQW5pbTogdHJ1ZSB9KVxyXG4gICAgICB9LCA1MDApO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyID09IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpICYmXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGggPT1cclxuICAgICAgICAgIHRoaXMuc3RhdGUubW9udGhIZWFkZXJbdGhpcy5jb252KHRoaXMuc3RhdGUubW9tZW50T2JqZWN0LmZvcm1hdChcImpNXCIpKV1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuc3R5bGVTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc3RhcnREYXlpc0JlZm9yZVRvZGF5ID0gbW9tZW50KHRoaXMuc3RhdGUudG9kYXkpLmlzQWZ0ZXIoXHJcbiAgICAgIHRoaXMuY29udih0aGlzLnN0YXRlLm1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZL00vRFwiKSlcclxuICAgICk7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5zdGFydE9mKFwiak1vbnRoXCIpO1xyXG4gICAgbGV0IHN0YXJ0RGF5TW9tZW50ID0gbW9tZW50T2JqZWN0O1xyXG4gICAgbGV0IHN0YXJ0RGF5ID0gcGFyc2VJbnQodGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJlXCIpKSkrMTtcclxuICAgIGlmKHN0YXJ0RGF5Pj03KXtcclxuICAgICAgc3RhcnREYXk9MFxyXG4gICAgfVxyXG4gICAgbGV0IGZpcnN0Um93TGFzdERheXMgPSA0ICogNyArICg3IC0gc3RhcnREYXkpXHJcbiAgICBtb21lbnRPYmplY3QuZW5kT2YoXCJqTW9udGhcIik7XHJcbiAgICBsZXQgZW5kRGF5ID0gcGFyc2VJbnQodGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJqRFwiKSkpO1xyXG4gICAgbGV0IGN1cnJNb250aCA9IHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgIHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiak1cIikpXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBjdXJyWWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuICAgIGxldCB0b3RhbE1haW5Sb3cgPSA1XHJcbiAgICBpZiAoIXRoaXMuaXNGaXZlUm93KSB7XHJcbiAgICAgIGlmICh0aGlzLmVuZERheSA+IGZpcnN0Um93TGFzdERheXMpIHtcclxuICAgICAgICB0b3RhbE1haW5Sb3cgPSA2XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG90YWxNYWluUm93ID0gNVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdG90YWxNYWluUm93LFxyXG4gICAgICBmaXJzdFJvd0xhc3REYXlzLFxyXG4gICAgICBtb21lbnRPYmplY3QsXHJcbiAgICAgIHN0YXJ0RGF5aXNCZWZvcmVUb2RheSxcclxuICAgICAgc3RhcnREYXlNb21lbnQsXHJcbiAgICAgIHN0YXJ0RGF5LFxyXG4gICAgICBlbmREYXksXHJcbiAgICAgIGN1cnJNb250aCxcclxuICAgICAgY3VyclllYXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50WWVhcihjdXJyWWVhcilcclxuICB9XHJcbiAgbmV4dE1vbnRoKCkge1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICBtb21lbnRPYmplY3QuYWRkKDEsIFwiak1vbnRoXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICBwZXJNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgtMSwgXCJqTW9udGhcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHN0eWxlU3R0ZXIoZSxvYj17XHJcbiAgICAuLi50aGlzLnByb3BzLnNlbGVjdFN0eWxlfSl7XHJcbiAgICBPYmplY3Qua2V5cyhvYikuZm9yRWFjaCh2PT57XHJcblxyXG4gICAgICBlLnN0eWxlW3ZdPW9iW3ZdXHJcbiAgICB9KVxyXG4gIH1cclxuICBjbGVhclN0dGVyKGUpe1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RTdHlsZSkuZm9yRWFjaCh2PT57XHJcbiAgICAgIGUuc3R5bGVbdl09JydcclxuICAgIH0pXHJcbiAgfVxyXG4gIHNlbGVjVmFsdWVzKGluZGV4LCBlKSB7XHJcbiAgICBsZXQgbGFzdFNlbGVjdGVkTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSA9PSBudWxsKSB7XHJcbiAgICAgIGxldCBpbnB1dFZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudFxyXG4gICAgICAgIC5zdGFydE9mKFwiak1vbnRoXCIpXHJcbiAgICAgICAgLmFkZChpbmRleCAtIDEsIFwiZGF5XCIpXHJcbiAgICAgICAgLmZvcm1hdCh0aGlzLnByb3BzLmN1c3RvbUZvcm1hdCk7XHJcbiAgICAgIGxldCBzZWxlY3RlZE1vbnRoID0gdGhpcy5zdGF0ZS5tb250aEhlYWRlcltcclxuICAgICAgICB0aGlzLmNvbnYodGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJqTVwiKSlcclxuICAgICAgXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiallZWVlcIik7XHJcbiAgICAgIGxldCBzZWxlY3RlZERheSA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiakRcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgbGFzdFNlbGVjdGVkTm9kZSxcclxuICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgIHNlbGVjdGVkTW9udGgsXHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyLFxyXG4gICAgICAgIHNlbGVjdGVkRGF5XHJcbiAgICAgIH0sIHRoaXMucHJvcHMuaW5wdXQsIGlucHV0VmFsdWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnRcclxuICAgICAgICAuc3RhcnRPZihcImpNb250aFwiKVxyXG4gICAgICAgIC5hZGQoaW5kZXggLSAxLCBcImRheVwiKVxyXG4gICAgICAgIC5mb3JtYXQodGhpcy5wcm9wcy5jdXN0b21Gb3JtYXQpO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRNb250aCA9IHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiak1cIikpXHJcbiAgICAgIF07XHJcbiAgICAgIGxldCBzZWxlY3RlZFllYXIgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcImpZWVlZXCIpO1xyXG5cclxuICAgICAgbGV0IHNlbGVjdGVkRGF5ID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJqRFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aCxcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgICAgc2VsZWN0ZWREYXlcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCxcclxuICAgICAgICBpbnB1dFZhbHVlKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZVN0dGVyKGxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgfVxyXG4gIGdvVG9kYXkoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZXIoKSB7XHJcbiAgICB0aGlzLnNEYXkgPSB0aGlzLnNEYXkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuc0RheTtcclxuICB9XHJcbiAgY29udih2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gbnMuaW5kZXhPZihjICsgXCJcIik7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnVtcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXQgKz0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAvLyBZb3UgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGNoZWNrIGZpcnN0LCBidXQgaXQgY2FuIGhlbHAgcHJldmVudCBhbiB1bm5lZWRlZCByZW5kZXJcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdmVBY3Rpb24gIT09IG5leHRQcm9wcy5tb3ZlQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uKG5leHRQcm9wcy5tb3ZlQWN0aW9uKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VSYWl0b1NpemluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHctMTAwIGgtMTAwXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRpdGxlU3R5bGUsIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAodGhpcy5wcm9wcy5yYWl0b1RpdGxlICogMTAgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wZXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuY3VyclllYXIpfSAtPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9XCJtb250aEFuaW1cIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFuZ2VBbmltICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPnt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5jdXJyTW9udGgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dSaWdodFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDMwIEwyNCAxNiAxMiAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggdy0xMDAgZmxleC1yb3ctcmV2ZXJzZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLnByb3BzLnJhaXRvQm9keSAqIDEwICsgJyUnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gIGZsZXgtbm93cmFwICBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyQ2FsZW5kZXJTdHlsZX1cclxuXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuaGVhZGVyKS5tYXAoKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCAgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlckNhbGVuZGVySXRlbVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrICsgMTAwICsgMTAwICsgJzsnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5oZWFkZXJba10pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnN0YXRlLnN0YXJ0RGF5KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy5mb290ZXJTdHlsZSwgLi4ueyBoZWlnaHQ6IHRoaXMucHJvcHMucmFpdG9Gb290ZXIgKiAxMCArICclJyB9IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy50b2RheUJ1dHRvblN0eWxlLCAuLi57IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG15LWZvbnQtY2FsZW5kZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfSA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLnRpdGxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e3RoaXMucGVyTW9udGh9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuY3VyclllYXIpfSAtPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPHRyYW5zaXRpb24gbmFtZT1cIm1vbnRoQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhbmdlQW5pbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgPnt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5jdXJyTW9udGgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dSaWdodFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDMwIEwyNCAxNiAxMiAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAgZmxleC1ub3dyYXAgIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlckNhbGVuZGVyU3R5bGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmhlYWRlcikubWFwKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlckNhbGVuZGVySXRlbVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2sgKyAxMDAgKyAxMDAgKyAnOyd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5oZWFkZXJba10pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKHt9LCB0aGlzLnN0YXRlLnN0YXJ0RGF5KX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLmZvb3RlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiYgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4uIHsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbklubGluZUNhbGVuZGVyVmVydGljYWwucHJvcFR5cGVzID0ge1xyXG4gIGRlZkRheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGRlZlllYXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBkZWZNb250aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGlucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRDdXJyZW50WWVhcjpQcm9wVHlwZXMuZnVuYyxcclxuICBjbGlja1RpdGxlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBhY3Rpb25TdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG1vdmVBY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaXNGaXZlUm93OiBQcm9wVHlwZXMuYm9vbCxcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzZWxlY3RlZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFmdGVyVG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBiZWZvcmVUb2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbGVjdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHJvd0NhbGVuZGVySXRlbVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHJvd0NhbGVuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbWFpbkJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhcnJvd1JpZ2h0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYXJyb3dMZWZ0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2xpY2thYmxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgdGl0bGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBoZWFkZXJDYWxlbmRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHRvZGF5QnV0dG9uU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjdXN0b21Gb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdXNlUmFpdG9TaXppbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJhaXRvVGl0bGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b0JvZHk6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9Gb290ZXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc2hvd1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93Rm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93QnV0dG9uVG9kYXk6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjYWxlbmRlckl0ZW1BbmltOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1vbnRoQW5pbTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2RheUJ1dHRvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5JbmxpbmVDYWxlbmRlclZlcnRpY2FsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnB1dCh2YWwpIHsgfSxcclxuICBcclxuICBnZXRDdXJyZW50WWVhcih2YWwpIHsgfSxcclxuICBjbGlja1RpdGxlKCkge1xyXG5cclxuICB9LFxyXG4gIGRlZkRheTogXCJcIixcclxuICBkZWZZZWFyOiBcIlwiLFxyXG4gIGRlZk1vbnRoOiBcIlwiLFxyXG4gIGFjdGlvblN0ZXA6IDEsXHJcbiAgbW92ZUFjdGlvbjoge1xyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgc3RlcDogMSxcclxuICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAganVtcDoge31cclxuICB9LFxyXG4gIGlzRml2ZVJvdzogZmFsc2UsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFwic2VsZWN0ZWRcIixcclxuICB0b2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZTg0NTQ1XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGFkYjVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCAjZTg0NTQ1XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIiBhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICNlZWVlZWVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYmVmb3JlVG9kYXlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICMyMjI4MzFcIixcclxuICAgIGNvbG9yOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIHNlbGVjdFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIm9yYW5nZXJlZFwiLFxyXG5cclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZToge1xyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZToge1xyXG4gICAgLy8gYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJTdHlsZToge1xyXG4gICAgICBmbGV4R3JvdzogJzEnXHJcbiAgICAvLyBtYXJnaW46IFwiMCAtMTRweFwiXHJcbiAgfSxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgLy8gbWFyZ2luOiBcImF1dG9cIlxyXG4gIH0sXHJcbiAgbWFpbkJvZHlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMzkzZTQ2XCIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNlZWVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjE1cHhcIlxyXG4gIH0sXHJcbiAgYXJyb3dSaWdodFN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGFycm93TGVmdFN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGNsaWNrYWJsZVN0eWxlOiB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIHRpdGxlU3R5bGU6IHtcclxuICAgIC8vIG1hcmdpblRvcDogXCItMTBweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMzkzZTQ2XCIsXHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgcGFkZGluZzonMCA1cHgnLFxyXG4gICAgLy8gZmxleEdyb3c6ICcxJyxcclxuICAgIG1hcmdpbjogXCIwcHggMnB4XCJcclxuICB9LFxyXG4gIGZvb3RlclN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTRweFwiXHJcbiAgfSxcclxuICB0b2RheUJ1dHRvblN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBvdXRsaW5lOiBcIm5vbmUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICB9LFxyXG4gIGN1c3RvbUZvcm1hdDogXCJqWVlZWS9qTS9qRFwiLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gIHJhaXRvVGl0bGU6IDEsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogMSxcclxuICByYWl0b0JvZHk6IDgsXHJcbiAgcmFpdG9Gb290ZXI6IDEsXHJcbiAgc2hvd1RpdGxlOiB0cnVlLFxyXG4gIHNob3dGb290ZXI6IHRydWUsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiB0cnVlLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiB0cnVlLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFwic2xpZGUtZmFkZVwiLFxyXG4gIG1vbnRoQW5pbTogXCJmYWRlXCIsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogXCLYp9mF2LHZiNiyXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElubGluZUNhbGVuZGVyVmVydGljYWw7Il19