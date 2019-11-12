"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InlineCalender.css");

require("./FullCalender.css");

var _TenYearCalender = _interopRequireDefault(require("./TenYearCalender"));

var _YearCalender = _interopRequireDefault(require("./YearCalender"));

var _MonthCalender = _interopRequireDefault(require("./MonthCalender"));

var _InlineCalenderVertical = _interopRequireDefault(require("./InlineCalenderVertical"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import { CSSTransition } from "react-transition-group";
// import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6
var FullCalenderVertical =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FullCalenderVertical, _React$Component);

  function FullCalenderVertical(props) {
    var _this;

    _classCallCheck(this, FullCalenderVertical);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FullCalenderVertical).call(this, props));
    _this.state = {
      level: 0,
      month: "",
      day: "",
      tenYear: "",
      year: ""
    };
    _this.clickTitle = _this.clickTitle.bind(_assertThisInitialized(_this));
    _this.clickTitleMonth = _this.clickTitleMonth.bind(_assertThisInitialized(_this));
    _this.clickTitleYear = _this.clickTitleYear.bind(_assertThisInitialized(_this));
    _this.getMainVal = _this.getMainVal.bind(_assertThisInitialized(_this));
    _this.getCurrentYearMonth = _this.getCurrentYearMonth.bind(_assertThisInitialized(_this));
    _this.selectedYearM = _this.selectedYearM.bind(_assertThisInitialized(_this));
    _this.selectedYear = _this.selectedYear.bind(_assertThisInitialized(_this));
    _this.selectedMonth = _this.selectedMonth.bind(_assertThisInitialized(_this));
    _this.selectedTenYear = _this.selectedTenYear.bind(_assertThisInitialized(_this));
    _this.getCurrentYear = _this.getCurrentYear.bind(_assertThisInitialized(_this));
    _this.mCreator = _this.mCreator.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FullCalenderVertical, [{
    key: "mCreator",
    value: function mCreator() {
      return _react.default.createElement(_react.Fragment, null, this.state.level === 0 && _react.default.createElement(_InlineCalenderVertical.default, {
        isFiveRow: true,
        defYear: this.state.year,
        defMonth: this.state.month,
        input: this.getMainVal,
        "v-bind": "!!inlineStyle ? inlineStyle : {}",
        getCurrentYear: this.getCurrentYear,
        clickTitle: this.clickTitle
      }), this.state.level === 1 && _react.default.createElement(_MonthCalender.default, {
        "v-bind": "!!monthStyle ? monthStyle : {}",
        defYear: this.state.year,
        getCurrentYear: this.getCurrentYearMonth,
        sYear: this.selectedYearM,
        sMonth: this.selectedMonth,
        clickTitle: this.clickTitleMonth
      }), this.state.level === 2 && _react.default.createElement(_YearCalender.default, {
        "v-bind": "!!yearStyle ? yearStyle : {}",
        defYear: this.state.tenYear,
        input: this.selectedYear,
        clickTitle: this.clickTitleYear
      }), this.state.level > 2 && _react.default.createElement(_TenYearCalender.default, {
        defYear: this.state.year,
        input: this.selectedTenYear
      }));
    }
  }, {
    key: "clickTitle",
    value: function clickTitle() {
      // this.anime = this.animUp;
      // this.level = 1;
      this.setState({
        level: 1
      });
    }
  }, {
    key: "clickTitleYear",
    value: function clickTitleYear() {
      // this.anime = this.animUp;
      // this.level = 3;
      this.setState({
        level: 3
      });
    }
  }, {
    key: "clickTitleMonth",
    value: function clickTitleMonth() {
      // this.anime = this.animUp;
      // this.level = 2;
      this.setState({
        level: 2
      });
    }
  }, {
    key: "getMainVal",
    value: function getMainVal(val) {
      this.props.input(val); // this.$emit("input", val);
    }
  }, {
    key: "getCurrentYearMonth",
    value: function getCurrentYearMonth(val) {
      // this.tenYear = val;
      // this.anime = "this.animDown";
      // this.level = 1;
      this.setState({
        tenYear: val // level: 1

      });
    }
  }, {
    key: "selectedYearM",
    value: function selectedYearM(val) {
      // this.year = val;
      this.setState({
        year: val
      });
    }
  }, {
    key: "selectedYear",
    value: function selectedYear(val) {
      this.year = val; // this.anime = this.animDown;

      this.level = 1;
      this.setState({
        year: val,
        level: 1
      });
    }
  }, {
    key: "selectedMonth",
    value: function selectedMonth(val) {
      ////////console.log(val);
      // this.month = val;
      // this.anime = this.animDown;
      // ////////////////console.log(val," ffffffsagwgh")
      // this.level = 0;
      this.setState({
        month: val,
        level: 0
      });
    }
  }, {
    key: "selectedTenYear",
    value: function selectedTenYear(val) {
      // this.tenYear = val;
      // this.anime = this.animDown;
      // this.level = 2;
      this.setState({
        tenYear: val,
        level: 2
      });
    }
  }, {
    key: "getCurrentYear",
    value: function getCurrentYear(val) {
      // this.year = val;
      this.setState({
        year: val // level: 2

      }); //   ////////////////console.log('ffffffffffaga')
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.state.level === 0, "level",this.state.level)
      if (this.props.useRaitoSizing) {
        return _react.default.createElement("div", {
          className: "ratio-parent my-font-calender"
        }, _react.default.createElement("div", {
          className: "ratio-child"
        }, _react.default.createElement("div", {
          className: "container-fluid w-100 h-100 overflow-hidden position-relative" // style={mainBodyStyle}

        }, this.mCreator())));
      } else {
        return _react.default.createElement("div", {
          className: "container-fluid my-font-calender",
          style: this.props.mainBodyStyle
        }, this.mCreator());
      }
    }
  }]);

  return FullCalenderVertical;
}(_react.default.Component);

FullCalenderVertical.propTypes = {
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  useRaitoSizing: _propTypes.default.bool,
  input: _propTypes.default.func
};
FullCalenderVertical.defaultProps = {
  useRaitoSizing: true,
  input: function input(val) {}
};
var _default = FullCalenderVertical;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvRnVsbENhbGVuZGVyVmVydGljYWwuanN4Il0sIm5hbWVzIjpbIkZ1bGxDYWxlbmRlclZlcnRpY2FsIiwicHJvcHMiLCJzdGF0ZSIsImxldmVsIiwibW9udGgiLCJkYXkiLCJ0ZW5ZZWFyIiwieWVhciIsImNsaWNrVGl0bGUiLCJiaW5kIiwiY2xpY2tUaXRsZU1vbnRoIiwiY2xpY2tUaXRsZVllYXIiLCJnZXRNYWluVmFsIiwiZ2V0Q3VycmVudFllYXJNb250aCIsInNlbGVjdGVkWWVhck0iLCJzZWxlY3RlZFllYXIiLCJzZWxlY3RlZE1vbnRoIiwic2VsZWN0ZWRUZW5ZZWFyIiwiZ2V0Q3VycmVudFllYXIiLCJtQ3JlYXRvciIsInNldFN0YXRlIiwidmFsIiwiaW5wdXQiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImRlZlllYXIiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFFTUEsb0I7Ozs7O0FBQ0YsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4RkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsQ0FERTtBQUVUQyxNQUFBQSxLQUFLLEVBQUUsRUFGRTtBQUdUQyxNQUFBQSxHQUFHLEVBQUUsRUFISTtBQUlUQyxNQUFBQSxPQUFPLEVBQUUsRUFKQTtBQUtUQyxNQUFBQSxJQUFJLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJELElBQXJCLCtCQUF2QjtBQUNBLFVBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsK0JBQXRCO0FBQ0EsVUFBS0csVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLSSxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkosSUFBekIsK0JBQTNCO0FBQ0EsVUFBS0ssYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CTCxJQUFuQiwrQkFBckI7QUFDQSxVQUFLTSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JOLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtPLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQlAsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS1EsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCUixJQUFyQiwrQkFBdkI7QUFDQSxVQUFLUyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JULElBQXBCLCtCQUF0QjtBQUNBLFVBQUtVLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjVixJQUFkLCtCQUFoQjtBQW5CZTtBQW9CbEI7Ozs7K0JBQ1M7QUFDTixhQUNSLDZCQUFDLGVBQUQsUUFPNkIsS0FBS1AsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXJCLElBQ0csNkJBQUMsK0JBQUQ7QUFDSSxRQUFBLFNBQVMsRUFBRSxJQURmO0FBRUksUUFBQSxPQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXSyxJQUZ4QjtBQUdJLFFBQUEsUUFBUSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0UsS0FIekI7QUFJSSxRQUFBLEtBQUssRUFBRSxLQUFLUSxVQUpoQjtBQUtJLGtCQUFPLGtDQUxYO0FBTUksUUFBQSxjQUFjLEVBQUUsS0FBS00sY0FOekI7QUFPSSxRQUFBLFVBQVUsRUFBRSxLQUFLVjtBQVByQixRQVJoQyxFQW9CNkIsS0FBS04sS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXJCLElBQ0csNkJBQUMsc0JBQUQ7QUFDSSxrQkFBTyxnQ0FEWDtBQUVJLFFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0ssSUFGeEI7QUFHSSxRQUFBLGNBQWMsRUFBRSxLQUFLTSxtQkFIekI7QUFJSSxRQUFBLEtBQUssRUFBRSxLQUFLQyxhQUpoQjtBQUtJLFFBQUEsTUFBTSxFQUFFLEtBQUtFLGFBTGpCO0FBTUksUUFBQSxVQUFVLEVBQUUsS0FBS047QUFOckIsUUFyQmhDLEVBOEI2QixLQUFLUixLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBckIsSUFDRyw2QkFBQyxxQkFBRDtBQUNJLGtCQUFPLDhCQURYO0FBRUksUUFBQSxPQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXSSxPQUZ4QjtBQUdJLFFBQUEsS0FBSyxFQUFFLEtBQUtTLFlBSGhCO0FBSUksUUFBQSxVQUFVLEVBQUUsS0FBS0o7QUFKckIsUUEvQmhDLEVBdUM2QixLQUFLVCxLQUFMLENBQVdDLEtBQVgsR0FBbUIsQ0FBbkIsSUFDTSw2QkFBQyx3QkFBRDtBQUNDLFFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0ssSUFEckI7QUFFQyxRQUFBLEtBQUssRUFBRSxLQUFLVTtBQUZiLFFBeENuQyxDQURRO0FBa0RIOzs7aUNBQ1k7QUFDVDtBQUNBO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQ1ZqQixRQUFBQSxLQUFLLEVBQUU7QUFERyxPQUFkO0FBR0g7OztxQ0FDZ0I7QUFDYjtBQUNBO0FBQ0EsV0FBS2lCLFFBQUwsQ0FBYztBQUNWakIsUUFBQUEsS0FBSyxFQUFFO0FBREcsT0FBZDtBQUdIOzs7c0NBQ2lCO0FBQ2Q7QUFDQTtBQUNBLFdBQUtpQixRQUFMLENBQWM7QUFDVmpCLFFBQUFBLEtBQUssRUFBRTtBQURHLE9BQWQ7QUFHSDs7OytCQUNVa0IsRyxFQUFLO0FBQ1osV0FBS3BCLEtBQUwsQ0FBV3FCLEtBQVgsQ0FBaUJELEdBQWpCLEVBRFksQ0FFWjtBQUNIOzs7d0NBQ21CQSxHLEVBQUs7QUFDckI7QUFFQTtBQUNBO0FBQ0EsV0FBS0QsUUFBTCxDQUFjO0FBQ1ZkLFFBQUFBLE9BQU8sRUFBRWUsR0FEQyxDQUVWOztBQUZVLE9BQWQ7QUFJSDs7O2tDQUNhQSxHLEVBQUs7QUFDZjtBQUNBLFdBQUtELFFBQUwsQ0FBYztBQUNWYixRQUFBQSxJQUFJLEVBQUVjO0FBREksT0FBZDtBQUdIOzs7aUNBQ1lBLEcsRUFBSztBQUNkLFdBQUtkLElBQUwsR0FBWWMsR0FBWixDQURjLENBR2Q7O0FBQ0EsV0FBS2xCLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS2lCLFFBQUwsQ0FBYztBQUNWYixRQUFBQSxJQUFJLEVBQUVjLEdBREk7QUFFVmxCLFFBQUFBLEtBQUssRUFBRTtBQUZHLE9BQWQ7QUFJSDs7O2tDQUNha0IsRyxFQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUtELFFBQUwsQ0FBYztBQUNWaEIsUUFBQUEsS0FBSyxFQUFFaUIsR0FERztBQUVWbEIsUUFBQUEsS0FBSyxFQUFFO0FBRkcsT0FBZDtBQUlIOzs7b0NBQ2VrQixHLEVBQUs7QUFDakI7QUFFQTtBQUNBO0FBQ0EsV0FBS0QsUUFBTCxDQUFjO0FBQ1ZkLFFBQUFBLE9BQU8sRUFBRWUsR0FEQztBQUVWbEIsUUFBQUEsS0FBSyxFQUFFO0FBRkcsT0FBZDtBQUlIOzs7bUNBQ2NrQixHLEVBQUs7QUFDaEI7QUFDQSxXQUFLRCxRQUFMLENBQWM7QUFDVmIsUUFBQUEsSUFBSSxFQUFFYyxHQURJLENBRVY7O0FBRlUsT0FBZCxFQUZnQixDQU1oQjtBQUNIOzs7NkJBQ1E7QUFDTDtBQUNBLFVBQUksS0FBS3BCLEtBQUwsQ0FBV3NCLGNBQWYsRUFBK0I7QUFDM0IsZUFDSTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDSTtBQUNJLFVBQUEsU0FBUyxFQUFDLCtEQURkLENBRUE7O0FBRkEsV0FJSyxLQUFLSixRQUFMLEVBSkwsQ0FESixDQURKLENBREo7QUFZSCxPQWJELE1BYU87QUFDSCxlQUFRO0FBQUssVUFBQSxTQUFTLEVBQUMsa0NBQWY7QUFBa0QsVUFBQSxLQUFLLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV3VCO0FBQXBFLFdBRVAsS0FBS0wsUUFBTCxFQUZPLENBQVI7QUFJSDtBQUNKOzs7O0VBL0s4Qk0sZUFBTUMsUzs7QUFxTHpDMUIsb0JBQW9CLENBQUMyQixTQUFyQixHQUFpQztBQUM3QkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBVUMsU0FBVixDQUFvQixDQUFDRCxtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVHLE1BQTdCLENBQXBCLENBRG9CO0FBRTdCVCxFQUFBQSxjQUFjLEVBQUVNLG1CQUFVSSxJQUZHO0FBRzdCWCxFQUFBQSxLQUFLLEVBQUNPLG1CQUFVSztBQUhhLENBQWpDO0FBTUFsQyxvQkFBb0IsQ0FBQ21DLFlBQXJCLEdBQW9DO0FBQ2hDWixFQUFBQSxjQUFjLEVBQUUsSUFEZ0I7QUFFaENELEVBQUFBLEtBRmdDLGlCQUUxQkQsR0FGMEIsRUFFdEIsQ0FBRTtBQUZvQixDQUFwQztlQU1lckIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC1qYWxhYWxpXCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAnLi9JbmxpbmVDYWxlbmRlci5jc3MnO1xyXG5cclxuaW1wb3J0ICcuL0Z1bGxDYWxlbmRlci5jc3MnO1xyXG5pbXBvcnQgVGVuWWVhckNhbGVuZGVyIGZyb20gXCIuL1RlblllYXJDYWxlbmRlclwiO1xyXG5pbXBvcnQgWWVhckNhbGVuZGVyIGZyb20gXCIuL1llYXJDYWxlbmRlclwiO1xyXG5pbXBvcnQgTW9udGhDYWxlbmRlciBmcm9tIFwiLi9Nb250aENhbGVuZGVyXCI7XHJcbmltcG9ydCBJbmxpbmVDYWxlbmRlclZlcnRpY2FsIGZyb20gXCIuL0lubGluZUNhbGVuZGVyVmVydGljYWxcIjtcclxuLy8gaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbi8vIGltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnIC8vIEVTNlxyXG5cclxuY2xhc3MgRnVsbENhbGVuZGVyVmVydGljYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgICAgIG1vbnRoOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXk6IFwiXCIsXHJcbiAgICAgICAgICAgIHRlblllYXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHllYXI6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNsaWNrVGl0bGUgPSB0aGlzLmNsaWNrVGl0bGUuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xpY2tUaXRsZU1vbnRoID0gdGhpcy5jbGlja1RpdGxlTW9udGguYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xpY2tUaXRsZVllYXIgPSB0aGlzLmNsaWNrVGl0bGVZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmdldE1haW5WYWwgPSB0aGlzLmdldE1haW5WYWwuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFllYXJNb250aCA9IHRoaXMuZ2V0Q3VycmVudFllYXJNb250aC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFllYXJNID0gdGhpcy5zZWxlY3RlZFllYXJNLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnNlbGVjdGVkWWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB0aGlzLnNlbGVjdGVkTW9udGguYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUZW5ZZWFyID0gdGhpcy5zZWxlY3RlZFRlblllYXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFllYXIgPSB0aGlzLmdldEN1cnJlbnRZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm1DcmVhdG9yID0gdGhpcy5tQ3JlYXRvci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBtQ3JlYXRvcigpe1xyXG4gICAgICAgIHJldHVybihcclxuPEZyYWdtZW50PlxyXG4gICAgey8qIDxUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiYWxlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWwgPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lQ2FsZW5kZXJWZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZpdmVSb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlllYXI9e3RoaXMuc3RhdGUueWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmTW9udGg9e3RoaXMuc3RhdGUubW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt0aGlzLmdldE1haW5WYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cIiEhaW5saW5lU3R5bGUgPyBpbmxpbmVTdHlsZSA6IHt9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q3VycmVudFllYXI9e3RoaXMuZ2V0Q3VycmVudFllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrVGl0bGU9e3RoaXMuY2xpY2tUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9XCJhbmltZVwiIG1vZGU9XCJvdXQtaW5cIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldmVsID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbnRoQ2FsZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiISFtb250aFN0eWxlID8gbW9udGhTdHlsZSA6IHt9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmWWVhcj17dGhpcy5zdGF0ZS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDdXJyZW50WWVhcj17dGhpcy5nZXRDdXJyZW50WWVhck1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzWWVhcj17dGhpcy5zZWxlY3RlZFllYXJNfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzTW9udGg9e3RoaXMuc2VsZWN0ZWRNb250aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tUaXRsZT17dGhpcy5jbGlja1RpdGxlTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldmVsID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFllYXJDYWxlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCIhIXllYXJTdHlsZSA/IHllYXJTdHlsZSA6IHt9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmWWVhcj17dGhpcy5zdGF0ZS50ZW5ZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17dGhpcy5zZWxlY3RlZFllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrVGl0bGU9e3RoaXMuY2xpY2tUaXRsZVllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXZlbCA+IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiA8VGVuWWVhckNhbGVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlllYXI9e3RoaXMuc3RhdGUueWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3RoaXMuc2VsZWN0ZWRUZW5ZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L1RyYW5zaXRpb25Hcm91cD4gKi99XHJcbjwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY2xpY2tUaXRsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltVXA7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldmVsOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsaWNrVGl0bGVZZWFyKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1VcDtcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGV2ZWw6IDNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xpY2tUaXRsZU1vbnRoKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1VcDtcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGV2ZWw6IDJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpblZhbCh2YWwpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmlucHV0KHZhbClcclxuICAgICAgICAvLyB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdmFsKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRZZWFyTW9udGgodmFsKSB7XHJcbiAgICAgICAgLy8gdGhpcy50ZW5ZZWFyID0gdmFsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gXCJ0aGlzLmFuaW1Eb3duXCI7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRlblllYXI6IHZhbCxcclxuICAgICAgICAgICAgLy8gbGV2ZWw6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2VsZWN0ZWRZZWFyTSh2YWwpIHtcclxuICAgICAgICAvLyB0aGlzLnllYXIgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHllYXI6IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2VsZWN0ZWRZZWFyKHZhbCkge1xyXG4gICAgICAgIHRoaXMueWVhciA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbURvd247XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHllYXI6IHZhbCxcclxuICAgICAgICAgICAgbGV2ZWw6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2VsZWN0ZWRNb250aCh2YWwpIHtcclxuICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgLy8gdGhpcy5tb250aCA9IHZhbDtcclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltRG93bjtcclxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vY29uc29sZS5sb2codmFsLFwiIGZmZmZmZnNhZ3dnaFwiKVxyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb250aDogdmFsLFxyXG4gICAgICAgICAgICBsZXZlbDogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZFRlblllYXIodmFsKSB7XHJcbiAgICAgICAgLy8gdGhpcy50ZW5ZZWFyID0gdmFsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltRG93bjtcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGVuWWVhcjogdmFsLFxyXG4gICAgICAgICAgICBsZXZlbDogMlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50WWVhcih2YWwpIHtcclxuICAgICAgICAvLyB0aGlzLnllYXIgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHllYXI6IHZhbCxcclxuICAgICAgICAgICAgLy8gbGV2ZWw6IDJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgLy8vLy8vLy8vLy8vLy8vL2NvbnNvbGUubG9nKCdmZmZmZmZmZmZmYWdhJylcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxldmVsID09PSAwLCBcImxldmVsXCIsdGhpcy5zdGF0ZS5sZXZlbClcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VSYWl0b1NpemluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1wYXJlbnQgbXktZm9udC1jYWxlbmRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB3LTEwMCBoLTEwMCBvdmVyZmxvdy1oaWRkZW4gcG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17bWFpbkJvZHlTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubUNyZWF0b3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG15LWZvbnQtY2FsZW5kZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfSA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAge3RoaXMubUNyZWF0b3IoKX1cclxuICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5GdWxsQ2FsZW5kZXJWZXJ0aWNhbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBkZWZZZWFyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICB1c2VSYWl0b1NpemluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnB1dDpQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuRnVsbENhbGVuZGVyVmVydGljYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdXNlUmFpdG9TaXppbmc6IHRydWUsXHJcbiAgICBpbnB1dCh2YWwpe31cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdWxsQ2FsZW5kZXJWZXJ0aWNhbDsiXX0=