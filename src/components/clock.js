import React, { Component } from 'react'

class Clock extends Component {
    render () {
        const time = this.props.timeRemaining;
        return (
            <div className="clock">
                <div className="clock__days">
                    <label className="clock__title clock_box">DAYS</label>
                    <label className="clock__amount">{time.days}</label>
                </div>
                <div className="clock__hours">
                    <label className="clock__title clock_box">HOURS</label>
                    <label className="clock__amount">{time.hours}</label>
                </div>
                <div className="clock__minutes">
                    <label className="clock__title clock_box">MINUTES</label>
                    <label className="clock__amount">{time.minutes}</label>
                </div>
                <div className="clock__seconds">
                    <label className="clock__title clock_box">SECONDS</label>
                    <label className="clock__amount">{this.props.timeRemaining.seconds}</label>
                </div>
            </div>
        )
    }
}

export default Clock;