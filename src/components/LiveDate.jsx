import React, { Component } from "react";

class LiveDate extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date(),
    });
  }

  formatLongDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }

  render() {
    return (
      <div>
        <span className="text-black opacity-50 lg:text-lg sm:text-base android:text-xs font-light">
          {this.formatLongDate(this.state.currentDate)}
        </span>
      </div>
    );
  }
}

export default LiveDate;
