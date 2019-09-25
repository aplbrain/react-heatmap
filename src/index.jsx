import React from "react";
import HeatMapObject from "@neuprint/heatmap";
import PropTypes from 'prop-types';

export default class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.heatMapRef = React.createRef();
  }

  componentDidMount() {
    const { data, yLabels, xLabels, height, width, onClick, onMouseOver, onMouseOut } = this.props;
    const heatmap = new HeatMapObject({
      onClick,
      onMouseOver,
      onMouseOut,
      height: height || this.heatMapRef.current.clientHeight,
      width: width || this.heatMapRef.current.clientWidth,
    });
    heatmap.setYLabels(yLabels).setXLabels(xLabels).setData(data).render(this.heatMapRef.current);
  }

  componentDidUpdate() {
    const { data, yLabels, xLabels, height, width, onClick, onMouseOver, onMouseOut } = this.props;
    const heatmap = new HeatMapObject({
      onClick,
      onMouseOver,
      onMouseOut,
      height: height || this.heatMapRef.current.clientHeight,
      width: width || this.heatMapRef.current.clientWidth,
    });
    heatmap.setYLabels(yLabels).setXLabels(xLabels).setData(data).render(this.heatMapRef.current);
  }

  render() {
    return (
      <div ref={this.heatMapRef} id="heatmap" />
    );
  }
}

HeatMap.defaultProps = {
  height: null,
  width: null,
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
};

HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  xLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  yLabels: PropTypes.arrayOf(PropTypes.string).isRequired
};
