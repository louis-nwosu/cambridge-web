import React, { Component } from "react";

export default class MainTV extends Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "100%",
      height: "200",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(120, 123, 134, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
    });
    this._ref.current.appendChild(script);
  }
  render() {
    return (
      <div className="tradingview-widget-container" ref={this._ref}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}
