import { HistoryStack } from './index';

const hs = new HistoryStack<string>();

function log<T>(h: HistoryStack<T>) {
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

console.log(hs.undo());
console.log(hs.undo());
console.log(hs.undo());

log(hs);

hs.add('data');

log(hs);

console.log(hs.undo());
console.log(hs.undo());
console.log(hs.undo());

log(hs);

console.log(hs.redo());
console.log(hs.redo());
console.log(hs.redo());

log(hs);
