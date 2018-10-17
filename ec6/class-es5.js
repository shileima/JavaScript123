"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Circle = function Circle() {
  _classCallCheck(this, Circle);

  _defineProperty(this, "a", 10);
} // 实例上有，类上没有
;

_defineProperty(Circle, "PI", 3.14);

var c = new Circle();

var Child =
/*#__PURE__*/
function (_Circle) {
  _inherits(Child, _Circle);

  function Child() {
    _classCallCheck(this, Child);

    return _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this));
  }

  return Child;
}(Circle);

var child = new Child();
console.log('Circle.PI', Circle.PI);
console.log('Circle.a', Circle.a);
console.log('c.PI', c.PI); // 实例不能获取类上的属性

console.log('c.a', c.a);
console.log("Child.PI:", Child.PI);
console.log("Child.a", Child.a);
console.log('child.PI:', child.PI);
console.log('child.a:', child.a);
