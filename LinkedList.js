class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val, null);
    }

    insertAtEnd(val) {
        let curr = this.head;
        if (!curr) {
            let node = new Node(val, null);
            this.head = node
            return;
        } 
        while (curr.next) {
            curr = curr.next;
        }
        let tempNode = new Node(val, null)
        curr.next = tempNode;
    }

    insertAtBegin(val) {
        let curr = this.head;
        if (curr) {
            let node = new Node(val, curr)
            this.head = node; 
            return
        }
        this.head = new Node(val, null);
    }

    insertAtIndex(val, index) {
        if (index === 0) {
            return this.insertAtBegin(val)
        }
        let count = 0;
        let curr = this.head
        while (count < index-1 && curr) {
            curr = curr.next;
            count += 1;
        }
        let node = new Node(val, curr.next)
        curr.next = node;
    }

    deleteAtEnd() {
        let curr = this.head;
        if (!curr) {
            return;
        } 
        while (curr.next && curr.next.next) {
            curr = curr.next;
        }
        curr.next = null
    }

    deleteAtBegin() {
        let curr = this.head;
        if (!curr) {
            return
        }
        this.head = curr.next;
    }

    deleteAtIndex(index) {
        if (index === 0) {
            return this.deleteAtBegin();
        }
        let count = 0;
        let curr = this.head;
        let prevNode = null;
        while (count < index && curr) {
            prevNode = curr;
            curr = curr.next;
            count += 1;
        }

        prevNode.next = curr.next;

    }

    traverse() {
        let curr = this.head
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

let a = [1]
const linkedList = new LinkedList(0);
a.forEach(e => {
    linkedList.insertAtEnd(e);
});
let b = 2
for(let i = 1; i <=b; i++) {
    linkedList.insertAtBegin(i*i)
}
linkedList.insertAtIndex(20, 4)
linkedList.deleteAtEnd();
linkedList.deleteAtBegin();
linkedList.deleteAtIndex(2);

linkedList.traverse()

