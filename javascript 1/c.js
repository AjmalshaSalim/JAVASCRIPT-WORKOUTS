class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.size=0;
    }

    ifEmpty(){
        return size===0;
    }
    prepend(value){
        let node=new Node(value);
        if(this.ifEmpty){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    print(){
        let display=this.head;
        while(display){
            console.log(display.value);
            display=display.next;
        }
    }

}
let lists=new list();
lists.prepend(5);
lists.prepend(4);
lists.prepend(3);
lists.prepend(2);
lists.print();