export class HistoryStack<T> {
  private _index: number;
  private _stack: T[];

  constructor() {
    this._index = -1;
    this._stack = [];
  }

  add(history: T) {
    this._stack.splice(this._index + 1, Infinity, history);
    this._index = this._stack.length - 1;
  }

  canRedo() {
    return this._index < this._stack.length - 1;
  }

  canUndo() {
    return this._index >= 0;
  }

  redo() {
    if (this._index >= this._stack.length) {
      throw new Error('cannot redo');
    }

    return this._stack[++this._index];
  }

  undo() {
    if (this._index < 0) {
      throw new Error('cannot undo');
    }

    return this._stack[this._index--];
  }
}
