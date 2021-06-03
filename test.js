"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var hs = new index_1.HistoryStack();
function log(h) {
    // @ts-ignore
    console.log(h._stack, h._index, 'canUndo:' + h.canUndo(), 'canRedo:' + h.canRedo());
}
log(hs);
hs.add('1');
log(hs);
hs.add('2');
hs.add('3');
hs.add('4');
hs.add('5');
log(hs);
console.log('undo', hs.undo());
console.log('undo', hs.undo());
console.log('undo', hs.undo());
log(hs);
hs.add('data');
log(hs);
console.log('undo', hs.undo());
console.log('undo', hs.undo());
console.log('undo', hs.undo());
log(hs);
console.log('redo', hs.redo());
console.log('redo', hs.redo());
console.log('redo', hs.redo());
log(hs);
