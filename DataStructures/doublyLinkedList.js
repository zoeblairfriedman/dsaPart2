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

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if ((this.length / 2) <= idx) {
      let count = this.length - 1;
      let current = this.tail;
      while (count != idx) {
        current = current.prev;
        current--
      }
      return current
    } else {
      let count = 0;
      let current = this.head;
      while (count != idx) {
        current = current.next;
        count++
      }
      return current
    }
  }

  set(idx, value) {
    let node = this.get(idx)
    if (!!node) {
      node.val = value
      return true
    } else {
      return false;
    }
  }

  insert(idx, value) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) this.unshift(value)
    if (idx === this.length) this.push(value)

    let newNode = new Node(value)
    let beforeNode = this.get(idx - 1)
    let afterNode = beforeNode.next
    newNode.next = afterNode
    newNode.prev = beforeNode
    afterNode.prev = newNode
    beforeNode.next = newNode
    this.length++
    return true;
  }

}

let list = new DoublyLinkedList()
list.push(13)
list.push(14)
list.push(15)
list.push(15)
list.insert(1, 44)
console.log(list.get(1))
// console.log(list)

