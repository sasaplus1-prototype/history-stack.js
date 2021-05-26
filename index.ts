export class HistoryStack<T> {
  _index: number;
  _stack: T[];

  constructor() {
    this._index = 0;
    this._stack = [];
  }

  add(history: T) {
    this._stack.splice(this._index, this._stack.length - this._index, history);
    this._index++;
  }

  canRedo() {
    return this._index < this._stack.length;
  }

  canUndo() {
    return this._index > 0;
  }

  redo() {
    if (this._index >= this._stack.length) {
      throw new Error('cannot Redo');
    }

    return this._stack[this._index++];
  }

  undo() {
    if (this._index <= 0) {
      throw new Error('cannot Undo');
    }

    return this._stack[--this._index];
  }
}
