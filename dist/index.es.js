import React, { Component } from 'react';
import debounce from 'debounce';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var MeasureAndRender = /** @class */ (function (_super) {
    __extends(MeasureAndRender, _super);
    function MeasureAndRender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            measurement: null,
            hasMeasured: false,
        };
        _this.el = React.createRef();
        _this.onWindowResize = debounce(function () {
            _this.setState({
                measurement: _this.el.current && _this.el.current.getBoundingClientRect(),
            });
        }, _this.props.debounce || 100);
        return _this;
    }
    MeasureAndRender.prototype.componentDidMount = function () {
        this.setState({
            measurement: this.el.current && this.el.current.getBoundingClientRect(),
            hasMeasured: true,
        });
        window.addEventListener('resize', this.onWindowResize);
    };
    MeasureAndRender.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onWindowResize);
    };
    MeasureAndRender.prototype.render = function () {
        return (React.createElement("div", { style: this.props.stretch
                ? {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }
                : {}, ref: this.el }, this.state.hasMeasured && this.props.children(this.state.measurement)));
    };
    return MeasureAndRender;
}(Component));

var styles = {
    width: '100%',
    height: '100%',
};
var Svg = /** @class */ (function (_super) {
    __extends(Svg, _super);
    function Svg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Svg.prototype.shouldComponentUpdate = function (prevProps) {
        return prevProps.bounds !== this.props.bounds || prevProps.path !== this.props.path;
    };
    Svg.prototype.render = function () {
        var bounds = this.props.bounds;
        var strokeSize = 2;
        return (React.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: styles, viewBox: "0 0 " + ((bounds && bounds.width) || 0) + " " + ((bounds && bounds.height) || 0), preserveAspectRatio: "none" },
            React.createElement("defs", null, React.createElement("pattern", { id: "panel-background", patternUnits: "userSpaceOnUse", width: "100%", height: "100%" },
                React.createElement("image", { xlinkHref: "https://i.imgur.com/mGKHSlA.png", preserveAspectRatio: "xMinYMin slice", x: "0", y: "0", 
                    // opacity=".4"
                    width: "100%", height: "100%" }))),
            React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { id: "100-by-exact", stroke: "url(#linearGradient-1)", strokeWidth: strokeSize },
                    React.createElement("path", { vectorEffect: "non-scaling-stroke", fill: "url(#panel-background)", d: this.props.path, id: "Pane_External_Box" }))),
            React.createElement("foreignObject", { x: "30", y: "30", width: (this.props.bounds && this.props.bounds.width) || 0 - 60, height: (this.props.bounds && this.props.bounds.height) || 0 - 60 }, this.props.children)));
    };
    return Svg;
}(Component));

var Sidebar = function (_a) {
    var children = _a.children;
    var stroke = 2;
    var offset = 0;
    return (React.createElement("div", { style: {
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '45vh 45vh',
        } },
        React.createElement("div", { style: { position: 'relative' } },
            React.createElement(MeasureAndRender, { stretch: true, debounce: 1 }, function (bounds) {
                var height = (bounds && bounds.height) || 0;
                var width = (bounds && bounds.width) || 0;
                var path = "\n                  M" + (stroke + 30) + "," + stroke + "\n                  L" + (stroke + 30) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 10) + " \n                  L" + (stroke + 10) + "," + (stroke + 10) + " \n                  L" + (stroke + 10) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 30) + " \n                  L" + (stroke + 0) + "," + (stroke + 30) + " \n                  L" + stroke + "," + (height - stroke - 30) + "\n                  L" + (stroke + 20) + "," + (height - stroke - 30) + "\n                  L" + (stroke + 20) + "," + (height - stroke - 20) + "\n                  L" + (stroke + 20) + "," + (height - stroke - 10) + "\n                  L" + (stroke + 10) + "," + (height - stroke - 10) + "\n                  L" + (stroke + 10) + "," + (height - stroke - 20) + "\n                  L" + (stroke + 30) + "," + (height - stroke - 20) + "\n                  L" + (stroke + 30) + "," + (height - stroke) + "\n                  L" + (width - 30 - offset) + "," + (height - stroke) + " \n                  L" + (width - 30 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 10) + "\n                  L" + (width - 10 - offset) + "," + (height - 10) + "\n                  L" + (width - 10 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 30) + "\n                  L" + (width - stroke) + "," + (height - 30) + "\n                  L" + (width - stroke) + "," + 30 + "\n                  L" + (width - stroke - 20) + "," + 30 + "\n                  L" + (width - stroke - 20) + "," + 20 + "\n                  L" + (width - stroke - 10) + "," + 20 + "\n                  L" + (width - stroke - 10) + "," + 10 + "\n                  L" + (width - stroke - 20) + "," + 10 + "\n                  L" + (width - stroke - 20) + "," + 20 + "\n                  L" + (width - stroke - 30) + "," + 20 + "\n                  L" + (width - stroke - 30) + "," + 0 + "\n                  Z";
                return (React.createElement(Svg, { bounds: bounds, path: path },
                    React.createElement("div", { style: {
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                        } }, children)));
            }))));
};

var index = {
    Sidebar: Sidebar,
};

export default index;
