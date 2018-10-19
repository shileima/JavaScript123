"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

// https://github.com/YongMaple/decorator-demo.git
function decoratorArmou(target, key, descriptor) {
  console.log('target:', target);
  console.log('key:', key);
  console.log('descriptor:', descriptor);
  var method = descriptor.value;
  var moreDef = 100;

  descriptor.value = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args[0] += moreDef;
    return method.apply(target, args);
  };

  return descriptor;
}

function decoratorShooting(target, key, descriptor) {
  var method = descriptor.value;

  descriptor.value = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args[0] + "add from decorator";
    return method.apply(target, args);
  };
}

var Man = (_class =
/*#__PURE__*/
function () {
  function Man() {
    var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var atk = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var hp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    _classCallCheck(this, Man);

    this.init(def, atk, hp);
  }

  _createClass(Man, [{
    key: "init",
    value: function init(def, atk, hp) {
      this.def = def; // 防御值

      this.atk = atk; // 攻击力

      this.hp = hp; // 血量
    }
  }, {
    key: "shooting",
    value: function shooting(text) {
      console.log(text);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "\u9632\u5FA1\u529B:".concat(this.def, ",\u653B\u51FB\u529B:").concat(this.atk, ",\u8840\u91CF:").concat(this.hp);
    }
  }]);

  return Man;
}(), (_applyDecoratedDescriptor(_class.prototype, "init", [decoratorArmou], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "shooting", [decoratorShooting], Object.getOwnPropertyDescriptor(_class.prototype, "shooting"), _class.prototype)), _class);
var tony = new Man();
console.log("\u5F53\u524D\u72B6\u6001 ===> ".concat(tony));
