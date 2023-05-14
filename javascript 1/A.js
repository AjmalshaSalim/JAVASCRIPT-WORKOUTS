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
    isEmpty(){
        return this.size===0;
    }
    add(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
    mergeArray(array){
        for(let i=0;i<array.length;i++){
            let node=new Node(array[i]);
            let current
            if(!this.head){
                this.head=node;
            }else{
                current=this.head
                while(current.next){
                    current=current.next
                }
                current.next= node;
                
            }
            this.size++

        }
    }
    
}

let array=[123,1234,432,345]
let List=new list();
List.add(5)
List.add(4)
List.add(3)
List.mergeArray(array);
List.print()
