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
    //if there's nothing, return undefined
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

  //THIS IS UNTESTED
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

}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("<3")
list.push("heart")
list.push("!!!")
console.log(list.get(7))
