class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++;
    return list;
  }


  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = oldTail.prev
      this.tail.next = null
      oldTail.prev = null
    }
    this.length--;
    return oldTail
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next
      oldHead.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val)
    if (this.length === 0) {
      this.tail = node
      this.head = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.length++;
    return list
  }

}


let list = new DoublyLinkedList()
list.push(13)
list.push(14)
list.push(15)
console.log(list.unshift(12))
// console.log(list)

