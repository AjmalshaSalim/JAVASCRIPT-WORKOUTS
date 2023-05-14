class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    addHead(data){
        let node=new Node(data,this.head);
        this.head=node;
    }
    print(){
        let current=this.head;
        while(current.next!==null){
            console.log(current.value);
            current=current.next;
        }
    }
}
let ll=new list();
ll.addHead(11);
ll.print();