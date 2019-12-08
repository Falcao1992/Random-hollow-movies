import React from "react";
import "./SwitchButton.css";
import woman from "./scaredWoman.mp3";

class SwitchBottom extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(woman);

    this.state = {
      isChecked: false
    };
  }

  render() {
    return (
      <div className="switch-container">
        <div className="container">
          <input
            ref="switch"
            checked={this.state.isChecked}
            onChange={this._handleChange}
            className="switch"
            type="checkbox"
            id="toogle1"
          />
          <label htmlFor="toogle1" className="switch_label">
            {`${this.state.isChecked ? "on" : "off"}`}
            </label>
           
         
        </div>
      </div>
    );
  }
  _handleChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
    !this.state.isChecked?this.audio.play():this.audio.pause();
  };
}

export default SwitchBottom;
