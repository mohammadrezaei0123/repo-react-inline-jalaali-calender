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

var _InlineCalender2 = _interopRequireDefault(require("./InlineCalender"));

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
      return _react.default.createElement(_react.Fragment, null, this.state.level === 0 && _react.default.createElement(_InlineCalender2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvRnVsbENhbGVuZGVyLmpzeCJdLCJuYW1lcyI6WyJGdWxsQ2FsZW5kZXJWZXJ0aWNhbCIsInByb3BzIiwic3RhdGUiLCJsZXZlbCIsIm1vbnRoIiwiZGF5IiwidGVuWWVhciIsInllYXIiLCJjbGlja1RpdGxlIiwiYmluZCIsImNsaWNrVGl0bGVNb250aCIsImNsaWNrVGl0bGVZZWFyIiwiZ2V0TWFpblZhbCIsImdldEN1cnJlbnRZZWFyTW9udGgiLCJzZWxlY3RlZFllYXJNIiwic2VsZWN0ZWRZZWFyIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkVGVuWWVhciIsImdldEN1cnJlbnRZZWFyIiwibUNyZWF0b3IiLCJzZXRTdGF0ZSIsInZhbCIsImlucHV0IiwidXNlUmFpdG9TaXppbmciLCJtYWluQm9keVN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJkZWZZZWFyIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBRU1BLG9COzs7OztBQUNGLGdDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsS0FBSyxFQUFFLENBREU7QUFFVEMsTUFBQUEsS0FBSyxFQUFFLEVBRkU7QUFHVEMsTUFBQUEsR0FBRyxFQUFFLEVBSEk7QUFJVEMsTUFBQUEsT0FBTyxFQUFFLEVBSkE7QUFLVEMsTUFBQUEsSUFBSSxFQUFFO0FBTEcsS0FBYjtBQU9BLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsK0JBQWxCO0FBQ0EsVUFBS0MsZUFBTCxH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O0FBQWtELFVBQUEsS0FBSyxFQUFFLEtBQUtsQixLQUFMLENBQVd1QjtBQUFwRSxXQUVQLEtBQUtMLFFBQUwsRUFGTyxDQUFSO0FBSUg7QUFDSjs7OztFQS9LOEJNLGVBQU1DLFM7O0FBcUx6QzFCLG9CQUFvQixDQUFDMkIsU0FBckIsR0FBaUM7QUFDN0JDLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsbUJBQVVFLE1BQVgsRUFBbUJGLG1CQUFVRyxNQUE3QixDQUFwQixDQURvQjtBQUU3QlQsRUFBQUEsY0FBYyxFQUFFTSxtQkFBVUksSUFGRztBQUc3QlgsRUFBQUEsS0FBSyxFQUFDTyxtQkFBVUs7QUFIYSxDQUFqQztBQU1BbEMsb0JBQW9CLENBQUNtQyxZQUFyQixHQUFvQztBQUNoQ1osRUFBQUEsY0FBYyxFQUFFLElBRGdCO0FBRWhDRCxFQUFBQSxLQUZnQyxpQkFFMUJELEdBRjBCLEVBRXRCLENBQUU7QUFGb0IsQ0FBcEM7ZUFNZXJCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtamFsYWFsaVwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgJy4vSW5saW5lQ2FsZW5kZXIuY3NzJztcclxuXHJcbmltcG9ydCAnLi9GdWxsQ2FsZW5kZXIuY3NzJztcclxuaW1wb3J0IFRlblllYXJDYWxlbmRlciBmcm9tIFwiLi9UZW5ZZWFyQ2FsZW5kZXJcIjtcclxuaW1wb3J0IFllYXJDYWxlbmRlciBmcm9tIFwiLi9ZZWFyQ2FsZW5kZXJcIjtcclxuaW1wb3J0IE1vbnRoQ2FsZW5kZXIgZnJvbSBcIi4vTW9udGhDYWxlbmRlclwiO1xyXG5pbXBvcnQgSW5saW5lQ2FsZW5kZXIgZnJvbSBcIi4vSW5saW5lQ2FsZW5kZXJcIjtcclxuLy8gaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbi8vIGltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnIC8vIEVTNlxyXG5cclxuY2xhc3MgRnVsbENhbGVuZGVyVmVydGljYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgICAgIG1vbnRoOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXk6IFwiXCIsXHJcbiAgICAgICAgICAgIHRlblllYXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHllYXI6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNsaWNrVGl0bGUgPSB0aGlzLmNsaWNrVGl0bGUuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xpY2tUaXRsZU1vbnRoID0gdGhpcy5jbGlja1RpdGxlTW9udGguYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xpY2tUaXRsZVllYXIgPSB0aGlzLmNsaWNrVGl0bGVZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmdldE1haW5WYWwgPSB0aGlzLmdldE1haW5WYWwuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFllYXJNb250aCA9IHRoaXMuZ2V0Q3VycmVudFllYXJNb250aC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFllYXJNID0gdGhpcy5zZWxlY3RlZFllYXJNLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnNlbGVjdGVkWWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB0aGlzLnNlbGVjdGVkTW9udGguYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUZW5ZZWFyID0gdGhpcy5zZWxlY3RlZFRlblllYXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFllYXIgPSB0aGlzLmdldEN1cnJlbnRZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm1DcmVhdG9yID0gdGhpcy5tQ3JlYXRvci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBtQ3JlYXRvcigpe1xyXG4gICAgICAgIHJldHVybihcclxuPEZyYWdtZW50PlxyXG4gICAgey8qIDxUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiYWxlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWwgPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lQ2FsZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaXZlUm93PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZZZWFyPXt0aGlzLnN0YXRlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZk1vbnRoPXt0aGlzLnN0YXRlLm1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17dGhpcy5nZXRNYWluVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCIhIWlubGluZVN0eWxlID8gaW5saW5lU3R5bGUgOiB7fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRZZWFyPXt0aGlzLmdldEN1cnJlbnRZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja1RpdGxlPXt0aGlzLmNsaWNrVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPVwiYW5pbWVcIiBtb2RlPVwib3V0LWluXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXZlbCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb250aENhbGVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cIiEhbW9udGhTdHlsZSA/IG1vbnRoU3R5bGUgOiB7fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlllYXI9e3RoaXMuc3RhdGUueWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q3VycmVudFllYXI9e3RoaXMuZ2V0Q3VycmVudFllYXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1llYXI9e3RoaXMuc2VsZWN0ZWRZZWFyTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc01vbnRoPXt0aGlzLnNlbGVjdGVkTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrVGl0bGU9e3RoaXMuY2xpY2tUaXRsZU1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXZlbCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZZWFyQ2FsZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiISF5ZWFyU3R5bGUgPyB5ZWFyU3R5bGUgOiB7fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlllYXI9e3RoaXMuc3RhdGUudGVuWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3RoaXMuc2VsZWN0ZWRZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja1RpdGxlPXt0aGlzLmNsaWNrVGl0bGVZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWwgPiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgPFRlblllYXJDYWxlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZZZWFyPXt0aGlzLnN0YXRlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt0aGlzLnNlbGVjdGVkVGVuWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9UcmFuc2l0aW9uR3JvdXA+ICovfVxyXG48L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNsaWNrVGl0bGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbVVwO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXZlbDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbGlja1RpdGxlWWVhcigpIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltVXA7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDM7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldmVsOiAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsaWNrVGl0bGVNb250aCgpIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltVXA7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldmVsOiAyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE1haW5WYWwodmFsKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5pbnB1dCh2YWwpXHJcbiAgICAgICAgLy8gdGhpcy4kZW1pdChcImlucHV0XCIsIHZhbCk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50WWVhck1vbnRoKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMudGVuWWVhciA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IFwidGhpcy5hbmltRG93blwiO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0ZW5ZZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIC8vIGxldmVsOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkWWVhck0odmFsKSB7XHJcbiAgICAgICAgLy8gdGhpcy55ZWFyID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB5ZWFyOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkWWVhcih2YWwpIHtcclxuICAgICAgICB0aGlzLnllYXIgPSB2YWw7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1Eb3duO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB5ZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIGxldmVsOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkTW9udGgodmFsKSB7XHJcbiAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgIC8vIHRoaXMubW9udGggPSB2YWw7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbURvd247XHJcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vL2NvbnNvbGUubG9nKHZhbCxcIiBmZmZmZmZzYWd3Z2hcIilcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9udGg6IHZhbCxcclxuICAgICAgICAgICAgbGV2ZWw6IDBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2VsZWN0ZWRUZW5ZZWFyKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMudGVuWWVhciA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbURvd247XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRlblllYXI6IHZhbCxcclxuICAgICAgICAgICAgbGV2ZWw6IDJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFllYXIodmFsKSB7XHJcbiAgICAgICAgLy8gdGhpcy55ZWFyID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB5ZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIC8vIGxldmVsOiAyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyAgIC8vLy8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnZmZmZmZmZmZmZmFnYScpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5sZXZlbCA9PT0gMCwgXCJsZXZlbFwiLHRoaXMuc3RhdGUubGV2ZWwpXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlUmFpdG9TaXppbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdy0xMDAgaC0xMDAgb3ZlcmZsb3ctaGlkZGVuIHBvc2l0aW9uLXJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e21haW5Cb2R5U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBteS1mb250LWNhbGVuZGVyXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0gPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKCl9XHJcbiAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuRnVsbENhbGVuZGVyVmVydGljYWwucHJvcFR5cGVzID0ge1xyXG4gICAgZGVmWWVhcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgdXNlUmFpdG9TaXppbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW5wdXQ6UHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbkZ1bGxDYWxlbmRlclZlcnRpY2FsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gICAgaW5wdXQodmFsKXt9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVsbENhbGVuZGVyVmVydGljYWw7Il19