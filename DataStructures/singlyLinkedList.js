class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++;
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0;
    let current = this.head
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current
  }

  set(index, value) {
    let node = this.get(index)
    if (node) {
      node.val = value
      return true
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    let newNode = new Node(val)
    let prev = this.get(index - 1)
    let temp = prev.next // save original "next"
    prev.next = newNode
    newNode.next = temp // connecting the new node with the original "next"
    this.length++;
    return true;
  }

  remove(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return this.pop(value)
    if (index === 0) return this.shift(value)


  }

}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("<3")
list.push("heart")
list.push("!!!")
