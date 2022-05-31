import React, { PropTypes, Component } from "react/addons";
import shouldPureComponentUpdate from "react-pure-render/function";

import { greatPlaceStyle } from "./style/my_great_place_styles";

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return <div style={greatPlaceStyle}>{this.props.text}</div>;
  }
}
