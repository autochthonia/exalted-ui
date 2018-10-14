/// <reference types="debounce" />
/**
 * Measure's the element's bounding box and then renders children
 */
import React, { Component } from 'react';
interface PMeasureAndRender {
    debounce: number;
    stretch: boolean;
    children(props: SMeasureAndRender['measurement']): JSX.Element;
}
interface SMeasureAndRender {
    measurement: ReturnType<Element['getBoundingClientRect']> | null;
    hasMeasured: boolean;
}
declare class MeasureAndRender extends Component<PMeasureAndRender, SMeasureAndRender> {
    state: {
        measurement: null;
        hasMeasured: boolean;
    };
    el: React.RefObject<HTMLDivElement>;
    onWindowResize: (() => void) & {
        clear(): void;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default MeasureAndRender;
