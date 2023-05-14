class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    add(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    end(value) {
       let node=new Node(value);
       if(this.isEmpty){
        this.head=node;
       }else{
        let prev=this.tail;
        this.ta
       }
    }
    print(list) {
        let show = this.head;
        while (show !== null) {
            console.log(show.value);
            show = show.next
        }
    }
}
let LinkedList = new list();
LinkedList.add(6);
LinkedList.add(7);
LinkedList.add(8);
LinkedList.add(9);
LinkedList.add(10);
LinkedList.add(11);
console.log(LinkedList.isEmpty());
LinkedList.print(list);