const arr = [1, 2, 3, 4, 5];
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

function arrayToLinkedList(arr) {
    const list = new LinkedList();

    arr.forEach((value) => {
        list.add(value);
    });

    return list;
}

const list = arrayToLinkedList(arr);
list.print();
