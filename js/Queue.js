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
  const maxSizeQ=  q1.size>q2.size? q1.size: q2.size; 
  for(let i =0; i<maxSizeQ;i++){ 
    const unshiftItemQ1 = q1.unshift();
    if(unshiftItemQ1!==undefined){
       q3.push(unshiftItemQ1);
    } 
    const unshiftItemQ2 = q2.unshift();
    if(unshiftItemQ2!==undefined){
    q3.push(unshiftItemQ2);
    }
   }
    return q3;
}
const qu1 = new Queue(1,2,3,4,5,6);
const qu2 = new Queue(8,9);

// console.log(mergeQueues(qu1, qu2));