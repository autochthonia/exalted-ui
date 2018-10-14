import React, { Component } from 'react';

const styles = {
  width: '100%',
  height: '100%',
  // position: "absolute"
};

interface PSvg {
  bounds: ReturnType<Element['getBoundingClientRect']> | null;
  path: string;
}

export default class Svg extends Component<PSvg> {
  shouldComponentUpdate(prevProps: PSvg) {
    return prevProps.bounds !== this.props.bounds || prevProps.path !== this.props.path;
  }

  render() {
    const bounds = this.props.bounds;
    const strokeSize = 2;

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={styles}
        viewBox={`0 0 ${(bounds && bounds.width) || 0} ${(bounds && bounds.height) || 0}`}
        preserveAspectRatio="none"
      >
        <defs>
          {
            // <linearGradient
            //   x1="11.8748878%"
            //   y1="100%"
            //   x2="88.1251154%"
            //   y2="0%"
            //   id="linearGradient-1"
            // >
            //   <stop stopColor="orange" offset="0%" />
            //   <stop stopColor="gold" offset="100%" />
            // </linearGradient>
          }
          {
            <pattern id="panel-background" patternUnits="userSpaceOnUse" width="100%" height="100%">
              <image
                xlinkHref={`https://i.imgur.com/mGKHSlA.png`}
                preserveAspectRatio="xMinYMin slice"
                x="0"
                y="0"
                // opacity=".4"
                width="100%"
                height="100%"
              />
            </pattern>
          }
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="100-by-exact" stroke="url(#linearGradient-1)" strokeWidth={strokeSize}>
            <path
              vectorEffect="non-scaling-stroke"
              fill="url(#panel-background)"
              d={this.props.path}
              id="Pane_External_Box"
            />
          </g>
        </g>
        <foreignObject
          x="30"
          y="30"
          width={(this.props.bounds && this.props.bounds.width) || 0 - 60}
          height={(this.props.bounds && this.props.bounds.height) || 0 - 60}
        >
          {this.props.children}
        </foreignObject>
      </svg>
    );
  }
}
