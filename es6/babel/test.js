"use strict";

var _class, _class2, _descriptor, _class3, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* extends 实现 */
var Animal =
/*#__PURE__*/
function () {
  _createClass(Animal, null, [{
    key: "onlyClass",
    value: function onlyClass() {
      return 'only class';
    }
  }]);

  function Animal(name) {
    _classCallCheck(this, Animal);

    this.type = '哺乳类';
    this.name = name;
  }

  _createClass(Animal, [{
    key: "eat",
    value: function eat() {
      return 'eatting';
    }
  }]);

  return Animal;
}();

var Cat = log(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cat)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "P", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(Cat, null, [{
    key: "say",
    value: function say() {
      console.log('hello');
    }
  }]);

  return Cat;
}(Animal), _class3.a = 2, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "P", [readyonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.14;
  }
})), _class2)) || _class;

function log(target) {
  console.log(target);
}

function readyonly(target, key, descriptor) {
  descriptor.writable = false;
}

function before(target, key, descriptor) {
  var oldSay = descriptor.value;
  console.log('before');
  oldSay();
}
/* class Cat { }
Cat.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Cat,
        writable: true,
        configurable: true
    }
})
Object.setPrototypeOf(Cat, Animal) */


var c1 = new Cat('1号猫');
console.log(c1 instanceof Animal);
console.log(c1.type);
console.log(Cat.onlyClass());
console.log(c1.eat()); // c1.P = 3.15 // readOnly 不允许修改

console.log(c1.P);
console.log(Cat.a);
