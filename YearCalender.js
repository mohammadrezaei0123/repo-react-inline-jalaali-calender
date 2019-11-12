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

var YearCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(YearCalender, _React$Component);

  function YearCalender(props) {
    var _this;

    _classCallCheck(this, YearCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearCalender).call(this, props));
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

  _createClass(YearCalender, [{
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
              return _this2.selecValues((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 2, $event);
            },
            className: "ratio-child",
            style: _objectSpread({}, _this2.styleCellCal1((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 2), {}, _this2.props.calenderCellWithTextStyle)
          }, _react.default.createElement("div", {
            className: "d-flex justify-content-center align-items-center h-100 w-100"
          }, _this2.convertEnToFaDig((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 2)))));
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
      }

      if (typeof this.props.defYear !== "undefined" && this.props.defYear + "".length > 0 && !!parseInt(this.props.defYear) && parseInt(this.props.defYear) >= 0) {
        momentObject.jYear(parseInt(this.props.defYear));
        this.setStators({
          currYear: momentObject.format("jYYYY")
        });
        this.props.getCurrentYear(momentObject.format("jYYYY"));
      }

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
        if (this.conv(this.state.todayYear) == index) {
          return this.props.todayStyle;
        } else if (this.conv(this.state.todayYear) > index) {
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
      var cuurYearString = this.conv(currYear.substr(0, currYear.length - 1));
      var startYear = parseInt(cuurYearString + "0");
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
      var momentObject = this.state.momentObject;
      momentObject.add(10, "jYear");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(-10, "jYear");
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
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.startYear - 1 + " - " + (this.state.startYear + 10)))), _react.default.createElement("div", {
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
        }, _react.default.createElement("div", null, this.convertEnToFaDig(this.state.startYear - 1 + " - " + (this.state.startYear + 10)))), _react.default.createElement("div", {
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

  return YearCalender;
}(_react.default.Component);

YearCalender.propTypes = {
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
YearCalender.defaultProps = {
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
var _default = YearCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvWWVhckNhbGVuZGVyLmpzeCJdLCJuYW1lcyI6WyJZZWFyQ2FsZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwic3RhcnRZZWFyIiwic2VsZWN0ZWRNb250aE5hbWUiLCJ0b3RhbE1haW5Sb3ciLCJpc1RocmVlUm93IiwidG90YWxNYWluQ29sIiwibW92ZUFjdGlvbiIsImFjdGlvbiIsInN0ZXAiLCJ1c2VKdW1wIiwianVtcCIsIm1vbnRoSGVhZGVyIiwiZGVmRm9ybWF0Iiwic3RhcnREYXlNb21lbnQiLCJjaGFuZ2VBbmltIiwiY3VyclllYXIiLCJ0b2RheSIsInRvZGF5WWVhciIsInNlbGVjdGVkWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZERheSIsImN1cnJNb250aCIsIm1vbWVudE9iamVjdCIsInNEYXkiLCJpbnB1dFZhbHVlIiwibGFzdFNlbGVjdGVkTm9kZSIsImxhc3RTZWxlY3RlZE5vZGVDbGFzcyIsInN0eWxlQ2VsbENhbDEiLCJiaW5kIiwiY2hhbmdlTW9udGgiLCJuZXh0TW9udGgiLCJwZXJNb250aCIsInNlbGVjVmFsdWVzIiwiZ29Ub2RheSIsInNldERhdGVyIiwiY29udiIsImNvbnZlcnRFblRvRmFEaWciLCJzZXRTdGF0b3JzIiwid2F0Y2hNb3ZlQWN0aW9uIiwic3R5bGVTdHRlciIsImNsZWFyU3R0ZXIiLCJuZXdWYWwiLCJhY3Rpb25NZXRob2QiLCJwYXJhbUFjIiwic2V0U3RhdGUiLCJzdHlsZUgiLCJzdGF0dHR0IiwicGFyZW50Tm9kZSIsImoiLCJpbm5lck5vZGUiLCJpIiwicHVzaCIsIiRldmVudCIsImNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGUiLCJyb3dDYWxlbmRlclN0eWxlIiwidmFsIiwidiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInllYXIiLCJhZGQiLCJtb250aCIsImRheSIsInRleHQiLCJsZW5ndGgiLCJucyIsIm91dCIsImMiLCJjaGFyQXQiLCJudW1wIiwicGFyc2VJbnQiLCJmb3JtYXQiLCJ2YWx1ZSIsImRkZCIsImpZZWFyIiwiZGVmWWVhciIsImdldEN1cnJlbnRZZWFyIiwiaW5kZXgiLCJzZWxlY3RTdHlsZSIsInRvZGF5U3R5bGUiLCJiZWZvcmVUb2RheVN0eWxlIiwiYWZ0ZXJUb2RheVN0eWxlIiwiaXNNb3VudGVkIiwic2VsZiIsInNldFRpbWVvdXQiLCJzdGFydE9mIiwiZW5kT2YiLCJjdXVyWWVhclN0cmluZyIsInN1YnN0ciIsImUiLCJvYiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3R5bGUiLCJ0YXJnZXQiLCJpbnB1dCIsIm5leHRQcm9wcyIsInVzZVJhaXRvU2l6aW5nIiwibWFpbkJvZHlTdHlsZSIsInNob3dUaXRsZSIsInRpdGxlU3R5bGUiLCJyYWl0b1RpdGxlIiwiY3Vyc29yIiwiYXJyb3dMZWZ0U3R5bGUiLCJjbGlja1RpdGxlIiwibWluV2lkdGgiLCJjbGlja2FibGVTdHlsZSIsImFycm93UmlnaHRTdHlsZSIsIm1DcmVhdG9yIiwiaGVpZ2h0IiwicmFpdG9Cb2R5Iiwic2hvd0Zvb3RlciIsImZvb3RlclN0eWxlIiwicmFpdG9Gb290ZXIiLCJzaG93QnV0dG9uVG9kYXkiLCJ0b2RheUJ1dHRvblN0eWxlIiwidG9kYXlCdXR0b25UaXRsZSIsInNob3dTZWxlY3RlZFZhbHVlIiwic2hvd1NlbGVjdGVkVmFsdWVTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImFjdGlvblN0ZXAiLCJvYmplY3QiLCJib29sIiwic2VsZWN0ZWRDbGFzc05hbWUiLCJjYWxlbmRlckNlbGxCb2R5U3R5bGUiLCJjYWxlbmRlckNlbGxOb1RleHRTdHlsZSIsInJvd0NhbGVuZGVySXRlbVN0eWxlIiwiaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGUiLCJoZWFkZXJDYWxlbmRlclN0eWxlIiwiY3VzdG9tRm9ybWF0IiwicmFpdG9UYWJsZUhlZGVhciIsImNhbGVuZGVySXRlbUFuaW0iLCJtb250aEFuaW0iLCJkZWZhdWx0UHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwidXNlclNlbGVjdCIsIm1hcmdpbiIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJvdXRsaW5lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFNBQVMsRUFBQyxDQUFDLENBREE7QUFFWEMsTUFBQUEsaUJBQWlCLEVBQUMsRUFGUDtBQUdYQyxNQUFBQSxZQUFZLEVBQUcsTUFBS0osS0FBTCxDQUFXSyxVQUFaLEdBQTBCLENBQTFCLEdBQThCLENBSGpDO0FBSVhDLE1BQUFBLFlBQVksRUFBRyxNQUFLTixLQUFMLENBQVdLLFVBQVosR0FBMEIsQ0FBMUIsR0FBOEIsQ0FKakM7QUFLWEUsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxFQURFO0FBRVZDLFFBQUFBLElBQUksRUFBRSxDQUZJO0FBR1ZDLFFBQUFBLE9BQU8sRUFBRSxLQUhDO0FBSVZDLFFBQUFBLElBQUksRUFBRTtBQUpJLE9BTEQ7QUFXWEMsTUFBQUEsV0FBVyxFQUFFO0FBQ1gsV0FBRyxTQURRO0FBRVgsV0FBRyxVQUZRO0FBR1gsV0FBRyxPQUhRO0FBSVgsV0FBRyxLQUpRO0FBS1gsV0FBRyxPQUxRO0FBTVgsV0FBRyxRQU5RO0FBT1gsV0FBRyxLQVBRO0FBUVgsV0FBRyxNQVJRO0FBU1gsV0FBRyxLQVRRO0FBVVgsWUFBSSxJQVZPO0FBV1gsWUFBSSxNQVhPO0FBWVgsWUFBSTtBQVpPLE9BWEY7QUF5QlhDLE1BQUFBLFNBQVMs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QjBCLElBQUFBLEtBQUssRUFBRSxTQURTO0FBRWhCVSxJQUFBQSxPQUFPLEVBQUU7QUFGTyxHQXJHUTtBQXlHMUJqQyxFQUFBQSxzQkFBc0IsRUFBRTtBQUN0QnVCLElBQUFBLEtBQUssRUFBRSxTQURlO0FBRXRCVyxJQUFBQSxPQUFPLEVBQUUsTUFGYTtBQUd0QkMsSUFBQUEsVUFBVSxFQUFFO0FBSFUsR0F6R0U7QUE4RzFCakIsRUFBQUEsWUFBWSxFQUFFLGFBOUdZO0FBK0cxQnZDLEVBQUFBLGNBQWMsRUFBRSxJQS9HVTtBQWdIMUJJLEVBQUFBLFVBQVUsRUFBRSxDQWhIYztBQWlIMUJvQyxFQUFBQSxnQkFBZ0IsRUFBRSxDQWpIUTtBQWtIMUIzQixFQUFBQSxTQUFTLEVBQUUsQ0FsSGU7QUFtSDFCRyxFQUFBQSxXQUFXLEVBQUUsQ0FuSGE7QUFvSDFCZCxFQUFBQSxTQUFTLEVBQUUsSUFwSGU7QUFxSDFCWSxFQUFBQSxVQUFVLEVBQUUsSUFySGM7QUFzSDFCRyxFQUFBQSxlQUFlLEVBQUUsSUF0SFM7QUF1SDFCRyxFQUFBQSxpQkFBaUIsRUFBRSxJQXZITztBQXdIMUJxQixFQUFBQSxnQkFBZ0IsRUFBRSxZQXhIUTtBQXlIMUJDLEVBQUFBLFNBQVMsRUFBRSxNQXpIZTtBQTBIMUJ2QixFQUFBQSxnQkFBZ0IsRUFBRTtBQTFIUSxDQUE1QjtlQThIZXZILFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtamFsYWFsaVwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgJy4vSW5saW5lQ2FsZW5kZXIuY3NzJztcclxuXHJcbmNsYXNzIFllYXJDYWxlbmRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXJ0WWVhcjotMSxcclxuICAgICAgc2VsZWN0ZWRNb250aE5hbWU6XCJcIixcclxuICAgICAgdG90YWxNYWluUm93OiAodGhpcy5wcm9wcy5pc1RocmVlUm93KSA/IDMgOiA0LFxyXG4gICAgICB0b3RhbE1haW5Db2w6ICh0aGlzLnByb3BzLmlzVGhyZWVSb3cpID8gNCA6IDMsXHJcbiAgICAgIG1vdmVBY3Rpb246IHtcclxuICAgICAgICBhY3Rpb246IFwiXCIsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICB1c2VKdW1wOiBmYWxzZSxcclxuICAgICAgICBqdW1wOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBtb250aEhlYWRlcjoge1xyXG4gICAgICAgIDE6IFwi2YHYsdmI2LHYr9uM2YZcIixcclxuICAgICAgICAyOiBcItin2LHYr9uM2KjZh9i02KpcIixcclxuICAgICAgICAzOiBcItiu2LHYr9in2K9cIixcclxuICAgICAgICA0OiBcItiq24zYsVwiLFxyXG4gICAgICAgIDU6IFwi2YXYsdiv2KfYr1wiLFxyXG4gICAgICAgIDY6IFwi2LTZh9ix24zZiNixXCIsXHJcbiAgICAgICAgNzogXCLZhdmH2LFcIixcclxuICAgICAgICA4OiBcItii2KjYp9mGXCIsXHJcbiAgICAgICAgOTogXCLYotiw2LFcIixcclxuICAgICAgICAxMDogXCLYr9uMXCIsXHJcbiAgICAgICAgMTE6IFwi2KjZh9mF2YZcIixcclxuICAgICAgICAxMjogXCLYp9iz2YHZhtivXCJcclxuICAgICAgfSxcclxuICAgICAgZGVmRm9ybWF0OiBcImpZWVlZLWpNLVwiLFxyXG4gICAgICBzdGFydERheU1vbWVudDogbnVsbCxcclxuICAgICAgY2hhbmdlQW5pbTogdHJ1ZSxcclxuICAgICAgY3VyclllYXI6IFwiXCIsXHJcbiAgICAgIHRvZGF5OiBcIlwiLFxyXG4gICAgICB0b2RheVllYXI6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkWWVhcjogXCJcIixcclxuICAgICAgc2VsZWN0ZWRNb250aDogXCJcIixcclxuICAgICAgc2VsZWN0ZWREYXk6IFwiXCIsXHJcbiAgICAgIGN1cnJNb250aDogXCJcIixcclxuICAgICAgbW9tZW50T2JqZWN0OiBudWxsLFxyXG4gICAgICBzRGF5OiAwLFxyXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBsYXN0U2VsZWN0ZWROb2RlOiBudWxsLFxyXG4gICAgICBsYXN0U2VsZWN0ZWROb2RlQ2xhc3M6IFwiXCJcclxuICAgIH07XHJcbiAgICB0aGlzLnN0eWxlQ2VsbENhbDEgPSB0aGlzLnN0eWxlQ2VsbENhbDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2hhbmdlTW9udGggPSB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5leHRNb250aCA9IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBlck1vbnRoID0gdGhpcy5wZXJNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWxlY1ZhbHVlcyA9IHRoaXMuc2VsZWNWYWx1ZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ29Ub2RheSA9IHRoaXMuZ29Ub2RheS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXREYXRlciA9IHRoaXMuc2V0RGF0ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udiA9IHRoaXMuY29udi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb252ZXJ0RW5Ub0ZhRGlnID0gdGhpcy5jb252ZXJ0RW5Ub0ZhRGlnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMgPSB0aGlzLnNldFN0YXRvcnMuYmluZCh0aGlzKVxyXG4gICAgdGhpcy53YXRjaE1vdmVBY3Rpb24gPSB0aGlzLndhdGNoTW92ZUFjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICBcclxuICAgIHRoaXMuc3R5bGVTdHRlciA9IHRoaXMuc3R5bGVTdHRlci5iaW5kKHRoaXMpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNsZWFyU3R0ZXIgPSB0aGlzLmNsZWFyU3R0ZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgc2V0U3RhdG9ycyhuZXdWYWwsIGFjdGlvbk1ldGhvZCA9IG51bGwsIHBhcmFtQWMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5uZXdWYWxcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb25NZXRob2QgIT09IG51bGwpIHtcclxuICAgICAgICBhY3Rpb25NZXRob2QocGFyYW1BYylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgbUNyZWF0b3Ioc3R5bGVILCBzdGF0dHR0KSB7XHJcbiAgICBsZXQgcGFyZW50Tm9kZSA9IFtdXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdzsgaisrKSB7XHJcbiAgICAgIGxldCBpbm5lck5vZGUgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbDsgaSsrKSB7XHJcbiAgICAgICAgaW5uZXJOb2RlLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPVwiY2FsZW5kZXJJdGVtQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCRldmVudCk9PnRoaXMuc2VsZWNWYWx1ZXMoKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpK3RoaXMuc3RhdGUuc3RhcnRZZWFyLTIpLCRldmVudCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17ey4uLnRoaXMuc3R5bGVDZWxsQ2FsMSgoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSt0aGlzLnN0YXRlLnN0YXJ0WWVhci0yKSwuLi50aGlzLnByb3BzLmNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGV9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwIHctMTAwXCJcclxuICAgICAgICAgICAgICAgID57XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udmVydEVuVG9GYURpZygoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSt0aGlzLnN0YXRlLnN0YXJ0WWVhci0yKVxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyZW50Tm9kZS5wdXNoKDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBmbGV4LW5vd3JhcFwiXHJcbiAgICAgICAga2V5PXsnamonICsgan1cclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMucm93Q2FsZW5kZXJTdHlsZSwgLi4uc3R5bGVIIH1cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7aW5uZXJOb2RlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnROb2RlXHJcbiAgfVxyXG4gIHdhdGNoTW92ZUFjdGlvbih2YWwpIHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICB2YWwgIT09IG51bGwgJiZcclxuICAgICAgdHlwZW9mIHZhbC5hY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdmFsLmFjdGlvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAodHlwZW9mIHZhbC51c2VKdW1wID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdmFsLnVzZUp1bXAgPT09IG51bGwgfHxcclxuICAgICAgICAhdmFsLnVzZUp1bXApXHJcbiAgICApIHtcclxuICAgICAgbGV0IHYgPSB2YWwuYWN0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB2ID09IFwiblwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5lXCIgfHxcclxuICAgICAgICB2ID09IFwibmV4XCIgfHxcclxuICAgICAgICB2ID09IFwibmV4dFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwiblwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmV4dFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91c1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpb3VcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmVcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwclwiIHx8XHJcbiAgICAgICAgdiA9PSBcInBcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb3VzXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwXCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5wZXJNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwidG9kYXlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b2RhXCIgfHxcclxuICAgICAgICB2ID09IFwidG9kXCIgfHxcclxuICAgICAgICB2ID09IFwidG9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0XCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RheVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZ29Ub2RheSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGVvZiB2YWwudXNlSnVtcCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICE9PSBudWxsICYmXHJcbiAgICAgICAgdmFsLnVzZUp1bXAgJiZcclxuICAgICAgICB0eXBlb2YgdmFsLmp1bXAgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICB2YWwuanVtcCAhPT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgICAgICBpZiAodHlwZW9mIHZhbC5qdW1wLnllYXIgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAueWVhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC55ZWFyLCBcImpZZWFyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0eXBlb2YgdmFsLmp1bXAubW9udGggIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgIHZhbC5qdW1wLm1vbnRoICE9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLm1vbnRoLCBcImpNb250aFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwuanVtcC5kYXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAuZGF5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLmRheSwgXCJkYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgICBtb21lbnRPYmplY3RcclxuICAgICAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb252ZXJ0RW5Ub0ZhRGlnKHZhbCkge1xyXG4gICAgbGV0IHRleHQgPSB2YWwgKyBcIlwiO1xyXG4gICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgbGV0IG51bXAgPSBwYXJzZUludChjKTtcclxuICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgIG91dCArPSBucy5jaGFyQXQobnVtcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3V0ICs9IGM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IG1vbWVudCgpO1xyXG4gICAgbGV0IHRvZGF5WWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHRleHQgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IG5zLmluZGV4T2YodGV4dC5jaGFyQXQoaSkpO1xyXG4gICAgICAgIGxldCBudW1wID0gcGFyc2VJbnQoYyk7XHJcbiAgICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgICAgb3V0ICs9IGM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG91dCArPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgbGV0IGRkZD1tb21lbnQoKVxyXG4gICBkZGQualllYXIocGFyc2VJbnQob3V0KSlcclxuICAgbW9tZW50T2JqZWN0PWRkZFxyXG4gICAgICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gZGRkLmZvcm1hdChcImpZWVlZXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmRlZlllYXIgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdGhpcy5wcm9wcy5kZWZZZWFyICsgXCJcIi5sZW5ndGggPiAwICYmXHJcbiAgICAgICghIXBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSA+PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIG1vbWVudE9iamVjdC5qWWVhcihwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY3VyclllYXI6IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKSB9KVxyXG4gICAgICBcclxuICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFllYXIobW9tZW50T2JqZWN0LmZvcm1hdChcImpZWVlZXCIpKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3QsXHJcbiAgICAgIHRvZGF5WWVhclxyXG5cclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIHRydWUpXHJcbiAgfVxyXG4gIHN0eWxlQ2VsbENhbDEoaW5kZXgpIHtcclxuICAgIGlmIChcclxuICAgICAgaW5kZXg9PXRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyXHJcbiAgICApe1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RTdHlsZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmNvbnYodGhpcy5zdGF0ZS50b2RheVllYXIpPT1pbmRleCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZGF5U3R5bGU7XHJcbiAgICAgIH1lbHNlIGlmKHRoaXMuY29udih0aGlzLnN0YXRlLnRvZGF5WWVhcik+aW5kZXgpe1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVUb2RheVN0eWxlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hZnRlclRvZGF5U3R5bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZU1vbnRoKGlzTW91bnRlZCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiBmYWxzZSB9KVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdG9ycyh7IGNoYW5nZUFuaW06IHRydWUgfSlcclxuICAgICAgfSwgNTAwKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyKSA9PSBcclxuICAgICAgICAgIHRoaXMuY29udih0aGlzLnN0YXRlLm1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKSApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJqTW9udGhcIik7XHJcbiAgICBsZXQgc3RhcnREYXlNb21lbnQgPSBtb21lbnRPYmplY3Q7XHJcbiAgICBtb21lbnRPYmplY3QuZW5kT2YoXCJqTW9udGhcIik7XHJcblxyXG5cclxuICAgIGxldCBjdXJyWWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJqWVlZWVwiKTtcclxuICAgIGxldCBjdXVyWWVhclN0cmluZz10aGlzLmNvbnYoY3VyclllYXIuc3Vic3RyKDAsY3VyclllYXIubGVuZ3RoLTEpKVxyXG4gICAgXHJcbiAgICBsZXQgc3RhcnRZZWFyPXBhcnNlSW50KGN1dXJZZWFyU3RyaW5nK1wiMFwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3QsXHJcbiAgICAgIHN0YXJ0RGF5TW9tZW50LFxyXG4gICAgICBjdXVyWWVhclN0cmluZyxcclxuICAgICAgc3RhcnRZZWFyLFxyXG4gICAgICBjdXJyWWVhclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRZZWFyKGN1cnJZZWFyKVxyXG4gICAgXHJcbiAgfVxyXG4gIG5leHRNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgxMCwgXCJqWWVhclwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgcGVyTW9udGgoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5hZGQoLTEwLCBcImpZZWFyXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICBzdHlsZVN0dGVyKGUsb2I9e1xyXG4gICAgLi4udGhpcy5wcm9wcy5zZWxlY3RTdHlsZX0pe1xyXG4gICAgT2JqZWN0LmtleXMob2IpLmZvckVhY2godj0+e1xyXG5cclxuICAgICAgZS5zdHlsZVt2XT1vYlt2XVxyXG4gICAgfSlcclxuICB9XHJcbiAgY2xlYXJTdHRlcihlKXtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0U3R5bGUpLmZvckVhY2godj0+e1xyXG4gICAgICBlLnN0eWxlW3ZdPScnXHJcbiAgICB9KVxyXG4gIH1cclxuICBzZWxlY1ZhbHVlcyhpbmRleCwgZSkge1xyXG4gICAgXHJcbiAgICBsZXQgbGFzdFNlbGVjdGVkTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgbGFzdFNlbGVjdGVkTm9kZSxcclxuICAgICAgICBpbnB1dFZhbHVlOmluZGV4LFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcjppbmRleCxcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCwgaW5kZXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGxhc3RTZWxlY3RlZE5vZGUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZTppbmRleCxcclxuICAgICAgICBzZWxlY3RlZFllYXI6aW5kZXgsXHJcbiAgICAgIH0sIHRoaXMucHJvcHMuaW5wdXQsXHJcbiAgICAgIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZVN0dGVyKGxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgfVxyXG4gIGdvVG9kYXkoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZXIoKSB7XHJcbiAgICB0aGlzLnNEYXkgPSB0aGlzLnNEYXkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuc0RheTtcclxuICB9XHJcbiAgY29udih2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gbnMuaW5kZXhPZihjICsgXCJcIik7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnVtcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXQgKz0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAvLyBZb3UgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGNoZWNrIGZpcnN0LCBidXQgaXQgY2FuIGhlbHAgcHJldmVudCBhbiB1bm5lZWRlZCByZW5kZXJcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdmVBY3Rpb24gIT09IG5leHRQcm9wcy5tb3ZlQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uKG5leHRQcm9wcy5tb3ZlQWN0aW9uKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VSYWl0b1NpemluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHctMTAwIGgtMTAwXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRpdGxlU3R5bGUsIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAodGhpcy5wcm9wcy5yYWl0b1RpdGxlICogMTAgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wZXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKCgodGhpcy5zdGF0ZS5zdGFydFllYXItMSkrXCIgLSBcIisodGhpcy5zdGF0ZS5zdGFydFllYXIrMTApKSl9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93UmlnaHRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAzMCBMMjQgMTYgMTIgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tQ3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMucmFpdG9Cb2R5IC8gdGhpcy5zdGF0ZS50b3RhbE1haW5Sb3cpICogMTAgKyAnJSdcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLmZvb3RlclN0eWxlLCAuLi57IGhlaWdodDogdGhpcy5wcm9wcy5yYWl0b0Zvb3RlciAqIDEwICsgJyUnIH0gfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLnRvZGF5QnV0dG9uU3R5bGUsIC4uLnsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udmVydEVuVG9GYURpZyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktZm9udC1jYWxlbmRlclwiIHN0eWxlPXt0aGlzLnByb3BzLm1haW5Cb2R5U3R5bGV9ID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dUaXRsZSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3RoaXMucHJvcHMudGl0bGVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17dGhpcy5wZXJNb250aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd0xlZnRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCAzMCBMOCAxNiAyMCAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsaWNrVGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ueyBtaW5XaWR0aDogJzIwJScgfSwgLi4udGhpcy5wcm9wcy5jbGlja2FibGVTdHlsZSB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLmNvbnZlcnRFblRvRmFEaWcoKCh0aGlzLnN0YXRlLnN0YXJ0WWVhci0xKStcIiAtIFwiKyh0aGlzLnN0YXRlLnN0YXJ0WWVhcisxMCkpKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93UmlnaHRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAzMCBMMjQgMTYgMTIgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKHt9KX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLmZvb3RlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiYgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4uIHsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnZlcnRFblRvRmFEaWcodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb252ZXJ0RW5Ub0ZhRGlnKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblllYXJDYWxlbmRlci5wcm9wVHlwZXMgPSB7ZGVmWWVhcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIFxyXG4gIGlucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRDdXJyZW50WWVhcjpQcm9wVHlwZXMuZnVuYyxcclxuICBjbGlja1RpdGxlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBhY3Rpb25TdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG1vdmVBY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaXNUaHJlZVJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhZnRlclRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYmVmb3JlVG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZWxlY3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxCb2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICByb3dDYWxlbmRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVySXRlbVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG1haW5Cb2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYXJyb3dSaWdodFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93TGVmdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsaWNrYWJsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaGVhZGVyQ2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0b2RheUJ1dHRvblN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY3VzdG9tRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICByYWl0b1RpdGxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvVGFibGVIZWRlYXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9Cb2R5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvRm9vdGVyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHNob3dUaXRsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2FsZW5kZXJJdGVtQW5pbTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtb250aEFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuWWVhckNhbGVuZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnB1dCh2YWwpIHsgfSxcclxuICBcclxuICBnZXRDdXJyZW50WWVhcih2YWwpIHsgfSxcclxuICBjbGlja1RpdGxlKCkge1xyXG5cclxuICB9LFxyXG4gIGRlZlllYXI6IFwiXCIsXHJcbiAgXHJcbiAgYWN0aW9uU3RlcDogMSxcclxuICBtb3ZlQWN0aW9uOiB7XHJcbiAgICBhY3Rpb246IFwiXCIsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgdXNlSnVtcDogZmFsc2UsXHJcbiAgICBqdW1wOiB7fVxyXG4gIH0sXHJcbiAgaXNUaHJlZVJvdzogZmFsc2UsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFwic2VsZWN0ZWRcIixcclxuICB0b2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZTg0NTQ1XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGFkYjVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCAjZTg0NTQ1XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIiBhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICNlZWVlZWVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYmVmb3JlVG9kYXlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICMyMjI4MzFcIixcclxuICAgIGNvbG9yOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIHNlbGVjdFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIm9yYW5nZXJlZFwiLFxyXG5cclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZToge1xyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZToge1xyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJTdHlsZToge1xyXG4gICAgbWFyZ2luOiBcIjAgLTE0cHhcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgIG1hcmdpbjogXCJhdXRvXCJcclxuICB9LFxyXG4gIG1haW5Cb2R5U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZWVlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxyXG4gICAgcGFkZGluZzogXCIxNXB4XCJcclxuICB9LFxyXG4gIGFycm93UmlnaHRTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBhcnJvd0xlZnRTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBjbGlja2FibGVTdHlsZToge1xyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgXCJXZWJraXRVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJNb3pVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJtc1VzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgfSxcclxuICB0aXRsZVN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiLTEwcHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzM5M2U0NlwiLFxyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiXHJcbiAgfSxcclxuICBoZWFkZXJDYWxlbmRlclN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMjI4MzFcIixcclxuICAgIG1hcmdpbjogXCIwIC0xNHB4XCJcclxuICB9LFxyXG4gIGZvb3RlclN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTRweFwiXHJcbiAgfSxcclxuICB0b2RheUJ1dHRvblN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBvdXRsaW5lOiBcIm5vbmUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICB9LFxyXG4gIGN1c3RvbUZvcm1hdDogXCJqWVlZWS9qTS9qRFwiLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gIHJhaXRvVGl0bGU6IDEsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogMSxcclxuICByYWl0b0JvZHk6IDgsXHJcbiAgcmFpdG9Gb290ZXI6IDEsXHJcbiAgc2hvd1RpdGxlOiB0cnVlLFxyXG4gIHNob3dGb290ZXI6IHRydWUsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiB0cnVlLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiB0cnVlLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFwic2xpZGUtZmFkZVwiLFxyXG4gIG1vbnRoQW5pbTogXCJmYWRlXCIsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogXCLYs9in2YQg2KzYp9ix24xcIlxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFllYXJDYWxlbmRlcjtcclxuIl19