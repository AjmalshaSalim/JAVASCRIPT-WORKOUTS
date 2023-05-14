class node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class list {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertHead(value) {
        let Node = new node(value, this.head);
        this.head = Node
        this.size++
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next
        }

    }
    insertLast(value) {

        if (!this.head) {
            let Node = new node(value)
            this.head = Node;
            this.size++;
        } else {
            let Node = new node(value)
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = Node
            this.size++
        }

    }
    

    insertAt(data,index){
        if(index<0||index>this.size){
            console.log("Empty LINKED");
            return 
        }
    
    let current,previous;
    if(index===0){
        const n=new node(data,this.head);
        this.head=n;
        this.size++
    }
    else{
        const n=new node(data);
        let count=0
        current=this.head;
        while(count<index){
            previous=current
            current=current.next
            count++
        }
        previous.next=n;
        n.next=current;
        this.size++
    }
    }
}
let lists = new list()

lists.insertHead(999);
lists.insertHead(979);
lists.insertLast(777);
lists.insertAt(444,2);

lists.print();