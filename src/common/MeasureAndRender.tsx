/**
 * Measure's the element's bounding box and then renders children
 */
import React, { Component } from 'react';
import debounce from 'debounce';

interface PMeasureAndRender {
  debounce?: number;
  stretch?: boolean;
  forceUpdate?: boolean;
  children(props: SMeasureAndRender['measurement']): JSX.Element;
}

interface SMeasureAndRender {
  measurement: ReturnType<Element['getBoundingClientRect']> | null;
  hasMeasured: boolean;
}

class MeasureAndRender extends Component<PMeasureAndRender, SMeasureAndRender> {
  static defaultProps = {
    stretch: false,
    forceUpdate: false,
    debounce: 100,
  };

  state = {
    measurement: null,
    hasMeasured: false,
  };
  el = React.createRef<HTMLDivElement>();
  updateInterval: ReturnType<typeof window.setInterval>  | null = null;

  onWindowResize = debounce(() => {
    this.setState({
      measurement: this.el.current && this.el.current.getBoundingClientRect(),
    });
  }, this.props.debounce);

  componentDidMount() {
    this.setState({
      measurement: this.el.current && this.el.current.getBoundingClientRect(),
      hasMeasured: true,
    });

    if (this.props.forceUpdate) {
      this.updateInterval = window.setInterval(this.onWindowResize, this.props.debounce);
    } else {
      window.addEventListener('resize', this.onWindowResize);
    }
  }

  componentWillUnmount() {
    if (this.updateInterval) {
      window.clearInterval(this.updateInterval);
    } else {
      window.removeEventListener('resize', this.onWindowResize);
    }
  }

  render() {
    return (
      <div
        style={
          this.props.stretch
            ? {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }
            : {
                maxHeight: '100%',
                maxWidth: '100%',
                height: '100%',
                width: '100%',
              }
        }
        ref={this.el}
      >
        {this.state.hasMeasured && this.props.children(this.state.measurement)}
      </div>
    );
  }
}

export default MeasureAndRender;
