const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data, next){
    this.data = data;
    this.next = next || null
  }
  
  
}


class Stack {
  constructor(top){
    this.top = top || null
    this.length = 0;
  }
  
  push(data){
    const newNode = new Node(data)
    newNode.next = this.top;
    this.top = newNode;
    this.length ++;
  }
  
  size(){
    return this.length;
  }
  
  pop(){
    let item = this.top;
    if(item) {
      this.top = item.next; // reassigning top node to the next one
      this.length --;
      return item;
    }
  }
  
  isEmpty(){
    return this.top === null;
  }

  findMin(){
    let min = this.top.data;
    let item = this.top;
    while(item) {
      if(item.data < min){
        min = item.data;
      }
      item = item.next;
    }
    return min;
  }

  peek(){
    return this.top || null;
  }

  sort(){
    let current = this.top
    //let beginning = true;
    while(current.next){
      let next = current.next;
      if(current.data > next.data){
        let temp = current.data;
        current.data = next.data;
        next.data = temp;
        current.next = next;
       // if(beginning){
         // this.top = current;
        }
       // current = current.next;
      
     // beginning = false;
      current = current.next;
    }
    if(this.top.data != this.findMin()){
      return this.sort();
    }
  
  }

} 
  
  
  
  
  



class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  count(){
    return this.size;
  }

  dequeue(){
    let item = this.first;
    if(this.size === 1){
      this.last = this.last.next;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  
  
  enqueue(data){
    let newNode = new Node(data);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;

  }

  findMax(){
    let max = this.first.data;
    let item = this.first;
    while(item) {
      if(item.data > max){
        max = item.data;
      }
      item = item.next;
    }
    return max;
  }

  getLast(){
    return this.last;
  }

  isEmpty(){
    return this.first === null;
  }

  peek(){
    return this.first;
  }

}


  module.exports = {
    Node,
    Queue,
    Stack,
  };