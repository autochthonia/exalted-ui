/**
 * Measure's the element's bounding box and then renders children
 */
import React, { Component } from 'react';
import debounce from 'debounce';

interface PMeasureAndRender {
  debounce: number;
  stretch?: boolean;
  children(props: SMeasureAndRender['measurement']): JSX.Element;
}

interface SMeasureAndRender {
  measurement: ReturnType<Element['getBoundingClientRect']> | null;
  hasMeasured: boolean;
}

class MeasureAndRender extends Component<PMeasureAndRender, SMeasureAndRender> {
  static defaultProps = {
    stretch: false,
    debounce: 100,
  };

  state = {
    measurement: null,
    hasMeasured: false,
  };
  el = React.createRef<HTMLDivElement>();

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

    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
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
