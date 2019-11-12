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

var TenYearCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TenYearCalender, _React$Component);

  function TenYearCalender(props) {
    var _this;

    _classCallCheck(this, TenYearCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TenYearCalender).call(this, props));
    _this.state = {
      startYear: -1,
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

  _createClass(TenYearCalender, [{
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
              return _this2.selecValues((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 21 + ((j - 1) * _this2.state.totalMainCol + i) * 10 - ((j - 1) * _this2.state.totalMainCol + i) + 1, $event);
            },
            className: "ratio-child",
            style: _objectSpread({}, _this2.styleCellCal1((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 21 + ((j - 1) * _this2.state.totalMainCol + i) * 10 - ((j - 1) * _this2.state.totalMainCol + i) + 1), {}, _this2.props.calenderCellWithTextStyle)
          }, _react.default.createElement("div", {
            className: "d-flex justify-content-center align-items-center h-100 w-100"
          }, _this2.convertEnToFaDig((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 21 + ((j - 1) * _this2.state.totalMainCol + i) * 10 - ((j - 1) * _this2.state.totalMainCol + i) + "-" + ((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 20 + ((j - 1) * _this2.state.totalMainCol + i) * 10 + 10 - ((j - 1) * _this2.state.totalMainCol + i)))))));
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
        var selectedYear = ddd.format("jYYYY");
        this.setStators({
          selectedYear: selectedYear
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

      var b = this.conv(todayYear.substr(0, todayYear.length - 1));
      todayYear = b + "0";
      this.setStators({
        momentObject: momentObject,
        todayYear: todayYear
      }, this.changeMonth, true);
    }
  }, {
    key: "styleCellCal1",
    value: function styleCellCal1(index) {
      if (index == this.state.selectedYear) {
        return this.props.selectStyle;
      } else {
        if (index == this.conv(this.state.todayYear)) {
          return this.props.todayStyle;
        } else if (index < parseInt(this.conv(this.state.todayYear))) {
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

          if (this.conv(this.state.selectedYear) == this.conv(this.state.momentObject.format("jYYYY"))) {
            this.styleStter(this.state.lastSelectedNode);
          } else {
            this.clearStter(this.state.lastSelectedNode);
          }
        }
      }

      var momentObject = this.state.momentObject;
      momentObject.startOf("jMonth");
      var startDayMoment = momentObject;
      momentObject.endOf("jMonth");
      var currYear = momentObject.format("jYYYY");
      var cuurYearString = this.conv(currYear.substr(0, currYear.length - 2));
      var startYear = parseInt(cuurYearString + "00");
      this.setState({
        momentObject: momentObject,
        startDayMoment: startDayMoment,
        cuurYearString: cuurYearString,
        startYear: startYear,
        currYear: currYear
      });
      this.props.getCurrentYear(currYear);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      if (this.state.startYear < 3000) {
        var momentObject = this.state.momentObject;
        momentObject.add(100, "jYear");
        this.setState({
          momentObject: momentObject
        }, this.changeMonth, false);
      }
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      if (this.state.startYear > 150) {
        var momentObject = this.state.momentObject;
        momentObject.add(-100, "jYear");
        this.setState({
          momentObject: momentObject
        }, this.changeMonth, false);
      }
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
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: index,
          selectedYear: index
        }, this.props.input, index);
      } else {
        this.clearStter(this.state.lastSelectedNode);
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: index,
          selectedYear: index
        }, this.props.input, index);
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
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.startYear - 11 + " - " + (this.state.startYear + 110)))), _react.default.createElement("div", {
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
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.startYear - 11 + " - " + (this.state.startYear + 110)))), _react.default.createElement("div", {
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

  return TenYearCalender;
}(_react.default.Component);

TenYearCalender.propTypes = {
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  input: _propTypes.default.func,
  getCurrentYear: _propTypes.default.func,
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
TenYearCalender.defaultProps = {
  input: function input(val) {},
  getCurrentYear: function getCurrentYear(val) {},
  clickTitle: function clickTitle() {},
  defYear: "",
  actionStep: 1,
  moveAction: {
    action: "",
    step: 1,
    useJump: false,
    jump: {}
  },
  isThreeRow: false,
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
  raitoBody: 8,
  raitoFooter: 1,
  showTitle: true,
  showFooter: true,
  showButtonToday: true,
  showSelectedValue: true,
  calenderItemAnim: "slide-fade",
  monthAnim: "fade",
  todayButtonTitle: "سال جاری"
};
var _default = TenYearCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvVGVuWWVhckNhbGVuZGVyLmpzeCJdLCJuYW1lcyI6WyJUZW5ZZWFyQ2FsZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwic3RhcnRZZWFyIiwic2VsZWN0ZWRNb250aE5hbWUiLCJ0b3RhbE1haW5Sb3ciLCJpc1RocmVlUm93IiwidG90YWxNYWluQ29sIiwibW92ZUFjdGlvbiIsImFjdGlvbiIsInN0ZXAiLCJ1c2VKdW1wIiwianVtcCIsIm1vbnRoSGVhZGVyIiwiZGVmRm9ybWF0Iiwic3RhcnREYXlNb21lbnQiLCJjaGFuZ2VBbmltIiwiY3VyclllYXIiLCJ0b2RheSIsInRvZGF5RGF5IiwidG9kYXlNb250aCIsInRvZGF5WWVhciIsInNlbGVjdGVkWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZERheSIsImN1cnJNb250aCIsIm1vbWVudE9iamVjdCIsInNEYXkiLCJpbnB1dFZhbHVlIiwibGFzdFNlbGVjdGVkTm9kZSIsImxhc3RTZWxlY3RlZE5vZGVDbGFzcyIsInN0eWxlQ2VsbENhbDEiLCJiaW5kIiwiY2hhbmdlTW9udGgiLCJuZXh0TW9udGgiLCJwZXJNb250aCIsInNlbGVjVmFsdWVzIiwiZ29Ub2RheSIsInNldERhdGVyIiwiY29udiIsImNvbnZlcnRFblRvRmFEaWciLCJzZXRTdGF0b3JzIiwid2F0Y2hNb3ZlQWN0aW9uIiwic3R5bGVTdHRlciIsImNsZWFyU3R0ZXIiLCJuZXdWYWwiLCJhY3Rpb25NZXRob2QiLCJwYXJhbUFjIiwic2V0U3RhdGUiLCJzdHlsZUgiLCJzdGF0dHR0IiwicGFyZW50Tm9kZSIsImoiLCJpbm5lck5vZGUiLCJpIiwicHVzaCIsIiRldmVudCIsImNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGUiLCJyb3dDYWxlbmRlclN0eWxlIiwidmFsIiwidiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInllYXIiLCJhZGQiLCJtb250aCIsImRheSIsInRleHQiLCJsZW5ndGgiLCJucyIsIm91dCIsImMiLCJjaGFyQXQiLCJudW1wIiwicGFyc2VJbnQiLCJmb3JtYXQiLCJ2YWx1ZSIsImRkZCIsImpZZWFyIiwiZGVmWWVhciIsImdldEN1cnJlbnRZZWFyIiwiYiIsInN1YnN0ciIsImluZGV4Iiwic2VsZWN0U3R5bGUiLCJ0b2RheVN0eWxlIiwiYmVmb3JlVG9kYXlTdHlsZSIsImFmdGVyVG9kYXlTdHlsZSIsInN0YXJ0RGF5aXNCZWZvcmVUb2RheSIsImlzTW91bnRlZCIsInNlbGYiLCJzZXRUaW1lb3V0Iiwic3RhcnRPZiIsImVuZE9mIiwiY3V1clllYXJTdHJpbmciLCJlIiwib2IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInN0eWxlIiwidGFyZ2V0IiwiaW5wdXQiLCJuZXh0UHJvcHMiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJzaG93VGl0bGUiLCJ0aXRsZVN0eWxlIiwicmFpdG9UaXRsZSIsImN1cnNvciIsImFycm93TGVmdFN0eWxlIiwiY2xpY2tUaXRsZSIsIm1pbldpZHRoIiwiY2xpY2thYmxlU3R5bGUiLCJhcnJvd1JpZ2h0U3R5bGUiLCJtQ3JlYXRvciIsImhlaWdodCIsInJhaXRvQm9keSIsInNob3dGb290ZXIiLCJmb290ZXJTdHlsZSIsInJhaXRvRm9vdGVyIiwic2hvd0J1dHRvblRvZGF5IiwidG9kYXlCdXR0b25TdHlsZSIsInRvZGF5QnV0dG9uVGl0bGUiLCJzaG93U2VsZWN0ZWRWYWx1ZSIsInNob3dTZWxlY3RlZFZhbHVlU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJhY3Rpb25TdGVwIiwib2JqZWN0IiwiYm9vbCIsInNlbGVjdGVkQ2xhc3NOYW1lIiwiY2FsZW5kZXJDZWxsQm9keVN0eWxlIiwiY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsImhlYWRlckNhbGVuZGVySXRlbVN0eWxlIiwiaGVhZGVyQ2FsZW5kZXJTdHlsZSIsImN1c3RvbUZvcm1hdCIsInJhaXRvVGFibGVIZWRlYXIiLCJjYWxlbmRlckl0ZW1BbmltIiwibW9udGhBbmltIiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJtYXJnaW4iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwib3V0bGluZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7Ozs7QUFDSiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQix5RkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxTQUFTLEVBQUMsQ0FBQyxDQURBO0FBRVhDLE1BQUFBLGlCQUFpQixFQUFDLEVBRlA7QUFHWEMsTUFBQUEsWUFBWSxFQUFHLE1BQUtKLEtBQUwsQ0FBV0ssVUFBWixHQUEwQixDQUExQixHQUE4QixDQUhqQztBQUlYQyxNQUFBQSxZQUFZLEVBQUcsTUFBS04sS0FBTCxDQUFXSyxVQUFaLEdBQTBCLENBQTFCLEdBQThCLENBSmpDO0FBS1hFLE1BQUFBLFVBQVUsRUFBRTtBQUNWQyxRQUFBQSxNQUFNLEVBQUUsRUFERTtBQUVWQyxRQUFBQSxJQUFJLEVBQUUsQ0FGSTtBQUdWQyxRQUFBQSxPQUFPLEVBQUUsS0FIQztBQUlWQyxRQUFBQSxJQUFJLEVBQUU7QUFKSSxPQUxEO0FBV1hDLE1BQUFBLFdBQVcsRUFBRTtBQUNYLFdBQUcsU0FEUTtBQUVYLFdBQUcsVUFGUTtBQUdYLFdBQUcsT0FIUTtBQUlYLFdBQUcsS0FKUTtBQUtYLFdBQUcsT0FMUTtBQU1YLFdBQUcsUUFOUTtBQU9YLFdBQUcsS0FQUTtBQVFYLFdBQUcsTUFSUTtBQVNYLFdBQUcsS0FUUTtBQVVYLFlBQUks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QUFBQSxPQUFPLEVBQUU7QUFGTyxHQXRHVztBQTBHN0JqQyxFQUFBQSxzQkFBc0IsRUFBRTtBQUN0QnVCLElBQUFBLEtBQUssRUFBRSxTQURlO0FBRXRCVyxJQUFBQSxPQUFPLEVBQUUsTUFGYTtBQUd0QkMsSUFBQUEsVUFBVSxFQUFFO0FBSFUsR0ExR0s7QUErRzdCakIsRUFBQUEsWUFBWSxFQUFFLGFBL0dlO0FBZ0g3QnZDLEVBQUFBLGNBQWMsRUFBRSxJQWhIYTtBQWlIN0JJLEVBQUFBLFVBQVUsRUFBRSxDQWpIaUI7QUFrSDdCb0MsRUFBQUEsZ0JBQWdCLEVBQUUsQ0FsSFc7QUFtSDdCM0IsRUFBQUEsU0FBUyxFQUFFLENBbkhrQjtBQW9IN0JHLEVBQUFBLFdBQVcsRUFBRSxDQXBIZ0I7QUFxSDdCZCxFQUFBQSxTQUFTLEVBQUUsSUFySGtCO0FBc0g3QlksRUFBQUEsVUFBVSxFQUFFLElBdEhpQjtBQXVIN0JHLEVBQUFBLGVBQWUsRUFBRSxJQXZIWTtBQXdIN0JHLEVBQUFBLGlCQUFpQixFQUFFLElBeEhVO0FBeUg3QnFCLEVBQUFBLGdCQUFnQixFQUFFLFlBekhXO0FBMEg3QkMsRUFBQUEsU0FBUyxFQUFFLE1BMUhrQjtBQTJIN0J2QixFQUFBQSxnQkFBZ0IsRUFBRTtBQTNIVyxDQUEvQjtlQStIZTNILGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtamFsYWFsaVwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgJy4vSW5saW5lQ2FsZW5kZXIuY3NzJztcclxuXHJcbmNsYXNzIFRlblllYXJDYWxlbmRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXJ0WWVhcjotMSxcclxuICAgICAgc2VsZWN0ZWRNb250aE5hbWU6XCJcIixcclxuICAgICAgdG90YWxNYWluUm93OiAodGhpcy5wcm9wcy5pc1RocmVlUm93KSA/IDMgOiA0LFxyXG4gICAgICB0b3RhbE1haW5Db2w6ICh0aGlzLnByb3BzLmlzVGhyZWVSb3cpID8gNCA6IDMsXHJcbiAgICAgIG1vdmVBY3Rpb246IHtcclxuICAgICAgICBhY3Rpb246IFwiXCIsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICB1c2VKdW1wOiBmYWxzZSxcclxuICAgICAgICBqdW1wOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBtb250aEhlYWRlcjoge1xyXG4gICAgICAgIDE6IFwi2YHYsdmI2LHYr9uM2YZcIixcclxuICAgICAgICAyOiBcItin2LHYr9uM2KjZh9i02KpcIixcclxuICAgICAgICAzOiBcItiu2LHYr9in2K9cIixcclxuICAgICAgICA0OiBcItiq24zYsVwiLFxyXG4gICAgICAgIDU6IFwi2YXYsdiv2KfYr1wiLFxyXG4gICAgICAgIDY6IFwi2LTZh9ix24zZiNixXCIsXHJcbiAgICAgICAgNzogXCLZhdmH2LFcIixcclxuICAgICAgICA4OiBcItii2KjYp9mGXCIsXHJcbiAgICAgICAgOTogXCLYotiw2LFcIixcclxuICAgICAgICAxMDogXCLYr9uMXCIsXHJcbiAgICAgICAgMTE6IFwi2KjZh9mF2YZcIixcclxuICAgICAgICAxMjogXCLYp9iz2YHZhtivXCJcclxuICAgICAgfSxcclxuICAgICAgZGVmRm9ybWF0OiBcImpZWVlZLWpNLVwiLFxyXG4gICAgICBzdGFydERheU1vbWVudDogbnVsbCxcclxuICAgICAgY2hhbmdlQW5pbTogdHJ1ZSxcclxuICAgICAgY3VyclllYXI6IFwiXCIsXHJcbiAgICAgIHRvZGF5OiBcIlwiLFxyXG4gICAgICB0b2RheURheTogMSxcclxuICAgICAgdG9kYXlNb250aDogXCJcIixcclxuICAgICAgdG9kYXlZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZFllYXI6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkTW9udGg6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBcIlwiLFxyXG4gICAgICBjdXJyTW9udGg6IFwiXCIsXHJcbiAgICAgIG1vbWVudE9iamVjdDogbnVsbCxcclxuICAgICAgc0RheTogMCxcclxuICAgICAgaW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZTogbnVsbCxcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZUNsYXNzOiBcIlwiXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdHlsZUNlbGxDYWwxID0gdGhpcy5zdHlsZUNlbGxDYWwxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5uZXh0TW9udGggPSB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wZXJNb250aCA9IHRoaXMucGVyTW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VsZWNWYWx1ZXMgPSB0aGlzLnNlbGVjVmFsdWVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdvVG9kYXkgPSB0aGlzLmdvVG9kYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0RGF0ZXIgPSB0aGlzLnNldERhdGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbnYgPSB0aGlzLmNvbnYuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udmVydEVuVG9GYURpZyA9IHRoaXMuY29udmVydEVuVG9GYURpZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0b3JzID0gdGhpcy5zZXRTdGF0b3JzLmJpbmQodGhpcylcclxuICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uID0gdGhpcy53YXRjaE1vdmVBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgXHJcbiAgICB0aGlzLnN0eWxlU3R0ZXIgPSB0aGlzLnN0eWxlU3R0ZXIuYmluZCh0aGlzKTtcclxuICAgIFxyXG4gICAgdGhpcy5jbGVhclN0dGVyID0gdGhpcy5jbGVhclN0dGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHNldFN0YXRvcnMobmV3VmFsLCBhY3Rpb25NZXRob2QgPSBudWxsLCBwYXJhbUFjKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgLi4ubmV3VmFsXHJcblxyXG4gICAgICB9KVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uTWV0aG9kICE9PSBudWxsKSB7XHJcbiAgICAgICAgYWN0aW9uTWV0aG9kKHBhcmFtQWMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG1DcmVhdG9yKHN0eWxlSCwgc3RhdHR0dCkge1xyXG4gICAgbGV0IHBhcmVudE5vZGUgPSBbXVxyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gdGhpcy5zdGF0ZS50b3RhbE1haW5Sb3c7IGorKykge1xyXG4gICAgICBsZXQgaW5uZXJOb2RlID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5zdGF0ZS50b3RhbE1haW5Db2w7IGkrKykge1xyXG4gICAgICAgIGlubmVyTm9kZS5wdXNoKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcG9zaXRpb24tcmVsYXRpdmVcIiBrZXk9eydoJytpfT5cclxuICAgICAgICAgICAgey8qICA8dHJhbnNpdGlvbiA6bmFtZT1cImNhbGVuZGVySXRlbUFuaW1cIj4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCRldmVudCk9PnRoaXMuc2VsZWNWYWx1ZXMoKCgoKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkrdGhpcy5zdGF0ZS5zdGFydFllYXItMjEpKygoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSoxMCktKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkpKzEpLCRldmVudCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17ey4uLnRoaXMuc3R5bGVDZWxsQ2FsMSgoKCgoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSt0aGlzLnN0YXRlLnN0YXJ0WWVhci0yMSkrKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpKjEwKS0oKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSkrMSkpLC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZX19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgPntcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKCgoKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkrdGhpcy5zdGF0ZS5zdGFydFllYXItMjEpKygoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSoxMCktKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkpK1wiLVwiKygoKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpK3RoaXMuc3RhdGUuc3RhcnRZZWFyLTIwKSsoKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkqMTApKzEwKS0oKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSkpXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmVudE5vZGUucHVzaCg8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZmxleC1ub3dyYXBcIlxyXG4gICAgICAgIGtleT17J2pqJyArIGp9XHJcbiAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgeyAuLi50aGlzLnByb3BzLnJvd0NhbGVuZGVyU3R5bGUsIC4uLnN0eWxlSCB9XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lubmVyTm9kZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50Tm9kZVxyXG4gIH1cclxuICB3YXRjaE1vdmVBY3Rpb24odmFsKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgdmFsICE9PSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiB2YWwuYWN0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHZhbC5hY3Rpb24gIT09IG51bGwgJiZcclxuICAgICAgKHR5cGVvZiB2YWwudXNlSnVtcCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgIHZhbC51c2VKdW1wID09PSBudWxsIHx8XHJcbiAgICAgICAgIXZhbC51c2VKdW1wKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB2ID0gdmFsLmFjdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdiA9PSBcIm5cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZVwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5leFwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5leHRcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5lXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZXhcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leHRcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLm5leHRNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwicHJldmlvdXNcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91XCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlvXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2XCIgfHxcclxuICAgICAgICB2ID09IFwicHJlXCIgfHxcclxuICAgICAgICB2ID09IFwicHJcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwXCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91c1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvdVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldlwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJlXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwclwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucGVyTW9udGgoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdiA9PSBcInRvZGF5XCIgfHxcclxuICAgICAgICB2ID09IFwidG9kYVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvZFwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvXCIgfHxcclxuICAgICAgICB2ID09IFwidFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYXlcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZGFcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmdvVG9kYXkoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlb2YgdmFsLnVzZUp1bXAgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICB2YWwudXNlSnVtcCAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICYmXHJcbiAgICAgICAgdHlwZW9mIHZhbC5qdW1wID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgdmFsLmp1bXAgIT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwuanVtcC55ZWFyICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLnllYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAueWVhciwgXCJqWWVhclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdHlwZW9mIHZhbC5qdW1wLm1vbnRoICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICB2YWwuanVtcC5tb250aCAhPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5tb250aCwgXCJqTW9udGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmp1bXAuZGF5ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLmRheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5kYXksIFwiZGF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICAgICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29udmVydEVuVG9GYURpZyh2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gcGFyc2VJbnQoYyk7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnMuY2hhckF0KG51bXApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dCArPSBjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSBtb21lbnQoKTtcclxuICAgIGxldCB0b2RheVllYXIgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiallZWVlcIik7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0ZXh0ID0gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRleHQubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGMgPSBucy5pbmRleE9mKHRleHQuY2hhckF0KGkpKTtcclxuICAgICAgICBsZXQgbnVtcCA9IHBhcnNlSW50KGMpO1xyXG4gICAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICAgIG91dCArPSBjO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvdXQgKz0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIGxldCBkZGQ9bW9tZW50KClcclxuICAgZGRkLmpZZWFyKHBhcnNlSW50KG91dCkpXHJcbiAgIG1vbWVudE9iamVjdD1kZGRcclxuICAgICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IGRkZC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIG1vbWVudE9iamVjdCA9IGRkZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmRlZlllYXIgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdGhpcy5wcm9wcy5kZWZZZWFyICsgXCJcIi5sZW5ndGggPiAwICYmXHJcbiAgICAgICghIXBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSA+PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIG1vbWVudE9iamVjdC5qWWVhcihwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY3VyclllYXI6IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKSB9KVxyXG4gICAgICBcclxuICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFllYXIobW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGI9dGhpcy5jb252KHRvZGF5WWVhci5zdWJzdHIoMCx0b2RheVllYXIubGVuZ3RoLTEpKVxyXG4gICAgdG9kYXlZZWFyPWIrXCIwXCJcclxuICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgdG9kYXlZZWFyXHJcblxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgdHJ1ZSlcclxuICB9XHJcbiAgc3R5bGVDZWxsQ2FsMShpbmRleCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBpbmRleD09dGhpcy5zdGF0ZS5zZWxlY3RlZFllYXJcclxuICAgICl7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFN0eWxlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGluZGV4ID09IHRoaXMuY29udih0aGlzLnN0YXRlLnRvZGF5WWVhcikgXHJcbiAgICAgICkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZGF5U3R5bGU7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCBwYXJzZUludCh0aGlzLmNvbnYodGhpcy5zdGF0ZS50b2RheVllYXIpKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJlZm9yZVRvZGF5U3R5bGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHN0eWxlQ2VsbENhbChpbmRleCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VyclllYXIgPT0gdGhpcy5zdGF0ZS50b2RheVllYXIgJiYgdGhpcy5zdGF0ZS5jdXJyTW9udGggPT0gdGhpcy5zdGF0ZS50b2RheU1vbnRoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRvZGF5RGF5ID09IGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgdG9kYXlcIjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRvZGF5RGF5ID49IGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYmVmb3JlLXRvZGF5XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYWZ0ZXItdG9kYXlcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnN0YXJ0RGF5aXNCZWZvcmVUb2RheSkge1xyXG4gICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSBiZWZvcmUtdG9kYXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGFmdGVyLXRvZGF5XCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYW5nZU1vbnRoKGlzTW91bnRlZCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiBmYWxzZSB9KVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdG9ycyh7IGNoYW5nZUFuaW06IHRydWUgfSlcclxuICAgICAgfSwgNTAwKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyKSA9PSBcclxuICAgICAgICAgIHRoaXMuY29udih0aGlzLnN0YXRlLm1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKSApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJqTW9udGhcIik7XHJcbiAgICBsZXQgc3RhcnREYXlNb21lbnQgPSBtb21lbnRPYmplY3Q7XHJcbiAgICBtb21lbnRPYmplY3QuZW5kT2YoXCJqTW9udGhcIik7XHJcblxyXG5cclxuICAgIGxldCBjdXJyWWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuICAgIGxldCBjdXVyWWVhclN0cmluZz10aGlzLmNvbnYoY3VyclllYXIuc3Vic3RyKDAsY3VyclllYXIubGVuZ3RoLTIpKVxyXG4gICAgbGV0IHN0YXJ0WWVhcj1wYXJzZUludChjdXVyWWVhclN0cmluZytcIjAwXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgc3RhcnREYXlNb21lbnQsXHJcbiAgICAgIGN1dXJZZWFyU3RyaW5nLFxyXG4gICAgICBzdGFydFllYXIsXHJcbiAgICAgIGN1cnJZZWFyXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFllYXIoY3VyclllYXIpXHJcbiAgfVxyXG4gIG5leHRNb250aCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc3RhcnRZZWFyPDMwMDApe1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICBtb21lbnRPYmplY3QuYWRkKDEwMCwgXCJqWWVhclwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgfVxyXG4gIHBlck1vbnRoKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zdGFydFllYXI+MTUwKXtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgtMTAwLCBcImpZZWFyXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICB9XHJcbiAgc3R5bGVTdHRlcihlLG9iPXtcclxuICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0U3R5bGV9KXtcclxuICAgIE9iamVjdC5rZXlzKG9iKS5mb3JFYWNoKHY9PntcclxuXHJcbiAgICAgIGUuc3R5bGVbdl09b2Jbdl1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNsZWFyU3R0ZXIoZSl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdFN0eWxlKS5mb3JFYWNoKHY9PntcclxuICAgICAgZS5zdHlsZVt2XT0nJ1xyXG4gICAgfSlcclxuICB9XHJcbiAgc2VsZWNWYWx1ZXMoaW5kZXgsIGUpIHtcclxuICAgIGxldCBsYXN0U2VsZWN0ZWROb2RlID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWU6aW5kZXgsXHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyOmluZGV4LFxyXG4gICAgICB9LCB0aGlzLnByb3BzLmlucHV0LCBpbmRleClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgbGFzdFNlbGVjdGVkTm9kZSxcclxuICAgICAgICBpbnB1dFZhbHVlOmluZGV4LFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcjppbmRleCxcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCxcclxuICAgICAgaW5kZXgpXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlU3R0ZXIobGFzdFNlbGVjdGVkTm9kZSlcclxuICB9XHJcbiAgZ29Ub2RheSgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSBtb21lbnQoKTtcclxuICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgfVxyXG5cclxuICBzZXREYXRlcigpIHtcclxuICAgIHRoaXMuc0RheSA9IHRoaXMuc0RheSArIDE7XHJcbiAgICByZXR1cm4gdGhpcy5zRGF5O1xyXG4gIH1cclxuICBjb252KHZhbCkge1xyXG4gICAgbGV0IHRleHQgPSB2YWwgKyBcIlwiO1xyXG4gICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgbGV0IG51bXAgPSBucy5pbmRleE9mKGMgKyBcIlwiKTtcclxuICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgIG91dCArPSBudW1wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dCArPSBjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIC8vIFlvdSBkb24ndCBoYXZlIHRvIGRvIHRoaXMgY2hlY2sgZmlyc3QsIGJ1dCBpdCBjYW4gaGVscCBwcmV2ZW50IGFuIHVubmVlZGVkIHJlbmRlclxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW92ZUFjdGlvbiAhPT0gbmV4dFByb3BzLm1vdmVBY3Rpb24pIHtcclxuICAgICAgdGhpcy53YXRjaE1vdmVBY3Rpb24obmV4dFByb3BzLm1vdmVBY3Rpb24pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnVzZVJhaXRvU2l6aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1wYXJlbnQgbXktZm9udC1jYWxlbmRlclwiID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdy0xMDAgaC0xMDBcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudGl0bGVTdHlsZSwgLi4uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6ICh0aGlzLnByb3BzLnJhaXRvVGl0bGUgKiAxMCArICclJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBlck1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsaWNrVGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLmNvbnZlcnRFblRvRmFEaWcoKCh0aGlzLnN0YXRlLnN0YXJ0WWVhci0xMSkrXCIgLSBcIisodGhpcy5zdGF0ZS5zdGFydFllYXIrMTEwKSkpfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubUNyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICh0aGlzLnByb3BzLnJhaXRvQm9keSAvIHRoaXMuc3RhdGUudG90YWxNYWluUm93KSAqIDEwICsgJyUnXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy5mb290ZXJTdHlsZSwgLi4ueyBoZWlnaHQ6IHRoaXMucHJvcHMucmFpdG9Gb290ZXIgKiAxMCArICclJyB9IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy50b2RheUJ1dHRvblN0eWxlLCAuLi57IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG15LWZvbnQtY2FsZW5kZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfSA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLnRpdGxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e3RoaXMucGVyTW9udGh9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKCgodGhpcy5zdGF0ZS5zdGFydFllYXItMTEpK1wiIC0gXCIrKHRoaXMuc3RhdGUuc3RhcnRZZWFyKzExMCkpKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93UmlnaHRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAzMCBMMjQgMTYgMTIgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKHt9KX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLmZvb3RlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiYgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4uIHsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblRlblllYXJDYWxlbmRlci5wcm9wVHlwZXMgPSB7ZGVmWWVhcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIFxyXG4gIGlucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRDdXJyZW50WWVhcjpQcm9wVHlwZXMuZnVuYyxcclxuICBjbGlja1RpdGxlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBhY3Rpb25TdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG1vdmVBY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaXNUaHJlZVJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhZnRlclRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYmVmb3JlVG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZWxlY3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxCb2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICByb3dDYWxlbmRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVySXRlbVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG1haW5Cb2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYXJyb3dSaWdodFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93TGVmdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsaWNrYWJsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaGVhZGVyQ2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0b2RheUJ1dHRvblN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY3VzdG9tRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICByYWl0b1RpdGxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvVGFibGVIZWRlYXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9Cb2R5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvRm9vdGVyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHNob3dUaXRsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2FsZW5kZXJJdGVtQW5pbTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtb250aEFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuVGVuWWVhckNhbGVuZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnB1dCh2YWwpIHsgfSxcclxuICBcclxuICBnZXRDdXJyZW50WWVhcih2YWwpIHsgfSxcclxuICBjbGlja1RpdGxlKCkge1xyXG5cclxuICB9LFxyXG4gIGRlZlllYXI6IFwiXCIsXHJcbiAgXHJcbiAgYWN0aW9uU3RlcDogMSxcclxuICBtb3ZlQWN0aW9uOiB7XHJcbiAgICBhY3Rpb246IFwiXCIsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgdXNlSnVtcDogZmFsc2UsXHJcbiAgICBqdW1wOiB7fVxyXG4gIH0sXHJcbiAgaXNUaHJlZVJvdzogZmFsc2UsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFwic2VsZWN0ZWRcIixcclxuICB0b2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZTg0NTQ1XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGFkYjVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCAjZTg0NTQ1XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIiBhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICNlZWVlZWVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYmVmb3JlVG9kYXlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICMyMjI4MzFcIixcclxuICAgIGNvbG9yOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIHNlbGVjdFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIm9yYW5nZXJlZFwiLFxyXG5cclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZToge1xyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZToge1xyXG4gICAgLy8gYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJTdHlsZToge1xyXG4gICAgbWFyZ2luOiBcIjAgLTE0cHhcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgIG1hcmdpbjogXCJhdXRvXCJcclxuICB9LFxyXG4gIG1haW5Cb2R5U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZWVlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxyXG4gICAgcGFkZGluZzogXCIxNXB4XCJcclxuICB9LFxyXG4gIGFycm93UmlnaHRTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBhcnJvd0xlZnRTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBjbGlja2FibGVTdHlsZToge1xyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgXCJXZWJraXRVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJNb3pVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJtc1VzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgfSxcclxuICB0aXRsZVN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiLTEwcHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBoZWFkZXJDYWxlbmRlclN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMjI4MzFcIixcclxuICAgIG1hcmdpbjogXCIwIC0xNHB4XCJcclxuICB9LFxyXG4gIGZvb3RlclN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTRweFwiXHJcbiAgfSxcclxuICB0b2RheUJ1dHRvblN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBvdXRsaW5lOiBcIm5vbmUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICB9LFxyXG4gIGN1c3RvbUZvcm1hdDogXCJqWVlZWS9qTS9qRFwiLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gIHJhaXRvVGl0bGU6IDEsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogMSxcclxuICByYWl0b0JvZHk6IDgsXHJcbiAgcmFpdG9Gb290ZXI6IDEsXHJcbiAgc2hvd1RpdGxlOiB0cnVlLFxyXG4gIHNob3dGb290ZXI6IHRydWUsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiB0cnVlLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiB0cnVlLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFwic2xpZGUtZmFkZVwiLFxyXG4gIG1vbnRoQW5pbTogXCJmYWRlXCIsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogXCLYs9in2YQg2KzYp9ix24xcIlxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlblllYXJDYWxlbmRlcjtcclxuIl19