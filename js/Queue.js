class Queue{
  constructor(...args){
    this._head = 0;
    this._tail = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size(){
    return this._tail-this._head;
  }

  push(value){
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  unshift(){
    if(this.size){
      const deItem = this[this._head];
      delete this[this._head++];
      return deItem;
    }
  }
}

//написать функция сливает поочередно две очереди в одну новую
const mergeQueues = (q1, q2) => {
  const q3 = new Queue();
  //дописать
  return q3;
}