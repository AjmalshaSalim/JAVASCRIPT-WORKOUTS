let array=[1,2,3,4,5];
class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    add(value){
        let Node=new node(value);
        if(this.head==null){
            this.head=Node;
        }else{
            let temp=this.head;
            while()
        }
    }
}