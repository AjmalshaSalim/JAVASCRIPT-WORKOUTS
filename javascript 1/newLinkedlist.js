class node{
    constructor(value){
        this.value=value;
        this.next=null;//head
    }
}
class list{
    constructor(){
        this.head=null;//Node
        this.tail=null;
        this.size=0;

    }
    add(value){
        let Node=new node(value);
        if(this.size===0){
            this.head=Node;
            this.tail=Node;
        }else{
            Node.next=this.head;
            this.head=Node;


        }
        this.size++;
    }
}