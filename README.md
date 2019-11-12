# react-inline-jalaali-calender
[moment-jalaali](https://www.npmjs.com/package/moment-jalaali) and [bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) have been used to create this component.

## [HomePage](https://mohammadrezaei0123.github.io/react-inline-jalaali-calender1/)

## Relative Vue Component 
* [vue-inline-jalaali-calender](https://www.npmjs.com/package/vue-inline-jalaali-calender)
* [vue-inline-calender](https://www.npmjs.com/package/vue-inline-calender/)

## Installation npm:
```bash
 npm i react-inline-jalaali-calender --save
```

## Components
* InlineCalender
* InlineCalenderVertical
* MonthCalender
* YearCalender
* TenYearCalender
* FullCalender
* FullCalenderVertical

## sample
```html
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  InlineCalender,
  InlineCalenderVertical,
  MonthCalender,
  YearCalender,
  TenYearCalender,
  FullCalender,
  FullCalenderVertical
} from "react-inline-jalaali-calender";
class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      e1: {
        arrowRightColor: {
          color: "#88304e"
        },
        arrowLeftColor: {
          color: "#88304e"
        },
        mainBodyStyle: {
          width: "300px",
          background: "#eaffd0",
          border: "2px solid #311d3f",
          borderRadius: "5px",
          padding: "15px"
        },
        titleStyle: {
          height: "40px",
          marginBottom: "5px",
          color: "#88304e"
        },
        headerCalenderStyle: {
          height: "40px",
          color: "#fff",
          background: "#88304e",
          margin: "0 -14.5px"
        },
        rowCalenderStyle: {
          height: "50px",
          margin: "0 -14px"
        },
        footerStyle: {
          height: "20px",
          color: "#88304e"
        },
        afterTodayStyle: {
          color: "#eeeeee",
          boxShadow: "inset 0 0 10px #311d3f",
          background: "#88304e",
          transition: "all 1s"
        },
        todayStyle: {
          color: "#eeeeee",
          background: "#522546",
          boxShadow: "0 0 5px #eeeeee",
          transition: " all 1s"
        },
        beforeTodayStyle: {
          background: "#eeeeee",
          boxShadow: "inset 0 0 10px #88304e",
          color: "#88304e",
          transition: "all 1s"
        },
        todayButtonStyle: {
          color: "#88304e"
        },
        showSelectedValueStyle: {
          display: "flex",
          alignItems: "center",
          color: "#88304e"
        }
      },
      moveAction: {
        action: ""
      },
      da: ""
    };
    this.valSetter = this.valSetter.bind(this);
  }
  valSetter(val) {
    this.setState({ da: val });
  }
  render() {
    return (
      <div className="container bg-info m-5 p-5">
        <div className="row">
          <div className="offset-2 col-8">
            <div className="sticky-top bg-light text-center">
              {this.state.da}
            </div>
            <FullCalenderVertical input={this.valSetter}></FullCalenderVertical>
            <InlineCalenderVertical
              input={this.valSetter}
              isFiveRow={true}
            ></InlineCalenderVertical>
            <FullCalender input={this.valSetter}></FullCalender>
            <TenYearCalender input={this.valSetter}></TenYearCalender>
            <YearCalender input={this.valSetter}></YearCalender>
            <MonthCalender input={this.valSetter} />
            <div className="d-flex justify-content-center">
              <button
                className="btn mx-2 btn-danger"
                onClick={() => {
                  this.setState({
                    moveAction: {
                      useJump: true,
                      jump: {
                        year: -1,
                        month: 2
                      }
                    }
                  });
                }}
              >
                jump
              </button>
              <button
                className="btn mx-2 btn-danger"
                onClick={() => {
                  this.setState({ moveAction: { action: "p" } });
                }}
              >
                per
              </button>
              <button
                className="btn mx-2 btn-danger"
                onClick={() => {
                  this.setState({ moveAction: { action: "t" } });
                }}
              >
                today
              </button>
              <button
                className="btn mx-2 btn-danger"
                onClick={() => {
                  this.setState({ moveAction: { action: "n" } });
                }}
              >
                next
              </button>
            </div>
            <InlineCalender
              isFiveRow={true}
              moveAction={this.state.moveAction}
              input={this.valSetter}
            ></InlineCalender>
            <InlineCalender
              useRaitoSizing={false}
              input={this.valSetter}
              arrowLeftStyle={this.state.e1.arrowLeftColor}
              arrowRightStyle={this.state.e1.arrowRightColor}
              mainBodyStyle={this.state.e1.mainBodyStyle}
              afterTodayStyle={this.state.e1.afterTodayStyle}
              titleStyle={this.state.e1.titleStyle}
              beforeTodayStyle={this.state.e1.beforeTodayStyle}
              rowCalenderStyle={this.state.e1.rowCalenderStyle}
              headerCalenderStyle={this.state.e1.headerCalenderStyle}
              footerStyle={this.state.e1.footerStyle}
              todayStyle={this.state.e1.todayStyle}
              todayButtonStyle={this.state.e1.todayButtonStyle}
              showSelectedValueStyle={this.state.e1.showSelectedValueStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
```