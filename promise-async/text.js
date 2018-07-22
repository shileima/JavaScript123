'use strict';

var r = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var r1, r2, r3;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return read('100.txt', 'utf8');

                    case 3:
                        r1 = _context.sent;
                        _context.next = 6;
                        return read(r1, 'utf8');

                    case 6:
                        r2 = _context.sent;
                        _context.next = 9;
                        return read(r2, 'utf8');

                    case 9:
                        r3 = _context.sent;
                        return _context.abrupt('return', r3);

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 13]]);
    }));

    return function r() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error); return;
                } if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); });
                }
            } return step("next");
        });
    };
}


// 第五期开班一天
// 1 3 5上课 8 - 10
// 周日全天
// 录视频 开通以往每期的视频

// 后期会把相对应的内容 发到正式群
// 分组 (组长) 催大家上课 催交作业