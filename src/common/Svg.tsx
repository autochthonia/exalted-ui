import React, { Component } from 'react';

interface PSvg {
  bounds: ReturnType<Element['getBoundingClientRect']> | null;
  path: string;
  id?: string | number;
}

export default class Svg extends Component<PSvg> {
  shouldComponentUpdate(prevProps: PSvg) {
    return prevProps.bounds !== this.props.bounds || prevProps.path !== this.props.path;
  }

  render() {
    const id = this.props.id || Math.ceil(Math.random() * 1000);
    const bounds = this.props.bounds;
    const strokeSize = 2;

    return (
      <svg
        viewBox={`0 0 ${(bounds && bounds.width) || 0} ${(bounds && bounds.height) || 0}`}
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          // position: "absolute"
        }}
      >
        <defs>
          <linearGradient x1="11.875%" y1="100%" x2="88.125%" y2="0%" id={`sidebar-stroke-${id}`}>
            <stop stopColor="orange" offset="0%" />
            <stop stopColor="gold" offset="100%" />
          </linearGradient>
          <pattern
            id={`sidebar-background-${id}`}
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              xlinkHref={`https://i.imgur.com/mGKHSlA.png`}
              preserveAspectRatio="xMinYMin slice"
              width="100%"
              height="100%"
            />
          </pattern>
        </defs>
        <path
          fill={`url(#sidebar-background-${id})`}
          d={this.props.path}
          fillRule="evenodd"
          stroke={`url(#sidebar-stroke-${id})`}
          strokeWidth={strokeSize}
        />
        <foreignObject
          x={30}
          y={30}
          width={((this.props.bounds && this.props.bounds.width) || 0) - 60}
          height={((this.props.bounds && this.props.bounds.height) || 0) - 60}
        >
          {this.props.children}
        </foreignObject>
      </svg>
    );
  }
}
