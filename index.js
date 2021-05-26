"use strict";
exports.__esModule = true;
exports.HistoryStack = void 0;
var HistoryStack = /** @class */ (function () {
    function HistoryStack() {
        this._index = 0;
        this._stack = [];
    }
    HistoryStack.prototype.add = function (history) {
        this._stack.splice(this._index, this._stack.length - this._index, history);
        this._index++;
    };
    HistoryStack.prototype.canRedo = function () {
        return this._index < this._stack.length;
    };
    HistoryStack.prototype.canUndo = function () {
        return this._index > 0;
    };
    HistoryStack.prototype.redo = function () {
        if (this._index >= this._stack.length) {
            throw new Error('cannot Redo');
        }
        return this._stack[this._index++];
    };
    HistoryStack.prototype.undo = function () {
        if (this._index <= 0) {
            throw new Error('cannot Undo');
        }
        return this._stack[--this._index];
    };
    return HistoryStack;
}());
exports.HistoryStack = HistoryStack;
