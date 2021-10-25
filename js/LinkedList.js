class LinkedListIterator {
  constructor(list){      
    this.list = list;
    this.currentElem = null;
  }
    next(){
      this.currentElem = this.currentElem ? this.currentElem.next : this.list.head;
      return{
        value:this.currentElem ? this.currentElem.value : undefined ,
        done:!this.currentElem,
      };
    }    
};

class ListItem {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  get value(){
    return this._value;
  }
  set value(value){
    this._value = value;
  }
}
class LinkedList{
  constructor(...args){
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const argument of args){
      this.push(argument);
    }
  }
  push(argument){
    const newItem = new ListItem(argument);
    if (this.length===0){
      this.head = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
    return ++this.length;
  }
  pop(){
    if(this.tail===this.head){
      return RangeError('You can\'t call method pop() to last Element')
    }
    const lastItem = this.tail;
    delete this.tail;
    this.tail = lastItem.prev;
    lastItem.prev.next = null;
    this.length--;
    return lastItem;
  }
  [Symbol.iterator](){
    return new LinkedListIterator(this);
  }
} 
const li = new LinkedList(10,11,12,99);
console.log(li)