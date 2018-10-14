'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var debounce = _interopDefault(require('debounce'));

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
        _this.el = React__default.createRef();
        _this.updateInterval = null;
        _this.onWindowResize = debounce(function () {
            _this.setState({
                measurement: _this.el.current && _this.el.current.getBoundingClientRect(),
            });
        }, _this.props.debounce);
        return _this;
    }
    MeasureAndRender.prototype.componentDidMount = function () {
        this.setState({
            measurement: this.el.current && this.el.current.getBoundingClientRect(),
            hasMeasured: true,
        });
        if (this.props.forceUpdate) {
            this.updateInterval = window.setInterval(this.onWindowResize, this.props.debounce);
        }
        else {
            window.addEventListener('resize', this.onWindowResize);
        }
    };
    MeasureAndRender.prototype.componentWillUnmount = function () {
        if (this.updateInterval) {
            window.clearInterval(this.updateInterval);
        }
        else {
            window.removeEventListener('resize', this.onWindowResize);
        }
    };
    MeasureAndRender.prototype.render = function () {
        return (React__default.createElement("div", { style: this.props.stretch
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
                }, ref: this.el }, this.state.hasMeasured && this.props.children(this.state.measurement)));
    };
    MeasureAndRender.defaultProps = {
        stretch: false,
        forceUpdate: false,
        debounce: 100,
    };
    return MeasureAndRender;
}(React.Component));

var Svg = /** @class */ (function (_super) {
    __extends(Svg, _super);
    function Svg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Svg.prototype.shouldComponentUpdate = function (prevProps) {
        return prevProps.bounds !== this.props.bounds || prevProps.path !== this.props.path;
    };
    Svg.prototype.render = function () {
        var id = this.props.id || Math.ceil(Math.random() * 1000);
        var bounds = this.props.bounds;
        var strokeSize = 2;
        return (React__default.createElement("svg", { viewBox: "0 0 " + ((bounds && bounds.width) || 0) + " " + ((bounds && bounds.height) || 0), preserveAspectRatio: "none", style: {
                width: '100%',
                height: '100%',
            } },
            React__default.createElement("defs", null,
                React__default.createElement("linearGradient", { x1: "11.875%", y1: "100%", x2: "88.125%", y2: "0%", id: "sidebar-stroke-" + id },
                    React__default.createElement("stop", { stopColor: "orange", offset: "0%" }),
                    React__default.createElement("stop", { stopColor: "gold", offset: "100%" })),
                React__default.createElement("pattern", { id: "sidebar-background-" + id, patternUnits: "userSpaceOnUse", width: "100%", height: "100%" },
                    React__default.createElement("image", { xlinkHref: "https://i.imgur.com/mGKHSlA.png", preserveAspectRatio: "xMinYMin slice", width: "100%", height: "100%" }))),
            React__default.createElement("path", { fill: "url(#sidebar-background-" + id + ")", d: this.props.path, fillRule: "evenodd", stroke: "url(#sidebar-stroke-" + id + ")", strokeWidth: strokeSize }),
            React__default.createElement("foreignObject", { x: 30, y: 30, width: ((this.props.bounds && this.props.bounds.width) || 0) - 60, height: ((this.props.bounds && this.props.bounds.height) || 0) - 60 }, this.props.children)));
    };
    return Svg;
}(React.Component));

var Sidebar = function (_a) {
    var children = _a.children, _b = _a.stretch, stretch = _b === void 0 ? false : _b, _c = _a.forceUpdate, forceUpdate = _c === void 0 ? false : _c;
    var stroke = 2;
    var offset = 0;
    return (React__default.createElement("div", { style: {
            position: 'relative',
            maxHeight: '100%',
            maxWidth: '100%',
            height: '100%',
            width: '100%',
        } },
        React__default.createElement(MeasureAndRender, { stretch: stretch, debounce: 1, forceUpdate: forceUpdate }, function (bounds) {
            var height = (bounds && bounds.height) || 0;
            var width = (bounds && bounds.width) || 0;
            var path = "\n                  M" + (stroke + 30) + "," + stroke + "\n                  L" + (stroke + 30) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 10) + " \n                  L" + (stroke + 10) + "," + (stroke + 10) + " \n                  L" + (stroke + 10) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 20) + " \n                  L" + (stroke + 20) + "," + (stroke + 30) + " \n                  L" + (stroke + 0) + "," + (stroke + 30) + " \n                  L" + stroke + "," + (height - stroke - 30) + "\n                  L" + (stroke + 20) + "," + (height - stroke - 30) + "\n                  L" + (stroke + 20) + "," + (height - stroke - 20) + "\n                  L" + (stroke + 20) + "," + (height - stroke - 10) + "\n                  L" + (stroke + 10) + "," + (height - stroke - 10) + "\n                  L" + (stroke + 10) + "," + (height - stroke - 20) + "\n                  L" + (stroke + 30) + "," + (height - stroke - 20) + "\n                  L" + (stroke + 30) + "," + (height - stroke) + "\n                  L" + (width - 30 - offset) + "," + (height - stroke) + " \n                  L" + (width - 30 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 10) + "\n                  L" + (width - 10 - offset) + "," + (height - 10) + "\n                  L" + (width - 10 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 20) + "\n                  L" + (width - 20 - offset) + "," + (height - 30) + "\n                  L" + (width - stroke) + "," + (height - 30) + "\n                  L" + (width - stroke) + "," + 30 + "\n                  L" + (width - stroke - 20) + "," + 30 + "\n                  L" + (width - stroke - 20) + "," + 20 + "\n                  L" + (width - stroke - 10) + "," + 20 + "\n                  L" + (width - stroke - 10) + "," + 10 + "\n                  L" + (width - stroke - 20) + "," + 10 + "\n                  L" + (width - stroke - 20) + "," + 20 + "\n                  L" + (width - stroke - 30) + "," + 20 + "\n                  L" + (width - stroke - 30) + "," + 0 + "\n                  Z";
            return (React__default.createElement(Svg, { bounds: bounds, path: path },
                React__default.createElement("div", { style: {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                    } }, children)));
        })));
};

var index = {
    Sidebar: Sidebar,
};

module.exports = index;
