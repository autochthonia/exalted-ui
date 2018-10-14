import { Component } from 'react';
interface PSvg {
    bounds: ReturnType<Element['getBoundingClientRect']> | null;
    path: string;
}
export default class Svg extends Component<PSvg> {
    shouldComponentUpdate(prevProps: PSvg): boolean;
    render(): JSX.Element;
}
export {};
